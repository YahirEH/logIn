function validateform( ) {

    var name=document.getElementBy("name").value;
    var password=document.getElementById("password").value;
    if(name == "yahir" && password =="4321") {
        //alert("usuario y contrasena validos")
        window.open('Valentines.html');
    }  {
        alert("intenta de nuevo")
    }
};