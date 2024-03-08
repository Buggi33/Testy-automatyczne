//Podłączenie biblioteki cypress
/// <reference types="cypress"/>

describe("Moj pierwszy test automatyczny", () => {      //Opis zachowania testu
    it("Otworzenie strony google.com", () => {
        cy.visit("https://google.com");
    })                                              //Tworzenie kroków testu
})                              

//Na końcu w terminal wpisać " npx cypress open "