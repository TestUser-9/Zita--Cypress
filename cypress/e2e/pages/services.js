///<reference types ="Cypress"/>

class Services{

    services(){
        cy.contains('Services').click()
        cy.url().should('contain','services')
    }
}
export default Services