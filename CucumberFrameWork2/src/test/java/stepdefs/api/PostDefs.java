package stepdefs.api;

import io.cucumber.java.en.*;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

import java.util.HashMap;
public class PostDefs extends TestBase {
	
	@Given("I set header and body to create a new user")
	public void i_set_header_and_body_to_create_a_new_user() {
		HashMap<String, String> header = new HashMap();
		header.put("Content-Type", "application/json");
		
		HashMap data = new HashMap();
		data.put("name", "Scott");
		data.put("email","Scott@gmail.com");
		data.put("gender","male");
		data.put("status","active");
		
		req.headers(header).body(data);
	}

	@When("I hit api with post request and end point as {string}")
	public void i_hit_api_with_post_request_and_end_point_as(String uri) {
	   res = req.when().post(uri);
	}

	@Then("API will created new user in the system")
	public void api_will_created_new_user_in_the_system() {
	    res.then().assertThat()
	    .statusCode(200)
	    .body("code", equalTo(201))
	    .body("data.name", equalTo("Scott"))
	    .body("data.gender", equalTo("male"))
	    .body("data.status", equalTo("active"));
	    
	}

	/*@Then("I can find new user in the system when i get user")
	public void i_can_find_new_user_in_the_system_when_i_get_user() {
	   
	}*/

}
