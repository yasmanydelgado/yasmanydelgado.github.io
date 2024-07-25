document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const text_16 = document.getElementById('text_16');
  const text_17 = document.getElementById('text_17');
  const text_97 = document.getElementById('text_97');
  const text_185 = document.getElementById('text_185');
  const text_99 = document.getElementById('text_99');
  const text_186 = document.getElementById('text_186');
  const text_187 = document.getElementById('text_187');
  const text_188 = document.getElementById('text_188');
  const text_189 = document.getElementById('text_189');
  const text_190 = document.getElementById('text_190');
  const text_110 = document.getElementById('text_110');
  const text_109 = document.getElementById('text_109');
  const text_114 = document.getElementById('text_114');
  const text_191 = document.getElementById('text_191');
  const text_191_1 = document.getElementById('text_191_1');
  const text_191_2 = document.getElementById('text_191_2');
  const text_247_1 = document.getElementById('text_247_1');
  const text_247 = document.getElementById('text_247');
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
        text_186.textContent = translations.text_186;
        text_187.textContent = translations.text_187;
        text_188.textContent = translations.text_188;
        text_189.textContent = translations.text_189;
        text_190.textContent = translations.text_190;
        text_191.textContent = translations.text_191;
        text_191_1.textContent = translations.text_191_1;
        text_191_2.textContent = translations.text_191_2;
        text_110.textContent = translations.text_110;
        text_109.textContent = translations.text_109;
        text_114.textContent = translations.text_114;
        text_247.textContent = translations.text_247;
        text_247_1.textContent = translations.text_247_1;
        text_185.textContent = translations.text_185;
        text_97.textContent = translations.text_97;
        text_99.textContent = translations.text_99;
        
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
