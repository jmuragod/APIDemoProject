package cucumber.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="classpath:features",

glue= {"stepDefinations"},
 
 plugin= {"pretty",
"html:test-output"},
 dryRun=true
)


public class TestRunner{

} 
