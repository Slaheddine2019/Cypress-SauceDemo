class loginPage


{

    username ='#Email';
    password ='#Password';
    clickButton ='.button-1';
    textVerification ='.content-header > h1';

    setupUsername(username)

    {

        cy.get('#Email').clear().type(username);

       

    }
    setupPassword(password)
    {
        cy.get('#Password').clear().type(password);
       
    }

    setupClickButon(clickButton)
    {

      
        cy.get('.button-1').click();
    }

    setupVrifyText(textVerification)


    {


        cy.get('.content-header > h1').should('contain.text' , 'Dashboard')
    }



    




}

export default loginPage;