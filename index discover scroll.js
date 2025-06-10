window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    document.getElementById("left").style.transform = `translateY(${scrollY * -0.1}px)`; // plus lent
  });