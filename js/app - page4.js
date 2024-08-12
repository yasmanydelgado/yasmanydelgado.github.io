document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const text_81 = document.getElementById('text_81');
  const text_82 = document.getElementById('text_82');
  const text_83 = document.getElementById('text_83');
  const text_84 = document.getElementById('text_84');
  const text_85 = document.getElementById('text_85');
  const text_86 = document.getElementById('text_86');
  const text_87 = document.getElementById('text_87');
  const text_88 = document.getElementById('text_88');
  const text_89 = document.getElementById('text_89');
  const text_90 = document.getElementById('text_90');
  const text_91 = document.getElementById('text_91');
  const text_92 = document.getElementById('text_92');
  const text_93 = document.getElementById('text_93');
  const text_94 = document.getElementById('text_94');
  const text_95 = document.getElementById('text_95');
  const text_96 = document.getElementById('text_96');
  const text_246 = document.getElementById('text_246');
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
        text_81.textContent = translations.text_81;
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

