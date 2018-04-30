describe('WildWatcher ', function () {
  it('.should() - assert that <title> is correct', function () {
    cy.visit('http://wildwatcher.surge.sh')
    cy.title().should('include', 'WildWatcher')
    //   ↲               ↲            ↲
    // subject        chainer      value
  })
})

  