package stepdefs.api;

import static io.restassured.RestAssured.given;

import java.util.HashMap;

import org.junit.Assert;

import io.cucumber.java.en.*;
import io.restassured.response.Response;

public class deleteDefs extends TestBase{
	String id;
	@When("I hit the api with delete request")
	public void i_hit_the_api_with_delete_request() {
		req = given().baseUri(url).auth().oauth2(token);
		HashMap<String, String> header = new HashMap();
		header.put("Content-Type", "application/json");
		
		HashMap data = new HashMap();
		data.put("name", "Scott12");
		data.put("email","Scott12@gmail.com");
		data.put("gender","male");
		data.put("status","active");
		
		req.headers(header).body(data);
		res = req.when().post("public-api/users");
		id=res.jsonPath().getString("data.id");
		res = req.when().delete("https://gorest.co.in/public-api/users/"+id);
	}

	@Then("API should delete the user")
	public void api_should_delete_the_user() {
		int statuscode= res.then().extract().statusCode();
		int code = res.then().extract().path("code");
		Assert.assertEquals(statuscode, 200);
		Assert.assertEquals(code, 204);
	}

	@Then("get request to the user should not return the user")
	public void get_request_to_the_user_should_not_return_the_user() {
		Response res = given()
				.baseUri(url)
				.auth().oauth2(token)
				.when()
				.get("/public-api/users/" + id);
		
		int statuscode= res.then().extract().statusCode();
		int code = res.then().extract().path("code");
		String meta = res.then().extract().path("meta");
		String ErrorMsg = res.then().extract().path("data.message");
		
		Assert.assertEquals(statuscode, 200);
		Assert.assertEquals(code, 404);
		Assert.assertEquals(meta, null);
		Assert.assertEquals(ErrorMsg, "Resource not found");
		
	}
}
