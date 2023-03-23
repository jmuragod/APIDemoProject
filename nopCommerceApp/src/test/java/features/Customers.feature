Feature: Customers
	
  Scenario: Add a new Customer
    Given User launch chrome browser
    When User opens "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
    And User enters Email as "admin@yourstore.com" and password as "admin"
    And click on login
    Then User can view Dashboad
    When User Click on customer Menu
    And click on customers Menu item
    And click on Add new customer page
    When User enter customer info
    And click on Save button
    Then User can view confirmation message "The new customer has been added successfully."
    And close the Browser

   Scenario: Search Customer By Email Id
    Given User launch chrome browser
    When User opens "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
    And User enters Email as "admin@yourstore.com" and password as "admin"
    And click on login
    Then User can view Dashboad
    When User Click on customer Menu
    And click on customers Menu item
    And enter customer Email
    When click on search button
    Then user should found email in the Search table
    And close the Browser
    
   Scenario: Search Customer By Email Id
    Given User launch chrome browser
    When User opens "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
    And User enters Email as "admin@yourstore.com" and password as "admin"
    And click on login
    Then User can view Dashboad
    When User Click on customer Menu
    And click on customers Menu item
    And enter customer FirstName
    And enter customer LastName
    When click on search button
    Then user should found Name in the Search table
    And close the Browser
    