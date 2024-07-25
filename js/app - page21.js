document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  
  const text_99 = document.getElementById('text_99');
  const text_100 = document.getElementById('text_100');
  const text_101 = document.getElementById('text_101');
  const text_102 = document.getElementById('text_102');
  const text_103 = document.getElementById('text_103');
  const text_104 = document.getElementById('text_104');
  const text_105 = document.getElementById('text_105');
  const text_106 = document.getElementById('text_106');
  const text_287 = document.getElementById('text_287');
  const text_288 = document.getElementById('text_288');
  const text_290 = document.getElementById('text_290');
  const text_291 = document.getElementById('text_291');
  const text_292 = document.getElementById('text_292');
  const text_293 = document.getElementById('text_293');
  const text_294 = document.getElementById('text_294');
  const text_295 = document.getElementById('text_295');
  const text_296 = document.getElementById('text_296');
  const text_297 = document.getElementById('text_297');
  const text_298 = document.getElementById('text_298');
  const text_299 = document.getElementById('text_299');
  const text_300 = document.getElementById('text_300');
  const text_301 = document.getElementById('text_301');
  const text_279 = document.getElementById('text_279');
  const text_280 = document.getElementById('text_280');
  const text_281 = document.getElementById('text_281');
  const text_282 = document.getElementById('text_282');
  const text_283 = document.getElementById('text_283');
  const text_284 = document.getElementById('text_284');
  const text_285 = document.getElementById('text_285');
  const text_286 = document.getElementById('text_286');
  const text_260 = document.getElementById('text_260');
  const text_77 = document.getElementById('text_77');
  const text_80 = document.getElementById('text_80');
  const text_79_1 = document.getElementById('text_79_1');
  const text_80_1 = document.getElementById('text_80_1');
  const text_79_2 = document.getElementById('text_79_2');
  const text_80_2 = document.getElementById('text_80_2');
  const text_35 = document.getElementById('text_35');
  const text_36 = document.getElementById('text_36');
  const text_37 = document.getElementById('text_37');
  const text_78 = document.getElementById('text_78');
  const text_42 = document.getElementById('text_42');
  const text_43 = document.getElementById('text_43');
    console.log("Ejecutandome");

  // Función para cargar el archivo de traducción
  function loadTranslation(lang) {
    fetch(`/locales/${lang}.json`)
      .then(response => response.json())
      .then(translations => {
       
        text_99.textContent = translations.text_99;
        text_100.textContent = translations.text_100;
        text_101.textContent = translations.text_101;
        text_102.textContent = translations.text_102;
        text_103.textContent = translations.text_103;
        text_104.textContent = translations.text_104;
        text_105.textContent = translations.text_105;
        text_106.textContent = translations.text_106;
        text_292.textContent = translations.text_292;
        text_287.textContent = translations.text_287;
        text_288.textContent = translations.text_288;
        text_260.textContent = translations.text_260;
        text_290.textContent = translations.text_290;
        text_291.textContent = translations.text_291;
        text_293.textContent = translations.text_293;
        text_294.textContent = translations.text_294;
        text_295.textContent = translations.text_295;
        text_296.textContent = translations.text_296;
        text_297.textContent = translations.text_297;
        text_298.textContent = translations.text_298;
        text_299.textContent = translations.text_299;
        text_300.textContent = translations.text_300;
        text_301.textContent = translations.text_301;
        text_36.textContent = translations.text_36;
        text_37.textContent = translations.text_37;
        text_42.textContent = translations.text_42;
        text_43.textContent = translations.text_43;
      })
      .catch(error => console.error('Error loading translation:', error));
  }

  // Evento para cambiar de idioma
  languageSwitcher.addEventListener('change', function (e) {
    loadTranslation(e.target.value);
  });

  // Cargar idioma por defecto
  loadTranslation(languageSwitcher.value);
});
