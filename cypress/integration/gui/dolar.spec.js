/// <reference types="Cypress"/>

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("acessar o Dolar", () => {
  it("Sucesso", () => {
    cy.Acessar();
  });
});
