

describe('Test Suite', function()
{
    it('First Test Case', function()
    
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Static Dropdown
       // cy.get('select').select('option1').should('have.value','option1')


        // Dynamic Dropdown
        cy.get('#autocomplete').type('Ind')

        cy.get('.ui-menu-item div').each(($e1, index, $list) =>{

            if($e1.text()==='India'){
                cy.wrap($e1).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'India')

    })})