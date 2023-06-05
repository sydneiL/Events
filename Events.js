function imageEvent(){
    alert("hello");
}

function changeCursor(){
    var theImage= document.getElementById("imgDesertOasis");
    theImage.style.cursor='crosshair';
}

function validateInput(){
    if(document.frmTest.txtName.value==""){
       document.frmTest.txtName.style.backgroundColor="yellow";
       document.frmTest.txtName.style.color="white";
    }

  return false;
}

function showName(){
    var theName=document.getElementById("txtName");
    //alert("The name you entered:"+ theName.value);
    theName.style.backgroundColor="orange";
    theName.style.color="beige";


}