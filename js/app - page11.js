document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const text_109 = document.getElementById('text_109');
  const text_110 = document.getElementById('text_110');
  const text_114 = document.getElementById('text_114');
  const text_139 = document.getElementById('text_139');
  const text_140 = document.getElementById('text_140');
  const text_143 = document.getElementById('text_143');
  const text_144 = document.getElementById('text_144');
  const text_145 = document.getElementById('text_145');
  const text_146 = document.getElementById('text_146');
  const text_147 = document.getElementById('text_147');
  const text_148 = document.getElementById('text_148');
  const text_149 = document.getElementById('text_149');
  const text_150 = document.getElementById('text_150');
  const text_35 = document.getElementById('text_35');
  const text_36 = document.getElementById('text_36');
  const text_37 = document.getElementById('text_37');
  const text_38 = document.getElementById('text_38');
  const text_42 = document.getElementById('text_42');
  const text_43 = document.getElementById('text_43');
  const text_97 = document.getElementById('text_97');
  const text_99 = document.getElementById('text_99');
  
  const text_279 = document.getElementById('text_279');
  const text_280 = document.getElementById('text_280');
  const text_281 = document.getElementById('text_281');
  const text_284 = document.getElementById('text_284');
  const text_285 = document.getElementById('text_285');
  const text_286 = document.getElementById('text_286');
  const text_10 = document.getElementById('text_10');
  const text_11 = document.getElementById('text_11');
 

  console.log("Ejecutandome");

  // Función para cargar el archivo de traducción
  function loadTranslation(lang) {
    fetch(`/locales/${lang}.json`)
      .then(response => response.json())
      .then(translations => {
        text_279.textContent = translations.text_279;
        text_280.textContent = translations.text_280;
        text_281.textContent = translations.text_281;
        text_284.textContent = translations.text_284;
        text_285.textContent = translations.text_285;
        text_286.textContent = translations.text_286;
        text_109.textContent = translations.text_109;
        text_110.textContent = translations.text_110;
        text_114.textContent = translations.text_114;
        text_139.textContent = translations.text_139;
        text_140.textContent = translations.text_140;
        text_143.textContent = translations.text_143;
        text_144.textContent = translations.text_144;
        text_145.textContent = translations.text_145;
        text_146.textContent = translations.text_146;
        text_147.textContent = translations.text_147;
        text_148.textContent = translations.text_148;
        text_149.textContent = translations.text_149;
        text_150.textContent = translations.text_150;
        text_97.textContent = translations.text_97;
        text_99.textContent = translations.text_99;
        
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

