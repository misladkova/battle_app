describe('Battle app', function () {
    beforeEach(function () {
        cy.visit('http://localhost:3000')
    })

    it('headers are shown', function () {
        cy.contains('Battle')
        cy.contains('List of warriors:')
        cy.contains('History of battles:')
    })

    describe('forms', function () {
        it('createForm is shown', function () {
            cy.contains('add new warrior').click()
            cy.contains('Create new warrior:')
            cy.get('#title')
            cy.get('#image')
            cy.get('#create-button').click()
        })

        it('createForm is hidden', function () {
            cy.contains('add new warrior').click()
            cy.contains('cancel').click()
            cy.contains('Create new warrior:').should('not.exist')
            cy.get('#title').should('not.not.exist')
            cy.get('#image').should('not.not.exist')
            cy.get('#create-button').should('not.not.exist')
        })

        it('fight is shown', function () {
            cy.contains('play a battle').click()
            cy.contains('Choose first player:')
            cy.contains('Choose second player:')
            cy.get('#fight').click()
        })

        it('fight is hidden', function () {
            cy.contains('play a battle').click()
            cy.contains('cancel').click()
            cy.contains('Choose first player:').should('not.not.exist')
            cy.contains('Choose second player:').should('not.not.exist')
            cy.get('#fight').should('not.not.exist')
        })
    })
})
