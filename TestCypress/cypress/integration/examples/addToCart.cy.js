describe('Test Suite', function()
{
    it('First Test Case', function()
    
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // Selenium get hits the URL, Cypress get acts like findElement of Selenium
        //cy.get('.product').as('productLocator') //-> Can parameter using as alias
        
        //cy.get('.product:visible').should('have.length',4)
        // Parent - Child Chaining
        //cy.get('.products').find('.product').should('have.length',4)

        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.cart-icon > img').click()

        cy.contains('PROCEED TO CHECKOUT').click()

        cy.contains('Place Order').click()

    })})