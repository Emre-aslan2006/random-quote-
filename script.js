const quotes = [
    "Victory belongs to the most persevering. – Napoleon Bonaparte",
    "A soldier will fight long and hard for a bit of colored ribbon. – Napoleon Bonaparte",
    "Peace at home, peace in the world. – Mustafa Kemal Atatürk",
    "Sovereignty unconditionally belongs to the nation. – Mustafa Kemal Atatürk",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "To each, there comes in their lifetime a special moment when they are figuratively tapped on the shoulder and offered the chance to do a very special thing. – Winston Churchill",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "We cannot always build the future for our youth, but we can build our youth for the future. – Franklin D. Roosevelt",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
    "History will be kind to me for I intend to write it. – Winston Churchill"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");

    // Smooth transition effect for fading
    quoteElement.style.opacity = 0;
    setTimeout(() => {
        quoteElement.innerText = quotes[randomIndex];
        quoteElement.style.opacity = 1;
    }, 300);
}
