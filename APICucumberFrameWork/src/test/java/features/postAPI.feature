Feature: Test POST APIs

  @post
  Scenario: Creat New Record in Database
    Given Go rest API is up and Running
    And I set header and body to create new employee
    When I Hit API- with path parameter as "/create"
    Then API returns the response with status code as 200
    And json body contain employee "name" as "jaya"
    And i can find the new user in the system when i get the user

  @post
  Scenario: post request to validate error meassge when no body is sent
    Given Go rest API is up and Running
    And I set header and but without any body
    When I Hit API- with path parameter as "/create"
    Then API returns the response with status code as 422
    And error meassege displayed as "name cannot be blank."
    And error meassege displayed as "salary cannot be blank."
    And error meassege displayed as "age cannot be blank."

  @post
  Scenario: post request to validate error meassge when no body is sent
    Given Go rest API is up and Running
    And I set header and but without any body
    When I Hit API- with path parameter as "/create"
    Then API returns the response with status code as 422
    And error meassege displayed as "name cannot be blank."
    And error meassege displayed as "salary cannot be blank."
    And error meassege displayed as "age cannot be blank."

  @post
  Scenario: post request to validate error meassge when empty field values are sent in body
    Given Go rest API is up and Running
    And I set header and but no values
    When I Hit API- with path parameter as "/create"
    Then API returns the response with status code as 400
    And error meassege displayed as "name cannot be blank."
    And error meassege displayed as "salary cannot be blank."
    And error meassege displayed as "age cannot be blank."

  @post
  Scenario: post request to validate error meassge without providing name value
    Given Go rest API is up and Running
    And I set header and but no values
    When I Hit API- with path parameter as "/create"
    Then API returns the response with status code as 400
    And error meassege displayed as "name cannot be blank."

  @post
  Scenario: post request to validate error meassge without providing name and age value
    Given Go rest API is up and Running
    And I set header and but no values
    When I Hit API- with path parameter as "/create"
    Then API returns the response with status code as 400
    And error meassege displayed as "name cannot be blank."
    And error meassege displayed as "age cannot be blank."

  @post
  Scenario: post request to validate error meassge without providing salary and  age value
    Given Go rest API is up and Running
    And I set header and but no values
    When I Hit API- with path parameter as "/create"
    Then API returns the response with status code as 400
    And error meassege displayed as "salary cannot be blank."
    And error meassege displayed as "age cannot be blank."

  @post
  Scenario: post request to validate error meassge without providing name and age value
    Given Go rest API is up and Running
    And I set header and but no values
    When I Hit API- with path parameter as "/create"
    Then API returns the response with status code as 400
    And error meassege displayed as "name cannot be blank."
    And error meassege displayed as "age cannot be blank."

  @post
  Scenario: post request to validate error meassge with providing salary value as negative
    Given Go rest API is up and Running
    And I set header and but no values
    When I Hit API- with path parameter as "/create"
    Then API returns the response with status code as 400
    And error meassege displayed as "name cannot be negative value"

  @post
  Scenario: post request to validate error meassge with providing age value as negative
    Given Go rest API is up and Running
    And I set header and but no values
    When I Hit API- with path parameter as "/create"
    Then API returns the response with status code as 400
    And error meassege displayed as "age value should not be negative."

  @post
  Scenario: post request to validate error meassge without providing name as number
    Given Go rest API is up and Running
    And I set header and but no values
    When I Hit API- with path parameter as "/create"
    Then API returns the response with status code as 400
    And error meassege displayed as "name cannot be a number."

  @post
  Scenario: post request to validate error meassge with providing salary value as alphanumeric value
    Given Go rest API is up and Running
    And I set header and but no values
    When I Hit API- with path parameter as "/create"
    Then API returns the response with status code as 400
    And error meassege displayed as "salry can not be a alphanumeric value."

  @post
  Scenario: post request to validate error meassge with providing age value as alphanumeric value
    Given Go rest API is up and Running
    And I set header and but no values
    When I Hit API- with path parameter as "/create"
    Then API returns the response with status code as 400
    And error meassege displayed as "age can not be a alphanumeric value."

  @post
  Scenario: post request to validate error meassge with providing age as zero
    Given Go rest API is up and Running
    And I set header and but no values
    When I Hit API- with path parameter as "/create"
    Then API returns the response with status code as 400
    And error meassege displayed as "age cannot be zero."

  @post
  Scenario: post request to validate error meassge with providing salary value as alphanumeric value
    Given Go rest API is up and Running
    And I set header and but no values
    When I Hit API- with path parameter as "/create"
    Then API returns the response with status code as 400
    And error meassege displayed as "salry can not be a alphanumeric value."
    
    @post
  Scenario Outline: post request to validate with all data
    Given Go rest API is up and Running
    And I have <name> <age> and <salary> in payload
    When I Hit API- with path parameter as "/create"
    Then API returns the response with status code as 400
    And error meassege displayed as "salry can not be a alphanumeric value."
    
    |name  |age  |salary |
		|jaya  |  12   |   3455    |
    |prami|    | 2345 |
    |tyru|-87|  |
    |rtey||-6543|
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    