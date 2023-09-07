describe("Login Test", () => {
  it("should login with valid credentials", () => {
    // Kunjungi halaman login
    cy.visit("https://katalon-demo-cura.herokuapp.com/profile.php#login");

    // Isi formulir login
    cy.get("#txt-username").type("John Doe");
    cy.get("#txt-password").type("ThisIsNotAPassword");

    // Klik tombol login
    cy.get("#btn-login").click();

  });
});
