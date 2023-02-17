package stepDefinations;

import static io.restassured.RestAssured.given;

import java.util.HashMap;

import org.junit.Assert;

import static org.hamcrest.Matchers.equalTo;
import io.cucumber.java.en.*;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

public class PostStepDefinations {
	String baseurl="https://dummy.restapiexample.com/api/v1";
	TestContextAPI testContext;
	
	public PostStepDefinations(TestContextAPI testContext) {
		this.testContext = testContext;
	}
	
	@Given("Go rest API is up and Running")
	public void go_rest_API_is_up_and_Running() {
		testContext.req = given().baseUri(baseurl);
	}

	@Given("I set header and body to create new employee")
	public void i_set_header_and_body_to_create_new_employee() {
		
		HashMap data = new HashMap();
		data.put("name", "jaya");
		data.put("salary",33);
		data.put("age",11);
		testContext.req.body(data);
		
		HashMap data1 = new HashMap();
		data1.put("Content-Type", "application/json");
		testContext.req.headers(data1);
		
	}
	@Then("API returns the response with status code as {int}")
	public void api_returns_the_response_with_status_code_as(Integer int1) {
		testContext.valRes=testContext.res.then();
		testContext.valRes.statusCode(int1);
	}

	@Then("json body contain employee {string} as {string}")
	public void json_body_contain_employee_as(String s1, String s2) {
		testContext.valRes.body(s1,equalTo(s2));
	}

	@Then("i can find the new user in the system when i get the user")
	public void i_can_find_the_new_user_in_the_system_when_i_get_the_user() {
	    System.out.println(testContext.res);
	}

	@Given("I set header and but without any body")
	public void i_set_header_and_but_without_any_body() {
		HashMap<String,String> hm_header = new HashMap<String,String>();
		hm_header.put("Content-Type", "application/json");		
		testContext.req.headers(hm_header);
	}

	@Then("error meassege displayed as {string}")
	public void error_meassege_displayed_as(String msg) {
		String body_as_string = testContext.res.asString();
		Assert.assertTrue("Validation failed. Error Message not found." , body_as_string.contains(msg));	}

	@Given("I set header and but no values")
	public void i_set_header_and_but_no_values() {
		HashMap<String,String> hm_header = new HashMap<String,String>();
		hm_header.put("Content-Type", "application/json");

		String body_string = "{\n" + 
				"	\"name\":\"\",\n" + 
				"	\"salary\":\"\",\n" + 
				"	\"age\":\"\",\n" + 
				"}";
		testContext.req.headers(hm_header).body(body_string);
	}



}
