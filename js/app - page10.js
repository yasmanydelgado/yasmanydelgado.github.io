document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const text_101 = document.getElementById('text_101');
  const text_102 = document.getElementById('text_102');
  const text_103 = document.getElementById('text_103');
  const text_104 = document.getElementById('text_104');
  const text_105 = document.getElementById('text_105');
  const text_106 = document.getElementById('text_106');
  const text_107 = document.getElementById('text_107');
  const text_108 = document.getElementById('text_108');
  const text_109 = document.getElementById('text_109');
  const text_100 = document.getElementById('text_100');
  const text_110 = document.getElementById('text_110');
  const text_114 = document.getElementById('text_114');
  const text_97 = document.getElementById('text_97');
  const text_99 = document.getElementById('text_99');
  const text_12 = document.getElementById('text_12');
  const text_13 = document.getElementById('text_13');
  const text_12_1 = document.getElementById('text_12_1');
  const text_13_1 = document.getElementById('text_13_1');
  const text_12_2 = document.getElementById('text_12_2');
  const text_13_2 = document.getElementById('text_13_2');
  const text_22 = document.getElementById('text_22');
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
        text_101.textContent = translations.text_101;
        text_102.textContent = translations.text_102;
        text_103.textContent = translations.text_103;
        text_104.textContent = translations.text_104;
        text_105.textContent = translations.text_105;
        text_106.textContent = translations.text_106;
        text_107.textContent = translations.text_107;
        text_108.textContent = translations.text_108;
        text_109.textContent = translations.text_109;
        text_100.textContent = translations.text_100;
        text_110.textContent = translations.text_110;
        text_114.textContent = translations.text_114;
        text_97.textContent = translations.text_97;
        text_99.textContent = translations.text_99;
        text_22.textContent = translations.text_22;
       
        
        
        
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

