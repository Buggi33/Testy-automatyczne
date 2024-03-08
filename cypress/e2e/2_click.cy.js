/// <reference types="cypress"/>

describe("Kliknięcie w element na stronie", () => {
    it("Klikniecie w zakładkę Contact Us", () => {
        cy.visit("/");  
        cy.get("a[title='Contact us']").click();   //Bierze adres url zadeklarowany w cypress.config.js
    })
})