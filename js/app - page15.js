document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const text_193 = document.getElementById('text_193');
  const text_194 = document.getElementById('text_194');
  const text_195 = document.getElementById('text_195');
  const text_196 = document.getElementById('text_196');
  const text_198 = document.getElementById('text_198');
  const text_197 = document.getElementById('text_197');
  const text_109 = document.getElementById('text_109');//
  const text_110 = document.getElementById('text_110');
  const text_111 = document.getElementById('text_111');
  const text_114 = document.getElementById('text_114');
  const text_115 = document.getElementById('text_115');
  const text_97 = document.getElementById('text_97');
  const text_99 = document.getElementById('text_99');//
  const text_66 = document.getElementById('text_66');
  const text_67 = document.getElementById('text_67');
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
        text_193.textContent = translations.text_193;
        text_194.textContent = translations.text_194;
        text_195.textContent = translations.text_195;
        text_196.textContent = translations.text_196;
        text_198.textContent = translations.text_198;
        text_197.textContent = translations.text_197;
        text_192.textContent = translations.text_192;
        text_109.textContent = translations.text_109;
        text_110.textContent = translations.text_110;
        text_111.textContent = translations.text_111;
        text_114.textContent = translations.text_114;
        text_97.textContent = translations.text_97;
        text_99.textContent = translations.text_99;
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
