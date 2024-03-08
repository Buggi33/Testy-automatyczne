/// <reference types="cypress" />

import Base from "../pages/Base"; 
import Home from "../pages/Home";
import Women from "../pages/Women";

describe("Test związany z zaznaczaniem checkboxów", () => {
    it("kliknięcie w zakładkę Women", () => {
        Base.openHomePage();
        Home.clickOnWomenTab();
        cy.url().should("include","id_category=3&controller=category");             //Powoduje asercje, sprawdzanie czy     faktycznie się np. otworzyła strona
    })
    it("Zaznaczenie checkboxa w zakładce Women", () => {
        Women.checkTops();
        Women.topsCheckBox.should("be.checked");       //Sprawdzenie czy checkbox został zaznaczony, "not" - przeciwieństwo
        Women.checkDresses();
        Women.dressesCheckBox.should("be.checked");  
        // Women.dessesCheckBox().should("be.checked");
        Women.checkSize();
        Women.sizeCheckBox.should("be.checked");  
    })
})
