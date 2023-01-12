import LoginPage from '../pages/login'
import Services from '../pages/services'

describe('Services Page',()=>{
    it('Services page Test',()=>{
        const loginPage= new LoginPage()
        loginPage.visit()

        const services = new Services();
        services.services()
    })
})