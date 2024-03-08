/// <reference types="cypress"/>

import Base from "../pages/Base"
import Search from "../pages/Search";
import ResultPage from "../pages/ResultPage";
import { searchPhrase, notFoundProduct } from "../fixtures/searchDate.json";


describe("Wypisywanie tekstu w wyszukiwarke", () => {
    it("Wpisywanie tekstu", () => {
        Base.openHomePage();
        Search.typeSearchPhrase(searchPhrase);
        Search.searchBox.should("have.value", searchPhrase)
        // Search.searchBox.should("have.value", searchPhrase);
        cy.wait(1000);                                              //Czeka przed wykonaniem następnej linijki kodu 1000 - 1s
        Search.clearSearchPhrase();
        cy.wait(1000);
        Search.typeSearchPhrase(`${searchPhrase} {enter}`);
        ResultPage.searchAlert.should("be.visible").and("include.text", notFoundProduct);
        Search.searchBox.should("have.class", "search_query");
        Search.searchBox.should("have.css", "margin-right", "1px");
    })
})