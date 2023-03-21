package stepdefs.api;

import static io.restassured.RestAssured.given;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import io.cucumber.java.en.*;
import static org.hamcrest.Matchers.equalTo;
public class DataBaseValidation {

	    // Declaration of the variables
	    
	    private final String url = "jdbc:mysql://localhost:3306/employees?user=root&password=Jaya22**";
	    public static int uid = 0;
	    public static String uname = null;
		public static String uemail=null;
		public static String ugender=null;
		public static String ustatus=null;

	    // Method to initalize connection to the database and execute query
	    
	    public void connect() {

	        try {
	            Connection conn = DriverManager.getConnection(url);
	            {
	                if (conn != null) {

	                    PreparedStatement pst = conn.prepareStatement("select * from user");
	                    ResultSet rs = pst.executeQuery();
	                    {
	                        while (rs.next()) {

	                            uname = rs.getString("name");
	                            uid = rs.getInt("id");
	                            uemail = rs.getString("email");
	                            ugender = rs.getString("gender");
	                            ustatus = rs.getString("status");
	                            
	                            System.out.println(uid+"  "+uname+"  "+uemail+"  "+ugender+"  "+ustatus);
	                        }
	                    }

	                } else
	                    System.out.println("Failed to connect");
	            }

	        } catch (SQLException e) {
	            System.out.println(e.getMessage());
	        }
	    }

	    // Main method and Rest Assured Code
	    
	    public static void main(String[] args) {
	    	DataBaseValidation app = new DataBaseValidation();
	        app.connect();      
	        given()
	        .when().get("https://gorest.co.in/public-api/users")
	        
	        .then()
	        .body("data[0].id", equalTo(uid))
	        .body("data[0].name", equalTo(uname))
	        .body("data[0].email", equalTo(uemail))
	        .body("data[0].gender",equalTo(ugender))
	        .body("data[0].status", equalTo(ustatus));
	        System.out.println("Execution Successful");
	    }

	
}
