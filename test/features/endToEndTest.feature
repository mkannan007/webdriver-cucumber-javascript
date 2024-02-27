Feature: SauceDemo - E2E Test

    # As a User,
    # I want to purchase the cheapest and the second costliest products using "standard_user" account
    # so that I see the checkout complete and thank you message after completing my purchase

    Scenario: Validation of complete Purchase of products by adding cheapest and 2nd costliest product to cart
        Given I logged into the saucedemo site using standard_user account
        And I sort the products by "Price (high to low)"
        When I add the following products to the basket
            | cheapest product         |
            | second costliest product |
        And I click on the cart button in products page
        And I click on the checkout button in your cart page
        And I enter my details and finish the purchase
            | Key        | Value    |
            | FirstName  | Archana  |
            | LastName   | Kannan   |
            | PostalCode | EC12 2AB |
        Then I should see the Checkout complete and Order dispatch message
