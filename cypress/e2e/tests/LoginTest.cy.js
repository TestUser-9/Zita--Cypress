import LoginPage from '../pages/login'

describe('Login Test',()=>{
    before(function (){
        cy.fixture('login').then(function(data){
            this.data=data
        })
    })

    it.only('Login User',function(){
        const loginPage = new LoginPage()
        loginPage.visit()
        loginPage.userName(this.data.username)
        loginPage.passWord(this.data.password)
        loginPage.logIn()

    })
    
})