class Home {
    get womenTab() {  //Getter
        return cy.get(`a[title="Women"]`)
    }
    clickOnWomenTab() {
        this.womenTab.click();
    }
}

export default new Home();