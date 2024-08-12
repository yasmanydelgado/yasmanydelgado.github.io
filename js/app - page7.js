document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const text_14 = document.getElementById('text_14');
  const text_15 = document.getElementById('text_15');
  const text_97 = document.getElementById('text_97');
  const text_179 = document.getElementById('text_179');
  const text_99 = document.getElementById('text_99');
  const text_248 = document.getElementById('text_248');
  const text_109 = document.getElementById('text_109');
  const text_110 = document.getElementById('text_110');
  const text_191 = document.getElementById('text_191');
  const text_114 = document.getElementById('text_114');
  const text_181 = document.getElementById('text_181');
  const text_182 = document.getElementById('text_182');
  const text_183 = document.getElementById('text_183');
  const text_35 = document.getElementById('text_35');
  const text_36 = document.getElementById('text_36');
  const text_37 = document.getElementById('text_37');
  const text_38 = document.getElementById('text_38');
  const text_42 = document.getElementById('text_42');
  const text_43 = document.getElementById('text_43');
const text_191_1 = document.getElementById('text_191_1');
const text_191_2 = document.getElementById('text_191_2');
const text_247_1 = document.getElementById('text_247_1');
const text_247 = document.getElementById('text_247');
  console.log("Ejecutandome");

  // Función para cargar el archivo de traducción
  function loadTranslation(lang) {
    fetch(`/locales/${lang}.json`)
      .then(response => response.json())
      .then(translations => {
        text_248.textContent = translations.text_248;
        text_109.textContent = translations.text_109;
        text_110.textContent = translations.text_110;
        text_191.textContent = translations.text_191;
        text_181.textContent = translations.text_181;
        text_182.textContent = translations.text_182;
        text_183.textContent = translations.text_183;
        text_114.textContent = translations.text_114;
        text_247.textContent = translations.text_247;
        text_179.textContent = translations.text_179;
        text_99.textContent = translations.text_99;
        text_97.textContent = translations.text_97;
        
        text_37.textContent = translations.text_37;
        text_42.textContent = translations.text_42;
        text_191.textContent = translations.text_191;
        text_191_1.textContent = translations.text_191_1;
        text_191_2.textContent = translations.text_191_2;
        text_247.textContent = translations.text_247;
        text_247_1.textContent = translations.text_247_1;
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

