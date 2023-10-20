
before(function(){
    cy.fixture('example.json').as('test_data')
})

it('Read data using fixture', function(){

    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
    })

    cy.log(this.test_data.name)
})

it('Using readFile()', function(){

    cy.readFile('./cypress/fixtures/example.json').then((data) => {

        cy.log(data.name)
    })
})

it('Write file', function(){
    cy.writeFile('sample.txt', 'Hello Cypress\n')
    cy.writeFile('sample.txt', 'Hello Cypress', {flag:'a+'})
})