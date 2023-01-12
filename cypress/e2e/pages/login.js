///<reference types = "Cypress"/>

class LoginPage{
  visit(){
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  }

  userName(value){
    const username= cy.get('input[name="username"]')
    username.type(value)
    return this
  }

  passWord(value){
    const password = cy.get('input[name="password"]')
    password.type(value)
    return this
  }

  logIn(){
    cy.get('input[value="Log In"]').click()
  }
}
export default LoginPage