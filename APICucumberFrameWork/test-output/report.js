$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/deleteAPI.feature");
formatter.feature({
  "name": "Test Delete APIs",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Delete an employee record",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit the api with delete request to delete the existing user details with path parameter as \"/delete/7\"",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteStepDefination.i_Hit_the_api_with_delete_request_to_delete_the_existing_user_details_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "delete Employee Record Without Providing Any ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit the api with delete request to delete the existing user  with path parameter as \"/delete/\"",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteStepDefination.i_Hit_the_api_with_delete_request_to_delete_the_existing_user_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"id cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "delete Employee Record with InvalidID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit the api with delete request to delete the existing user details with path parameter as \"/delete/765788\"",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteStepDefination.i_Hit_the_api_with_delete_request_to_delete_the_existing_user_details_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"invalid input.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "delete Employee Record With Negative ID",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit the api with delete request to delete the existing user details with path parameter as \"/delete/-6\"",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteStepDefination.i_Hit_the_api_with_delete_request_to_delete_the_existing_user_details_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"id should not be negative.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "delete Employee Record With ID as zero with id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit the api with delete request to delete the existing user details with path parameter as \"/delete/0007\"",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteStepDefination.i_Hit_the_api_with_delete_request_to_delete_the_existing_user_details_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"id should not be negative.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "json body contain employee \"status\" as \"success\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.json_body_contain_employee_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "delete Employee Record by using id with slash",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit the api with delete request to delete the existing user details with path parameter as \"/delete/6//\"",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteStepDefination.i_Hit_the_api_with_delete_request_to_delete_the_existing_user_details_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"id is invalid.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "delete Employee Records Using Id With SpecialChar value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit the api with delete request to delete the existing user details with path parameter as \"/delete/#$%\"",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteStepDefination.i_Hit_the_api_with_delete_request_to_delete_the_existing_user_details_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"id cannot be special char value.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "delete Employee Record With Id as Alphabet",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit the api with delete request to delete the existing user details with path parameter as \"/delete/ja\"",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteStepDefination.i_Hit_the_api_with_delete_request_to_delete_the_existing_user_details_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"id cannot be alphabet.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "delete Employee Record With Id as zero",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit the api with delete request to delete the existing user details with path parameter as \"/delete/0\"",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteStepDefination.i_Hit_the_api_with_delete_request_to_delete_the_existing_user_details_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"id cannot be zero.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "delete Employee Record With ID As BigValue",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit the api with delete request to delete the existing user details with path parameter as \"/delete/00675456788\"",
  "keyword": "When "
});
formatter.match({
  "location": "DeleteStepDefination.i_Hit_the_api_with_delete_request_to_delete_the_existing_user_details_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"id is invalid.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("classpath:features/getAPI.feature");
formatter.feature({
  "name": "Test Get APIs",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Get all Employee data with valid input",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "i have API",
  "keyword": "Given "
});
formatter.match({
  "location": "GetStepDefination.i_have_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/employees\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "status code comes as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "GetStepDefination.status_code_comes_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "json body contain employee status as success",
  "keyword": "And "
});
formatter.match({
  "location": "GetStepDefination.json_body_contain_employee_status_as_success()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "all the employee detailes will be return",
  "keyword": "And "
});
formatter.match({
  "location": "GetStepDefination.all_the_employee_detailes_will_be_return()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Get all employee data with invalid payload",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "i have API",
  "keyword": "Given "
});
formatter.match({
  "location": "GetStepDefination.i_have_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/employee\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "status code comes as 404",
  "keyword": "Then "
});
formatter.match({
  "location": "GetStepDefination.status_code_comes_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Get single Employee data with valid input",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "i have API",
  "keyword": "Given "
});
formatter.match({
  "location": "GetStepDefination.i_have_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with quary parameter as \"/employee/11\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_quary_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "status code comes as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "GetStepDefination.status_code_comes_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "json body contain employee status as success",
  "keyword": "And "
});
formatter.match({
  "location": "GetStepDefination.json_body_contain_employee_status_as_success()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "json body contain employee id as 11",
  "keyword": "And "
});
formatter.match({
  "location": "GetStepDefination.json_body_contain_employee_id_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "single employee details with be returned",
  "keyword": "And "
});
formatter.match({
  "location": "GetStepDefination.single_employee_details_with_be_returned()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Get all Employee data with invalid id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "i have API",
  "keyword": "Given "
});
formatter.match({
  "location": "GetStepDefination.i_have_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/employee/098\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "status code comes as 404",
  "keyword": "Then "
});
formatter.match({
  "location": "GetStepDefination.status_code_comes_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "response should have bad request error message as \"invalid id\"",
  "keyword": "And "
});
formatter.match({
  "location": "GetStepDefination.response_should_have_bad_request_error_message_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Get Single Employee Data With Id As Negative Value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "i have API",
  "keyword": "Given "
});
formatter.match({
  "location": "GetStepDefination.i_have_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/employee/-9\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "status code comes as 404",
  "keyword": "Then "
});
formatter.match({
  "location": "GetStepDefination.status_code_comes_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "response should have bad request error message as \"Bad Request Id is invalid\"",
  "keyword": "And "
});
formatter.match({
  "location": "GetStepDefination.response_should_have_bad_request_error_message_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Get Single Employee Data With Id As Alphabet Value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "i have API",
  "keyword": "Given "
});
formatter.match({
  "location": "GetStepDefination.i_have_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/employee/ja\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "status code comes as 404",
  "keyword": "Then "
});
formatter.match({
  "location": "GetStepDefination.status_code_comes_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "response should have bad request error message as \"Bad Request Id is invalid\"",
  "keyword": "And "
});
formatter.match({
  "location": "GetStepDefination.response_should_have_bad_request_error_message_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Get Single Employee Data With Id As Special Charecter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "i have API",
  "keyword": "Given "
});
formatter.match({
  "location": "GetStepDefination.i_have_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/employee/@#$\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "status code comes as 404",
  "keyword": "Then "
});
formatter.match({
  "location": "GetStepDefination.status_code_comes_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "response should have bad request error message as \"Bad Request Id is invalid\"",
  "keyword": "And "
});
formatter.match({
  "location": "GetStepDefination.response_should_have_bad_request_error_message_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Get Single Employee Data With Id As Negative Value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "i have API",
  "keyword": "Given "
});
formatter.match({
  "location": "GetStepDefination.i_have_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/employee/-9\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "status code comes as 404",
  "keyword": "Then "
});
formatter.match({
  "location": "GetStepDefination.status_code_comes_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "response should have bad request error message as \"Bad Request Id is invalid\"",
  "keyword": "And "
});
formatter.match({
  "location": "GetStepDefination.response_should_have_bad_request_error_message_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Get Single Employee Data providing id as 000004",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "i have API",
  "keyword": "Given "
});
formatter.match({
  "location": "GetStepDefination.i_have_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/employee/00004\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "status code comes as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "GetStepDefination.status_code_comes_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "json body contain employee id as 4",
  "keyword": "And "
});
formatter.match({
  "location": "GetStepDefination.json_body_contain_employee_id_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Get Single Employee Data providing id with spacle like ____4",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "i have API",
  "keyword": "Given "
});
formatter.match({
  "location": "GetStepDefination.i_have_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/employee/    4\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "status code comes as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "GetStepDefination.status_code_comes_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "json body contain employee id as 4",
  "keyword": "And "
});
formatter.match({
  "location": "GetStepDefination.json_body_contain_employee_id_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Get Single Employee Data without providing any id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "i have API",
  "keyword": "Given "
});
formatter.match({
  "location": "GetStepDefination.i_have_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/employee/\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "status code comes as 404",
  "keyword": "Then "
});
formatter.match({
  "location": "GetStepDefination.status_code_comes_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Get Single Employee Data providing id with slash like 4///",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "i have API",
  "keyword": "Given "
});
formatter.match({
  "location": "GetStepDefination.i_have_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/employee/4///\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "status code comes as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "GetStepDefination.status_code_comes_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "json body contain employee id as 4",
  "keyword": "And "
});
formatter.match({
  "location": "GetStepDefination.json_body_contain_employee_id_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Get Single Employee Data providing id as 000004",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "i have API",
  "keyword": "Given "
});
formatter.match({
  "location": "GetStepDefination.i_have_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/employee/00004\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "status code comes as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "GetStepDefination.status_code_comes_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "json body contain employee id as 4",
  "keyword": "And "
});
formatter.match({
  "location": "GetStepDefination.json_body_contain_employee_id_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Get Single Employee Data providing id with space and zero like 0004____",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "i have API",
  "keyword": "Given "
});
formatter.match({
  "location": "GetStepDefination.i_have_API()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/employee/00004    \"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "status code comes as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "GetStepDefination.status_code_comes_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "json body contain employee id as 4",
  "keyword": "And "
});
formatter.match({
  "location": "GetStepDefination.json_body_contain_employee_id_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("classpath:features/postAPI.feature");
formatter.feature({
  "name": "Test POST APIs",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Creat New Record in Database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set header and body to create new employee",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.i_set_header_and_body_to_create_new_employee()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/create\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "json body contain employee \"name\" as \"jaya\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.json_body_contain_employee_as(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "i can find the new user in the system when i get the user",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.i_can_find_the_new_user_in_the_system_when_i_get_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "post request to validate error meassge when no body is sent",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set header and but without any body",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.i_set_header_and_but_without_any_body()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/create\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 422",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"name cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"salary cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"age cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "post request to validate error meassge when no body is sent",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set header and but without any body",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.i_set_header_and_but_without_any_body()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/create\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 422",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"name cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"salary cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"age cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "post request to validate error meassge when empty field values are sent in body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set header and but no values",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.i_set_header_and_but_no_values()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/create\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"name cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"salary cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"age cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "post request to validate error meassge without providing name value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set header and but no values",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.i_set_header_and_but_no_values()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/create\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"name cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "post request to validate error meassge without providing name and age value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set header and but no values",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.i_set_header_and_but_no_values()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/create\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"name cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"age cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "post request to validate error meassge without providing salary and  age value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set header and but no values",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.i_set_header_and_but_no_values()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/create\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"salary cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"age cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "post request to validate error meassge without providing name and age value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set header and but no values",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.i_set_header_and_but_no_values()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/create\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"name cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"age cannot be blank.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "post request to validate error meassge with providing salary value as negative",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set header and but no values",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.i_set_header_and_but_no_values()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/create\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"name cannot be negative value\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "post request to validate error meassge with providing age value as negative",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set header and but no values",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.i_set_header_and_but_no_values()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/create\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"age value should not be negative.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "post request to validate error meassge without providing name as number",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set header and but no values",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.i_set_header_and_but_no_values()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/create\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"name cannot be a number.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "post request to validate error meassge with providing salary value as alphanumeric value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set header and but no values",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.i_set_header_and_but_no_values()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/create\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"salry can not be a alphanumeric value.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "post request to validate error meassge with providing age value as alphanumeric value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set header and but no values",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.i_set_header_and_but_no_values()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/create\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"age can not be a alphanumeric value.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "post request to validate error meassge with providing age as zero",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set header and but no values",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.i_set_header_and_but_no_values()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/create\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"age cannot be zero.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "post request to validate error meassge with providing salary value as alphanumeric value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I set header and but no values",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.i_set_header_and_but_no_values()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit API- with path parameter as \"/create\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetStepDefination.i_Hit_API_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"salry can not be a alphanumeric value.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("classpath:features/putAPI.feature");
formatter.feature({
  "name": "Test PUT APIs",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "put request to upade user in the database",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@put"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit the api with put request to update the existing user details with path parameter as \"/update/2\"",
  "keyword": "When "
});
formatter.match({
  "location": "PutStepDefination.i_Hit_the_api_with_put_request_to_update_the_existing_user_details_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "update An Employee Detaile With Negative Id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@put"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit the api with put request to update the existing user details with path parameter as \"/update/-2\"",
  "keyword": "When "
});
formatter.match({
  "location": "PutStepDefination.i_Hit_the_api_with_put_request_to_update_the_existing_user_details_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"id should not be nagative.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "update An Employee Detailes With Id As Zero",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@put"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit the api with put request to update the existing user details with path parameter as \"/update/0\"",
  "keyword": "When "
});
formatter.match({
  "location": "PutStepDefination.i_Hit_the_api_with_put_request_to_update_the_existing_user_details_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"id should not be zero.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "update An Employee Detailes Without Providing Id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@put"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit the api with put request to update the existing user details with path parameter as \"/update/ \"",
  "keyword": "When "
});
formatter.match({
  "location": "PutStepDefination.i_Hit_the_api_with_put_request_to_update_the_existing_user_details_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"id cannot be zero.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "update An Employee Detailes without Providing Any Input",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@put"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit the api with put request to update the existing user details with path parameter as \"/update/2\"",
  "keyword": "When "
});
formatter.match({
  "location": "PutStepDefination.i_Hit_the_api_with_put_request_to_update_the_existing_user_details_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"fill all fields.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "update An Employee Detailes with as ID as alpabet",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@put"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit the api with put request to update the existing user details with path parameter as \"/update/ja\"",
  "keyword": "When "
});
formatter.match({
  "location": "PutStepDefination.i_Hit_the_api_with_put_request_to_update_the_existing_user_details_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"Id value cannot be alphabet.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "update An Employee Detailes with id as special charecter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@put"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "PostStepDefinations.go_rest_API_is_up_and_Running()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Hit the api with put request to update the existing user details with path parameter as \"/update/##\"",
  "keyword": "When "
});
formatter.match({
  "location": "PutStepDefination.i_Hit_the_api_with_put_request_to_update_the_existing_user_details_with_path_parameter_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "API returns the response with status code as 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PostStepDefinations.api_returns_the_response_with_status_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error meassege displayed as \"Id value cannot be special cherecter.\"",
  "keyword": "And "
});
formatter.match({
  "location": "PostStepDefinations.error_meassege_displayed_as(String)"
});
formatter.result({
  "status": "skipped"
});
});