
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
        cy.get('.fixture-btn').click()
        cy.wait('@getComment').its('response.body').then(($resp) => {
            expect($resp).to.have.property('name').and.include(itsName)
            expect($resp).to.have.property('email').and.include(itsEmail)
            expect($resp).to.have.property('body').and.include(itsBody)
        })
        
        

    })
})