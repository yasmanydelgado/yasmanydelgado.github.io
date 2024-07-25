document.addEventListener('DOMContentLoaded', function () {
  const languageSwitcher = document.getElementById('languageSwitcher');
 
  const text_6 = document.getElementById('text_6');
  const text_7 = document.getElementById('text_7');
  const text_8 = document.getElementById('text_8');
  const text_9 = document.getElementById('text_9');
  const text_10 = document.getElementById('text_10');
  const text_11 = document.getElementById('text_11');
  const text_12 = document.getElementById('text_12');
  const text_13 = document.getElementById('text_13');
  const text_14 = document.getElementById('text_14');
  const text_15= document.getElementById('text_15');
  const text_16 = document.getElementById('text_16');
  const text_17= document.getElementById('text_17');
  const text_35 = document.getElementById('text_35');
  const text_36 = document.getElementById('text_36');
  const text_37 = document.getElementById('text_37');
  const text_38 = document.getElementById('text_38');
  const text_42 = document.getElementById('text_42');
  const text_43 = document.getElementById('text_43');
  const text_60 = document.getElementById('text_60');
  const text_61 = document.getElementById('text_61');
  const text_62 = document.getElementById('text_62');
  const text_63 = document.getElementById('text_63');
  const text_64 = document.getElementById('text_64');
  const text_65 = document.getElementById('text_65');
  const text_66 = document.getElementById('text_66');
  const text_67 = document.getElementById('text_67');
  const text_68 = document.getElementById('text_68');
  const text_69 = document.getElementById('text_69');
  const text_71 = document.getElementById('text_71');
  const text_72= document.getElementById('text_72');
  const text_56 = document.getElementById('text_56');
  const text_58 = document.getElementById('text_58');
  const text_231 = document.getElementById('text_231');
  const text_232 = document.getElementById('text_232');
  const text_233 = document.getElementById('text_233');

  const text_234 = document.getElementById('text_234');
  const text_235 = document.getElementById('text_235');
  const text_236 = document.getElementById('text_236');
  const text_237 = document.getElementById('text_237');
  const text_238 = document.getElementById('text_238');
  const text_239 = document.getElementById('text_239');
  const text_240 = document.getElementById('text_240');
  const text_241 = document.getElementById('text_241');
  const text_242 = document.getElementById('text_242');
  const text_243 = document.getElementById('text_243');
  const text_244 = document.getElementById('text_244');
  const text_245 = document.getElementById('text_245');


  console.log("Ejecutandome");

  // Función para cargar el archivo de traducción
  function loadTranslation(lang) {
    fetch(`/locales/${lang}.json`)
      .then(response => response.json())
      .then(translations => {
        text_6.textContent = translations.text_6;
        text_7.textContent = translations.text_7;
        text_8.textContent = translations.text_8;
        text_9.textContent = translations.text_9;
        text_10.textContent = translations.text_10;
        text_11.textContent = translations.text_11;
        text_12.textContent = translations.text_12;
        text_13.textContent = translations.text_13;
        text_14.textContent = translations.text_14;
        text_15.textContent = translations.text_15;
        text_16.textContent = translations.text_16;
        text_17.textContent = translations.text_17;
        text_56.textContent = translations.text_56;
        
        text_60.textContent = translations.text_60;
        text_61.textContent = translations.text_61;
        text_62.textContent = translations.text_62;
        text_63.textContent = translations.text_63;
        text_64.textContent = translations.text_64;
        text_65.textContent = translations.text_65;
        text_66.textContent = translations.text_66;
        text_67.textContent = translations.text_67;
        text_68.textContent = translations.text_68;
        text_69.textContent = translations.text_69;
        text_70.textContent = translations.text_70;
        text_71.textContent = translations.text_71;
        text_232.textContent = translations.text_232;
       
        text_234.textContent = translations.text_234;
        text_235.textContent = translations.text_235;
        text_236.textContent = translations.text_236;
        text_237.textContent = translations.text_237;
        text_238.textContent = translations.text_238;
        text_239.textContent = translations.text_239;
        text_240.textContent = translations.text_240;
        text_241.textContent = translations.text_241;
        text_242.textContent = translations.text_242;
        text_243.textContent = translations.text_243;
        text_244.textContent = translations.text_244;
        text_245.textContent = translations.text_245;
        
        
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
