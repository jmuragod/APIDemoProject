package stepdefs.api;



import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

public class TestBase {
	public static RequestSpecification req=null;
	public static Response res=null;
	public static  ValidatableResponse valRes=null;
	String url ="https://gorest.co.in";
	String token = "9ffe59774193bb28b4da040eef49fe9e0edf773d974f38dff6ea18e62abc6875";
	
	}
