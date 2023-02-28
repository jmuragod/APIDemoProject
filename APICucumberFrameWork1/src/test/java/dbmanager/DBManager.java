package dbmanager;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
 
public class DBManager {
 
	//for testing only Should be removed
	public static void main(String[] args) throws SQLException, ClassNotFoundException {
		String q = " select * from employee ";
		String [][] result  = FetchDataFromDB(q);
 
		System.out.print(result);
	}
 
	public static String[][] FetchDataFromDB(String query) throws SQLException, ClassNotFoundException {
 
		String url = "jdbc:mysql://localhost:3306/test?user=root&password=Jaya22**";
		DBConnectionManager DBInstance = DBConnectionManager.getInstance(url);
		Connection conn = DBInstance.getConnection();
		Statement stat = conn.createStatement();
		ResultSet rs = stat.executeQuery(query);
 
		//To get total number of Column returned
		int clmCount = rs.getMetaData().getColumnCount();
 
		//To get total number of rows returned
		rs.last();// this will move the rs to last row
		int rowcount = rs.getRow(); // this will give the index of last row
		rs.beforeFirst(); // this will bring it back to first record
		
		System.out.println(rowcount);
		System.out.println(clmCount);
		
		//Create a Object 
		String[][] result = new String[rowcount][clmCount];
		int i=0;
		while(rs.next()) {
 
			for(int j=0;j<clmCount;j++) {
				result[i][j]=rs.getString(j+1);
			}
			i=i+1;
		}
 
		return result;
 
	}
}

