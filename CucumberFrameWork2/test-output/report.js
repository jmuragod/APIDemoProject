$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/GetRequests.feature");
formatter.feature({
  "name": "I am testing get request for go rest API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.scenario({
  "name": "Get request to fetch all users",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "Go rest API is Up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetDefs.go_rest_API_is_Up_and_Running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit api with get request and end point as \"/public-api/users\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetDefs.i_hit_api_with_get_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return all the users",
  "keyword": "Then "
});
formatter.match({
  "location": "GetDefs.api_should_return_all_the_users()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get request to Validate pagination",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "Go rest API is Up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetDefs.go_rest_API_is_Up_and_Running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit api with get request and end point as \"/public-api/users?page\u003d5\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetDefs.i_hit_api_with_get_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return all the users on page 5 only",
  "keyword": "Then "
});
formatter.match({
  "location": "GetDefs.api_should_return_all_the_users_on_page_only(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get request to fetch single users",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "Go rest API is Up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetDefs.go_rest_API_is_Up_and_Running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit api with get request and end point as \"/public-api/users/509587\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetDefs.i_hit_api_with_get_request_and_end_point_as(String)"
});
formatter.result({
  "error_message": "javax.net.ssl.SSLHandshakeException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target\r\n\tat java.base/sun.security.ssl.Alert.createSSLException(Alert.java:131)\r\n\tat java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:371)\r\n\tat java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:314)\r\n\tat java.base/sun.security.ssl.TransportContext.fatal(TransportContext.java:309)\r\n\tat java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.checkServerCerts(CertificateMessage.java:1357)\r\n\tat java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.onConsumeCertificate(CertificateMessage.java:1232)\r\n\tat java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.consume(CertificateMessage.java:1175)\r\n\tat java.base/sun.security.ssl.SSLHandshake.consume(SSLHandshake.java:396)\r\n\tat java.base/sun.security.ssl.HandshakeContext.dispatch(HandshakeContext.java:480)\r\n\tat java.base/sun.security.ssl.HandshakeContext.dispatch(HandshakeContext.java:458)\r\n\tat java.base/sun.security.ssl.TransportContext.dispatch(TransportContext.java:201)\r\n\tat java.base/sun.security.ssl.SSLTransport.decode(SSLTransport.java:172)\r\n\tat java.base/sun.security.ssl.SSLSocketImpl.decode(SSLSocketImpl.java:1505)\r\n\tat java.base/sun.security.ssl.SSLSocketImpl.readHandshakeRecord(SSLSocketImpl.java:1420)\r\n\tat java.base/sun.security.ssl.SSLSocketImpl.startHandshake(SSLSocketImpl.java:455)\r\n\tat java.base/sun.security.ssl.SSLSocketImpl.startHandshake(SSLSocketImpl.java:426)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.createLayeredSocket(SSLSocketFactory.java:573)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.connectSocket(SSLSocketFactory.java:557)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.connectSocket(SSLSocketFactory.java:414)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:180)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:326)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:835)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2054)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:494)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:451)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$2.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1450)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1199)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1654)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1660)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat stepdefs.api.GetDefs.i_hit_api_with_get_request_and_end_point_as(GetDefs.java:18)\r\n\tat ✽.I hit api with get request and end point as \"/public-api/users/509587\"(classpath:features/GetRequests.feature:16)\r\nCaused by: sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target\r\n\tat java.base/sun.security.validator.PKIXValidator.doBuild(PKIXValidator.java:439)\r\n\tat java.base/sun.security.validator.PKIXValidator.engineValidate(PKIXValidator.java:306)\r\n\tat java.base/sun.security.validator.Validator.validate(Validator.java:264)\r\n\tat java.base/sun.security.ssl.X509TrustManagerImpl.checkTrusted(X509TrustManagerImpl.java:231)\r\n\tat java.base/sun.security.ssl.X509TrustManagerImpl.checkServerTrusted(X509TrustManagerImpl.java:132)\r\n\tat java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.checkServerCerts(CertificateMessage.java:1341)\r\n\tat java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.onConsumeCertificate(CertificateMessage.java:1232)\r\n\tat java.base/sun.security.ssl.CertificateMessage$T13CertificateConsumer.consume(CertificateMessage.java:1175)\r\n\tat java.base/sun.security.ssl.SSLHandshake.consume(SSLHandshake.java:396)\r\n\tat java.base/sun.security.ssl.HandshakeContext.dispatch(HandshakeContext.java:480)\r\n\tat java.base/sun.security.ssl.HandshakeContext.dispatch(HandshakeContext.java:458)\r\n\tat java.base/sun.security.ssl.TransportContext.dispatch(TransportContext.java:201)\r\n\tat java.base/sun.security.ssl.SSLTransport.decode(SSLTransport.java:172)\r\n\tat java.base/sun.security.ssl.SSLSocketImpl.decode(SSLSocketImpl.java:1505)\r\n\tat java.base/sun.security.ssl.SSLSocketImpl.readHandshakeRecord(SSLSocketImpl.java:1420)\r\n\tat java.base/sun.security.ssl.SSLSocketImpl.startHandshake(SSLSocketImpl.java:455)\r\n\tat java.base/sun.security.ssl.SSLSocketImpl.startHandshake(SSLSocketImpl.java:426)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.createLayeredSocket(SSLSocketFactory.java:573)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.connectSocket(SSLSocketFactory.java:557)\r\n\tat org.apache.http.conn.ssl.SSLSocketFactory.connectSocket(SSLSocketFactory.java:414)\r\n\tat org.apache.http.impl.conn.DefaultClientConnectionOperator.openConnection(DefaultClientConnectionOperator.java:180)\r\n\tat org.apache.http.impl.conn.ManagedClientConnectionImpl.open(ManagedClientConnectionImpl.java:326)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.tryConnect(DefaultRequestDirector.java:610)\r\n\tat org.apache.http.impl.client.DefaultRequestDirector.execute(DefaultRequestDirector.java:445)\r\n\tat org.apache.http.impl.client.AbstractHttpClient.doExecute(AbstractHttpClient.java:835)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:83)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:56)\r\n\tat org.apache.http.client.HttpClient$execute$0.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl$RestAssuredHttpBuilder.doRequest(RequestSpecificationImpl.groovy:2054)\r\n\tat io.restassured.internal.http.HTTPBuilder.doRequest(HTTPBuilder.java:494)\r\n\tat io.restassured.internal.http.HTTPBuilder.request(HTTPBuilder.java:451)\r\n\tat io.restassured.internal.http.HTTPBuilder$request$2.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendHttpRequest(RequestSpecificationImpl.groovy:1450)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat io.restassured.internal.RequestSpecificationImpl.sendRequest(RequestSpecificationImpl.groovy:1199)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:166)\r\n\tat io.restassured.internal.filter.SendRequestFilter.filter(SendRequestFilter.groovy:30)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.time.TimingFilter.filter(TimingFilter.java:56)\r\n\tat io.restassured.filter.Filter$filter.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat io.restassured.filter.Filter$filter$0.call(Unknown Source)\r\n\tat io.restassured.internal.filter.FilterContextImpl.next(FilterContextImpl.groovy:72)\r\n\tat io.restassured.filter.FilterContext$next.call(Unknown Source)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1654)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.applyPathParamsAndSendRequest(RequestSpecificationImpl.groovy:1660)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1035)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:819)\r\n\tat io.restassured.internal.RequestSpecificationImpl.invokeMethod(RequestSpecificationImpl.groovy)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.call(PogoInterceptableSite.java:45)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoInterceptableSite.callCurrent(PogoInterceptableSite.java:55)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:203)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy:171)\r\n\tat io.restassured.internal.RequestSpecificationImpl.get(RequestSpecificationImpl.groovy)\r\n\tat stepdefs.api.GetDefs.i_hit_api_with_get_request_and_end_point_as(GetDefs.java:18)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:57)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target\r\n\tat java.base/sun.security.provider.certpath.SunCertPathBuilder.build(SunCertPathBuilder.java:141)\r\n\tat java.base/sun.security.provider.certpath.SunCertPathBuilder.engineBuild(SunCertPathBuilder.java:126)\r\n\tat java.base/java.security.cert.CertPathBuilder.build(CertPathBuilder.java:297)\r\n\tat java.base/sun.security.validator.PKIXValidator.doBuild(PKIXValidator.java:434)\r\n\t... 139 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "API should return single user details of user id \"509587\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GetDefs.api_should_return_single_user_details_of_user_id(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "check the code as 404",
  "keyword": "And "
});
formatter.match({
  "location": "GetDefs.check_the_code_as(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "API should response status code as 404 for incorrect user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "Go rest API is Up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetDefs.go_rest_API_is_Up_and_Running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit api with get request and end point as \"/public-api/users/50958745678945677655\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetDefs.i_hit_api_with_get_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return single user details of user id \"50958745678945677655\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GetDefs.api_should_return_single_user_details_of_user_id(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the code as 404",
  "keyword": "And "
});
formatter.match({
  "location": "GetDefs.check_the_code_as(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get request to fetch all users with gender as female to check api resourse filter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "Go rest API is Up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetDefs.go_rest_API_is_Up_and_Running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit api with get request and end point as \"/public-api/users?gender\u003dfemale\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetDefs.i_hit_api_with_get_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return all female users",
  "keyword": "Then "
});
formatter.match({
  "location": "GetDefs.api_should_return_all_female_users()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get request to fetch all users with gender as female and status as active",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "Go rest API is Up and Running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetDefs.go_rest_API_is_Up_and_Running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit api with get request and end point as \"/public-api/users?gender\u003dfemale\u0026status\u003dactive\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetDefs.i_hit_api_with_get_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return all female users with status as active",
  "keyword": "Then "
});
formatter.match({
  "location": "GetDefs.api_should_return_all_female_users_with_status_as_active()"
});
formatter.result({
  "status": "passed"
});
});