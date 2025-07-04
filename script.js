  const carousel = document.querySelector('.carousel');
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
