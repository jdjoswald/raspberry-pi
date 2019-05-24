var p = false;

function login(nom,pass){

    if (nom =="jdjoswald" && pass == 1){  

      document.write("bienvenido" + " " + nom)
      return true

    }  

    else{

        alert("nombre de usuario  o contraseña incorrecto");
        return false
    } 

}

while( p == false ){

    nombre  = prompt("ingreasa el un nombre");
    password = prompt ("contraseña");
    p = login(nombre, password);

   
}


