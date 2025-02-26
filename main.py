# Import necessary libraries
import pandas as pd
import numpy as np
import re
import ast
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import SVC
from sklearn.metrics import classification_report, accuracy_score
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

print("Cyberbullying Detection on Social Media")

# Load dataset
data = pd.read_csv('Cyberbullying.csv')

# Check and clean data
print("\nDataset Overview:")
print(data.head())

# Drop duplicates
data.drop_duplicates(inplace=True)

# Extract labels correctly
def extract_label(annotation):
    try:
        return int(ast.literal_eval(annotation)['label'][0])
    except:
        return 0  # Default to non-bullying if there's an issue

data['annotation'] = data['annotation'].astype(str).apply(extract_label)

# Text cleaning function
def clean_text(text):
    text = re.sub(r'[^A-Za-z\s]', '', text)  # Keep only letters and spaces
    text = text.lower().strip()  # Convert to lowercase and remove extra spaces
    return text

data['content'] = data['content'].fillna("").apply(clean_text)

# Sentiment Analysis
analyzer = SentimentIntensityAnalyzer()
data['compound'] = data['content'].apply(lambda x: analyzer.polarity_scores(x)['compound'])
data['neg'] = data['content'].apply(lambda x: analyzer.polarity_scores(x)['neg'])
data['neu'] = data['content'].apply(lambda x: analyzer.polarity_scores(x)['neu'])
data['pos'] = data['content'].apply(lambda x: analyzer.polarity_scores(x)['pos'])

# Labeling: 1 for bullying (negative sentiment), 0 for non-bullying
data['comp_score'] = data['compound'].apply(lambda x: 0 if x >= 0 else 1)

# Splitting dataset into train & test sets
X_train, X_test, y_train, y_test = train_test_split(data['content'], data['comp_score'], test_size=0.25, random_state=42)

print("\nDataset Split:")
print(f"Total Rows: {data.shape[0]}")
print(f"Training Set: {X_train.shape[0]}")
print(f"Testing Set: {X_test.shape[0]}")

# Feature extraction using TF-IDF
vectorizer = TfidfVectorizer(stop_words='english', max_features=5000)
X_train_tfidf = vectorizer.fit_transform(X_train)
X_test_tfidf = vectorizer.transform(X_test)

# -------- Naïve Bayes Model --------
print("\n----------------------")
print("Naïve Bayes Model")
nb_model = MultinomialNB()
nb_model.fit(X_train_tfidf, y_train)
nb_pred = nb_model.predict(X_test_tfidf)

print("\n------ Classification Report ------")
print(classification_report(y_test, nb_pred))
print(f"Naïve Bayes Accuracy: {accuracy_score(y_test, nb_pred) * 100:.2f}%")

# -------- Support Vector Machine (SVM) Model --------
print("\n----------------------")
print("Support Vector Machine (SVM)")
svm_model = SVC(kernel='linear')
svm_model.fit(X_train_tfidf, y_train)
svm_pred = svm_model.predict(X_test_tfidf)

print("\n------ Classification Report ------")
print(classification_report(y_test, svm_pred))
print(f"SVM Accuracy: {accuracy_score(y_test, svm_pred) * 100:.2f}%")

# Pie Chart for Tweet Distribution
plt.figure(figsize=(7, 7))
counts = data['comp_score'].value_counts()
plt.pie(counts, labels=["Non-Bullying", "Bullying"], startangle=90, counterclock=False,
        wedgeprops={'width': 0.6}, autopct='%1.1f%%', pctdistance=0.55, textprops={'fontsize': 15},
        shadow=True, colors=sns.color_palette("Paired")[3:])
plt.title('Distribution of Tweets')
plt.text(x=-0.35, y=0, s=f'Total Tweets: {data.shape[0]}', ha='center')

# Histogram of Sentiment Scores
fig, axis = plt.subplots(2, 2, figsize=(10, 8))
data[['compound', 'neg', 'neu', 'pos']].hist(ax=axis.flatten(), bins=30)
plt.tight_layout()

plt.show()
