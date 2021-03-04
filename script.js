console.log("script.js");

document.getElementById("signatureBtn").addEventListener("click", function(){
    document.getElementById("signatureBtn").style.border = "1px solid black";
    document.getElementById("signatureBtn").style.color = "#f77355";
    // 
    document.getElementById("buildYourOwnBagBtn").style.border = "1px solid #aaaaaa";
    document.getElementById("buildYourOwnBagBtn").style.color = "black";
})
document.getElementById("buildYourOwnBagBtn").addEventListener("click", function(){
    document.getElementById("buildYourOwnBagBtn").style.border = "1px solid black";
    document.getElementById("buildYourOwnBagBtn").style.color = "#f77355";

    document.getElementById("signatureBtn").style.border = "1px solid #aaaaaa";
    document.getElementById("signatureBtn").style.color = "black";
})












