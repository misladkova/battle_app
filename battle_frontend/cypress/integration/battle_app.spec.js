describe('Battle app', function () {
    beforeEach(function () {
        cy.visit('http://localhost:3000')
    })

    it('headers are shown', function () {
        cy.contains('Battle')
        cy.contains('List of warriors:')
        cy.contains('History of battles:')
    })

    describe('buttons', function () {
        it('adding', function () {
            cy.contains('add new warrior').click()
            cy.get('#nameCreate').type('bm')
            cy.get('#create-button').click()
            // cy.contains('Ben Murph is logged in')
        })
    })

    // describe('When user is logged in', function (){
    //     beforeEach(function (){
    //         cy.contains('Log in').click()
    //         cy.get('#username').type('bmurph')
    //         cy.get('#password').type('bmurph')
    //         cy.get('#login-button').click()
    //         cy.contains('Ben Murph is logged in')
    //     })
    //     it('A new blog can be created', function (){
    //
    //     })
    // })
})
