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
  const text_289 = document.getElementById('text_289');
  const text_290 = document.getElementById('text_290');
  const text_291 = document.getElementById('text_291');
  const text_292 = document.getElementById('text_292');
  const text_274 = document.getElementById('text_274');
  const text_202 = document.getElementById('text_202');
  const text_203 = document.getElementById('text_203');
  const text_204 = document.getElementById('text_204');
  const text_205 = document.getElementById('text_205');
  const text_206 = document.getElementById('text_206');
  const text_207 = document.getElementById('text_207');
  const text_208 = document.getElementById('text_208');
  const text_109 = document.getElementById('text_109');
  const text_110 = document.getElementById('text_110');
  const text_114 = document.getElementById('text_114');
  const text_279 = document.getElementById('text_279');
  const text_280 = document.getElementById('text_280');
  const text_281 = document.getElementById('text_281');
  const text_326 = document.getElementById('text_326');
  const text_283 = document.getElementById('text_283');
  const text_285 = document.getElementById('text_285');
  const text_286 = document.getElementById('text_286');
  const text_302 = document.getElementById('text_302');
  const text_75 = document.getElementById('text_75');
  const text_75_1 = document.getElementById('text_75_1');
  const text_75_2 = document.getElementById('text_75_2');
  const text_35 = document.getElementById('text_35');
  const text_36 = document.getElementById('text_36');
  const text_37 = document.getElementById('text_37');
  const text_38 = document.getElementById('text_38');
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
        text_287.textContent = translations.text_287;
        text_288.textContent = translations.text_288;
        text_289.textContent = translations.text_289;
        text_290.textContent = translations.text_290;
        text_291.textContent = translations.text_291;
        text_292.textContent = translations.text_292;
        text_274.textContent = translations.text_274;
        text_202.textContent = translations.text_202;
        text_203.textContent = translations.text_203;
        text_204.textContent = translations.text_204;
        text_205.textContent = translations.text_205;
        text_206.textContent = translations.text_206;
        text_207.textContent = translations.text_207;
        text_208.textContent = translations.text_208;
        text_109.textContent = translations.text_109;
        text_110.textContent = translations.text_110;
        text_114.textContent = translations.text_114;
        text_279.textContent = translations.text_279;
        text_280.textContent = translations.text_280;
        text_281.textContent = translations.text_281;
        text_326.textContent = translations.text_326;
        text_283.textContent = translations.text_283;
        text_285.textContent = translations.text_285;
        text_286.textContent = translations.text_286;
        text_302.textContent = translations.text_302;
        
        text_37.textContent = translations.text_37;
        text_42.textContent = translations.text_42;
        text_43.textContent = translations.text_43;
      })
      .catch(error => console.error('Error loading translation:', error));
  }

  // Evento para cambiar de idioma
  languageSwitcher.addEventListener('change', function (e) {
    const selectedLanguage = e.target.value;
    localStorage.setItem('selectedLanguage', selectedLanguage);
    loadTranslation(selectedLanguage);
  });

  // Cargar idioma por defecto desde localStorage o usar el valor por defecto del selector
  const savedLanguage = localStorage.getItem('selectedLanguage') || languageSwitcher.value;
  languageSwitcher.value = savedLanguage;
  loadTranslation(savedLanguage);
});

