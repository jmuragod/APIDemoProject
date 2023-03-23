package cucumber.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="classpath:features",

glue= {"stepdefs.api"},
//tags = "@Sanity",

 plugin= {"pretty",
"html:test-output"},
 dryRun=false
)


public class TestRunner {

}
