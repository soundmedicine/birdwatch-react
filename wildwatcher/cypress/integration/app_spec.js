describe('WildWatcher ', () => {
  beforeEach(() => {
    cy.visit('http://wildwatcher.surge.sh')
  })
  it('.should() - assert that <title> is correct', () => {
    cy.title()
      .should('include', 'WildWatcher')
    cy.contains('Search')
      .click()
      .should('be', 'active')
    cy.get('nav')
      .should('be.visible')
    //   ↲               ↲            ↲
    // subject        chainer      value
  })
})

  