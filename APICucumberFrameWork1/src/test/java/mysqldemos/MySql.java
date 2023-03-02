package mysqldemos;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class MySql {
	static String ename;
	static int  eage;
	static double esalary;
	public static void main(String[] args) throws SQLException {
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/test?user=root&password=Jaya22**");
		
		Statement stmt = con.createStatement();
		
		String s = "select * from employee";
	
		ResultSet rs = stmt.executeQuery(s);
		
		while(rs.next()) {
			ename = rs.getString("name");
			eage = rs.getInt("age");
			esalary = rs.getDouble("salary");
			System.out.println(ename+"  "+eage+"  "+esalary);
			
		}
		//con.close();
		
		//System.out.println("query executed......");
	}
}
