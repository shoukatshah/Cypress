
// const requiredExample = require('../../fixtures/example.json')
describe('Files', () => {
    let itsName, itsEmail, itsBody
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/files')
        cy.fixture('example.json').then(($res) =>{
             itsName = $res.name
             itsEmail = $res.email
             itsBody = $res.body
        })
    })

    it('Fixture', () => {
        cy.intercept('GET','https://jsonplaceholder.cypress.io/comments/1', {fixture:'example.json'}).as('getComment')
        cy.get('.fixture-btns').click()
        cy.wait('@getComment').its('response.body').then(($resp) => {
            expect($resp).to.have.property('name').and.include(itsName)
            expect($resp).to.have.property('email').and.include(itsEmail)
            expect($resp).to.have.property('body').and.include(itsBody)
        })
        
        

    })

    it("Uncaught Exception - Due to application error", () => {
        cy.visit("index.html", {failOnStatusCode: false});
        cy.get("button#error").click();
        cy.wait(1000);
        })

        it('cy.readFile() - read file contents', () => {
            cy.readFile(Cypress.config('configFile')).then((config) => {
              expect(config).to.be.an('string')
            })
            cy.readFile('cypress/hello.json').its('name').should('eq','Eliza')
            .its('email').should('eq','eliza@example.com')
        })
        it.only('cy.writeFile() - write to a file', () => {
            cy.request('https://jsonplaceholder.cypress.io/users')
              .then((response) => {
                cy.writeFile('cypress/fixtures/users.json', response.body)
              })
        
            cy.fixture('users').should((users) => {
              expect(users[0].name).to.exist
            })
        
            cy.writeFile('cypress/fixtures/profile.json', {
              id: 8739,
              name: 'Jane',
              email: 'jane@example.com',
            })
        
            cy.fixture('profile').should((profile) => {
              expect(profile.name).to.eq('Jane')
            })
          })
})