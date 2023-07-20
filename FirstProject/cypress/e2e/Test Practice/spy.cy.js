/// <reference types="cypress" />

context('Spies, Stubs, and Clock', () => {
    it('cy.spy() - wrap a method in a spy', () => {
      cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')
  
      const obj = {
        foo () {},
      }
  
      const spy = cy.spy(obj,'foo')
      for(let i =0; i<5;i++){
        obj.foo()

      }
      expect(spy).to.be.called
      })
  
    it('cy.spy() retries until assertions pass', () => {
      cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')

      const obj = {
        foo (x) {
            console.log('obj.foo called with',x)
        }
      }

      cy.spy(obj,'foo').as('foo')

      setTimeout(() => {
        obj.foo()
      }, 500)

      setTimeout(() => {obj.foo()},2500)

      cy.get('@foo').should('have.been.calledTwice')
  
    })
  
    it('cy.stub() - create a stub and/or replace a function with stub', () => {
      cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')
  
      const obj = {
        foo (a, b) {
          console.log('a', a, 'b', b)
        }
      }
  
      const stub = cy.stub(obj, 'foo').as('foo')
  
      obj.foo('foo', 'bar')
  
      expect(stub).to.be.called
    })
  
    it('cy.clock() - control time in the browser', () => {
  
        const now = new Date(Date.UTC(2017,2,14)).getTime()
  
      cy.clock(now)
      cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')
      cy.get('#clock-div').click()
        .should('have.text','1489449600')
    })
  
    it('cy.tick() - move time in the browser', () => {
      const now = new Date(Date.UTC(2017, 2, 14)).getTime()
  
      cy.clock(now)
      cy.visit('https://example.cypress.io/commands/spies-stubs-clocks')
      cy.get('#tick-div').click()
        .should('have.text', '1489449600')
  
      cy.tick(20000)
      cy.get('#tick-div').click()
        .should('have.text', '1489449620')
    })
  
    it.only('cy.stub() matches depending on arguments', () => {
      const greeter = {
        greet(name){
            return `Hello {$name}!`
        }
      } 

      cy.stub(greeter,'greet')
      .callThrough()
      .withArgs(Cypress.sinon.match.string).returns('Hi')
      .withArgs(Cypress.sinon.match.number).returns('Invalid Name')

      expect(greeter.greet('World').to.equal('Hi'))
      expect(() => greeter.greet(42).to.throw('Invalid Name'))
      expect(greeter.greet).to.have.been.calledTwice
      expect(greeter.greet()).to.equal('hello, undefined')
      
    })
  
    // it('matches call arguments using Sinon matchers', () => {
    //   const calculator = {
    //     /**
    //      * returns the sum of two arguments
    //      * @param a {number}
    //      * @param b {number}
    //     */
    //     add (a, b) {
    //       return a + b
    //     },
    //   }
  
    //   const spy = cy.spy(calculator, 'add').as('add')
  
    //   expect(calculator.add(2, 3)).to.equal(5)
  
    //   // if we want to assert the exact values used during the call
    //   expect(spy).to.be.calledWith(2, 3)
  
    //   // let's confirm "add" method was called with two numbers
    //   expect(spy).to.be.calledWith(Cypress.sinon.match.number, Cypress.sinon.match.number)
  
    //   // alternatively, provide the value to match
    //   expect(spy).to.be.calledWith(Cypress.sinon.match(2), Cypress.sinon.match(3))
  
    //   // match any value
    //   expect(spy).to.be.calledWith(Cypress.sinon.match.any, 3)
  
    //   // match any value from a list
    //   expect(spy).to.be.calledWith(Cypress.sinon.match.in([1, 2, 3]), 3)
  
    //   /**
    //    * Returns true if the given number is even
    //    * @param {number} x
    //    */
    //   const isEven = (x) => x % 2 === 0
  
    //   // expect the value to pass a custom predicate function
    //   // the second argument to "sinon.match(predicate, message)" is
    //   // shown if the predicate does not pass and assertion fails
    //   expect(spy).to.be.calledWith(Cypress.sinon.match(isEven, 'isEven'), 3)
  
    //   /**
    //    * Returns a function that checks if a given number is larger than the limit
    //    * @param {number} limit
    //    * @returns {(x: number) => boolean}
    //    */
    //   const isGreaterThan = (limit) => (x) => x > limit
  
    //   /**
    //    * Returns a function that checks if a given number is less than the limit
    //    * @param {number} limit
    //    * @returns {(x: number) => boolean}
    //    */
    //   const isLessThan = (limit) => (x) => x < limit
  
    //   // you can combine several matchers using "and", "or"
    //   expect(spy).to.be.calledWith(
    //     Cypress.sinon.match.number,
    //     Cypress.sinon.match(isGreaterThan(2), '> 2').and(Cypress.sinon.match(isLessThan(4), '< 4')),
    //   )
  
    //   expect(spy).to.be.calledWith(
    //     Cypress.sinon.match.number,
    //     Cypress.sinon.match(isGreaterThan(200), '> 200').or(Cypress.sinon.match(3)),
    //   )
  
    //   // matchers can be used from BDD assertions
    //   cy.get('@add').should('have.been.calledWith',
    //     Cypress.sinon.match.number, Cypress.sinon.match(3))
  
    //   // you can alias matchers for shorter test code
    //   const { match: M } = Cypress.sinon
  
    //   cy.get('@add').should('have.been.calledWith', M.number, M(3))
    // })
  })
  