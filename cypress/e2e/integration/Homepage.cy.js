import {
  LOGIN_URL,
  EMAIL_INPUT,
  PASSWORD_INPUT,
  LOGIN_BUTTON,
} from "../pages/Login";

import {
  ADD_JOB_BUTTON,
  ADD_JOB_FORM,
  JOB_ROLE,
  JOB_COMPANY,
  JOB_URL,
  JOB_SALARY,
  JOB_STAGE,
  JOB_NOTES,
  FORM_SAVE_BUTTON,
  CARD_HEADING,
  CARD_SEE_MORE_BUTTON,
  SWIMLANE_NON_TECHNICAL_ROUND,
  CARD_DELETE_BUTTON,
  FORM_CANCEL_BUTTON,
} from "../pages/Homepage";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit(LOGIN_URL);
    cy.fixture("user").then((user) => {
      const email = user.email;
      const password = user.password;

      cy.get(EMAIL_INPUT).type(email);
      cy.get(PASSWORD_INPUT).type(password);
      cy.get(LOGIN_BUTTON).click();
    });
  });
  it("Validate Add job Form", () => {
    cy.fixture("job").then((job) => {
      const role = job.role;
      const company = job.company;
      const url = job.url;
      const salary = job.salary;
      const technical_round_stage = job.technical_round_stage;
      const notes = job.notes;
      const non_technical_round_stage = job.non_technical_round_stage;
      const see_more_button_text = job.see_more_button_text;

      cy.get(ADD_JOB_BUTTON).should("be.visible").click();
      cy.get(ADD_JOB_FORM).should("be.visible");
      //Fill Form with Job details
      cy.get(JOB_ROLE).should("be.visible").type(role);
      cy.get(JOB_COMPANY).should("be.visible").type(company);
      cy.get(JOB_URL).should("be.visible").type(url);
      cy.get(JOB_SALARY).should("be.visible").type(salary);
      cy.get(JOB_STAGE).should("be.visible").select(technical_round_stage);
      cy.get(JOB_NOTES).should("be.visible").type(notes);
      //Save Form and validate details visible on Homepage
      cy.get(FORM_SAVE_BUTTON).should("be.visible").click();
      cy.get(CARD_HEADING).should("include.text", role);
      // Validate Edit functionality
      cy.get(CARD_SEE_MORE_BUTTON)
        .contains(see_more_button_text)
        .should("be.visible")
        .click();
      cy.get(JOB_STAGE).should("be.visible").select(non_technical_round_stage);
      cy.get(FORM_SAVE_BUTTON).should("be.visible").click();
      cy.get(SWIMLANE_NON_TECHNICAL_ROUND).should("include.text", role);

      //Delete Job and validate details not visible on HomepAGE
      cy.get(CARD_DELETE_BUTTON).should("be.visible").click();
      cy.get(CARD_HEADING).should("not.exist");
    });
  });

  it("Verify Cancel button on Add job form", () => {
    cy.get(ADD_JOB_BUTTON).should("be.visible").click();
    cy.get(ADD_JOB_FORM).should("be.visible");
    cy.get(FORM_CANCEL_BUTTON).should("be.visible").click();
    cy.get(ADD_JOB_FORM).should("not.exist");
  });
});
