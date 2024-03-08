/// <reference types="cypress"/>

import Login from "../pages/Login";
import Base from "../pages/Base";


describe("Logowanie", () => {
    it("Kliknięcie w Sign in", () => {
        Base.openHomePage();
        cy.get("a.login").click();
        cy.get("a.login").should("be.visible");
    })
    it("Wpisywanie danych logowania", () => {
        Login.emailAdress;
        Login.passwordAdress;
        cy.get("#SubmitLogin").click();
    })
    
})