const quotes = [
    "The best way to predict the future is to create it.",
    "Do what you love, and you’ll never work another day in your life.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "In the middle of every difficulty lies opportunity."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}
