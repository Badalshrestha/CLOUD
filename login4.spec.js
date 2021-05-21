describe("login with Fixture data and custom command", () => {
    it("Should validate User not Found Notification Message", () => {
        cy.visit("https://dev.keela.co")
 
        cy.fixture('user').then(user => {
             const email = user.blankemail
             const password = user.blankpassword
    
                cy.login(email, password)
            
                //change code after opening this one 
                
                cy.get(".").should("have.text"," Please fill out this field. ")

         })
        })
    })
