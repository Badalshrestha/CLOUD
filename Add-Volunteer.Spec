describe("login with Fixture data and custom command", () => {
    it("Should Log in successfuly", () => {
        cy.visit("https://dev.keela.co")
 
        cy.fixture('user').then(user => {
            const email = user.useremail
            const password = user.password
            const firstname = user.FirstName
            const lastname = user.LastName


                cy.login(email, password)
                cy.form(firstname, lastname)
        
         })
        })
    })
