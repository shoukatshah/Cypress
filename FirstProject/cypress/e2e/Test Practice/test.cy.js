
describe('Files', () => {
        it("this is my first test case for halaltable ", () => {
                cy.visit('https://beta.halaltable.online/')
                cy.wait(5000)
                cy.get("#header-login-btn").click({ force: true })
                cy.fixture('credentials.json').then((credentials) => {
                        let findQuery = (x) => x.id = 3;

                        let credential = credentials.find(x => findQuery(x));

                        console.log("User2 Email: ", credential.email)
                        console.log("User2 Password: ", credential.password)

                        cy.get('#email-login').type(credential.email)
                        cy.get('#pass-login').type(credential.password)

                })

        })
})