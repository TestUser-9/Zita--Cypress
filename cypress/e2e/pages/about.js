///<reference types ="Cypress"/>



class AboutUs{

    aboutUs(){
        cy.contains('About Us').click()
        cy.url().should('contain','about')
        
    }
}
export default AboutUs