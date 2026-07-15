let browser = "Chrome";
function checkBrowserVersion(callback){
   setTimeout(() => {
    callback(browser)
   }, 2000); // Waits for 2 seconds
}
function version(browserversion){
    console.log("Browser version")
}checkBrowserVersion(version)