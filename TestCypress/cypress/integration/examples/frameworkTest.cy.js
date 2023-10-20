    import { home } from "ospath"
    import HomePage from "../../pageObjects/homePage.cy"
    import ProductPage from "../../pageObjects/productPage.cy"
    import CheckOutPage from "../../pageObjects/checkOutPage.cy"

    describe('Test Suite', function()
    {
    before(function(){
        // Run once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it('First Test Case', function()
    {
        const homePage = new HomePage() // Object creation for user created class
        const productPage = new ProductPage()
        const checkOutPage = new CheckOutPage()
        
        cy.visit(Cypress.env('url')+'/angularpractice/') // Launch URL
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name) // Validation for First Name
        homePage.getEditBox().should('have.attr','minlength','2')   // Validation for text lenght of first textbox
        homePage.getEntrepreneurRadioButton().should('be.disabled') // Validation for Entrepreneur radio button disabled state
        //cy.pause()
        homePage.getShopTab().click()

        //cy.selectProduct('Blackberry')
        //cy.selectProduct('iphone X')
        
        // To resolve the above we can add multiple testData in example.json file and follow below code to iterate

        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        });
        productPage.getCheckoutButton().click()
        var sum = 0

        cy.get('tr td:nth-child(4) strong').each(($e1, index, $list) =>{
            const amountText = $e1.text()
            var res = amountText.split(" ")
            res = res[1].trim() // This returns string value
            sum=Number(sum)+Number(res) // Number method convert string to number
            
        }).then(function(){
            cy.log(sum)
        })

        cy.get('h3 strong').then(function(element){
            const amountText = element.text()
            var res = amountText.split(" ")
            var total = res[1].trim() // This returns string value
            expect(Number(total)).to.equal(sum)
        })
        
        cy.contains('Checkout').click()
        Cypress.config('defaultCommandTimeout', 8000)   // This will wait till 8 secounds to load the object
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        //cy.get('#checkbox2').click({force: true})
        cy.get('input[id="checkbox2"][type="checkbox"]').click({force: true})
        cy.get('input[value="Purchase"]').click()
        //cy.get('.alert.alert-success.alert-dismissible').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')

        cy.get('.alert').then(function(element){
            const actualText=element.text()
            expect(actualText.includes('Success')).to.be.true
        })
    })})