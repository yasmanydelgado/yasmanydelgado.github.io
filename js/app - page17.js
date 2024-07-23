document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  
  const text_210 = document.getElementById('text_210');
  const text_211 = document.getElementById('text_211');
  const text_212 = document.getElementById('text_212');
  const text_213 = document.getElementById('text_213');
  const text_214 = document.getElementById('text_214');
  const text_215 = document.getElementById('text_215');
  const text_216 = document.getElementById('text_216');
  const text_217 = document.getElementById('text_217');
  const text_218 = document.getElementById('text_218');
  const text_219 = document.getElementById('text_219');
  const text_220 = document.getElementById('text_220');
  const text_209 = document.getElementById('text_209');
  const text_109 = document.getElementById('text_109');//
  const text_110 = document.getElementById('text_110');
  const text_114 = document.getElementById('text_114');
  const text_97 = document.getElementById('text_97');
  const text_99 = document.getElementById('text_99');//
  const text_270 = document.getElementById('text_270');
  const text_271 = document.getElementById('text_271');
  const text_270_1 = document.getElementById('text_270_1');
  const text_271_1 = document.getElementById('text_271_1');
  const text_270_2 = document.getElementById('text_270_2');
  const text_35 = document.getElementById('text_35');
  const text_36 = document.getElementById('text_36');
  const text_37 = document.getElementById('text_37');
  const text_38 = document.getElementById('text_38');
  const text_42 = document.getElementById('text_42');
  const text_43 = document.getElementById('text_43');
  const text_271_2 = document.getElementById('text_271_2');
 
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
        text_279.textContent = translations.text_279;
        text_280.textContent = translations.text_280;
        text_281.textContent = translations.text_281;
        text_284.textContent = translations.text_284;
        text_285.textContent = translations.text_285;
        text_286.textContent = translations.text_286;
        text_210.textContent = translations.text_210;
        text_211.textContent = translations.text_211;
        text_212.textContent = translations.text_212;
        text_213.textContent = translations.text_213;
        text_214.textContent = translations.text_214;
        text_215.textContent = translations.text_215;
        text_216.textContent = translations.text_216;
        text_217.textContent = translations.text_217;
        text_218.textContent = translations.text_218;
        text_219.textContent = translations.text_219;
        text_220.textContent = translations.text_220;
        text_209.textContent = translations.text_209;
        text_109.textContent = translations.text_109;
        text_110.textContent = translations.text_110;
        text_114.textContent = translations.text_114;
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
