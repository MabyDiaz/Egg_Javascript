const form = document.getElementById("form1");
    const resultElement = document.getElementById("result");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const nombre = form.nombre.value;
      const apellido = form.apellido.value;
      const mensaje = `Nombre: ${nombre}<br>Apellido: ${apellido}`;
      resultElement.innerHTML = mensaje;
    });