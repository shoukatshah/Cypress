/// <reference types="cypress" />

context('Cypress APIs', () => {

    // context('Cypress.Commands', () => {
    //   beforeEach(() => {
    //     cy.visit('https://example.cypress.io/cypress-api')
    //   })
  
    //   it('.add() - create a custom command', () => {
    //     Cypress.Commands.add('console', {
    //         prevSubject: false,
    //       }, (subject, method) => {
    //         method = method || 'log'
    //         console[method]('The subject is', subject)
    //         return subject
        
    //        })
    //        cy.get('button').console('info').then(($button) => {

    //        })
    //    })
    // })
  
    // context('Cypress Cookies Debugging', () => {
    //   beforeEach(() => {
    //     cy.visit('https://example.cypress.io/cypress-api')
    //   })
    //   it('Enable or disable debugging', () => {
    //     Cypress.Cookies.debug(true)
    //     cy.setCookie('fakeCookie', '123ABC')
    //     cy.getCookie('fakeCookie').should('have.property','value','123ABC')
    //     cy.clearCookie('fakeCookie')
        
    //    })
    // })

  
    context('Cypress.arch', () => {
      beforeEach(() => {
        cy.visit('https://example.cypress.io/cypress-api')
      })
      it('Get CPU architechure', () => {
        
      })
  
      
    })
})
  
//     context('Cypress.config()', () => {
//       beforeEach(() => {
//         cy.visit('https://example.cypress.io/cypress-api')
//       })
  
//       it('Get and set configuration options', () => {
      
//       })
//     })
  
//     context('Cypress.dom', () => {
//       beforeEach(() => {
//         cy.visit('https://example.cypress.io/cypress-api')
//       })
  
//       // https://on.cypress.io/dom
//       it('.isHidden() - determine if a DOM element is hidden', () => {
       
//       })
//     })
  
//     context('Cypress.env()', () => {
//       beforeEach(() => {
//         cy.visit('https://example.cypress.io/cypress-api')
//       })
  
//       // We can set environment variables for highly dynamic values
  
//       // https://on.cypress.io/environment-variables
//       it('Get environment variables', () => {
      
//       })
//     })
  
//     context('Cypress.log', () => {
//       beforeEach(() => {
//         cy.visit('https://example.cypress.io/cypress-api')
//       })
  
//       it('Control what is printed to the Command Log', () => {
//       // https://on.cypress.io/cypress-log
//       })
//     })
  
//     context('Cypress.platform', () => {
//       beforeEach(() => {
//         cy.visit('https://example.cypress.io/cypress-api')
//       })
  
//       it('Get underlying OS name', () => {
      
//       })
//     })
  
//     context('Cypress.version', () => {
//       beforeEach(() => {
//         cy.visit('https://example.cypress.io/cypress-api')
//       })
  
//       it('Get current version of Cypress being run', () => {
     
//       })
//     })
  
//     context('Cypress.spec', () => {
//       beforeEach(() => {
//         cy.visit('https://example.cypress.io/cypress-api')
//       })
  
//       it('Get current spec information', () => {
      
//       })
//     })
//   })
// })
  