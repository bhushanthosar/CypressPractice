// Cypress Test -> Spec File

/// <reference types = "cypress"/>

describe('Test Suite', function()
{
    it('First Test Case', function()
    
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // Selenium get hits the URL, Cypress get acts like findElement of Selenium
        //cy.get('.product').as('productLocator') //-> Can parameter using as alias
        
        cy.get('.product:visible').should('have.length',4)
        // Parent - Child Chaining
        cy.get('.products').find('.product').should('have.length',4)

        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($e1, index, $list) =>{

            const vegText = $e1.find('h4.product-name').text()

            if (vegText.includes('Cashews')){
                cy.wrap($e1).find('button').click()
            }
        })


        // Assert the Logo Text
        cy.get('.brand').should('have.text','GREENKART')

        // This is to print the text in log
        cy.get('.brand').then(function(brandLogo){
            cy.log(brandLogo.text())
        })
    })
}

)