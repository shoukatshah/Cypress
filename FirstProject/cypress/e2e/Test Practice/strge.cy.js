/// <reference types="cypress" />

context('Local Storage / Session Storage', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/storage')
    })
  
    it('cy.clearLocalStorage()', () => {
        cy.get('.ls-btn').click()
        .then(() => {
            expect(localStorage.getItem('prop1')).to.eq('red')
            expect(localStorage.getItem('prop2')).to.eq('blue')
            expect(localStorage.getItem('prop3')).to.eq('magenta')
        })

        cy.clearLocalStorage()
        .then((ls) => {
            expect(ls.getItem('prop1')).to.be.null
            expect(ls.getItem('prop2')).to.be.null
            expect(ls.getItem('prop3')).to.be.null
        })

        cy.get('.ls-btn').click()
        .should(() => {
            expect(localStorage.getItem('prop1')).to.eq('red')
            expect(localStorage.getItem('prop2')).to.eq('blue')
            expect(localStorage.getItem('prop3')).to.eq('magenta')
          })

        cy.clearLocalStorage('prop1')
        .should((ls) => {
            expect(ls.getItem('prop1')).to.be.null
            expect(ls.getItem('prop2')).to.eq('blue')
            expect(ls.getItem('prop3')).to.eq('magenta')
        })

        cy.get('.ls-btn').click()
        .should(() => {
            expect(localStorage.getItem('prop1')).to.eq('red')
            expect(localStorage.getItem('prop2')).to.eq('blue')
            expect(localStorage.getItem('prop3')).to.eq('magenta')
        })
          
        cy.clearLocalStorage(/prop1|2/)
        .should((ls) => {
            expect(ls.getItem('prop1')).to.be.null
            expect(ls.getItem('prop2')).to.be.null
            expect(ls.getItem('prop3')).to.eq('magenta')
        })

    })

    it('cy.get All local storage', () =>{
        cy.get('.ls-btn')
        .click()
        cy.getAllLocalStorage()
        .should((storageMap) => {
            expect(storageMap).to.deep.equal({
                'https://example.cypress.io': {
                    'prop1':'red',
                    'prop2':'blue',
                    'prop3':'magenta',
                },
            })
        })

    })

    it('cy. clear all local storage', () => {
        cy.get('.ls-btn').click()
        cy.clearAllSessionStorage().should(() => {
            expect(sessionStorage.getItem('prop4')).to.be.null
            expect(sessionStorage.getItem('prop5')).to.be.null
            expect(sessionStorage.getItem('prop6')).to.be.null
          })

    })
})  
  