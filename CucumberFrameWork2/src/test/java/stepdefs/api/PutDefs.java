package stepdefs.api;

import static io.restassured.RestAssured.given;

import java.util.HashMap;

import org.junit.Assert;

import io.cucumber.java.en.*;

public class PutDefs extends TestBase {
	static String id;
	@Given("I have a new user created in the system")
	public void i_have_a_new_user_created_in_the_system() {
		req = given().baseUri(url).auth().oauth2(token);
		HashMap<String, String> header = new HashMap();
		header.put("Content-Type", "application/json");
		
		HashMap data = new HashMap();
		data.put("name", "tiger");
		data.put("email","tiger@gmail.com");
		data.put("gender","male");
		data.put("status","active");
		
		req.headers(header).body(data);
		
	    res=req.when().post("/public-api/users");
	    //System.out.println(res.asString());
	}

	@When("I hit the api with put request to update the existing user details")
	public void i_hit_the_api_with_put_request_to_update_the_existing_user_details() {
		id=res.jsonPath().getString("data.id");
		HashMap<String, String> header = new HashMap();
		header.put("Content-Type", "application/json");
		
		HashMap data = new HashMap();
		data.put("name", "lion");
		data.put("email","lion12@gmail.com");
		
		req.headers(header).body(data);
		res=req.when().put("/public-api/users/"+id);
	}

	@Then("API should update the user")
	public void api_should_update_the_user() {
		int statuscode= res.then().extract().statusCode();
		int code = res.then().extract().path("code");
		String gender=res.then().extract().path("data[0].gender");
		String status=res.then().extract().path("data[0].status");
		String name = res.then().extract().path("data[0].name");
		String email = res.then().extract().path("data[0].email");

		Assert.assertEquals(statuscode, 200);
		Assert.assertEquals(code, 404);
		Assert.assertEquals(name,"lion");
		Assert.assertEquals(gender, "male");
		Assert.assertEquals(email, "lion12@gmail.com");
		Assert.assertEquals(status,"active");
	}

	@Then("get request to the user should return updated information")
	public void get_request_to_the_user_should_return_updated_information() {
		req = given().baseUri(url).auth().oauth2(token);
		res = req.when().get("/public-api/users/"+id);
		
		int statuscode= res.then().extract().statusCode();
		int code = res.then().extract().path("code");
		String gender=res.then().extract().path("data[0].gender");
		String status=res.then().extract().path("data[0].status");
		String name = res.then().extract().path("data[0].name");
		

		Assert.assertEquals(statuscode, 200);
		Assert.assertEquals(code, 200);
		Assert.assertEquals(name,"lion");
		Assert.assertEquals(gender, "male");
		Assert.assertEquals(status,"active");
	}

	@When("I hit the api with put request and setting wrong email")
	public void i_hit_the_api_with_put_request_and_setting_wrong_email() {
		HashMap<String, String> header = new HashMap();
		header.put("Content-Type", "application/json");
		
		HashMap data = new HashMap();
		data.put("name", "lion");
		data.put("email",12345);
		data.put("gender","male");
		data.put("status","active");
		
		req.body(data);
		
		//String email = res.then().extract().path("data[0].email");
		
	}

	@When("I hit the api with put request to update the incorrect user")
	public void i_hit_the_api_with_put_request_to_update_the_incorrect_user() {
		HashMap<String, String> header = new HashMap();
		header.put("Content-Type", "application/json");
		
		HashMap data = new HashMap();
		data.put("name", true);
		data.put("email",12345);
		data.put("gender",6754);
		data.put("status","dfct123");
		
		req.body(data);
	}
}
