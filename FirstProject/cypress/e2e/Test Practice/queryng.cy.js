/// <reference types="cypress" />

context('Querying', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/querying')
    })
  
    it('cy.get() - query DOM elements', () => {
      cy.get('#query-btn').should('contain','Button')
      cy.get('.query-btn').should('contain','Button')
      cy.get('#querying .well>Button:first').should('contain','Button')
      cy.get('[data-test-id="test-example"]').should('have.class','example')
      cy.get('[data-test-id="test-example"]')
      .invoke('attr', 'data-test-id')
      .should('equal', 'test-example')

    })
  
    it('cy.contains() - query DOM elements with matching content', () => {
        cy.get('.query-list')
        .contains('bananas').should('have.class','third')
        cy.get('.query-list')
        .contains(/^b\w+/).should('have.class', 'third')
        cy.get('.query-list')
        .contains('apples').should('have.class', 'first')
    })
  
    ('.within() - query DOM elements within a specific element', () => {
      cy.get('.query-form').within(() =>{
        cy.get('input[id="inputEmail"]').should('have.attr','placeholder','Email')
        cy.get('input[id="inputPassword"]').should('have.attr','placeholder','Password')
      })
      })
    })
  
    it.only('best practices - selecting elements', () => {
      cy.get('[data-cy=best-practices-selecting-elements]').within(() => {
        cy.get('button').click()
        cy.get('.btn.btn-large').click()
        cy.get('[name=submission]').click()
        cy.get('#main').click()
        cy.get('#main[role=button]').click()
        cy.contains('Submit').click()
        cy.get('[data-cy=submit]').click()
      })
    })
  