console.log("script.js");

function loading(){
    document.getElementById("byobSection").style.display = "none";
    document.getElementById("signatureDishesSection").style.display = "flex";
    document.getElementById("signatureBtn").style.border = "1px solid #2B416E";
    document.getElementById("signatureBtn").style.color = "#2B416E";
}

document.onload = loading();

document.getElementById("signatureBtn").addEventListener("click", function(){
    document.getElementById("signatureBtn").style.border = "1px solid #2B416E";
    document.getElementById("signatureBtn").style.color = "#2B416E";
    document.getElementById("buildYourOwnBagBtn").style.border = "1px solid #aaaaaa";
    document.getElementById("buildYourOwnBagBtn").style.color = "#aaaaaa";
    document.getElementById("signatureDishesSection").style.display = "flex";
    document.getElementById("byobSection").style.display = "none";
})
document.getElementById("buildYourOwnBagBtn").addEventListener("click", function(){
    document.getElementById("buildYourOwnBagBtn").style.border = "1px solid #2B416E";
    document.getElementById("buildYourOwnBagBtn").style.color = "#2B416E";
    document.getElementById("signatureBtn").style.border = "1px solid #aaaaaa";
    document.getElementById("signatureBtn").style.color = "#aaaaaa";
    document.getElementById("signatureDishesSection").style.display = "none";
    document.getElementById("byobSection").style.display = "flex";
})













