# Simulador de Wireworld - Autómatas Celulares

Un simulador interactivo de **Wireworld** desarrollado con Astro, que permite explorar y experimentar con autómatas celulares y circuitos digitales.

## 🎯 ¿Qué es Wireworld?

Wireworld es un autómata celular propuesto por Brian Silverman en 1987, particularmente adecuado para simular transistores y circuitos digitales. Es Turing-completo, lo que significa que puede simular cualquier computadora digital.

### Estados de las Celdas

- **🔲 Espacio Vacío** (Negro): Las celdas vacías permanecen vacías
- **🟡 Conductor** (Amarillo): Actúa como cable por donde fluyen los electrones  
- **🔵 Cabeza de Electrón** (Azul): Es la señal eléctrica activa moviéndose
- **🔴 Cola de Electrón** (Rojo): Es el rastro que deja la cabeza del electrón

## 🚀 Características

- ✅ Simulación completa de las reglas de Wireworld
- ✅ Interfaz interactiva para dibujar circuitos
- ✅ Controles de simulación (Play/Pause/Step/Reset)
- ✅ Velocidad de simulación ajustable
- ✅ Diferentes tamaños de pincel (1x1, 3x3, 5x5)
- ✅ Diseño responsivo
- ✅ Información educativa sobre autómatas celulares

## 🛠️ Tecnologías Utilizadas

- **Astro** - Framework web estático
- **JavaScript/TypeScript** - Lógica de simulación
- **HTML5 Canvas** - Renderizado gráfico
- **CSS3** - Estilos y diseño responsivo

## 📋 Estructura del Proyecto

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── controlpanel.astro
│   │   ├── layout.astro
│   │   ├── toolbar.astro
│   │   └── wireworldgrid.astro
│   ├── pages/
│   │   ├── circuitos-demos.astro
│   │   ├── index.astro
│   │   └── que-es-wireworld.astro
│   ├── scripts/
│   │   ├── app-manager.js
│   │   ├── grid-render.js
│   │   ├── user-interactions.js
│   │   └── wireworld-engine.js
│   └── types/
│       └── wireworld.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instalar dependencias                            |
| `npm run dev`             | Iniciar servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construir sitio de producción en `./dist/`       |
| `npm run preview`         | Vista previa local antes del despliegue          |
| `npm run astro ...`       | Ejecutar comandos CLI de Astro                   |
| `npm run astro -- --help` | Obtener ayuda usando el CLI de Astro            |

## 🎮 Cómo Usar el Simulador

1. **Selecciona un estado** en el panel izquierdo (Conductor, Cabeza, etc.)
2. **Haz clic en la cuadrícula negra** para dibujar
3. **Presiona Play** en el panel derecho para ver la simulación
4. **Experimenta** con diferentes patrones

### Controles Disponibles

- **Estados**: Vacío, Conductor, Cabeza de Electrón, Cola de Electrón
- **Herramientas**: Pincel para dibujar
- **Tamaños**: 1x1, 3x3, 5x5 píxeles
- **Simulación**: Play/Pause, Paso a paso, Reset
- **Velocidad**: Ajustable de 1x a 10x

## � Calidad del Código

Este proyecto incluye las siguientes mejoras de calidad:

- ✅ **Validación de entradas** y manejo de errores robusto
- ✅ **Gestión centralizada de estado** con `WireworldAppManager`
- ✅ **Tipos TypeScript** definidos para mejor mantenibilidad
- ✅ **Logging de errores** comprehensivo para debugging
- ✅ **Código limpio** sin comentarios obsoletos

## 📚 Información Académica

**Proyecto**: Exploración de Autómatas Celulares: Teoría, Aplicaciones y Desarrollo de un Modelo Interactivo  
**Universidad**: Universidad Tecnología Metropolitana  
**Fecha**: Julio 2025

## 👀 ¿Quieres aprender más?

- [Documentación de Astro](https://docs.astro.build)
- [Wireworld en Wikipedia](https://en.wikipedia.org/wiki/Wireworld)
- [Autómatas Celulares](https://es.wikipedia.org/wiki/Aut%C3%B3mata_celular)
