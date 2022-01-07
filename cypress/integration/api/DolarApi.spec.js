/// <reference types="Cypress"/>

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("acessar o conversor1", () => {
  it("Sucesso", () => {
    cy.api_Dolar();
  });
});
