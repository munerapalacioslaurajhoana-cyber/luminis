export function obtenerSubestacionesActivas(subestaciones) {
  let activas = [];
  let contador = 0;

  for (let i = 0; subestaciones[i] !== undefined; i++) {
    if (subestaciones[i].estado === "activa") {
      activas[contador] = subestaciones[i];
      contador++;
    }
  }

  return activas;
}

export function contarElementos(arreglo) {
  let contador = 0;
  for (let i = 0; arreglo[i] !== undefined; i++) {
    contador++;
  }
  return contador;
}

export function imprimirSeparador() {
  console.log("=".repeat(55));
}