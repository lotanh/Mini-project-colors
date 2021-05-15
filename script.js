const quotes = [
    {
        id:0,
        author: " Nelson Mandela",
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
        id : 1,
        author : " Walt Disney",
        quote : "The way to get started is to quit talking and begin doing."
    },
    {
        id : 2,
        author : " Steve Jobs",
        quote : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
    },
    {
        id : 3,
        author : " Eleanor Roosevelt",
        quote : "If life were predictable it would cease to be life, and be without flavor."
    },
    {
        id : 4,
        author : " Franklin D. Roosevelt",
        quote : "When you reach the end of your rope, tie a knot in it and hang on."
    },
    {
        id : 5,
        author : " Margaret Mead",
        quote : "Always remember that you are absolutely unique. Just like everyone else."
    },
    {
        id : 6,
        author : " Aristotle",
        quote : "It is during our darkest moments that we must focus to see the light."
    },
    {
        id : 7,
        author : " Ralph Waldo Emerson",
        quote : "Do not go where the path may lead, go instead where there is no path and leave a trail."
    },
]

var current = 0
var previous = 0
const btn = document.getElementById('btn')
const words = document.querySelector('#words')
const nameAuthor = document.querySelector('#name')

btn.addEventListener('click' , () => {
    if (current < quotes.length) {
        previous = current
        current = Math.floor(Math.random() * 10)
        console.log(current)
        console.log(previous)
        if (current === previous) {
            current = 0 
        }else {
            words.innerHTML = `"${quotes[current].quote}"`
            nameAuthor.innerHTML = `${quotes[current].author}`
            console.log(quotes[current].quote + quotes[current].author)
        }
    }else {
        current = 0
    }
})

const formBtn = document.querySelector('#btn-form')
var quoteBox = document.getElementById('quote-box')
var authorBox = document.getElementById('author-box')
var newQuote = {}
var i = 8

formBtn.addEventListener('click', (event) => {
    newQuote = {id:i, author: authorBox.value, quote: quoteBox.value}
    quotes.push(newQuote)
    console.log(quotes)
    i++
    event.preventDefault()
})
