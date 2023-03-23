package stepdefs.api;

import org.apache.commons.lang.RandomStringUtils;
import org.openqa.selenium.WebDriver;

public class BaseClass {
	public WebDriver driver;
	
	public static String randomstring() {
		String generatedString = RandomStringUtils.randomAlphabetic(5);
		return generatedString;
	}
}
