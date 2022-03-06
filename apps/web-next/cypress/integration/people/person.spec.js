/// <reference types="cypress" />

context('Person', () => {
  it("Alan Rickman's details are shown", () => {
    cy.visit('/people/4566')

    // Name
    cy.contains('Alan Rickman')

    // Age
    cy.contains('Born Wed, Feb 20th, 1946')
    cy.contains('Died Wed, Jan 13th, 2016')
    cy.contains('69 years old (Pisces)')

    // Gender
    cy.contains('Male')

    // Description
    cy.contains('Alan Sidney Patrick Rickman')
  })

  it.only("Go to Sherlock from Benedict Cumberbatch's page", () => {
    cy.visit('/people/71580')
    cy.get('[data-cy=Sherlock]').click()
  })
})
