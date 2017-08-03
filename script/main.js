
function addText(){
  var objInput = document.getElementsByClassName("input")[0];
   if(objInput.value){
     var texts = objInput.value.split(',');
       for(var i = 0; i <= texts.length - 1; i ++){
           var obj = document.createElement("Button");
            obj.className="textButton";
            obj.innerHTML = texts[i] + "<span class='deleted' onclick='handleClick(event)'>X</span>";
            document.getElementsByClassName("div_bottom")[0].appendChild(obj);
       }
   }
  objInput.value = "";
  var dialogDiv = document.getElementsByClassName("div_dialog")[0];
  dialogDiv.style.display = "none";
}

function handleClick(event) {
  event.target.parentNode.remove();
}

function showDialog() {
 var obj = document.getElementsByClassName("div_dialog")[0];
 obj.style.display = "inline-block";
}

function cancel() {
  var obj = document.getElementsByClassName("div_dialog")[0];
  obj.style.display = "none";
}

