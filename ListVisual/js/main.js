function insertList(){
	
  var list = document.createElement("li");
  var inputVal = document.getElementById("txtAdd").value;
  var textNode = document.createTextNode(inputVal);
  list.appendChild(textNode);
  /* No text should be inserted if the text field is empty on performing insertion */
  if (inputVal === '') {
    alert("Please provide an input!");
  } else {
    document.getElementById("unorderedList").appendChild(list);
  }


}