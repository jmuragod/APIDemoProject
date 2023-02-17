package stepDefinations;

import io.cucumber.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

public class DeleteStepDefination {
	String baseurl="https://dummy.restapiexample.com/api/v1";
	TestContextAPI testContext;
	
	public DeleteStepDefination(TestContextAPI testContext) {
		this.testContext = testContext;
	}
	@When("I Hit the api with delete request to delete the existing user  with path parameter as {string}")
	public void i_Hit_the_api_with_delete_request_to_delete_the_existing_user_with_path_parameter_as(String uri) {
		testContext.res=testContext.req.when().delete(uri); 
		System.out.println(testContext.res.asString());
	}
	
	@When("I Hit the api with delete request to delete the existing user details with path parameter as {string}")
	public void i_Hit_the_api_with_delete_request_to_delete_the_existing_user_details_with_path_parameter_as(String uri1) {
		testContext.res=testContext.req.when().delete(uri1); 
		System.out.println(testContext.res.asString());
	}


}
