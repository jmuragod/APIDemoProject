Feature: LoginPage

  Scenario: Successful login with valid credentials
    Given User launch chrome browser
    When User opens "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
    And User enters Email as "admin@yourstore.com" and password as "admin"
    And click on login
    Then page Title should be "Dashboard / nopCommerce administration"
    When user click on logout  link
    Then page Title should be "Your store. Login"
    And close the Browser
