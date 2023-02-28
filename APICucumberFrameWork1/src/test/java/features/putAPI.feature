Feature: Test PUT APIs

  @put @Smoke
  Scenario: put request to upade user in the database
    Given Go rest API is up and Running
    When I Hit the api with put request to update the existing user details with path parameter as "/update/2"
    Then API returns the response with status code as 200
   
   @put
  Scenario: update An Employee Detaile With Negative Id
    Given Go rest API is up and Running
    When I Hit the api with put request to update the existing user details with path parameter as "/update/-2"
    Then API returns the response with status code as 400
    And error meassege displayed as "id should not be nagative."
    
    @put
  Scenario: update An Employee Detailes With Id As Zero
    Given Go rest API is up and Running
    When I Hit the api with put request to update the existing user details with path parameter as "/update/0"
    Then API returns the response with status code as 400
    And error meassege displayed as "id should not be zero."
    
    @put
  Scenario: update An Employee Detailes Without Providing Id
    Given Go rest API is up and Running
    When I Hit the api with put request to update the existing user details with path parameter as "/update/ "
    Then API returns the response with status code as 400
    And error meassege displayed as "id cannot be zero."
   
   @put
  Scenario: update An Employee Detailes without Providing Any Input
    Given Go rest API is up and Running
    When I Hit the api with put request to update the existing user details with path parameter as "/update/2"
    Then API returns the response with status code as 400
    And error meassege displayed as "fill all fields."
    
    @put
  Scenario: update An Employee Detailes with as ID as alpabet
    Given Go rest API is up and Running
    When I Hit the api with put request to update the existing user details with path parameter as "/update/ja"
    Then API returns the response with status code as 400
    And error meassege displayed as "Id value cannot be alphabet."
    
    @put
  Scenario: update An Employee Detailes with id as special charecter
    Given Go rest API is up and Running
    When I Hit the api with put request to update the existing user details with path parameter as "/update/##"
    Then API returns the response with status code as 400
    And error meassege displayed as "Id value cannot be special cherecter."
    
    
    
    
    
   