document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
  const text_162 = document.getElementById('text_162');
  const text_163 = document.getElementById('text_163');
  const text_164 = document.getElementById('text_164');
  const text_165 = document.getElementById('text_165');
  const text_166 = document.getElementById('text_166');
  const text_167 = document.getElementById('text_167');
  const text_168 = document.getElementById('text_168');
  const text_169 = document.getElementById('text_169');
  const text_62 = document.getElementById('text_62');
  const text_62_1 = document.getElementById('text_62_1');
  const text_62_2 = document.getElementById('text_62_2');
  const text_63 = document.getElementById('text_63');
  const text_63_1 = document.getElementById('text_63_1');
  const text_63_2 = document.getElementById('text_63_2');
  const text_35 = document.getElementById('text_35');
  const text_36 = document.getElementById('text_36');
  const text_37 = document.getElementById('text_37');
  const text_38 = document.getElementById('text_38');
  const text_42 = document.getElementById('text_42');
  const text_43 = document.getElementById('text_43');
  const text_97 = document.getElementById('text_97');
  const text_99 = document.getElementById('text_99');

  const text_161 = document.getElementById('text_161');
  const text_109 = document.getElementById('text_109');
  const text_110 = document.getElementById('text_110');
  const text_114 = document.getElementById('text_114');
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
        text_162.textContent = translations.text_162;
        text_163.textContent = translations.text_163;
        text_164.textContent = translations.text_164;
        text_165.textContent = translations.text_165;
        text_166.textContent = translations.text_166;
        text_167.textContent = translations.text_167;
        text_168.textContent = translations.text_168;
        text_169.textContent = translations.text_169;
        text_161.textContent = translations.text_161;
        text_109.textContent = translations.text_109;
        text_110.textContent = translations.text_110;
        text_114.textContent = translations.text_114;
        text_97.textContent = translations.text_97;
        text_99.textContent = translations.text_99;
        
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
