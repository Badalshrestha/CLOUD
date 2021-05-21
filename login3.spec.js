describe("login with Fixture data and custom command", () => {
    it("Should validate User not Found Notification Message", () => {
        cy.visit("https://dev.keela.co")
 
        cy.fixture('user').then(user => {
            const email = user.invalidemail
            const password = user.password
    
                cy.login(email, password)
            
                //Incorect Password Notification check

                cy.get(".notification-title").should("have.text"," User not found ")

         })
        })
    })
