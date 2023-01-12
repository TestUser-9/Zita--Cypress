import LoginPage from '../pages/login'
import AboutUs from '../pages/about'


describe('About Us Page',()=>{
    it('About Us page Test',function(){
        const loginPage = new LoginPage()
        loginPage.visit()

       const aboutUs = new AboutUs()
       aboutUs.aboutUs()


    })
})