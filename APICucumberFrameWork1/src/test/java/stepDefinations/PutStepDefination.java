package stepDefinations;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

import org.junit.Assert;

import io.cucumber.java.en.*;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

public class PutStepDefination {
	String baseurl="https://dummy.restapiexample.com/api/v1";
	TestContextAPI testContext;
	
	public PutStepDefination(TestContextAPI testContext) {
		this.testContext = testContext;
	}
	
	/*@Given("Go rest API is up and Running")
	public void go_rest_API_is_up_and_Running() {
		testContext.req = given().baseUri(baseurl);
	}*/

	@When("I Hit the api with put request to update the existing user details with path parameter as {string}")
	public void i_Hit_the_api_with_put_request_to_update_the_existing_user_details_with_path_parameter_as(String uri) {
		testContext.res=testContext.req.when().put(uri); 
	}

	/*@Then("API returns the response with status code as {int}")
	public void api_returns_the_response_with_status_code_as(Integer int1) {
		valRes=res.then();
	    valRes.statusCode(int1);
	}

	@Then("error meassege displayed as {string}")
	public void error_meassege_displayed_as(String s) {
		 valRes.assertThat().body("Error Message", equalTo(s));
	}*/
}
