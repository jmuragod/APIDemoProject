@get
Feature: I am testing get request for go rest API

	Scenario: Get request to fetch all users
	Given Go rest API is Up and Running
	When I hit api with get request and end point as "/public-api/users"
	Then API should return all the users
	
	Scenario: Get request to Validate pagination
	Given Go rest API is Up and Running
	When I hit api with get request and end point as "/public-api/users?page=5"
	Then API should return all the users on page 5 only
	
	Scenario: Get request to fetch single users
	Given Go rest API is Up and Running
	When I hit api with get request and end point as "/public-api/users/509587"
	Then API should return single user details of user id "509587"
	And check the code as 404
	
	
	Scenario: API should response status code as 404 for incorrect user
	Given Go rest API is Up and Running
	When I hit api with get request and end point as "/public-api/users/50958745678945677655"
	Then API should return single user details of user id "50958745678945677655"
	And check the code as 404
	
	Scenario: Get request to fetch all users with "gender" as "female" to check api resourse filter
	Given Go rest API is Up and Running
	When I hit api with get request and end point as "/public-api/users?gender=female"
	Then API should return all female users
	
	Scenario: Get request to fetch all users with "gender" as "female" and "status" as "active" 
	Given Go rest API is Up and Running
	When I hit api with get request and end point as "/public-api/users?gender=female&status=active"
	Then API should return all female users with status as active
	
	
	