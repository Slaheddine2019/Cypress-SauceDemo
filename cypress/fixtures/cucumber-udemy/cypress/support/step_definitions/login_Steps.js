/// <reference types ="cypress"/>
import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

import loginPage from "../page-objects/loginPage";

const lp = new loginPage();

Given("I open the url application", () => {
  cy.visit("/");
});

When("I fill username {string} and password {string}", (username, password) => {
  lp.setupUsername(username);

  lp.setupPassword(password);
});

When("I click on login button", () => {
  lp.setupClickButon();
});

Then("the home page open successifully", () => {
  lp.setupVrifyText();
});
