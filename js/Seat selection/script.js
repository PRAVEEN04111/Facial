document.addEventListener("DOMContentLoaded", () => {
  const ticketTitle = document.getElementById("ticket-title");
  const ticketDetails = document.getElementById("ticket-details");
  const seatsContainer = document.getElementById("seats-container");
  const selectedSeatsElement = document.getElementById("selected-seats");
  const totalAmountElement = document.getElementById("total-amount");
  const proceedButton = document.getElementById("proceed-button");

  const urlParams = new URLSearchParams(window.location.search);
  const ticketId = urlParams.get("id");
  const ticketType = urlParams.get("type");

  // Mock data fetching functions
  const getAllTickets = (type) => [
    { id: "1", title: "Movie 1", location: "Theater 1", date: "2025-03-20", time: "19:00", price: 200 },
    { id: "2", title: "Movie 2", location: "Theater 2", date: "2025-03-21", time: "20:00", price: 250 },
  ];

  const generateSeats = (rows, seatsPerRow, basePrice) => {
    const seats = [];
    for (let row = 0; row < rows; row++) {
      for (let seat = 0; seat < seatsPerRow; seat++) {
        const seatNumber = `${String.fromCharCode(65 + row)}${seat + 1}`;
        seats.push({
          id: seatNumber,
          number: seatNumber,
          isBooked: Math.random() > 0.7,
          price: basePrice + (row < 3 ? 100 : 0), // Premium pricing for first 3 rows
        });
      }
    }
    return seats;
  };

  const ticket = ticketType ? getAllTickets(ticketType).find(t => t.id === ticketId) : null;
  const seats = ticket ? generateSeats(8, 6, ticket.price) : [];
  const selectedSeats = new Set();

  const updateSelectedSeatsDisplay = () => {
    selectedSeatsElement.textContent = Array.from(selectedSeats).join(", ") || "None";
    const totalAmount = Array.from(selectedSeats).reduce((sum, seatId) => {
      const seat = seats.find(s => s.id === seatId);
      return sum + (seat?.price || 0);
    }, 0);
    totalAmountElement.textContent = `₹${totalAmount}`;
    proceedButton.disabled = selectedSeats.size === 0;
  };

  const handleSeatClick = (seat) => {
    if (seat.isBooked) return;

    if (selectedSeats.has(seat.id)) {
      selectedSeats.delete(seat.id);
    } else {
      selectedSeats.add(seat.id);
    }
    updateSelectedSeatsDisplay();
    renderSeats();
  };

  const renderSeats = () => {
    seatsContainer.innerHTML = "";
    seats.forEach((seat) => {
      const button = document.createElement("button");
      button.className = `
        p-2 rounded text-center
        ${seat.isBooked 
          ? 'bg-gray-200 cursor-not-allowed' 
          : selectedSeats.has(seat.id)
            ? 'bg-indigo-600 text-white'
            : 'bg-white border border-gray-300 hover:border-indigo-500'
        }
      `;
      button.innerHTML = `
        <div class="text-sm font-medium">${seat.number}</div>
        <div class="text-xs">₹${seat.price}</div>
      `;
      button.disabled = seat.isBooked;
      button.addEventListener("click", () => handleSeatClick(seat));
      seatsContainer.appendChild(button);
    });
  };

  if (ticket) {
    ticketTitle.textContent = ticket.title;
    ticketDetails.textContent = `${ticket.location} • ${new Date(ticket.date).toLocaleDateString()} • ${ticket.time}`;
    renderSeats();
  } else {
    alert("Ticket not found. Redirecting to home page.");
    window.location.href = "/";
  }

  proceedButton.addEventListener("click", () => {
    window.location.href = "/payment";
  });
});