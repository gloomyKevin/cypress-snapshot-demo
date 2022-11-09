describe("Some app", () => {
  it("should see a yellow canvas", () => {
    cy.visit("http://localhost:3000");
    cy.get("canvas");

    // 整页生成快照
    cy.get(".test1").toMatchImageSnapshot();
    cy.get(".test2").toMatchImageSnapshot();
    cy.get("body").toMatchImageSnapshot();
  });
});