# mock-js-source

`run ./runme.sh`

This will install the angular app, run the angular app in the background, install testcafe, and run the test.

Expectations: The url is logged out to the console, but nothing is logged.

Don't forget npm is running in the background.

### To kill the background process.
`ps`  
Find the `pid` for the `ng serve`  
`kill -9 *pid*`