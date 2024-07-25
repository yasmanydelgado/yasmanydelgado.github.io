document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const text_18 = document.getElementById('text_18');
  const text_19 = document.getElementById('text_19');
  const text_18_1 = document.getElementById('text_18_1');
  const text_19_1 = document.getElementById('text_19_1');
  const text_18_2 = document.getElementById('text_18_2');
  const text_19_2 = document.getElementById('text_19_2');
  const text_109 = document.getElementById('text_109');//
  const text_114 = document.getElementById('text_114');
  const text_110 = document.getElementById('text_110');
  const text_99 = document.getElementById('text_99');
  const text_260 = document.getElementById('text_260');
  const text_261 = document.getElementById('text_261');
  const text_262 = document.getElementById('text_262');
  const text_263 = document.getElementById('text_263');//
  const text_264 = document.getElementById('text_264');
  const text_265 = document.getElementById('text_265');
  const text_266 = document.getElementById('text_266');
  const text_267 = document.getElementById('text_267');
  const text_268 = document.getElementById('text_268');
  const text_269 = document.getElementById('text_269');//
  const text_270 = document.getElementById('text_270');
  const text_271 = document.getElementById('text_271');
  const text_272 = document.getElementById('text_272');
  const text_273 = document.getElementById('text_273');
  const text_274 = document.getElementById('text_274');
  const text_275 = document.getElementById('text_275');
  const text_276 = document.getElementById('text_276');
  const text_277 = document.getElementById('text_277');
  const text_278 = document.getElementById('text_278');
  const text_35 = document.getElementById('text_35');
  const text_36 = document.getElementById('text_36');
  const text_37 = document.getElementById('text_37');
  const text_38 = document.getElementById('text_38');
  const text_42 = document.getElementById('text_42');
  const text_43 = document.getElementById('text_43');
  const text_279 = document.getElementById('text_279');
  const text_280 = document.getElementById('text_280');
  const text_281 = document.getElementById('text_281');
  const text_282 = document.getElementById('text_282');
  const text_283 = document.getElementById('text_283');
  const text_284 = document.getElementById('text_284');
  const text_285 = document.getElementById('text_285');
  const text_286 = document.getElementById('text_286');
  
  console.log("Ejecutandome");

  // Función para cargar el archivo de traducción
  function loadTranslation(lang) {
    fetch(`/locales/${lang}.json`)
      .then(response => response.json())
      .then(translations => {
        text_99.textContent = translations.text_99;
        text_114.textContent = translations.text_114;
        text_110.textContent = translations.text_110;
        text_109.textContent = translations.text_109;
        text_270.textContent = translations.text_270;
        text_271.textContent = translations.text_271;
        text_272.textContent = translations.text_272;
        text_273.textContent = translations.text_273;
        text_274.textContent = translations.text_274;
        text_275.textContent = translations.text_275;
        text_276.textContent = translations.text_276;
        text_277.textContent = translations.text_277;
        text_278.textContent = translations.text_278;
        text_260.textContent = translations.text_260;
        text_261.textContent = translations.text_261;
        text_262.textContent = translations.text_262;
        text_263.textContent = translations.text_263;
        text_264.textContent = translations.text_264;
        text_265.textContent = translations.text_265;
        text_266.textContent = translations.text_266;
        text_267.textContent = translations.text_267;
        text_268.textContent = translations.text_268;
        text_269.textContent = translations.text_269;
        
        
        
        text_37.textContent = translations.text_37;
         
        
        text_42.textContent = translations.text_42;
        text_43.textContent = translations.text_43;
        
        text_279.textContent = translations.text_279;
        text_280.textContent = translations.text_280;
        text_281.textContent = translations.text_281;
        text_282.textContent = translations.text_282;
        text_283.textContent = translations.text_283;
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
