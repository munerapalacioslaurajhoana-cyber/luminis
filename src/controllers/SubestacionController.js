import { obtenerSubestacionesActivas, contarElementos } from "../utils/helpers.js";

export function distribuirEnergia(subestaciones, megavatiosNecesarios, nombreZona) {
  let activas = obtenerSubestacionesActivas(subestaciones);
  let megavatiosPendientes = megavatiosNecesarios;
  let subestacionesUsadas = [];
  let contador = 0;
  let totalActivas = contarElementos(activas);

  for (let i = 0; i < totalActivas; i++) {
    if (megavatiosPendientes <= 0) break;

    if (activas[i].megavatios > 0) {
      let aportado = 0;

      if (activas[i].megavatios >= megavatiosPendientes) {
        aportado = megavatiosPendientes;
      } else {
        aportado = activas[i].megavatios;
      }

      activas[i].megavatios = activas[i].megavatios - aportado;
      megavatiosPendientes  = megavatiosPendientes - aportado;

      subestacionesUsadas[contador] = {
        id:      activas[i].id,
        aportado: aportado,
        restante: activas[i].megavatios
      };
      contador++;
    }
  }

  let abastecida = megavatiosPendientes <= 0;

  return { nombreZona, abastecida, subestacionesUsadas, deficit: megavatiosPendientes };
}