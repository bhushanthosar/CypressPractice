export class LoginPage{

    loginPage_textbox_userName = '#txtUsername'
    loginPage_textbox_passWord = '#txtPassword'
    loginPage_button_login = '#btnLogin'

    enterUsername(userName){
        cy.get(this.loginPage_textbox_userName).type(userName)
    }

    enterPassword(passWord){
        cy.get(this.loginPage_textbox_passWord).type(passWord)
    }

    clickLogin(){
        cy.get(this.loginPage_button_login).click()
    }

}