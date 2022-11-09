describe("Some app", () => {
    it("should see a yellow canvas", () => {
      cy.visit("http://localhost:3000");
        cy.get(".testBox").matchImage();
    });
  
    it("should see a yellow canvas", () => {
      cy.visit("http://localhost:3000");
        cy.get(".testBox").matchImage();
    });
  });