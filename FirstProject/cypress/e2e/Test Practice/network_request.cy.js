/// <reference types="cypress" />

context('Network Requests', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/network-requests')
    })
  
    it('cy.request()', () => {
      cy.request('https://jsonplaceholder.cypress.io/comments')
      .then((resp) => {
        expect(resp.status).to.eq(200)
        expect(resp.body).to.have.property('length').and.be.oneOf[500,501]
      })
        
    })
  
    it('cy.request() with query parameters', () => {
      cy.request(
        {
            url: 'https://jsonplaceholder.cypress.io/comments',
            qs: {
                postId: 1,
                id: 3
            },
        },
      )
      .its('body')
      .should('be.an','array')
      .and('have.length',1)
      .should('be.an', 'array')
      .and('have.length', 1)
      .its('0')
      .should('contain',{
        postId: 1,
        id: 3,
      })
    })
  
    it.only('cy.request() - pass result to the second request', () => {
      cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
      .its('body.0')
      .then((user) =>{
        expect(user).property('id').to.be.a('number')
        cy.request('POST','https://jsonplaceholder.cypress.io/posts', {
            userId: user.id,
            title: 'Cypress Test Runner',
            body: 'Fast, easy and reliable testing for anything that runs in a browser.',
        })
      })
      .then((response) => {
        expect(response).property('status').to.equal(201)
        expect(response).property('body').to.contain({
            title: 'Cypress Test Runner'
        })
      })

    })
  
    it('cy.request() - save response in the shared test context', () => {
      cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
        .its('body').its('0')
        .as('user')
        .then(function () {
          cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
            userId: this.user.id,
            title: 'Cypress Test Runner',
            body: 'Fast, easy and reliable testing for anything that runs in a browser.',
          })
          .its('body').as('post')
        })
        .then(function () {
          expect(this.post, 'post has the right user id').property('userId').to.equal(this.user.id)
        })
    })
  
    it('cy.intercept() - route responses to matching requests', () => {
  
      let message = 'whoa, this comment does not exist'
  
      cy.intercept('GET', '**/comments/*').as('getComment')
      cy.get('.network-btn').click()
      cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])
      cy.intercept('POST', '**/comments').as('postComment')
      cy.get('.network-post').click()
      cy.wait('@postComment').should(({ request, response }) => {
        expect(request.body).to.include('email')
        expect(request.headers).to.have.property('content-type')
        expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()')
      })
  
      // Stub a response to PUT comments/ ****
      cy.intercept({
        method: 'PUT',
        url: '**/comments/*',
      }, {
        statusCode: 404,
        body: { error: message },
        headers: { 'access-control-allow-origin': '*' },
        delayMs: 500,
      }).as('putComment')
  
      // we have code that puts a comment when
      // the button is clicked in scripts.js
      cy.get('.network-put').click()
  
      cy.wait('@putComment')
  
      // our 404 statusCode logic in scripts.js executed
      cy.get('.network-put-comment').should('contain', message)
    })
  })
  