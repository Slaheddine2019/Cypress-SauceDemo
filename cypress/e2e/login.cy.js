
import loginPage from "../pagesObject/loginPage"

describe('check the login credentially', () => {

  it('check login page with positive scenario', () => {

    cy.visit('https://demoblaze.com')

    cy.fixture('validData').then((data) => {

      const lp = new loginPage();
      cy.wait(5000)
      lp.setupLogin();
      lp.setupUsername(data.username);
      lp.setupPassword(data.password);
      lp.setupLoginButton();
      lp.setupVerify();
    })
     })
    it('check login page with invalid', () => {

      cy.visit('https://demoblaze.com')

      cy.fixture('invalidCredential').then((data) => {

        const lp = new loginPage();
        cy.wait(5000)
        lp.setupLogin();
        lp.setupUsername(data.username);
        lp.setupPassword(data.password);
        lp.setupLoginButton();
        lp.setupVerifyError();





     

    })

  })

})
