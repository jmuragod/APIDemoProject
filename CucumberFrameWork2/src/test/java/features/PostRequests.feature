@post
Feature: I am testing post request for go rest API

	Scenario: post request to create  a user in the Go rest DB
	Given Go rest API is Up and Running
	And I set header and body to create a new user
	When I hit api with post request and end point as "/public-api/users"
	Then API will created new user in the system
	#And I can find new user in the system when i get user
	
	