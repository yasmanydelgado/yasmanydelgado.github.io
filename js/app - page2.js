document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const text_57 = document.getElementById('text_57');
  const text_72 = document.getElementById('text_72');
  const text_73 = document.getElementById('text_73');
  const text_74 = document.getElementById('text_74');
  const text_75 = document.getElementById('text_75');
  const text_76 = document.getElementById('text_76');
  const text_77 = document.getElementById('text_77');
  const text_78 = document.getElementById('text_78');
  const text_79 = document.getElementById('text_79');
  const text_80 = document.getElementById('text_80');
  
  const text_234 = document.getElementById('text_234');
  const text_235 = document.getElementById('text_235');
  const text_236 = document.getElementById('text_236');
  const text_233 = document.getElementById('text_233');
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
       
        text_74.textContent = translations.text_74;
        text_75.textContent = translations.text_75;
        text_77.textContent = translations.text_77;
        text_79.textContent = translations.text_79;
        text_72.textContent = translations.text_72;
        text_234.textContent = translations.text_234;
        text_235.textContent = translations.text_235;
        text_236.textContent = translations.text_236;
        
        
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

