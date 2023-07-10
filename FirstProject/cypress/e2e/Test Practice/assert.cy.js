/// <reference types="cypress" />

context('Assertions', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/commands/assertions')
    })
  
    describe('Explicit Assertions', () => {
  
      it('pass your own callback function to should()', () => {
        cy.get('.assertions-p')
          .find('p')
          .should(($p) => {
            const texts = $p.map((i, el) => Cypress.$(el).text())
            const paragraphs = texts.get()
            expect(paragraphs, 'has 3 paragraphs').to.have.length(3)
            expect(paragraphs,'have 3 paragraphs text is there').to.deep.equal([
                'Some text from first p',
            'More text from second p',
            'And even more text from third p',
                    ])
                })
            })
        })
        

      it('find element by class name regex', () => {
          cy.get('.docs-header').find('div')
          .then(($div) => {
              if($div.length!== 1){
                  throw new Error ('Did not find 1 element')
              }
              expect($div).to.have.length(1)
              const className = $div[0].className
              if(!className.match(/heading-/)){
                  throw new Error (`Class name is not same as ${className}`)
              }
              expect(className).to.match(/heading-/)
          })
          .then(($div) => {
              expect($div).to.have.text('Introduction')
          })

        })

        it.only('match unknow text', () => {
            let text
            const normalizeText = (s) => s.replace(/\s/g,'').toLowerCase()
            cy.get('.two-elements')
            .find('.first')
            .then(($first) => {
                text = normalizeText($first.text())
            })

            cy.get('.two-elements')
            .find('.second')
            .then(($second) => {
                const Secondtext = normalizeText($second.text())
                expect(Secondtext).to.be.equal(text)
            })


            cy.get('#random-number')
            .should(($div) => {
                const n = parseFloat($div.text())

                expect(n).to.be.gte(1).and.be.lte(10)
            })

        })
  
      
      })

  