import LoginPage from '../pages/login'
import AdminPage from '../pages/admin'


describe('Admin Page',()=>{
    before(function(){
        cy.fixture('admin').then(function(data){
            this.data=data
        })
    })
    it('Check Application Settings',function(){
        const loginPage = new LoginPage()
        loginPage.visit()

        const adminPage = new AdminPage()
        adminPage.navigate()
        adminPage.initBalance(this.data.initbalance)
        adminPage.minBalance(this.data.minbalance)
        adminPage.threshold(this.data.threshold)
        adminPage.submit()

    })
})