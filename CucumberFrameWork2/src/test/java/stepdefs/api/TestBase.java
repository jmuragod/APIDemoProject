package stepdefs.api;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

public class TestBase {
	protected RequestSpecification req=null;
	protected Response res=null;
	protected ValidatableResponse valRes=null;
	String url ="https://gorest.co.in";
	String token = "9ffe59774193bb28b4da040eef49fe9e0edf773d974f38dff6ea18e62abc6875";
	
	}
