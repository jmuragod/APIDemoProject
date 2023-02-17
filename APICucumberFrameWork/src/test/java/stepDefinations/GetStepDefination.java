package stepDefinations;

import io.cucumber.java.en.*;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

public class GetStepDefination {
	String baseurl="https://dummy.restapiexample.com/api/v1";
	TestContextAPI testContext;
	
	public GetStepDefination(TestContextAPI testContext) {
		this.testContext = testContext;
	}
	
	@Given("i have API")
	public void i_have_API() {
		testContext.req = given().baseUri(baseurl);
	}

	@When("I Hit API- with path parameter as {string}")
	public void i_Hit_API_with_path_parameter_as(String uri) {
		testContext.res=testContext.req.when().get(uri); 
	}

	@Then("status code comes as {int}")
	public void status_code_comes_as(Integer int1) {
		testContext.valRes=testContext.res.then();
		testContext.valRes.statusCode(int1);
	    
	}

	@Then("json body contain employee status as success")
	public void json_body_contain_employee_status_as_success() {
		testContext.valRes.assertThat().body("status", equalTo("success"));
	}

	@Then("all the employee detailes will be return")
	public void all_the_employee_detailes_will_be_return() {
	    System.out.println(testContext.res.asString());
	}

	@When("I Hit API- with quary parameter as {string}")
	public void i_Hit_API_with_quary_parameter_as(String uri1) {
		testContext.res=testContext.req.when().get(uri1); 
		 
	}

	@Then("json body contain employee id as {int}")
	public void json_body_contain_employee_id_as(Integer int1) {
		testContext.valRes.assertThat().body("id", equalTo(int1));
	}

	@Then("single employee details with be returned")
	public void single_employee_details_with_be_returned() {
		System.out.println(testContext.res.asString());
	}

	@Then("response should have bad request error message as {string}")
	public void response_should_have_bad_request_error_message_as(String s) {
		testContext.valRes.assertThat().body("Error Message", equalTo(s));
	}
	
	


}
