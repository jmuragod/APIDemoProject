Feature: Test Delete APIs

  @delete
  Scenario: Delete an employee record
    Given Go rest API is up and Running
    When I Hit the api with delete request to delete the existing user details with path parameter as "/delete/7"
    Then API returns the response with status code as 200
  
  @delete
  Scenario: delete Employee Record Without Providing Any ID
    Given Go rest API is up and Running
    When I Hit the api with delete request to delete the existing user  with path parameter as "/delete/"
    Then API returns the response with status code as 400
    And error meassege displayed as "id cannot be blank."
    
    @delete
  Scenario: delete Employee Record with InvalidID
    Given Go rest API is up and Running
    When I Hit the api with delete request to delete the existing user details with path parameter as "/delete/765788"
    Then API returns the response with status code as 400
    And error meassege displayed as "invalid input."
    
    @delete
  Scenario: delete Employee Record With Negative ID
    Given Go rest API is up and Running
    When I Hit the api with delete request to delete the existing user details with path parameter as "/delete/-6"
    Then API returns the response with status code as 400
    And error meassege displayed as "id should not be negative."
    
    @delete
  Scenario: delete Employee Record With ID as zero with id
    Given Go rest API is up and Running
    When I Hit the api with delete request to delete the existing user details with path parameter as "/delete/0007"
    Then API returns the response with status code as 400
    And error meassege displayed as "id should not be negative."
     And json body contain employee "status" as "success"
   
   @delete
  Scenario: delete Employee Record by using id with slash
    Given Go rest API is up and Running
    When I Hit the api with delete request to delete the existing user details with path parameter as "/delete/6//"
    Then API returns the response with status code as 400
    And error meassege displayed as "id is invalid."
      
     @delete
  Scenario: delete Employee Records Using Id With SpecialChar value
    Given Go rest API is up and Running
    When I Hit the api with delete request to delete the existing user details with path parameter as "/delete/#$%"
    Then API returns the response with status code as 400
    And error meassege displayed as "id cannot be special char value." 
    
     @delete
  Scenario:  delete Employee Record With Id as Alphabet
    Given Go rest API is up and Running
    When I Hit the api with delete request to delete the existing user details with path parameter as "/delete/ja"
    Then API returns the response with status code as 400
    And error meassege displayed as "id cannot be alphabet." 
    
    @delete
  Scenario:  delete Employee Record With Id as zero
    Given Go rest API is up and Running
    When I Hit the api with delete request to delete the existing user details with path parameter as "/delete/0"
    Then API returns the response with status code as 400
    And error meassege displayed as "id cannot be zero." 
    
     @delete
  Scenario:  delete Employee Record With ID As BigValue
    Given Go rest API is up and Running
    When I Hit the api with delete request to delete the existing user details with path parameter as "/delete/00675456788"
    Then API returns the response with status code as 400
    And error meassege displayed as "id is invalid." 
    