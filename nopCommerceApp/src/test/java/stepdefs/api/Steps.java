package stepdefs.api;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.*;

public class Steps extends BaseClass {
	
	@Given("User launch chrome browser")
	public void user_launch_chrome_browser() {
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"//Drivers/chromedriver.exe");
		driver = new ChromeDriver();
	}
	@When("User opens {string}")
	public void user_opens(String url) {
		driver.get(url);
	}
	@When("User enters Email as {string} and password as {string}")
	public void user_enters_email_as_and_password_as(String email, String password) {
	    WebElement email1 = driver.findElement(By.id("Email"));
	    WebElement psw = driver.findElement(By.id("Password"));
	    email1.clear();
	    psw.clear();
	    email1.sendKeys(email);
	    psw.sendKeys(password);
	    
	}
	@When("click on login")
	public void click_on_login() throws InterruptedException {
		driver.findElement(By.xpath("/html/body/div[6]/div/div/div/div/div[2]/div[1]/div/form/div[3]/button")).click();
		Thread.sleep(5000);
	}
	@Then("page Title should be {string}")
	public void page_title_should_be(String msg) throws InterruptedException {
	    if(driver.getPageSource().contains("Login was unsuccessful.")) {
	    	driver.close();
	    	Assert.assertTrue(false);
	    }else {
	    	Assert.assertEquals(msg, driver.getTitle());
	    }
	}
	@When("user click on logout  link")
	public void user_click_on_logout_link() throws InterruptedException {
	    driver.findElement(By.linkText("Logout")).click();
	    Thread.sleep(5000);
	}
	@Then("close the Browser")
	public void close_the_browser() throws InterruptedException {
	    driver.close();
	}
	//-----------------Add new Customer Steps----------
	
	@Then("User can view Dashboad")
	public void user_can_view_dashboad() {
	    String title = driver.getTitle();
	    Assert.assertEquals(title, "Dashboard / nopCommerce administration");
	}
	@When("User Click on customer Menu")
	public void user_click_on_customer_menu() throws InterruptedException {
	   driver.findElement(By.xpath("/html/body/div[3]/aside/div/div[4]/div/div/nav/ul/li[4]/a/p")).click();
	   Thread.sleep(5000);
	}
	@When("click on customers Menu item")
	public void click_on_customers_menu_item() throws InterruptedException {
		 driver.findElement(By.xpath("/html/body/div[3]/aside/div/div[4]/div/div/nav/ul/li[4]/ul/li[1]/a/p")).click();
		 Thread.sleep(5000);
	}
	@When("click on Add new customer page")
	public void click_on_add_new_customer_page() throws InterruptedException {
	    driver.findElement(By.xpath("/html/body/div[3]/div[1]/form[1]/div/div/a")).click();
	    Thread.sleep(5000);
	}
	@When("User enter customer info")
	public void user_enter_customer_info() {
		//Email
	    String email = randomstring()+"@gmail.com";
	    driver.findElement(By.id("Email")).sendKeys(email);
	    
	    //Password
	    driver.findElement(By.id("Password")).sendKeys("3456");
	    
	    //FirstName
	    driver.findElement(By.id("FirstName")).sendKeys("Scott");
	    
	    //LastName
	    driver.findElement(By.id("LastName")).sendKeys("smith");
	    
	    //Gender
	    String gender = "Male";
	    if(gender.equals("Male")) {
	    	driver.findElement(By.id("Gender_Male")).click();
	    }else if(gender.equals("Female")) {
	    	driver.findElement(By.id("Gender_Female"));
	    }
	    
	    //Date of Birth
	    driver.findElement(By.id("DateOfBirth")).sendKeys("3/28/2023");
	    
	    //Company
	    driver.findElement(By.id("Company")).sendKeys("ABC");
	    
	    //"IsTaxExempt"
	    driver.findElement(By.id("IsTaxExempt")).click();
	    
	    //Active
	    driver.findElement(By.id("Active")).click();
	    
	    //"AdminComment"
	    
	    driver.findElement(By.id("AdminComment")).sendKeys("Add new customer");
	}
	@When("click on Save button")
	public void click_on_save_button() {
	    driver.findElement(By.xpath("/html/body/div[3]/div[1]/form/div[1]/div/button[1]")).click();
	}
	@Then("User can view confirmation message {string}")
	public void user_can_view_confirmation_message(String msg) {
	    Assert.assertTrue(driver.findElement(By.tagName("body")).getText().contains(msg));
	}
	//-------------Search customer by emailid---------
	@When("enter customer Email")
	public void enter_customer_email() {
	    driver.findElement(By.id("SearchEmail")).sendKeys("james_pan@nopCommerce.com");
	}
	@When("click on search button")
	public void click_on_search_button() {
	   driver.findElement(By.id("search-customers")).click();
	}
	@Then("user should found email in the Search table")
	public boolean user_should_found_email_in_the_search_table() {
	   WebElement table = driver.findElement(By.xpath("//*[@id=\"customers-grid_wrapper\"]/div[1]/div"));
	   List<WebElement>tableRows = driver.findElements(By.xpath("//*[@id=\"customers-grid_wrapper\"]/div[1]/div//tbody/tr"));
	   boolean flag=false;
	   WebElement email=driver.findElement(By.xpath("//*[@id=\"customers-grid\"]/tbody/tr/td[2]"));
	   for(int i=1;i<tableRows.size();i++) {
		   if(email.equals("james_pan@nopCommerce.com")) {
			   flag = true;
		   }
	   }
	   return flag;
	}
	//--------------Search customer by Name-------
	@When("enter customer FirstName")
	public void enter_customer_first_name() {
	    driver.findElement(By.id("SearchFirstName")).sendKeys("James");
	}
	@When("enter customer LastName")
	public void enter_customer_last_name() {
	    driver.findElement(By.id("SearchLastName")).sendKeys("Pan");
	}
	@Then("user should found Name in the Search table")
	public boolean user_should_found_name_in_the_search_table() {
		WebElement table = driver.findElement(By.xpath("//*[@id=\"customers-grid_wrapper\"]/div[1]/div"));
		   List<WebElement>tableRows = driver.findElements(By.xpath("//*[@id=\"customers-grid_wrapper\"]/div[1]/div//tbody/tr"));
		   boolean flag=false;
		   WebElement Name = driver.findElement(By.xpath("//*[@id=\"customers-grid\"]/tbody/tr/td[3]"));
		   for(int i=1;i<tableRows.size();i++) {
			   if(Name.equals("James Pan")) {
				   flag = true;
			   }
		   }
		   return flag;
	}
}
