
describe('Files', () => {
    it("this is my first test case for halaltable ",() => {
        cy.visit('https://beta.halaltable.online/')
        cy.wait(5000)
        cy.get("#header-login-btn").click({force:true})
        cy.fixture('credentials.json').then((credentials) =>{
                cy.get('#email-login').type(credentials.email)
                cy.get('#pass-login').type(credentials.password)   

        })
              
      })         
})