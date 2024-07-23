document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const text_200 = document.getElementById('text_200');
  const text_201 = document.getElementById('text_201');
  const text_202 = document.getElementById('text_202');
  const text_203 = document.getElementById('text_203');
  const text_204 = document.getElementById('text_204');
  const text_205 = document.getElementById('text_205');
  const text_206 = document.getElementById('text_206');
  const text_207 = document.getElementById('text_207');
  const text_208 = document.getElementById('text_208');
  const text_109 = document.getElementById('text_109');//
  const text_110 = document.getElementById('text_110');
  const text_114 = document.getElementById('text_114');
  const text_97 = document.getElementById('text_97');
  const text_99 = document.getElementById('text_99');//
  const text_68 = document.getElementById('text_68');
  const text_69 = document.getElementById('text_69');
  const text_68_1 = document.getElementById('text_68_1');
  const text_69_1 = document.getElementById('text_69_1');
  const text_68_2 = document.getElementById('text_68_2');
  const text_69_2 = document.getElementById('text_69_2');
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
        text_200.textContent = translations.text_200;
        text_201.textContent = translations.text_201;
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
        text_97.textContent = translations.text_97;
        text_99.textContent = translations.text_99;
        text_36.textContent = translations.text_36;
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
