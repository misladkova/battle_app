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
            cy.contains('Create new warrior:')
            cy.get('#title')
            cy.get('#image')
            cy.get('#create-button').click()
        })
    })
})
