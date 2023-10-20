


describe('Test Suite', function()
{
    it('First Test Case', function()
    
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // CLick on Alert button
        cy.get('#alertbtn').click()

        cy.get('#confirmbtn').click()

        cy.on('window:alert',(str) =>{

            // Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(str) =>{

            // Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    })})