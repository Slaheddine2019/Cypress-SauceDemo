class loginPage {

    setupLogin(login)
     {
        cy.get('#login2').click();

    }
    setupUsername(username)
     {
        cy.get('#loginusername').type(username)
    }

    setupPassword(password) 
    {
        cy.get('#loginpassword').type(password)
    }

    setupLoginButton(loginButton) 
    {
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    }

    setupVerify(logoutText) 
    {
        cy.get('#logout2').should('have.text', 'Log out')
    }

    setupVerifyError(logoutText) 
    {
        cy.get('#logout2').should('not.have.text','Log out')
    }
}

export default loginPage;