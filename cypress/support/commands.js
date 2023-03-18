import {
  LOGIN_URL,
  EMAIL_INPUT,
  PASSWORD_INPUT,
  LOGIN_BUTTON,
} from "../e2e/pages/Login";
import { JOB_API } from "../e2e/pages/Homepage";

Cypress.Commands.add("login", () => {
  cy.intercept("GET", JOB_API).as("fetchJobs");
  cy.visit(LOGIN_URL);
  cy.fixture("user").then((user) => {
    const email = user.email;
    const password = user.password;

    cy.get(EMAIL_INPUT).type(email);
    cy.get(PASSWORD_INPUT).type(password);
    cy.get(LOGIN_BUTTON).click();

    cy.wait("@fetchJobs").then(({ response }) => {
      expect(response.statusCode).to.eq(201);
    });
  });
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
