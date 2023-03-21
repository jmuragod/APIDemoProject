$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/DeleteRequests.feature");
formatter.feature({
  "name": "I am testing delete requests for Go Rest API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.scenario({
  "name": "Delete request to update user in the Go Rest DB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostDefs.go_rest_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a new user created in the system",
  "keyword": "And "
});
formatter.match({
  "location": "PutDefs.i_have_a_new_user_created_in_the_system()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api with delete request",
  "keyword": "When "
});
formatter.match({
  "location": "deleteDefs.i_hit_the_api_with_delete_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should delete the user",
  "keyword": "Then "
});
formatter.match({
  "location": "deleteDefs.api_should_delete_the_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get request to the user should not return the user",
  "keyword": "And "
});
formatter.match({
  "location": "deleteDefs.get_request_to_the_user_should_not_return_the_user()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:features/GetRequests.feature");
formatter.feature({
  "name": "I am testing get request for go rest API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.scenario({
  "name": "Get request to fetch all users",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "Go rest API is Up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetDefs.go_rest_API_is_Up_and_Running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit api with get request and end point as \"/public-api/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetDefs.i_hit_api_with_get_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return all the users",
  "keyword": "Then "
});
formatter.match({
  "location": "GetDefs.api_should_return_all_the_users()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get request to Validate pagination",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "Go rest API is Up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetDefs.go_rest_API_is_Up_and_Running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit api with get request and end point as \"/public-api/users?page\u003d5\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetDefs.i_hit_api_with_get_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return all the users on page 5 only",
  "keyword": "Then "
});
formatter.match({
  "location": "GetDefs.api_should_return_all_the_users_on_page_only(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get request to fetch single users",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "Go rest API is Up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetDefs.go_rest_API_is_Up_and_Running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit api with get request and end point as \"/public-api/users/509587\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetDefs.i_hit_api_with_get_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return single user details of user id \"509587\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GetDefs.api_should_return_single_user_details_of_user_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the code as 404",
  "keyword": "And "
});
formatter.match({
  "location": "GetDefs.check_the_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "API should response status code as 404 for incorrect user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "Go rest API is Up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetDefs.go_rest_API_is_Up_and_Running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit api with get request and end point as \"/public-api/users/50958745678945677655\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetDefs.i_hit_api_with_get_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return single user details of user id \"50958745678945677655\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GetDefs.api_should_return_single_user_details_of_user_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the code as 404",
  "keyword": "And "
});
formatter.match({
  "location": "GetDefs.check_the_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get request to fetch all users with \"gender\" as \"female\" to check api resourse filter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "Go rest API is Up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetDefs.go_rest_API_is_Up_and_Running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit api with get request and end point as \"/public-api/users?gender\u003dfemale\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetDefs.i_hit_api_with_get_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return all female users",
  "keyword": "Then "
});
formatter.match({
  "location": "GetDefs.api_should_return_all_female_users()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get request to fetch all users with \"gender\" as \"female\" and \"status\" as \"active\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "Go rest API is Up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetDefs.go_rest_API_is_Up_and_Running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit api with get request and end point as \"/public-api/users?gender\u003dfemale\u0026status\u003dactive\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetDefs.i_hit_api_with_get_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return all female users with status as active",
  "keyword": "Then "
});
formatter.match({
  "location": "GetDefs.api_should_return_all_female_users_with_status_as_active()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:features/PostRequests.feature");
formatter.feature({
  "name": "I am testing post request for Go Rest API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.scenario({
  "name": "Post request to create a user in the Go Rest DB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostDefs.go_rest_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set header and body to create new user",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.i_set_header_and_body_to_create_new_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api with post request and end point as \"/public-api/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "PostDefs.i_hit_the_api_with_post_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API created a new User in the system",
  "keyword": "Then "
});
formatter.match({
  "location": "PostDefs.api_created_a_new_User_in_the_system()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c422\u003e but was:\u003c201\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat stepdefs.api.PostDefs.api_created_a_new_User_in_the_system(PostDefs.java:46)\r\n\tat ✽.API created a new User in the system(classpath:features/PostRequests.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I can find the new user in the system when i get the user",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.i_can_find_the_new_user_in_the_system_when_i_get_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Post request to validate error message when no body is sent",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostDefs.go_rest_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set header and but with out any body",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.i_set_header_and_but_with_out_any_body()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api with post request and end point as \"/public-api/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "PostDefs.i_hit_the_api_with_post_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returned the error code as 422",
  "keyword": "Then "
});
formatter.match({
  "location": "PostDefs.api_returned_the_error_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displayed as \"Email cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.error_message_displayed_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displayed as \"First Name cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.error_message_displayed_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displayed as \"Last Name cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.error_message_displayed_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displayed as \"Gender cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.error_message_displayed_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post request to validate error message when empty field values are sent in body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostDefs.go_rest_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set header and body with fields but no values",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.i_set_header_and_body_with_fields_but_no_values()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api with post request and end point as \"/public-api/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "PostDefs.i_hit_the_api_with_post_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returned the error code as 422",
  "keyword": "Then "
});
formatter.match({
  "location": "PostDefs.api_returned_the_error_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displayed as \"Email cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.error_message_displayed_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displayed as \"First Name cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.error_message_displayed_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displayed as \"Last Name cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.error_message_displayed_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displayed as \"Gender cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.error_message_displayed_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post request to validate error message when incorrect email and gender is sent in the body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostDefs.go_rest_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set header and body with incorrect email and gender",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.i_set_header_and_body_with_incorrect_email_and_gender()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api with post request and end point as \"/public-api/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "PostDefs.i_hit_the_api_with_post_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returned the error code as 422",
  "keyword": "Then "
});
formatter.match({
  "location": "PostDefs.api_returned_the_error_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displayed as \"Email is not a valid email address.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.error_message_displayed_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displayed as \"Gender is invalid.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.error_message_displayed_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post request to validate error message when incorrect data types for all fields are sent",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostDefs.go_rest_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set header and body with incorrect data types are sent for every mandatory field",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.i_set_header_and_body_with_incorrect_data_types_are_sent_for_every_mandatory_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api with post request and end point as \"/public-api/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "PostDefs.i_hit_the_api_with_post_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returned the error code as 422",
  "keyword": "Then "
});
formatter.match({
  "location": "PostDefs.api_returned_the_error_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displayed as \"Gender must be a string.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.error_message_displayed_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displayed as \"Email is not a valid email address.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.error_message_displayed_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displayed as \"First Name must be a string.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.error_message_displayed_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displayed as \"Last Name must be a string.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.error_message_displayed_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:features/PutRequests.feature");
formatter.feature({
  "name": "I am testing put request for Go Rest API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@put"
    }
  ]
});
formatter.scenario({
  "name": "Put request to update user in the Go Rest DB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@put"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostDefs.go_rest_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a new user created in the system",
  "keyword": "And "
});
formatter.match({
  "location": "PutDefs.i_have_a_new_user_created_in_the_system()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api with put request to update the existing user details",
  "keyword": "When "
});
formatter.match({
  "location": "PutDefs.i_hit_the_api_with_put_request_to_update_the_existing_user_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should update the user",
  "keyword": "Then "
});
formatter.match({
  "location": "PutDefs.api_should_update_the_user()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003cnull\u003e but was:\u003clion\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:120)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat stepdefs.api.PutDefs.api_should_update_the_user(PutDefs.java:56)\r\n\tat ✽.API should update the user(classpath:features/PutRequests.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "get request to the user should return updated information",
  "keyword": "And "
});
formatter.match({
  "location": "PutDefs.get_request_to_the_user_should_return_updated_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Put Request, valdiation message is received when wrong gender and email is sent",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@put"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostDefs.go_rest_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have a new user created in the system",
  "keyword": "And "
});
formatter.match({
  "location": "PutDefs.i_have_a_new_user_created_in_the_system()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api with put request and setting wrong email",
  "keyword": "When "
});
formatter.match({
  "location": "PutDefs.i_hit_the_api_with_put_request_and_setting_wrong_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returned the error code as 422",
  "keyword": "Then "
});
formatter.match({
  "location": "PostDefs.api_returned_the_error_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displayed as \"Email is not a valid email address.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.error_message_displayed_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Put request to update in-correct user then valdiation message is thrown",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@put"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostDefs.go_rest_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api with put request to update the incorrect user",
  "keyword": "When "
});
formatter.match({
  "location": "PutDefs.i_hit_the_api_with_put_request_to_update_the_incorrect_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returned the error code as 404",
  "keyword": "Then "
});
formatter.match({
  "location": "PostDefs.api_returned_the_error_code_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message displayed as \"Object not found:\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostDefs.error_message_displayed_as(String)"
});
formatter.result({
  "status": "passed"
});
});