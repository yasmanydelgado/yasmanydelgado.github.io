document.addEventListener("DOMContentLoaded", function () {
  const languageSwitcher = document.getElementById("languageSwitcher");
  const text_1 = document.getElementById("text_1");
  const text_2 = document.getElementById("text_2");
  const text_3 = document.getElementById("text_3");
  const text_4 = document.getElementById("text_4");
  const text_5 = document.getElementById("text_5");
  const text_6 = document.getElementById("text_6");
  const text_7 = document.getElementById("text_7");
  const text_8 = document.getElementById("text_8");
  const text_9 = document.getElementById("text_9");
  const text_10 = document.getElementById("text_10");
  const text_11 = document.getElementById("text_11");
  const text_12 = document.getElementById("text_12");
  const text_13 = document.getElementById("text_13");
  const text_14 = document.getElementById("text_14");
  const text_15 = document.getElementById("text_15");
  const text_16 = document.getElementById("text_16");
  const text_17 = document.getElementById("text_17");
  const text_60 = document.getElementById("text_60");
  const text_61 = document.getElementById("text_61");
  const text_62 = document.getElementById("text_62");
  const text_63 = document.getElementById("text_63");
  const text_22 = document.getElementById("text_22");
  const text_29 = document.getElementById("text_29");
  const text_30 = document.getElementById("text_30");
  const text_31 = document.getElementById("text_31");
  const text_32 = document.getElementById("text_32");
  const text_33 = document.getElementById("text_33");
  const text_34 = document.getElementById("text_34");
  //footer
  const text_35 = document.getElementById("text_35");
  const text_36 = document.getElementById("text_36");
  const text_37 = document.getElementById("text_37");
  const text_38 = document.getElementById("text_38");
  const text_42 = document.getElementById("text_42");
  const text_43 = document.getElementById("text_43");
  // cierra footer
  const text_45 = document.getElementById("text_45");
  const text_46 = document.getElementById("text_46");
  const text_47 = document.getElementById("text_47");
  const text_48 = document.getElementById("text_48");
  const text_51 = document.getElementById("text_51");
  const text_52 = document.getElementById("text_52");
  const text_234 = document.getElementById("text_234");
  const text_235 = document.getElementById("text_235");
  const text_236 = document.getElementById("text_236");
  const text_237 = document.getElementById("text_237");
  const text_238 = document.getElementById("text_238");
  const text_239 = document.getElementById("text_239");
  const text_240 = document.getElementById("text_240");
  const text_241 = document.getElementById("text_241");
  // Función para cargar el archivo de traducción
  function loadTranslation(lang) {
    fetch(`/locales/${lang}.json`)
      .then((response) => response.json())
      .then((translations) => {
        text_1.textContent = translations.text_1;
        text_2.textContent = translations.text_2;
        text_3.textContent = translations.text_3;
        text_4.textContent = translations.text_4;
        text_5.textContent = translations.text_5;
        text_6.textContent = translations.text_6;
        text_7.textContent = translations.text_7;
        text_8.textContent = translations.text_8;
        text_9.textContent = translations.text_9;
        text_10.textContent = translations.text_10;
        text_12.textContent = translations.text_12;
        text_11.textContent = translations.text_11;
        text_13.textContent = translations.text_13;
        text_14.textContent = translations.text_14;
        text_15.textContent = translations.text_15;
        text_16.textContent = translations.text_16;
        text_17.textContent = translations.text_17;
        text_60.textContent = translations.text_60;
        text_61.textContent = translations.text_61;
        text_62.textContent = translations.text_62;
        text_63.textContent = translations.text_63;
        text_29.textContent = translations.text_29;
        text_30.textContent = translations.text_30;
        text_31.textContent = translations.text_31;
        text_32.textContent = translations.text_32;
        text_33.textContent = translations.text_33;
        text_34.textContent = translations.text_34;
        text_37.textContent = translations.text_37;
        text_42.textContent = translations.text_42;
        text_43.textContent = translations.text_43;
        text_234.textContent = translations.text_234;
        text_235.textContent = translations.text_235;
        text_236.textContent = translations.text_236;
        text_237.textContent = translations.text_237;
        text_238.textContent = translations.text_238;
        text_239.textContent = translations.text_239;
        text_240.textContent = translations.text_240;
        text_241.textContent = translations.text_241;
      })
      .catch((error) => console.error("Error loading translation:", error));
  }

  // Evento para cambiar de idioma
  languageSwitcher.addEventListener("change", function (e) {
    const selectedLanguage = e.target.value;
    localStorage.setItem("selectedLanguage", selectedLanguage);
    loadTranslation(selectedLanguage);
  });

  // Cargar idioma por defecto desde localStorage o usar el valor por defecto del selector
  const savedLanguage =
    localStorage.getItem("selectedLanguage") || languageSwitcher.value;
  languageSwitcher.value = savedLanguage;
  loadTranslation(savedLanguage);
});
