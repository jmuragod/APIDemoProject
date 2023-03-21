package stepdefs.api;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class MySql {
	static int uid;
	static String uname;
	static String uemail;
	static String ugender;
	static String ustatus;
	public static void main(String[] args) throws SQLException {
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/employees?user=root&password=Jaya22**");
		
		Statement stmt = con.createStatement();
		
		String s = "select * from user";
	
		ResultSet rs = stmt.executeQuery(s);
		
		while(rs.next()) {
			uid = rs.getInt("id");
			uname = rs.getString("name");
			uemail = rs.getString("email");
			ugender = rs.getString("gender");
			ustatus = rs.getString("status");
			
			System.out.println(uid+"  "+uname+"  "+uemail+"  "+ugender+"  "+ustatus);
			
		}
		con.close();
		
		System.out.println("query executed......");
	}
}

