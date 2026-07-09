let browserName  = "Chrome"
function lanchbrowser(){
if (browserName  == "Chrome"){
    console.log("the browser is ",browserName);
}else{
    console.log("the browser  is not chrome");
}
}
lanchbrowser()

let testtype="String"
switch(testtype){
case  "Sanity" :
        console.log("Sanity");
        break
    case "regression" :
        console.log("regression");
        break
    default:
        console.log("smoke");
        break;
    
    }


    

