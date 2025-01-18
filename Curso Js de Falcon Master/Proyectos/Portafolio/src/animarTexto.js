const animarTexto = (e) => {
  const cursor = e.querySelector(".hero__cursor");
  cursor.classList.add("hero__cursor--visible");
  const numeroDeLetras = e.dataset.texto.length;

  for (let i = 0; i < numeroDeLetras; i++) {
    setTimeout(() => {
      const letra = document.createElement("span");
      letra.append(e.dataset.texto[i]);
      e.append(letra);
    }, 100 * i);
  }

  setTimeout(() => {
    const cursores = [
      ...e.closest(".hero__header").querySelectorAll(".hero__cursor"),
    ];
    const cursorActual = cursores.indexOf(cursor);
    if(cursorActual < cursores.length -1){
        cursor.classList.remove("hero__cursor--visible")
    } else{
        cursor.classList.add("hero__cursor--active")
        setTimeout(() => {
            cursor.classList.remove("hero__cursor--visible")
        }, 1500);
    }
  }, numeroDeLetras * 100);

  return new Promise((resolve) => {
    setTimeout(resolve, numeroDeLetras * 100);
  });
};

export default animarTexto;
