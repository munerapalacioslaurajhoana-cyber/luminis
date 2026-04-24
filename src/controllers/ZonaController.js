import { distribuirEnergia } from "./SubestacionController.js";
import { imprimirSeparador, contarElementos } from "../utils/helpers.js";

export function procesarZonas(zonasDemanda, subestaciones) {
  let zonasAbastecidas = [];
  let zonasDeficit     = [];
  let contadorAbast    = 0;
  let contadorDeficit  = 0;
  let totalZonas       = contarElementos(zonasDemanda);

  for (let i = 0; i < totalZonas; i++) {
    let zona      = zonasDemanda[i];
    let resultado = distribuirEnergia(subestaciones, zona.megavatiosRequeridos, zona.zona);

    if (resultado.abastecida) {
      zonasAbastecidas[contadorAbast] = resultado;
      contadorAbast++;
    } else {
      zonasDeficit[contadorDeficit] = resultado;
      contadorDeficit++;
    }
  }

  imprimirSeparador();
  console.log("   ⚡ REPORTE FINAL — RED ELÉCTRICA LUMINIS");
  imprimirSeparador();

  console.log("\n✅ ZONAS ABASTECIDAS:");
  for (let i = 0; i < contadorAbast; i++) {
    let z            = zonasAbastecidas[i];
    let totalUsadas  = contarElementos(z.subestacionesUsadas);
    console.log(`\n  📍 ${z.nombreZona}`);
    for (let j = 0; j < totalUsadas; j++) {
      let s = z.subestacionesUsadas[j];
      console.log(`     → ${s.id} aportó ${s.aportado} MW | Restante: ${s.restante} MW`);
    }
  }

  console.log("\n❌ ZONAS SIN ENERGÍA (DÉFICIT):");
  if (contadorDeficit === 0) {
    console.log("  Ninguna zona quedó sin energía.");
  } else {
    for (let i = 0; i < contadorDeficit; i++) {
      console.log(`  ⚠️  ${zonasDeficit[i].nombreZona} — Déficit: ${zonasDeficit[i].deficit} MW`);
    }
  }

  console.log("\n🔧 ALERTA DE MANTENIMIENTO:");
  let hayAlerta      = false;
  let totalSubest    = contarElementos(subestaciones);

  for (let i = 0; i < totalSubest; i++) {
    if (subestaciones[i].estado === "activa" && subestaciones[i].megavatios === 0) {
      console.log(`  🛑 ${subestaciones[i].id} quedó en 0 MW — Proceder a apagar.`);
      hayAlerta = true;
    }
  }

  if (!hayAlerta) {
    console.log("  Sin alertas de mantenimiento.");
  }

  imprimirSeparador();
}