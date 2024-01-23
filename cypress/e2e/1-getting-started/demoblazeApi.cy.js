describe('Demozable.com', function() {

    //utiliza only luego de it, it.only para ejecutar la prueba que desees en en entorno de cypress sección specs
    //cuando ejecutes npx cypress open debes seleccionar pruebas end to end
    it('Crear usuario', function() { 
        //https://www.demoblaze.com/index.html
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#signin2').click()
        cy.get('#sign-username').type('moisecas32')
        cy.get('#sign-password').type('123456')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()


    }
    )

    it('Intentar crear un usuario existente moisecas32', function() {
      // Visita la página 
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#signin2').should('be.visible').click()
    cy.get('#sign-username').should('be.visible').type('moisecas32')
    cy.get('#sign-password').should('be.visible').type('tuContraseña')
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()    
    
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.contains('Please fill out Username and Password.');
    }); //validación de ventana alert usuario existe
        
    })

    it('usuario y password correcto en login', function() {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.get('#loginusername').click()
        cy.wait(10000); // Espera durante 10 segundos
        cy.get('#loginusername').should('be.visible').type('moisecas32', { delay: 2000 })
        cy.get('#loginpassword').should('be.visible').type('123456', { delay: 150 })
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#nameofuser').should('have.value', 'moisecas32');         
    })
    
    
    

    it('usuario incorrecto en login', function() {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.get('#loginusername').type('moisecas3') // el usuario correcto es moisecas32
        cy.get('#loginpassword').should('be.visible').type('123456', { delay: 150 })
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    
        // Escucha el evento 'window:alert' para capturar el mensaje del alert
        cy.on('window:alert', (message) => {
            // Verifica que el mensaje del alert sea el esperado
            expect(message).to.equal('Sign up successful.'); 
        });
    })
    
    

    it.only('password incorrecto en login', function() {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.get('#loginusername').should('be.visible').type('moisecas32', { delay: 2000 })
        cy.get('#loginpassword').should('be.visible').type('12345', { delay: 150 })
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    
        // Escucha el evento 'window:alert' para capturar el mensaje del alert
        cy.on('window:alert', (message) => {
            // Verifica que el mensaje del alert sea el esperado
            expect(message).to.equal('Sign up successful.'); 
        });                     
            
    })
    

    
    
})