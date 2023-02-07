const hiddenElements = document.querySelectorAll('.hidden');

const options = {
  root: null,
  threshold: [0.5],
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show')
    }
  });
}, options )

hiddenElements.forEach((el) => observer.observe(el));