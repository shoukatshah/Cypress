/// <reference types="cypress" />

context('Navigation', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io')
      cy.get('.navbar-nav').contains('Commands').click()
      cy.get('.dropdown-menu').contains('Navigation').click()
    })
  
    it('cy.go()', () => {
      cy.location('pathname').should('include','navigation')
      cy.go('back')
      cy.location('pathname').should('not.include','navigation')
      cy.go('forward')
      cy.location('pathname').should('include','navigation')
      cy.go(-1)
      cy.location('pathname').should('not.include','navigation')
      cy.go(1)
      cy.location('pathname').should('include','navigation')
    })
  
    it('cy.reload() - reload the page', () => {
      cy.reload()
      cy.reload(true)
    })
  
    it('cy.visit() - visit a remote url', () => {
      cy.visit('https://example.cypress.io/commands/navigation', {
        timeout: 50000,
        onBeforeLoad (contentWindow) {
          expect(typeof contentWindow === 'object').to.be.true
        },
        onLoad (contentWindow) {
          expect(typeof contentWindow === 'object').to.be.true
        },
      })
      })
  })
  