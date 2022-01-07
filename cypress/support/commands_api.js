///<reference types="Cypress"/>

/* Dolar hoje */
Cypress.Commands.add("api_Dolar", () => {
  cy.request({
    method: "GET",
    url: `http://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=af285a9098c9614181bd`,
    body: { USD_BRL: "" },
  }).then((res) => {
    cy.log(JSON.stringify(res.body.USD_BRL));
  });
});

/* cotação hoje */

Cypress.Commands.add("api_Cotacao", () => {
  cy.request({
    method: "GET",
    url: `http://free.currencyconverterapi.com/api/v5/currencies?apiKey=af285a9098c9614181bd`,
    body: {},
  }).then((res) => {
    cy.log(JSON.stringify(res.body));
  });
});
