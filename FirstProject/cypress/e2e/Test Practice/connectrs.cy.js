/// <reference types="cypress" />

context('Assertions', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/connectors')
    })
    it('.each Iterate over array elements', () => {
        cy.get('.connectors-each-ul>li')
        .its('length')
        .should('be.gt', 2)
        // .each(($el,$index, $list) => {
        //     console.log($el,$index, $list)
        // })

        cy.get('.connectors-div').should('be.hidden')
        .invoke('show')
        .should('be.visible')
    }) 
    
    it('Spread', () => {
        const ar = ['foo', 'bar', 'baz']
        cy.wrap(ar).spread((a, b, c) => {
            expect(a).to.be.equal('foo')
            expect(b).to.be.equal('bar')
            expect(c).to.be.equal('baz')
        }) 
    })  
    
    it.only('yields the returned value to the next command', () => {
        let number = 5
        let num2 = 47
        cy.get('.connectors-each-ul>li')
          .then(($num) => {
              if($num.length === number){
                  cy.wrap(number)
              }
              else{
                  cy.wrap(num2)
              }
            
          })
          .then(($num) => {
              if($num === number) {
                expect($num).to.be.eq(number)

              }
              else{
                expect($num).to.be.eq(num2)

              }
              
              
          })
      })
})

  