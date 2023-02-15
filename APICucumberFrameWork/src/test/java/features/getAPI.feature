
Feature: Test Get APIs

  @get 
  Scenario: Get all Employee data with valid input
  Given i have API
  When I Hit API- with path parameter as "/employees"
  Then status code comes as 200
  And json body contain employee status as success
  And all the employee detailes will be return
  
   @get
  Scenario: Get all employee data with invalid payload
  Given i have API
  When I Hit API- with path parameter as "/employee"
  Then status code comes as 404
  
  @get
  Scenario: Get single Employee data with valid input
  Given i have API
  When I Hit API- with quary parameter as "/employee/11"
  Then status code comes as 200
  And json body contain employee status as success
  And json body contain employee id as 11
  And single employee details with be returned
 
  @get
  Scenario: Get all Employee data with invalid id
  Given i have API
  When I Hit API- with path parameter as "/employee/098"
  Then status code comes as 404
  And response should have bad request error message as "invalid id"
  
  @get
  Scenario: Get Single Employee Data With Id As Negative Value
  Given i have API
  When I Hit API- with path parameter as "/employee/-9"
  Then status code comes as 404
  And response should have bad request error message as "Bad Request Id is invalid"
  
  @get
  Scenario: Get Single Employee Data With Id As Alphabet Value
  Given i have API
  When I Hit API- with path parameter as "/employee/ja"
  Then status code comes as 404
  And response should have bad request error message as "Bad Request Id is invalid"
  
  @get
  Scenario: Get Single Employee Data With Id As Special Charecter
  Given i have API
  When I Hit API- with path parameter as "/employee/@#$"
  Then status code comes as 404
  And response should have bad request error message as "Bad Request Id is invalid"
  
  @get
  Scenario: Get Single Employee Data With Id As Negative Value
  Given i have API
  When I Hit API- with path parameter as "/employee/-9"
  Then status code comes as 404
  And response should have bad request error message as "Bad Request Id is invalid"
  
  @get
  Scenario: Get Single Employee Data providing id as 000004
  Given i have API
  When I Hit API- with path parameter as "/employee/00004"
  Then status code comes as 200
  And json body contain employee id as 4
  
  @get
  Scenario: Get Single Employee Data providing id with spacle like ____4
  Given i have API
  When I Hit API- with path parameter as "/employee/    4"
  Then status code comes as 200
  And json body contain employee id as 4
  
  @get
  Scenario: Get Single Employee Data without providing any id
  Given i have API
  When I Hit API- with path parameter as "/employee/"
  Then status code comes as 404
  
  @get
  Scenario: Get Single Employee Data providing id with slash like 4///
  Given i have API
  When I Hit API- with path parameter as "/employee/4///"
  Then status code comes as 200
  And json body contain employee id as 4
  
  @get
  Scenario: Get Single Employee Data providing id as 000004
  Given i have API
  When I Hit API- with path parameter as "/employee/00004"
  Then status code comes as 200
  And json body contain employee id as 4
  
  @get
  Scenario: Get Single Employee Data providing id with space and zero like 0004____
  Given i have API
  When I Hit API- with path parameter as "/employee/00004    "
  Then status code comes as 200
  And json body contain employee id as 4
  
  
  
  
  
  
  
   
   
  
  
  
  
 
  
   
  
  
  