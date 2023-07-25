
describe('Files', () => {
    it("this is my first test case for halaltable ",() => {
        cy.visit('https://beta.halaltable.online/')
        cy.get("#header-login-btn").click()
        // // cy.get('#customer-popup-login-form').should('be.visible').parent().should
        // // cy.get('#customer-popup-login-form').should('be.visible')
        // cy.get('#customer-popup-login-form').parent().should('have.attr', 'style', 'display: block')

        // // cy.get('#send2-login')
        // // .then((button) =>{
        // //     expect(button).contain('Sign In')
        // //     // cy.get('#email-login').click()
        // //     // cy.get("#email-login").type("sana.shafique@devbatch.com",{force:true})

        // // })

        cy.get('#customer-popup-login-form')
        .should('be.visible') // Ensure the login form is visible
        .parent() // Select the parent element <div.block-content>
        .invoke('attr', 'style', 'visibility: visible;') // Set visibility to visible
        .should('have.attr', 'style', 'visibility: visible;') // Confirm the visibility is set to visible

// Now you can interact with the login form
        cy.get("#header-login-btn").click();
        cy.get('#email-login').type("sana.shafique@devbatch.com");
// Add further login interactions and assertions if needed

    
           
      })         
})