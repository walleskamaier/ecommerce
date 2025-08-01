describe("add product to cart", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should be able to navigate to the product page and add it to the cart", () => {
    cy.get("a[href^='/product']").first().click()

    cy.url().should("include", "/product")

    cy.get("button").contains("Adicionar ao carrinho").click()

    cy.contains("Cart(1)").should("exist")
  })

  it("shouldn't count duplicated products on cart", () => {
    cy.get("a[href^='/product']").first().click()

    cy.url().should("include", "/product")

    cy.get("button").contains("Adicionar ao carrinho").click()
    cy.get("button").contains("Adicionar ao carrinho").click()

    cy.contains("Cart(1)").should("exist")
  })

  it("should be able to search for a product and add it to the cart", () => {
    cy.get("input[name='q']").type("moletom").parent("form").submit()

    cy.get("a[href^='/product']").first().click()

    cy.url().should("include", "/product")

    cy.contains("Adicionar ao carrinho").click()

    cy.contains("Cart(1)").should("exist")
  })
})
