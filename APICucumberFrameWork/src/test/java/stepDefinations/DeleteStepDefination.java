package stepDefinations;

import io.cucumber.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

public class DeleteStepDefination {
	String baseurl="https://dummy.restapiexample.com/api/v1";
	RequestSpecification req;
	Response res;
	ValidatableResponse valRes;
	@When("I Hit the api with delete request to delete the existing user  with path parameter as {string}")
	public void i_Hit_the_api_with_delete_request_to_delete_the_existing_user_with_path_parameter_as(String uri) {
		res=req.when().delete(uri); 
		System.out.println(res.asString());
	}
	
	@When("I Hit the api with delete request to delete the existing user details with path parameter as {string}")
	public void i_Hit_the_api_with_delete_request_to_delete_the_existing_user_details_with_path_parameter_as(String uri1) {
		res=req.when().delete(uri1); 
		System.out.println(res.asString());
	}


}
