document.addEventListener('DOMContentLoaded', function() {
  const movies = [
    {
      id: '1',
      title: 'Dunki',
      imageUrl: 'https://media-hosting.imagekit.io//26bccef1e1b54fd4/5f348115b3412c96312b909f2f226c28.jpg?Expires=1833533826&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=l46XFG013No6UoAC7G9GYWrrXjV7Yt3jdo1NdPwqaGtV8vRWLnPL8FyEwSS5DtS5~-ZzQukl3Kb5~GQdvp3FkV-Q-Sp~tF0bXaG37eugl8dURJqXNOlxun9MLUWu~k3-2e517Qdrq8MPAW6qsf~yPv6OLuR5gOJawEnCEmfXglgdjMUS8Qi1Psf~0831SiV0wElus0MbQaDOHpUsA0BS0jQvkTBotwrY7roHzevWbXmBMZZepWG7R-L~dglqwGWR5Os2P2VMCz4OhhJIXCRkKYZt6GGd2Fh~QPL5wR6lMhoAJXaxPvk4MZlPs5IOKsB9cf7t8IDeBgKYl1SR9xNIdA__',
      duration: '2h 41min',
      genre: ['Comedy', 'Drama', 'Action'],
      rating: 'U/A',
      description: 'A heartwarming tale about four friends and their quest to reach foreign shores, Dunki is a saga of love and friendship that brings together these wildly disparate stories.'
    },
    {
      id: '2',
      title: 'Animal',
      imageUrl: 'https://media-hosting.imagekit.io//876e5ca224c44c58/bcfe47b4b2fbcb1dd40cef44569d6d81.jpg?Expires=1833533826&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KmPXq2NjT6PouozsPLFEHmMT3BHwc9sCplAzwmmeZaRqzoLTKwQBdMX8TidgyghF~sFu8kzFr2k-PLGAKdh6IlMGgiXXJ5TKalqOEAzhbMIsGan5AzD0czmDTZ1k8pYXlJlFCyaHYLiDOQMtAsiAVFwjG8hy-XEMltZnXJb7Ago4TMcJZL68mhMOSFm0o8EvCS0zogk2VPFggpmqBSBOBxSQbLSmWZjtodO8BDqxQNJz416BTWelMoqKUvYd6Yp41EY2nJtee~8tiKUdo4GT1DWq-QnOn5I4yeG~s9ebzAgaceyVJ2pLBDChRd~PsDaMcY6ZFY5Cl9k9tN45eoUXeA__',
      duration: '3h 21min',
      genre: ['Action', 'Drama', 'Crime'],
      rating: 'A',
      description: 'A son undergoes a remarkable transformation as the bond with his father begins to fracture, leading him down a dark path of vengeance and destruction.'
    },
    {
      id: '3',
      title: 'Salaar',
      imageUrl: 'https://media-hosting.imagekit.io//955d69278ec54a58/c9cce6324a66caa752f9c29b29f12f95.jpg?Expires=1833532592&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AAfp96kho1mLkskzczZaSAegAk46IUiMcOoJPuqBTPRbuuUsItUUVyK4QB4mF6xNKF4TzbJdOCzUXoIxwS9WYkFQ5~0f9tJhpL30dLTjXiQalMbOr4sT5~~IiSsVPztlKIozDPoIhweo4FOLjzi0I1nolv5rwrXPZ8ielAIgpMdlzi3V8Q6sIjrMIm7FBaaMPymLjntifdaWs0GPrCtFeUtEmexi7fHxeLQFY03WRi7kMacLTgjXYKOWesE8r7-c0IBcuhqOQ7mJH3A4pgc9-urnaKunPe37heGwt0QM1rkCQTq1cPTQmiQlMwkIFSYrLUa26dpEOIMFxc0-QmmVdg__',
      duration: '2h 55min',
      genre: ['Action', 'Thriller'],
      rating: 'U/A',
      description: 'In a high-stakes world of violence and loyalty, a warrior must choose between his sworn oath and the call of justice.'
    },
    {
      id: '4',
      title: '12th Fail',
      imageUrl: 'https://media-hosting.imagekit.io//504147386f024d90/9792154bb86de51a8212e13f3f890a8d.jpg?Expires=1833533826&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1dyA3ZHuYQUiLobIvbSECaJy7CZUQr3yIUaD2PI4lgkyPItfwDu2clvKckAubZj28P-YjSlH1KbNlBNB2N0A3y5UEDFvGea~RrOv79oanJMERICbBm7-ciKyqruuIGXoCz~1VmuuiR0MsFTHdCoAxUG~AMMfAQPn4mBNOk98~xBPE1py3zesqNAaUtgM0ogURNaWwSWrONKvnP81FaelfnxVz6-S3hMAIGN0G5DGOj8hPv~KTclqBvAqzgTP4C1rRLs8naqg24M-llMQ9JlumPo-acNfE~fEO~GGrlmK3O5biZYFOdMDROyMa-puxhQYG1o8vM9~htxXMk6Eb9vbdg__',
      duration: '2h 27min',
      genre: ['Drama', 'Biography'],
      rating: 'U',
      description: 'Based on a true story, follows an IPS aspirant from Chambal as he overcomes extraordinary circumstances to achieve his dreams.'
    }
  ];

  const showTimes = [
    { id: '1', time: '9:00 AM', price: 150 },
    { id: '2', time: '12:30 PM', price: 180 },
    { id: '3', time: '3:45 PM', price: 180 },
    { id: '4', time: '7:15 PM', price: 250 },
    { id: '5', time: '10:30 PM', price: 250 },
  ];

  const sportsEvents = [
    {
      id: '1',
      title: 'IPL 2024: MI vs CSK',
      imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
      date: '2024-04-15 19:30',
      venue: 'Wankhede Stadium, Mumbai',
      category: 'Cricket',
      price: 1000,
      description: 'Mumbai Indians take on Chennai Super Kings in this exciting IPL match.'
    },
    {
      id: '2',
      title: 'ISL Final 2024',
      imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
      date: '2024-03-30 20:00',
      venue: 'Jawaharlal Nehru Stadium, Kerala',
      category: 'Football',
      price: 800,
      description: 'Indian Super League Final - Experience the biggest night in Indian football.'
    }
  ];

  const trainRoutes = [
    {
      id: '1',
      trainNumber: '12951',
      name: 'Rajdhani Express',
      from: 'Mumbai Central',
      to: 'New Delhi',
      departure: '16:35',
      arrival: '08:35',
      duration: '16h',
      price: {
        sleeper: 800,
        ac3tier: 2000,
        ac2tier: 2800
      }
    },
    {
      id: '2',
      trainNumber: '12259',
      name: 'Duronto Express',
      from: 'Bangalore',
      to: 'Chennai',
      departure: '22:00',
      arrival: '06:40',
      duration: '8h 40m',
      price: {
        sleeper: 450,
        ac3tier: 1200,
        ac2tier: 1800
      }
    }
  ];

  const busRoutes = [
    {
      id: '1',
      from: 'Mumbai',
      to: 'Pune',
      departure: '07:00',
      arrival: '10:30',
      duration: '3h 30m',
      busType: 'AC Volvo',
      price: 450
    },
    {
      id: '2',
      from: 'Bangalore',
      to: 'Mysore',
      departure: '08:30',
      arrival: '11:30',
      duration: '3h',
      busType: 'AC Sleeper',
      price: 600
    }
  ];

  const flightRoutes = [
    {
      id: '1',
      airline: 'IndiGo',
      flightNumber: '6E-214',
      from: 'Mumbai',
      to: 'Delhi',
      departure: '10:30',
      arrival: '12:45',
      duration: '2h 15m',
      price: 4500,
      imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      airline: 'Air India',
      flightNumber: 'AI-802',
      from: 'Bangalore',
      to: 'Kolkata',
      departure: '14:15',
      arrival: '16:45',
      duration: '2h 30m',
      price: 5200,
      imageUrl: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const createCard = (item) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.title || item.name || item.airline}">
      <div class="card-content">
        <h3 class="card-title">${item.title || item.name || item.airline}</h3>
        <p class="card-description">${item.description || ''}</p>
        <p class="card-details">${item.duration ? 'Duration: ' + item.duration : ''}</p>
        <p class="card-details">${item.rating ? 'Rating: ' + item.rating : ''}</p>
        <p class="card-details">${item.genre ? 'Genre: ' + item.genre.join(', ') : ''}</p>
        <p class="card-details">${item.date ? 'Date: ' + item.date : ''}</p>
        <p class="card-details">${item.venue ? 'Venue: ' + item.venue : ''}</p>
        <p class="card-details">${item.category ? 'Category: ' + item.category : ''}</p>
        <p class="card-details">${item.price ? 'Price: ₹' + item.price : ''}</p>
        <p class="card-details">${item.trainNumber ? 'Train Number: ' + item.trainNumber : ''}</p>
        <p class="card-details">${item.from ? 'From: ' + item.from : ''}</p>
        <p class="card-details">${item.to ? 'To: ' + item.to : ''}</p>
        <p class="card-details">${item.departure ? 'Departure: ' + item.departure : ''}</p>
        <p class="card-details">${item.arrival ? 'Arrival: ' + item.arrival : ''}</p>
        <p class="card-details">${item.busType ? 'Bus Type: ' + item.busType : ''}</p>
        <p class="card-details">${item.flightNumber ? 'Flight Number: ' + item.flightNumber : ''}</p>
      </div>
    `;
    return card;
  };

  const moviesContainer = document.getElementById('movies');
  movies.forEach(movie => {
    moviesContainer.appendChild(createCard(movie));
  });

  const showTimesContainer = document.getElementById('show-times');
  showTimes.forEach(showTime => {
    const showTimeCard = document.createElement('div');
    showTimeCard.className = 'card';
    showTimeCard.innerHTML = `
      <div class="card-content">
        <h3 class="card-title">${showTime.time}</h3>
        <p class="card-details">Price: ₹${showTime.price}</p>
      </div>
    `;
    showTimesContainer.appendChild(showTimeCard);
  });

  const sportsEventsContainer = document.getElementById('sports-events');
  sportsEvents.forEach(event => {
    sportsEventsContainer.appendChild(createCard(event));
  });

  const trainRoutesContainer = document.getElementById('train-routes');
  trainRoutes.forEach(route => {
    trainRoutesContainer.appendChild(createCard(route));
  });

  const busRoutesContainer = document.getElementById('bus-routes');
  busRoutes.forEach(route => {
    busRoutesContainer.appendChild(createCard(route));
  });

  const flightRoutesContainer = document.getElementById('flight-routes');
  flightRoutes.forEach(route => {
    flightRoutesContainer.appendChild(createCard(route));
  });
});