/// <reference types="cypress"/>


describe("Test związany z wybieraniem select", () => {
    it("kliknięcie w zakładkę Women", () => {
        cy.visit("/");
        cy.get("a[title='Women']").click();
        cy.url().should("include","id_category=3&controller=category"); 
    })
    it("Wybieranie filtra Instock", () => {
        cy.get("#selectProductSort").select("In stock");
        cy.get("#selectProductSort").should("have.value", "quantity:desc");  //Asesarcja
    })
    it("Wybieranie filtra Product Name: A to Z", () => {
        cy.get("#selectProductSort").select("name:asc");
        cy.get("#selectProductSort").should("have.value", "name:asc");
    })
})