import { JOB_API } from "../pages/Homepage";
import {
  LOGIN_URL,
  EMAIL_INPUT,
  PASSWORD_INPUT,
  LOGIN_BUTTON,

} from "../pages/Login";

describe("My First Test", { responseTimeout: 30000 }, () => {
  beforeEach(() => {
    cy.visit(LOGIN_URL);
    cy.url().should("include", "/login");
  });

  it("Validate Registed User is able to login", () => {
    cy.intercept(
      "GET",
      JOB_API
    ).as("fetchJobs");
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
});
