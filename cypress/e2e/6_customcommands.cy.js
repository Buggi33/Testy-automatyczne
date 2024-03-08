/// <reference types="cypress" />

import { email, password} from "../fixtures/login.json"

describe("Custom Commands", () => {
    it("Logowanie do strony automationpractice.pl", () => {
        cy.login(email, password)
    })
})