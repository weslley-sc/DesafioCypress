/// <reference types="Cypress"/>

Cypress.Commands.add("Acessar", () => {
  cy.visit("http://localhost:8081/Weslley");

  /* dolar para real */
  cy.get("#input-35").clear().type("150");
  cy.get(".my-auto > .v-btn").click();

  /* cotação hoje */
  /* select 1 */
  cy.get(
    '[style="padding-right: 25px;"] > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon'
  ).click();
  cy.get("#list-40").contains("EUR").click();
  cy.wait(2000);
  /* select 2 */
  cy.get(
    '[style="padding-left: 25px;"] > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner'
  ).click();
  cy.get("#list-45").contains("USD").click();

  cy.get(".my-12 > .v-btn").click();
});
