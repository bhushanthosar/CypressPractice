import 'cypress-iframe'

describe('Test Suite', function()
{
    it('First Test Case', function()
    
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.frameLoaded('#courses-iframe')

       // cy.iframe().find("a[href*='mentorship']").eq(0).click()

        //cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

    })})