import { forEach } from "lodash"
import { LoginPage } from "./pages/loginPage"

const lPage = new LoginPage()

beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

describe('Login Suite', function () {

 //   beforeEach(function(){
 //       cy.visit('https://opensource-demo.orangehrmlive.com/')
 //   })

    it('App Login 1', function () {

       // cy.visit('https://opensource-demo.orangehrmlive.com/')

        lPage.enterUsername('Admin')
        lPage.enterPassword('admin123')
        lPage.clickLogin()
        cy.get('#welcome').click()

        //    cy.get('#divUsername > .form-hint').type('Admin')
        //    cy.get('#txtPassword').type('admin123')
        //    cy.get('#btnLogin').click()

    })

    it('App Login 2', function () {

       // cy.visit('https://opensource-demo.orangehrmlive.com/')

        lPage.enterUsername('Admin')
        lPage.enterPassword('admin123')
        lPage.clickLogin()
        cy.get('#welcome').click()
    })

})

it('App Login 2', function () {

    // cy.visit('https://opensource-demo.orangehrmlive.com/')

     lPage.enterUsername('Admin')
     lPage.enterPassword('admin123')
     lPage.clickLogin()
     cy.get('#welcome').click()
 })