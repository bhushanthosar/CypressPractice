

describe('Test Suite', function()
{
    it('First Test Case', function()
    
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()
            if (text.includes('Python')){

                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){   // we can't apply next() on promise variable so in this case we have applied on row variable

                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })

    })})