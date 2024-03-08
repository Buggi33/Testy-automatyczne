
import { email, password } from "../fixtures/login.json";

class Login {
    get emailAdress() {
        return cy.get("#email").type(email)
    }

    get passwordAdress() {
        return cy.get("#passwd").type(password)
    }
}

export default new Login();