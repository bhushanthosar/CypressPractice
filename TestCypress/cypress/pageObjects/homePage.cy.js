    class HomePage {

            getEditBox(){

                return cy.get('input[name="name"]:nth-child(2)')
            }

            getTwoWayDataBinding(){

                return cy.get('input[name="name"]:nth-child(1)')
            }

            getGender(){

                return cy.get('select')
            }

            getEntrepreneurRadioButton(){
                
                return cy.get('#inlineRadio3')
            }

            getShopTab(){

                return cy.get('[href*="shop"]')
            }
        }

        export default HomePage;