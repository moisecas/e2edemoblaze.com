
describe('Proceso de compra en demoblaze.com', function() {

    it.only('checkout', function() {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.contains('Samsung galaxy s6').click();
        cy.get('.col-sm-12 > .btn').click() //agrega al carrito 
        cy.get('#cartur').click() //ver carrito 
        cy.get('.col-lg-1 > .btn').click() //place order
        cy.get('#name').type('Moises');
        cy.get('#country').type('Colombia')
        cy.get('#city').type('Bucaramanga')
        cy.get('#card').type(123456)
        cy.get('#month').type('octubre')
        cy.get('#year').type(2023)
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click() //botón de compra
        //verificación de TC y muestra en los resultados si es correcto el numero de tc esperado
        cy.get('#card').invoke('val').then((cardValue) => {
            cy.get('.lead').should('contain.text', cardValue);
        });
    });

  
    
});