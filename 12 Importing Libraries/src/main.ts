import "jquery"
import "sweetalert"

$(document).ready(function(){
    console.log("Page is ready")

    $("h1").text("Hello from Typescript")
    $("p").text("A new paragraph writen from Typescript too")
})

$("#test-button").click(function() {
    sweetAlert("Error generated by Typescript", "Somthing went wrong!", "error")
})