/// <reference types="cypress" />

describe('Navbar test', function(){
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should display online banking content', () =>{
        cy.contains('Online Banking').click()
        cy.url().should('include','online-banking.html')
        cy.get('h1').should('be.visible')
    });

    it('Should display feedback content', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click()
        cy.wait(2000) // Tunggu 2 detik untuk memastikan halaman dimuat sepenuhnya
        cy.contains('Feedback').should('be.visible')
    });
   

    it('Should display homapage content', ()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Zero Bank').click()
        cy.url().should('include','index.html')
    });

    it('Should type into searchbox and submit', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('help{enter}') // Menambahkan opsi {enter} untuk mensubmit form
        cy.get('h2').contains('Search Results:', { timeout: 10000 }) // Menunggu hasil pencarian muncul
  
    });

})