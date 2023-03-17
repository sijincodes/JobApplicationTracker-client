import { SIGNUP_LINK } from "../pages/Login";
import { EMAIL_INPUT } from "../pages/Signup";
import { NAME_INPUT } from "../pages/Signup";
import { PASSWORD_INPUT } from "../pages/Signup";
import { LOGIN_URL } from "../pages/Login";
import { SIGNUP_BUTTON } from "../pages/Signup";
import { USER_EXISTS_ERROR_MESSAGE } from "../pages/Signup";

describe("Signup", () => {
  beforeEach(() => {
    cy.visit(LOGIN_URL);

    cy.get(SIGNUP_LINK).click();
    cy.url().should("include", "/signup");
  });
  it.skip("Validate user is able to signup", () => {
    cy.get(EMAIL_INPUT).type("jkl2@gmail.com");
    cy.get(NAME_INPUT).type("jkl2");
    cy.get(PASSWORD_INPUT).type("London123!");
    cy.get(SIGNUP_BUTTON).click();
    cy.url().should("include", "/login");
  });
  it("Validate existing user is unable to signup", () => {
    cy.fixture("user").then((user) => {
      const email = user.email;
      const name = user.name;
      const password = user.password;

      cy.get(EMAIL_INPUT).type(email);
      cy.get(NAME_INPUT).type(name);
      cy.get(PASSWORD_INPUT).type(password);
      cy.get(SIGNUP_BUTTON).click();
      cy.get(USER_EXISTS_ERROR_MESSAGE).should("have.text", "User already exists.");
    });
  });
});
