package stepdefs.api;

import io.cucumber.java.en.*;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

import org.junit.Assert;
//import org.junit.Assert.*;
public class GetDefs extends TestBase{	
	
	@Given("Go rest API is Up and Running")
	public void go_rest_API_is_Up_and_Running() {
	   req = given().baseUri(url).auth().oauth2(token);
	}

	@When("I hit api with get request and end point as {string}")
	public void i_hit_api_with_get_request_and_end_point_as(String uri) {
	    res = req.when().get(uri);
	}

	@Then("API should return all the users")
	public void api_should_return_all_the_users() {
		int code= res.then().extract().statusCode();
		int page = res.then().extract().path("meta.pagination.page");
		int limit = res.then().extract().path("meta.pagination.limit");
		
		//res.then().assertThat()
		//.statusCode(200);
		
		Assert.assertEquals(code, 200);
		Assert.assertEquals(page, 1);
		Assert.assertEquals(limit, 10);
		
		
		/*.body("code", equalTo(200))
		.body("meta.pagination.page", equalTo(1))
		.body("meta.pagination.limit",equalTo(10));*/
	}

	@Then("API should return all the users on page {int} only")
	public void api_should_return_all_the_users_on_page_only(int i) {
		int code= res.then().extract().statusCode();
		int page= res.then().extract().path("meta.pagination.page");
		
		Assert.assertEquals(code, 200);
		Assert.assertEquals(page,i);
		
		/*res.then().assertThat()
	   .statusCode(200)
	   .body("meta.pagination.page", equalTo(int1))
	   .body("code", equalTo(200));*/
	}

	@Then("API should return single user details of user id {string}")
	public void api_should_return_single_user_details_of_user_id(String s1) {
		int statuscode= res.then().extract().statusCode();
		int code = res.then().extract().path("code");
		
		Assert.assertEquals(statuscode, 200);
		Assert.assertEquals(code,404);
		
		
		/*res.then().assertThat()
	    .statusCode(200)
	    .body("code", equalTo(404));
	    .body("data[0].id", equalTo(s1));*/
	}

	@Then("API should return all female users")
	public void api_should_return_all_female_users() {
		int statuscode= res.then().extract().statusCode();
		int code = res.then().extract().path("code");
		String gender=res.then().extract().path("data[0].gender");
		
		Assert.assertEquals(statuscode, 200);
		Assert.assertEquals(code, 200);
		Assert.assertEquals(gender, "female");
		
	   /* res.then().assertThat()
	    .statusCode(200)
	    .body("code", equalTo(200))
	    .body("data[0].gender", equalTo("female"));*/
	}

	@Then("API should return all female users with status as active")
	public void api_should_return_all_female_users_with_status_as_active() {
		int statuscode= res.then().extract().statusCode();
		int code = res.then().extract().path("code");
		String gender=res.then().extract().path("data[0].gender");
		String status=res.then().extract().path("data[0].status");
		
		Assert.assertEquals(statuscode, 200);
		Assert.assertEquals(code, 200);
		Assert.assertEquals(gender, "female");
		Assert.assertEquals(status,"active");
		
		
		/*res.then().assertThat()
	    .statusCode(200)
	    .body("code", equalTo(200))
	    .body(, equalTo("female"))
	    .body("data[0].status", equalTo("active"));*/
		
	}
	@Then("check the code as {int}")
	public void check_the_code_as(int i) {
		
		int code = res.then().extract().path("code");
		Assert.assertEquals(code, i);
	   /*res.then().assertThat()
	   .body("code", equalTo(i));*/
	}
}
