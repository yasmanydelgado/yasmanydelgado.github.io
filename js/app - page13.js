document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const text_109 = document.getElementById('text_109');//
  const text_110 = document.getElementById('text_110');
  const text_114 = document.getElementById('text_114');
  const text_97 = document.getElementById('text_97');
  const text_99 = document.getElementById('text_99');//
  const text_8 = document.getElementById('text_8');
  const text_9 = document.getElementById('text_9');
  const text_8_1 = document.getElementById('text_8_1');
  const text_9_1 = document.getElementById('text_9_1');
  const text_8_2 = document.getElementById('text_8_2');
  const text_9_2 = document.getElementById('text_9_2');
  const text_249 = document.getElementById('text_249');
  const text_250 = document.getElementById('text_250');
  const text_251 = document.getElementById('text_251');
  const text_252 = document.getElementById('text_252');
  const text_253 = document.getElementById('text_253');
  const text_254 = document.getElementById('text_254');
  const text_255 = document.getElementById('text_255');
  const text_256 = document.getElementById('text_256');
  const text_257 = document.getElementById('text_257');
  const text_258 = document.getElementById('text_258');
  const text_118 = document.getElementById('text_118');
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
        
        
        text_36.textContent = translations.text_36;
        text_37.textContent = translations.text_37;
         
        
        text_42.textContent = translations.text_42;
        text_43.textContent = translations.text_43;
        text_249.textContent = translations.text_249;
        text_250.textContent = translations.tex5_240;
        text_251.textContent = translations.text_251;
        text_252.textContent = translations.text_252;
        text_253.textContent = translations.text_253;
        text_254.textContent = translations.text_254;
        text_255.textContent = translations.text_255;
        text_256.textContent = translations.text_256;
        text_257.textContent = translations.text_257;
        text_258.textContent = translations.text_258;
        text_109.textContent = translations.text_109;
        text_110.textContent = translations.text_110;
        text_114.textContent = translations.text_114;
        text_118.textContent = translations.text_118;
        text_97.textContent = translations.text_97;
        text_99.textContent = translations.text_99;
       
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
