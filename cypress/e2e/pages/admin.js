///<reference types ="Cypress"/>

class AdminPage{
    navigate(){
        cy.contains('Admin Page').click()
        cy.url().should('contain','admin')

    }

    initBalance(value){
        const initBalance= cy.get('#initialBalance')
        initBalance.clear()
        initBalance.type(value)
        return this
        
    }

    minBalance(value){
        const minBalance = cy.get('#minimumBalance')
        minBalance.clear()
        minBalance.type(value)
        return this
    }

    threshold(value){
        const loanThreshold = cy.get('#loanProcessorThreshold')
        loanThreshold.clear()
        loanThreshold.type(value)
        return this
    }

    submit(){
        cy.get('input[value="Submit"]').click()
    }
}
export default AdminPage