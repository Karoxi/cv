document.querySelectorAll('.carousel, .carousel-2').forEach(carousel => {
  const items = carousel.querySelectorAll('.carousel-item');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');
  let current = 0;

  nextBtn.onclick = () => {
    items[current].classList.remove('active');
    current = (current + 1) % items.length;
    items[current].classList.add('active');
  };

  prevBtn.onclick = () => {
    items[current].classList.remove('active');
    current = (current - 1 + items.length) % items.length;
    items[current].classList.add('active');
  };
});

const devQuotes = [
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler"
  },
    {
    quote: "You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity.",
    author: "John Romero"
  },      {
    quote: "There are 10 types of people in this world, those who understand binary and those who don’t",
    author: "Anonymous"
  },      {
    quote: "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
    author: "Edsger W. Dijkstra"
  },      {
    quote: "The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.",
    author: "Charles Eames"
  },      {
    quote: "Programming isn't about what you know, it's about what you can figure out.",
    author: "Chris Pine"
  },      {
    quote: "Creativity is intelligence having fun",
    author: "Albert Einstein"
  }, 

]

function loadQuote() {
  const randomIndex = Math.floor(Math.random() * devQuotes.length);
  const quote = devQuotes[randomIndex];
  document.getElementById("quote-text").innerText = `"${quote.quote}"`;
  document.getElementById("quote-author").innerText = `${quote.author}`;
}

document.getElementById("new-quote").addEventListener("click", loadQuote);

loadQuote();

