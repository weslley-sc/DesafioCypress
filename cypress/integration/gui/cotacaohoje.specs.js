/// <reference types="Cypress"/>

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("acessar o cotação hoje", () => {
  it("Sucesso", () => {
    cy.Acessar();
  });
});
