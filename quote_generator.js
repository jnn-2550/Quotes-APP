const button = document.getElementById("new_quote");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

  const quotes = [
    {
      quote: "The best way to predict the future is to invent it.", 
      author: "Alan Kay"
    },
    {
      quote: "Innovation distinguishes between a leader and a follower.", 
      author: "Steve Jobs"
    },
    {
      quote: "The only way to do great work is to love what you do.", 
      author: "Steve Jobs"
    },
    {
      quote: "Stay hungry, stay foolish.", 
      author: "Steve Jobs"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.", 
      author: "Eleanor Roosevelt"
    }
  ];

  button.addEventListener("click", generateQuote);
  function generateQuote(){
    let random = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = `"${quotes[random].quote}"`;
    author.innerHTML = `- ${quotes[random].author}`;
  }
  generateQuote();
