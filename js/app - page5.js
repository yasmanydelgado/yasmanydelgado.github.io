document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const text_97 = document.getElementById('text_97'); 
  const text_109 = document.getElementById('text_109');
  const text_110 = document.getElementById('text_110');
  const text_114 = document.getElementById('text_114');
  const text_279 = document.getElementById('text_279');
  const text_280 = document.getElementById('text_280');
  const text_281 = document.getElementById('text_281');
  const text_284 = document.getElementById('text_284');
  const text_285 = document.getElementById('text_285');
  const text_286 = document.getElementById('text_286');
  const text_99 = document.getElementById('text_99');
  const text_192 = document.getElementById('text_192');
  const text_193 = document.getElementById('text_193');
  const text_194 = document.getElementById('text_194');
  const text_195 = document.getElementById('text_195');
  const text_196 = document.getElementById('text_196');
  const text_197 = document.getElementById('text_197');
  const text_198 = document.getElementById('text_198');
  const text_66 = document.getElementById('text_66');
  const text_66_1 = document.getElementById('text_66_1');
  const text_66_2 = document.getElementById('text_66_2');
  const text_67 = document.getElementById('text_67');
  const text_67_1 = document.getElementById('text_67_1');
  const text_67_2 = document.getElementById('text_67_2');
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
        text_109.textContent = translations.text_109;
        text_110.textContent = translations.text_110;
        text_114.textContent = translations.text_114;
        text_97.textContent = translations.text_97;
        text_192.textContent = translations.text_192;
        text_193.textContent = translations.text_193;
        text_194.textContent = translations.text_194;
        text_195.textContent = translations.text_195;
        text_196.textContent = translations.text_196;
        text_197.textContent = translations.text_197;
        text_198.textContent = translations.text_198;
       
        
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
    const selectedLanguage = e.target.value;
    localStorage.setItem('selectedLanguage', selectedLanguage);
    loadTranslation(selectedLanguage);
  });

  // Cargar idioma por defecto desde localStorage o usar el valor por defecto del selector
  const savedLanguage = localStorage.getItem('selectedLanguage') || languageSwitcher.value;
  languageSwitcher.value = savedLanguage;
  loadTranslation(savedLanguage);
});

