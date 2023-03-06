/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/game')
  })

  it('displays game over dialog after win', () => {
    cy.get('[name="col-1"]').click()
    cy.wait(500)
    cy.get('[name="col-2"]').click()
    cy.wait(500)
    cy.get('[name="col-1"]').click()
    cy.wait(500)
    cy.get('[name="col-2"]').click()
    cy.wait(500)
    cy.get('[name="col-1"]').click()
    cy.wait(500)
    cy.get('[name="col-2"]').click()
    cy.wait(500)
    cy.get('[name="col-1"]').click()
    cy.get('.game-over-dialog').should('be.visible')
  })

})
