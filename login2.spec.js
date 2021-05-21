describe("login with Fixture data and custom command", () => {
    it("should try to login", () => {
        cy.visit("https://dev.keela.co")
 
        cy.fixture('user').then(user => {
            const email = user.useremail
            const password = user.invalidpassword
    
                cy.login(email, password)
            
                //Incorect Password Notification check

                cy.get(".notification-title").should("have.text"," Incorrect password ")

         })
        })
    })
