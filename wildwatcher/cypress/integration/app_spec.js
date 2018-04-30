describe('WildWatcher ', () => {
  beforeEach(() => {
    cy.visit('http://wildwatcher.surge.sh')
  })
  it('.should() - assert that <title> is correct', () => {
    cy.title().should('include', 'WildWatcher')
    cy.contains('Search').click().should('be', 'active')
    cy.contains('Add Animal').click().should('have', 'Form')
    cy.contains('Sightings').click().should('have', 'Chart')
    //   ↲               ↲            ↲
    // subject        chainer      value
  })
})

  