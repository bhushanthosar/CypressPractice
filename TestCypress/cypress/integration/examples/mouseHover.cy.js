

describe('Test Suite', function()
{
    it('First Test Case', function()
    
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //cy.get('.mouse-hover-content').invoke('show')
        //cy.contains('Top').click()
        cy.contains('Top').click({force: true})   // CLick on hidden element
        cy.url().should('include','top')

    })})