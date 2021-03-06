console.log("script.js");

document.getElementById("signatureBtn").addEventListener("click", function(){
    document.getElementById("signatureBtn").style.border = "1px solid #2B416E";
    document.getElementById("signatureBtn").style.color = "#2B416E";
    // 
    document.getElementById("buildYourOwnBagBtn").style.border = "1px solid #aaaaaa";
    document.getElementById("buildYourOwnBagBtn").style.color = "#aaaaaa";
})
document.getElementById("buildYourOwnBagBtn").addEventListener("click", function(){
    document.getElementById("buildYourOwnBagBtn").style.border = "1px solid #2B416E";
    document.getElementById("buildYourOwnBagBtn").style.color = "#2B416E";

    document.getElementById("signatureBtn").style.border = "1px solid #aaaaaa";
    document.getElementById("signatureBtn").style.color = "#aaaaaa";
})












