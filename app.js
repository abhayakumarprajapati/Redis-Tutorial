const express = require("express")
// const { getProducts } = require("./api")
// const Redis = require('ioredis')

const app = express()
//changes
// const redis = new Redis({
//     host: "",
//     port: "",
//     password: ""
// })

// redis.on("connect", () => {
//     console.log("redis connectd")
// })

// 100 motivational quotes
const quotes = [
  "Believe in yourself!",
  "You can do it!",
  "Dream big and dare to fail.",
  "Stay positive, work hard, make it happen.",
  "Don't watch the clock; do what it does. Keep going.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Dream it. Wish it. Do it.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Don't stop when you're tired. Stop when you're done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t wait for opportunity. Create it.",
  "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
  "The key to success is to focus on goals, not obstacles.",
  "Dream bigger. Do bigger.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "Your only limit is your mind.",
  "Work hard in silence, let success make the noise.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work, the luckier you get.",
  "Don’t wish it were easier. Wish you were better.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Believe you can and you're halfway there.",
  "Action is the foundational key to all success.",
  "Opportunities don't happen. You create them.",
  "Sometimes later becomes never. Do it now.",
  "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
  "Don’t let yesterday take up too much of today.",
  "The only place where success comes before work is in the dictionary.",
  "You are capable of amazing things.",
  "Doubt kills more dreams than failure ever will.",
  "Be so good they can't ignore you.",
  "Failure is not the opposite of success; it's part of success.",
  "Your passion is waiting for your courage to catch up.",
  "Magic is believing in yourself.",
  "If people are doubting how far you can go, go so far that you can't hear them anymore.",
  "Everything you can imagine is real.",
  "Start where you are. Use what you have. Do what you can.",
  "Success is what happens after you have survived all your mistakes.",
  "The best way to predict the future is to create it.",
  "A river cuts through a rock not because of its power, but because of its persistence.",
  "Difficult roads often lead to beautiful destinations.",
  "Believe you deserve it and the universe will serve it.",
  "Never stop doing your best just because someone doesn’t give you credit.",
  "Hard work beats talent when talent doesn't work hard.",
  "Success doesn’t come from what you do occasionally. It comes from what you do consistently.",
  "It always seems impossible until it’s done.",
  "Fall seven times, stand up eight.",
  "Small progress is still progress.",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "The man who moves a mountain begins by carrying away small stones.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "Go the extra mile. It’s never crowded.",
  "Failure will never overtake me if my determination to succeed is strong enough.",
  "Today’s accomplishments were yesterday’s impossibilities.",
  "Learn as if you will live forever, live like you will die tomorrow.",
  "Setting goals is the first step in turning the invisible into the visible.",
  "Do what you can with all you have, wherever you are.",
  "Don’t limit your challenges. Challenge your limits.",
  "Only those who dare to fail greatly can ever achieve greatly.",
  "Work like there is someone working 24 hours a day to take it away from you.",
  "It’s never too late to be what you might have been.",
  "What defines us is how well we rise after falling.",
  "The best revenge is massive success.",
  "Act as if what you do makes a difference. It does.",
  "Quality means doing it right when no one is looking.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
  "Your true success in life begins only when you make the commitment to become excellent at what you do.",
  "If opportunity doesn’t knock, build a door.",
  "The best way to get started is to quit talking and begin doing.",
  "Success is liking yourself, liking what you do, and liking how you do it.",
  "Hustle until you no longer have to introduce yourself.",
  "Good things come to people who wait, but better things come to those who go out and get them.",
  "I find that the harder I work, the more luck I seem to have.",
  "Do not wait to strike till the iron is hot; but make it hot by striking.",
  "Either you run the day or the day runs you.",
  "Everything you’ve ever wanted is on the other side of fear.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "Start small. Think big. Don’t stop.",
  "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
  "Don’t be afraid to give up the good to go for the great.",
  "A goal is a dream with a deadline.",
  "Pain is temporary. Quitting lasts forever.",
  "Great things are done by a series of small things brought together.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Believe you can and you're halfway there.",
  "There is no substitute for hard work.",
  "It does not matter how slowly you go as long as you do not stop.",
  "You don’t have to be great to start, but you have to start to be great.",
  "If you want to achieve greatness stop asking for permission.",
  "Go confidently in the direction of your dreams. Live the life you have imagined."
];

// Variables to store today's quote
let todaysDate = null;
let todaysQuote = null;

// Function to select today's quote
function getTodaysQuote() {
  const today = new Date().toDateString(); // 'Sun Apr 27 2025'

  if (todaysDate !== today) {
    // New day -> select a new random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    todaysQuote = quotes[randomIndex];
    todaysDate = today;
  }

  return todaysQuote;
}


// Route
app.get('/', (req, res) => {
  const now = new Date();

  // Format time in IST (Indian Standard Time)
  const options = { timeZone: 'Asia/Kolkata', hour12: true };
  const formattedTime = now.toLocaleString('en-IN', options); // This formats the time in IST

  const html = `
    <html>
      <head>
        <title>Motivational App</title>
      </head>
      <body style="font-family: Arial; text-align: center; margin-top: 50px;">
        <h4>Welcome Abhay Prajapati 😊</h4>
        <h1>Current Date and Time</h1>
        <p>${formattedTime}</p>
        <h2>Today's Motivation:</h2>
        <blockquote style="font-size: 24px; font-style: italic; color: #555;">"${getTodaysQuote()}"</blockquote>
      </body>
    </html>
  `;

  res.send(html);
});


// app.get('/products', async (req, res) => {

//     // const isExist = await redis.exists("products")
//     let products = await redis.get("products")

//     if (products) {
//         console.log('get from cache')


//         return res.json({
//             products: JSON.parse(products)
//         })

//     }


//     products = await getProducts()

//     // await redis.set("products",JSON.stringify(products))
//     await redis.setex("products", 20, JSON.stringify(products))


//     res.json({
//         products
//     })
// })


app.listen(3000, () => {
    console.log('server running')
})
