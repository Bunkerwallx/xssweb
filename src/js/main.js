import { iniciarEscaneo } from './scanner.js';
import { crearPanel, actualizarInterfaz } from './ui.js';
import { idioma } from './i18n.js';

document.addEventListener('DOMContentLoaded', () => {
  crearPanel();
  actualizarInterfaz(idioma);
  iniciarEscaneo();
});
