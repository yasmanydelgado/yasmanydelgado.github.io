document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const text_82 = document.getElementById('text_82');
  const text_37 = document.getElementById('text_37');
  const text_42 = document.getElementById('text_42');
  const text_43 = document.getElementById('text_43');
  console.log("Ejecutandome");

  // Función para cargar el archivo de traducción
  function loadTranslation(lang) {
    fetch(`/locales/${lang}.json`)
      .then(response => response.json())
      .then(translations => {
        text_82.textContent = translations.text_82;
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

