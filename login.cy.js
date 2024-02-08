/// <reference types="cypress" />

describe('Login and Logout Test with Fixtures', () => {
    beforeEach(() => {
        // Buka halaman login sebelum setiap pengujian
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
    });

    it('Should login and logout with valid credentials from fixture', () => {
        // Membaca data login dari file fixture
        cy.fixture('user.json').then((userData) => {
            // Mengisi formulir login dengan informasi login dari fixture
            cy.get('#login_form').should('be.visible')
            cy.get('#user_login').type(userData.username)
            cy.get('#user_password').type(userData.password)

            // Mengklik tombol submit untuk login
            cy.get('input[name="submit"]').click()

     

            // Memeriksa bahwa login berhasil
            cy.contains('Cash Accounts').should('be.visible')

            // Menekan tombol logout
            cy.contains('username').click()
            cy.get('#logout_link').click()

            // Menunggu hingga URL berubah atau menyertakan '/index.html' setelah logout
            cy.url().should('include', '/index.html')

            // Memeriksa bahwa logout berhasil
            cy.get('#signin_button').should('be.visible')
        });
    });
});
