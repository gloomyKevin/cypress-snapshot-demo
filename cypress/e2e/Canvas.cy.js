describe("Some app", () => {
  it("should see a yellow canvas", () => {
    cy.visit("http://localhost:3000");
    cy.get("canvas");

    // 整页生成快照
    cy.get("body").toMatchImageSnapshot();
  });
});