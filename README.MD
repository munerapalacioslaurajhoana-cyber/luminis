# ⚡ Luminis — Motor Lógico de Red Eléctrica

> Sistema algorítmico de distribución energética para la metrópolis de **NeoCiudad**, construido con **JavaScript Vanilla** bajo el patrón de arquitectura **MVC (Modelo - Vista - Controlador)**. El motor procesa en tiempo real la capacidad de las subestaciones eléctricas y la demanda de cada sector, priorizando zonas críticas para la vida humana.

---

## 📑 Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Arquitectura del Proyecto](#arquitectura-del-proyecto)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Modelos de Datos](#modelos-de-datos)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Autor](#autor)

---

## 📋 Descripción General

Este proyecto simula el funcionamiento del motor lógico de la corporación **Luminis**, encargada de la generación y distribución de energía en NeoCiudad. Ante una ola de calor sin precedentes que lleva la infraestructura eléctrica al límite, el sistema reemplaza el proceso manual de balanceo de carga por un algoritmo automatizado.

El motor recibe el inventario de subestaciones eléctricas y los requerimientos energéticos de cada zona, procesa la distribución respetando las reglas operativas y genera un reporte detallado en consola indicando qué zonas fueron abastecidas, cuáles quedaron en déficit y qué subestaciones requieren mantenimiento inmediato.

---

## 🧰 Tecnologías Utilizadas

| Tecnología | Versión | Rol en el proyecto |
|---|---|---|
| **JavaScript (Vanilla)** | ES6+ | Lógica principal: modelos, controladores y motor de distribución |
| **HTML5** | — | Estructura del punto de entrada y carga de módulos |
| **CSS3** | — | Estilos base del proyecto |

---

## 🏛️ Arquitectura del Proyecto

El proyecto sigue el patrón **MVC adaptado al frontend**:
┌─────────────────────────────────────────────────────────────┐
│                        CONSOLA                              │
│              Output del reporte de distribución             │
└────────────────────────┬────────────────────────────────────┘
│ Muestra resultados
▼
┌─────────────────────────────────────────────────────────────┐
│                    VISTA (views/)                           │
│         Archivos HTML de subestaciones y zonas              │
└────────────────────────┬────────────────────────────────────┘
│ Llama funciones del controlador
▼
┌─────────────────────────────────────────────────────────────┐
│                CONTROLADOR (controllers/)                   │
│         Lógica de distribución energética                   │
│         Procesamiento de zonas y subestaciones              │
└────────────────────────┬────────────────────────────────────┘
│ Accede y manipula los datos
▼
┌─────────────────────────────────────────────────────────────┐
│                   MODELO (model/)                           │
│         Define la estructura de subestaciones y zonas       │
│         Datos en memoria durante la sesión                  │
└─────────────────────────────────────────────────────────────┘

---

## 📁 Estructura de Carpetas
luminis/
│
├── index.html                         # Punto de entrada — carga los módulos JS
│
├── src/
│   ├── model/                         # Capa de datos
│   │   ├── SubestacionModel.js        # Datos de las subestaciones eléctricas
│   │   └── ZonaModel.js               # Datos de las zonas de demanda
│   │
│   ├── controllers/                   # Capa de lógica de negocio
│   │   ├── SubestacionController.js   # Lógica de distribución por subestación
│   │   └── ZonaController.js          # Procesamiento de zonas y reporte final
│   │
│   ├── views/                         # Capa de presentación
│   │   ├── subestaciones/
│   │   │   └── list.html              # Vista: listado de subestaciones
│   │   └── zonas/
│   │       └── list.html              # Vista: listado de zonas de demanda
│   │
│   ├── utils/                         # Utilidades reutilizables
│   │   └── helpers.js                 # Funciones auxiliares del motor lógico
│   │
│   ├── assets/                        # Recursos estáticos
│   │   ├── css/
│   │   │   └── main.css               # Estilos globales del proyecto
│   │   └── img/
│   │       └── .keep                  # Carpeta reservada para imágenes
│   │
│   └── js/
│       └── app.js                     # Inicialización del motor lógico
│
├── public/                            # Recursos públicos del proyecto
├── .gitignore                         # Archivos ignorados por Git
└── README.md                          # Documentación del proyecto

---

## 🗃️ Modelos de Datos

### ⚡ Subestación

```js
const subestaciones = [
  { id: "Sub-Norte",  megavatios: 500,  estado: "activa"          },
  { id: "Sub-Sur",    megavatios: 200,  estado: "sobrecalentada"   },
  { id: "Sub-Este",   megavatios: 800,  estado: "activa"           },
  { id: "Sub-Oeste",  megavatios: 0,    estado: "mantenimiento"    },
  { id: "Sub-Centro", megavatios: 1000, estado: "activa"           }
];
```

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | String | Identificador de la subestación |
| `megavatios` | Number | Capacidad disponible en MW |
| `estado` | String | `"activa"` / `"sobrecalentada"` / `"mantenimiento"` |

---

### 🏙️ Zona de Demanda

```js
const zonasDemanda = [
  { zona: "Hospital General",         megavatiosRequeridos: 300, prioridad: "critica" },
  { zona: "Planta de Bombeo de Agua", megavatiosRequeridos: 150, prioridad: "critica" },
  { zona: "Distrito Financiero",      megavatiosRequeridos: 600, prioridad: "alta"    },
  { zona: "Sector Residencial A",     megavatiosRequeridos: 400, prioridad: "normal"  },
  { zona: "Sector Residencial B",     megavatiosRequeridos: 900, prioridad: "normal"  }
];
```

| Campo | Tipo | Descripción |
|---|---|---|
| `zona` | String | Nombre del sector de la ciudad |
| `megavatiosRequeridos` | Number | Energía necesaria en MW |
| `prioridad` | String | `"critica"` / `"alta"` / `"normal"` |

---

## ⚙️ Instalación y Ejecución

### Prerrequisitos

- Navegador web moderno (Chrome, Firefox o Edge)
- [Visual Studio Code](https://code.visualstudio.com/)
- Extensión **Live Server** para VS Code

> No se requiere Node.js ni dependencias externas. El proyecto corre completamente en el navegador.

---

### Paso 1 — Obtener el proyecto

**Opción A — Clonar con Git:**
```bash
git clone https://github.com/munerapalacioslaurajhoana-cyber/luminis.git
cd luminis
```

**Opción B — Descargar ZIP:**
1. En GitHub, hacer clic en **Code → Download ZIP**
2. Descomprimir en la carpeta de preferencia

---

### Paso 2 — Abrir en VS Code

```bash
code luminis
```

O desde VS Code: `File → Open Folder` y seleccionar la carpeta del proyecto.

---

### Paso 3 — Instalar Live Server

1. Abrir extensiones: `Ctrl + Shift + X`
2. Buscar **Live Server** (autor: Ritwick Dey)
3. Hacer clic en **Install**

---

### Paso 4 — Ejecutar el proyecto

1. Clic derecho sobre `index.html`
2. Seleccionar **"Open with Live Server"**
3. Presionar **F12** para abrir la consola del navegador
4. El reporte de distribución energética aparecerá automáticamente
http://127.0.0.1:5500

> ⚠️ **Nota:** Se recomienda usar Live Server en lugar de abrir `index.html` directamente. La apertura directa puede generar restricciones de CORS que bloqueen la carga de módulos ES6 (`import/export`).

---

### Paso 5 — Verificar el funcionamiento

Una vez abierto en el navegador deberías ver en consola:

- ✅ Zonas abastecidas con sus subestaciones utilizadas y MW restantes
- ❌ Zonas en déficit energético
- 🔧 Alertas de mantenimiento para subestaciones en 0 MW

---

## 👤 Autor

| Campo | Detalle |
|---|---|
| **Nombre** | Laura Munera |
| **Programa** | Técnico Laboral en Desarrollo de Software |
| **Institución** | CESDE |
| **Proyecto** | Luminis — Motor Lógico de Red Eléctrica |
| **Año** | 2026 |

---

> 📝 *Proyecto desarrollado con fines académicos como ejercicio práctico de lógica de programación con JavaScript Vanilla, módulos ES6 y arquitectura MVC.*