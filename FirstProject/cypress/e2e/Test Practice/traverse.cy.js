/// <reference types="cypress" />

context('Traversal', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/traversal')
    })
  
    it('.children() - get child DOM elements', () => {
      cy.get('.traversal-breadcrumb')
        .children('.active')
        .should('contain','Data')
    })
    
    it('cy.closest', () =>{
        cy.get('.traversal-badge')
        .closest('ul')
        .should('have.class', 'list-group')
      
    })

    it('cy. eq()',() => {
        cy.get('.traversal-list>li')
        .eq(1).should('contain','siamese')
    })

    it('cy .filter', () => {
        cy.get('.traversal-nav>li')
        .filter('.active').should('contain','About')
    })

    it('cy.find', () => {
        cy.get('.traversal-pagination')
        .find('li').find('a').should('have.length',7)

    })

    it('cy. first', () =>{
        cy.get('.traversal-table td')
        .first().should('contain','1')

    })

    it('cy ,nextAll', () => {
        cy.get('.traversal-next-all')
        .contains('oranges')
        .nextAll().should('have.length', 3)
    })

    it('cy. nextUntil', () => {
        cy.get('.healthy-foods')
        .find('#veggies')
        .nextUntil('#nuts').should('have.length',3)
    })

    it('cy.not', () => {
        cy.get('.traversal-disabled .btn')
        .not('[disabled]').should('not.contain','Disabled')
    })

    it('cy.parent', () => {
        cy.get('.traversal-mark')
        .parent().should('contain','Morbi leo risus')

    })

    it('cy.parnets', () => {
        cy.get('.traversal-cite')
        .parents().should('match', 'blockquote')
    })

    it('cy.previous', () =>{
        cy.get('.birds').find('.active')
        .prev().should('contain', 'Lorikeets')
    })

    it('.prevAll() - get all previous sibling DOM elements', () => {
        cy.get('.fruits-list').find('.third')
          .prevAll().should('have.length', 2)
    })
    
    it('.prevUntil() - get all previous sibling DOM elements until el', () => {
        cy.get('.foods-list').find('#nuts')
          .prevUntil('#veggies').should('have.length', 3)
    })
    
    it('.siblings() - get all sibling DOM elements', () => {
        cy.get('.traversal-pills .active')
          .siblings().should('have.length', 2)
    })
})
  