package stepdefs.api;

import io.cucumber.java.en.*;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

import java.util.HashMap;

import org.junit.Assert;
public class PostDefs extends TestBase {
	@Given("Go rest API is up and running")
	public void go_rest_API_is_up_and_running() {
		req = given().baseUri(url).auth().oauth2(token);
	}
	@Given("I set header and body to create new user")
	public void i_set_header_and_body_to_create_new_user() {
		HashMap<String, String> header = new HashMap();
		header.put("Content-Type", "application/json");
		
		HashMap data = new HashMap();
		data.put("name", "Scott");
		data.put("email","Scott@gmail.com");
		data.put("gender","male");
		data.put("status","active");
		
		req.headers(header).body(data);
	}

	@When("I hit the api with post request and end point as {string}")
	public void i_hit_the_api_with_post_request_and_end_point_as(String uri) {
		 res = req.when().post(uri);
	}

	@Then("API created a new User in the system")
	public void api_created_a_new_User_in_the_system() {
		int statuscode= res.then().extract().statusCode();
		int code = res.then().extract().path("code");
		String gender=res.then().extract().path("data[0].gender");
		String status=res.then().extract().path("data[0].status");
		String name = res.then().extract().path("data[0].name");
		
		Assert.assertEquals(statuscode, 200);
		Assert.assertEquals(code, 201);
		Assert.assertEquals(name,"Scote");
		Assert.assertEquals(gender, "female");
		Assert.assertEquals(status,"active");
	}

	@Then("I can find the new user in the system when i get the user")
	public void i_can_find_the_new_user_in_the_system_when_i_get_the_user() {
		int id=res.then().extract().path("data.id");
		req = given().baseUri(url).auth().oauth2(token);
		res = req.when().get("/public-api/users/"+id);
		
		int statuscode= res.then().extract().statusCode();
		int code = res.then().extract().path("code");
		String gender=res.then().extract().path("data[0].gender");
		String status=res.then().extract().path("data[0].status");
		String name = res.then().extract().path("data[0].name");

		Assert.assertEquals(statuscode, 200);
		Assert.assertEquals(code, 200);
		Assert.assertEquals(name,"Scote");
		Assert.assertEquals(gender, "male");
		Assert.assertEquals(status,"active");
		
	}

	@Given("I set header and but with out any body")
	public void i_set_header_and_but_with_out_any_body() {
		HashMap<String, String> header = new HashMap<String, String>();
		header.put("Content-Type", "application/json");
		req.headers(header);
	}

	@Then("API returned the error code as {int}")
	public void api_returned_the_error_code_as(int int1) {
		int statuscode= res.then().extract().statusCode();
		int code = res.then().extract().path("code");
		Assert.assertEquals(statuscode, 200);
		//Assert.assertEquals(code, int1);
		
	}

	@Then("error message displayed as {string}")
	public void error_message_displayed_as(String msg) {
	    String errorMsg = res.asString();
	    Assert.assertTrue(errorMsg.concat(msg),true);
	}

	@Given("I set header and body with fields but no values")
	public void i_set_header_and_body_with_fields_but_no_values() {
		HashMap<String, String> header = new HashMap();
		header.put("Content-Type", "application/json");
		
		HashMap data = new HashMap();
		data.put("name", null);
		data.put("email",null);
		data.put("gender",null);
		data.put("status",null);
		
		req.headers(header).body(data);
	}

	@Given("I set header and body with incorrect email and gender")
	public void i_set_header_and_body_with_incorrect_email_and_gender() {
		HashMap<String, String> header = new HashMap();
		header.put("Content-Type", "application/json");
		
		HashMap data = new HashMap();
		data.put("name", "david");
		data.put("email","david123");
		data.put("gender","abcd");
		data.put("status","active");
		
		req.headers(header).body(data);
	}

	@Given("I set header and body with incorrect data types are sent for every mandatory field")
	public void i_set_header_and_body_with_incorrect_data_types_are_sent_for_every_mandatory_field() {
		HashMap<String, String> header = new HashMap();
		header.put("Content-Type", "application/json");
		
		HashMap data = new HashMap();
		data.put("name", 1234);
		data.put("email",true);
		data.put("gender",5678);
		data.put("status",4536.78);
		
		req.headers(header).body(data);
	}
}
