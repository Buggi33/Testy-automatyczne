const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://www.automationpractice.pl/",  //Strona testowana
    redirectionLimit: 3, //Limit przekierowań, żeby nie przekierowywał się w nieskończoność jeśli będzie np wiru
    retries: {       //Maxymalna ilość powtórzeń zapytań
      "runMode": 1,    //Ilość testów, których nie widać
      "openMode": 1,   //Ilość ponowień prób testów
    },
    watchForFileChanges: true,   //Po dokonaniu zmiany w danych testowania, automatycznie uruchomi sie jeszcze raz ten test (automatyczne śledzenie zmian)
    chromeWebSecurity: false,   //Wyłącza sprawdzanie, czy strona/aplikacja jest zabezpieczona
    viewportWidth: 1920,    //Szerokość okna na jakim będą wykonywane testy
    viewportHeight: 1080,    //Wysokość okna na jakim będą wykonywane testy
    waitForAnimations: true,      //Poczekaj na zakończenie wszystkich animacji na stronie
    testIsolation: false,      //Za każdym rozpoczęciem testu powstanie czystym zadaniem (nowo-otwartą przeglądarkę) - true
  },
});
