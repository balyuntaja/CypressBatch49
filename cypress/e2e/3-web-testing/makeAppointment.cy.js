describe("Login and Make Appointment Test", () => {
    beforeEach(() => {
      // Kunjungi halaman login sebelum setiap pengujian
      cy.visit("https://katalon-demo-cura.herokuapp.com/profile.php#login");
  
      // Isi formulir login dengan kredensial yang valid
      cy.get('#txt-username').type('John Doe');
      cy.get('#txt-password').type('ThisIsNotAPassword');
      cy.get('#btn-login').click();
  
    });
  
    it("should make an appointment with valid details", () => {
      // Kunjungi halaman appointment
      cy.visit("https://katalon-demo-cura.herokuapp.com/#appointment");
  
      // Isi formulir dengan detail yang valid
      cy.get('#combo_facility').select('Hongkong CURA Healthcare Center');
      cy.get('#txt_visit_date').type('09/15/2023');
      cy.get('#txt_comment').should('be.visible').type('This is a test comment.');
  
      // Klik tombol "Book Appointment"
      cy.get('#btn-book-appointment').click();
  
    });
  
  });
  