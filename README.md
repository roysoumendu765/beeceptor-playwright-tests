# To Start the Application
- First clone the repository
- `npm install` into the root directory
- replace the userdetails and project names
- `npx playwright test`

# Implementation
-  Automate this feature using Playwright.dev: Beeceptor has a feature called 'Proxy / Callout Rule'. The documentation for it is present here: https://beeceptor.com/docs/proxy-rule-http-callout/#how-to-configure-a-proxy-rule . Automate the steps mentioned there using Playwright and add required validations

# Tasks Done
1) Navigate to your endpoint's dashboard and click on 'Mock rules' to open the list of rules.
2) Select 'Additional Rule Types' and click on 'Create Proxy or Callout'.
3) In the 'Create Rule' screen, define the request matching criteria just like in standard rules. Specify    parameters such as HTTP method, URL path, headers, and query parameters to match.
4) In the 'Synchronous Response Configuration' section, select the response behavior. Choose whether the original request should wait for the callout's response or if an instant mock response should be sent.
    - Wait for Callout Response: The original request waits for the callout's response. The response (headers, status code, payload) received from the callout is routed back to the original caller.
    - Instant Mock Response: Send an immediate mock response without waiting for the callout's response.
5) In the 'Asynchronous Request Configuration (HTTP Callout)' section, define the callout parameters. Specify the HTTP method and request path where the request should be triggered. You can choose to create a new request payload or forward the original request as-is. You can enable the template engine to include parameters from the original request payload, query parameters, or mocked response payload.

- Recorded the video of the running testcases.


