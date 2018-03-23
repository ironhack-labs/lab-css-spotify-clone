console.log("food.js");

var myBtn = document.querySelector(".add-btn");
myBtn.onclick = function (){

    var newItem = document.createElement("li");
   
    var myInput = document.querySelector(".food-input");
    
    if (myInput.value === "") {
        return;
    }

    newItem.innerHTML = myInput.value;

    var theList = document.querySelector(".food-list");

    theList.appendChild(newItem);
 
    myInput.value = "";
};

var deleteButtons = document.querySelectorAll(".food-list button");

deleteButtons.forEach(function (oneButton) {
    oneButton.onClick = function (){
        var clickedButton = event.target;
        var clickedLi = clickedButton.parentNode;
    };

});