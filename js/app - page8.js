document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const text_97 = document.getElementById('text_97');
  const text_99 = document.getElementById('text_99');
  const text_171 = document.getElementById('text_171');
  const text_172 = document.getElementById('text_172');
  const text_109 = document.getElementById('text_109');
  const text_110 = document.getElementById('text_110');
  const text_114 = document.getElementById('text_114');
  const text_37 = document.getElementById('text_37');
  const text_42 = document.getElementById('text_42');
  const text_43 = document.getElementById('text_43');
  const text_173 = document.getElementById('text_173');
  const text_174 = document.getElementById('text_174');
  const text_175 = document.getElementById('text_175');
  const text_176 = document.getElementById('text_176');
  const text_177 = document.getElementById('text_177');
  const text_178 = document.getElementById('text_178');
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
        text_171.textContent = translations.text_171;
        text_172.textContent = translations.text_172;
        text_109.textContent = translations.text_109;
        text_110.textContent = translations.text_110;
        text_114.textContent = translations.text_114;
        text_97.textContent = translations.text_97;
        text_99.textContent = translations.text_99;
        text_37.textContent = translations.text_37;
        text_42.textContent = translations.text_42;
        text_43.textContent = translations.text_43;
        text_173.textContent = translations.text_173;
        text_174.textContent = translations.text_174;
        text_175.textContent = translations.text_175;
        text_176.textContent = translations.text_176;
        text_177.textContent = translations.text_177;
        text_178.textContent = translations.text_178;
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

