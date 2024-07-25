document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const text_129 = document.getElementById('text_129');
  const text_130 = document.getElementById('text_130');
  const text_131 = document.getElementById('text_131');
  const text_132 = document.getElementById('text_132');
  const text_133 = document.getElementById('text_133');
  const text_134 = document.getElementById('text_134');
  const text_135 = document.getElementById('text_135');
  const text_136 = document.getElementById('text_136');
  const text_137 = document.getElementById('text_137');
  const text_138 = document.getElementById('text_138');
  const text_109 = document.getElementById('text_109');//
  const text_110 = document.getElementById('text_110');
  const text_114 = document.getElementById('text_114');
  const text_97 = document.getElementById('text_97');
  const text_99 = document.getElementById('text_99');//
  const text_60 = document.getElementById('text_60');
  const text_61 = document.getElementById('text_61');

  const text_35 = document.getElementById('text_35');
  const text_36 = document.getElementById('text_36');
  const text_37 = document.getElementById('text_37');
  const text_38 = document.getElementById('text_38');
  const text_42 = document.getElementById('text_42');
  const text_43 = document.getElementById('text_43');
  
  const text_279 = document.getElementById('text_279');
  const text_280 = document.getElementById('text_280');
  const text_281 = document.getElementById('text_281');
  const text_284 = document.getElementById('text_284');
  const text_285 = document.getElementById('text_285');
  const text_286 = document.getElementById('text_286');
  

  console.log("Ejecutandome");

  // Función para cargar el archivo de traducción
  function loadTranslation(lang) {
    fetch(`/locales/${lang}.json`)
      .then(response => response.json())
      .then(translations => {
        text_129.textContent = translations.text_129;
        text_130.textContent = translations.text_130;
        text_131.textContent = translations.text_131;
        text_132.textContent = translations.text_132;
        text_133.textContent = translations.text_133;
        text_134.textContent = translations.text_134;
        text_135.textContent = translations.text_135;
        text_136.textContent = translations.text_136;
        text_137.textContent = translations.text_137;
        text_138.textContent = translations.text_138;
        text_109.textContent = translations.text_109;
        text_110.textContent = translations.text_110;
        text_114.textContent = translations.text_114;
        text_97.textContent = translations.text_97;
        text_99.textContent = translations.text_99;
        
        text_37.textContent = translations.text_37;
        text_42.textContent = translations.text_42;
        text_43.textContent = translations.text_43;
        text_279.textContent = translations.text_279;
        text_280.textContent = translations.text_280;
        text_281.textContent = translations.text_281;
        text_284.textContent = translations.text_284;
        text_285.textContent = translations.text_285;
        text_286.textContent = translations.text_286;
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
