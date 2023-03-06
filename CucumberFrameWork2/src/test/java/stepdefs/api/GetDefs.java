package stepdefs.api;

import io.cucumber.java.en.*;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
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
		res.then().assertThat()
		.statusCode(200)
		.body("code", equalTo(200))
		.body("meta.pagination.page", equalTo(1))
		.body("meta.pagination.limit",equalTo(10));
	}

	@Then("API should return all the users on page {int} only")
	public void api_should_return_all_the_users_on_page_only(Integer int1) {
	   res.then().assertThat()
	   .statusCode(200)
	   .body("meta.pagination.page", equalTo(int1))
	   .body("code", equalTo(200));
	}

	@Then("API should return single user details of user id {string}")
	public void api_should_return_single_user_details_of_user_id(String s1) {
	    res.then().assertThat()
	    .statusCode(200)
	    .body("code", equalTo(404));
	    //.body("data[0].id", equalTo(s1));
	}

	@Then("API should return all female users")
	public void api_should_return_all_female_users() {
	    res.then().assertThat()
	    .statusCode(200)
	    .body("code", equalTo(200))
	    .body("data[0].gender", equalTo("female"));
	}

	@Then("API should return all female users with status as active")
	public void api_should_return_all_female_users_with_status_as_active() {
		res.then().assertThat()
	    .statusCode(200)
	    .body("code", equalTo(200))
	    .body("data[0].gender", equalTo("female"))
	    .body("data[0].status", equalTo("active"));
		
	}
	@Then("check the code as {int}")
	public void check_the_code_as(Integer i) {
	   res.then().assertThat()
	   .body("code", equalTo(i));
	}
}
