const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  };
  
  const observer = new IntersectionObserver(intersectionCallback, {
    root: null,
    threshold: 0.5,
  });
  
  const fadeInSectionElementsTop = document.querySelectorAll('.fade-in-element-top');
  fadeInSectionElementsTop.forEach((element) => {
    observer.observe(element);
  });
  
  const fadeInSectionElementsRight = document.querySelectorAll('.fade-in-element-right');
  fadeInSectionElementsRight.forEach((element) => {
  observer.observe(element);
});