const galeria = document.getElementById("galeria");

const carousel = (direccion) => {
  const opciones = {
    root: document.querySelector(".galeria__carousel"),
    rootMargin: "0px",
    threshold: 0.9,
  };

  const observer = new IntersectionObserver((entradas) => {
    // console.log(entradas[0]);

    const slidesVisibles = entradas.filter((entrada) => {
      if (entrada.isIntersecting) {
        return entrada;
      }
    });

    if (direccion === "anterior") {
      const primerSlideVisible = slidesVisibles[0];
      const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);
      if (indexPrimerSlideVisible !== 0) {
        entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }


    } else if (direccion === "siguiente") {
      const ultimaSlideVisible = slidesVisibles[slidesVisibles.length - 1];
      const indexUltimoSlideVisible = entradas.indexOf(ultimaSlideVisible);
    //   console.log(indexUltimoSlideVisible);

      if (entradas.length - 1 > indexUltimoSlideVisible) {
        entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    }

    const slides = galeria.querySelectorAll(".galeria__carousel-slide");
    slides.forEach((slide) => {
      observer.unobserve(slide);
    });
  }, opciones);

  const slides = galeria.querySelectorAll(".galeria__carousel-slide");
  slides.forEach((slide) => {
    observer.observe(slide);
  });
};

export default carousel;
