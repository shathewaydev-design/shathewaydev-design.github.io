document.querySelectorAll('.img-carousel').forEach(carousel => {
  const track = carousel.querySelector('.project-imgs');
  const slides = carousel.querySelectorAll('.project-imgs img');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');

  let index = 0;
  const slideWidth = 800; // hard-coded width
  const slideHeight = 500; // optional, if needed for calculations

  function updateSlide() {
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
  });

  // optional: ignore resize now since it's fixed
});



document.querySelectorAll('.project-name').forEach(button => {
  button.addEventListener('click', () => {
    const project = button.closest('.project-container');
    project.classList.toggle('open');
  });
});


document.querySelectorAll(".expand-btn").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    card.classList.toggle("expanded");

    button.textContent =
      card.classList.contains("expanded")
        ? "View Less"
        : "View More";
  });
});
