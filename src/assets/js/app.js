import { subestaciones } from "../model/SubestacionModel.js";
import { zonasDemanda }  from "../model/ZonaModel.js";
import { procesarZonas } from "../controllers/ZonaController.js";

console.log("⚡ Iniciando Motor Lógico de Luminis...");
procesarZonas(zonasDemanda, subestaciones);