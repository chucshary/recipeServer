var $x = $('#save');
var aux=false;

$x.click(function(evt) {
 aux= validation();
 console.log(aux);
  if (aux)
    {
        var formPost = document.getElementById('insertForm');
        var myObj = {};
            for(var i = 0; i < formPost.length; i++){
            if(i!=4)
            {
                if(formPost[i].name){
                   myObj[formPost[i].name] = formPost[i].value
                 }
            }
            if(i==3)
            {
                if(formPost[i].name){
                                   myObj[formPost[i].name] = formPost[i].value + " "+ formPost[i+1].value
                                 }
            }
         }

    console.log(myObj);


        $.ajax({
            url:'/recipes',
            type :  "POST",
            contentType: 'application/json',
            dataType: 'JSON',
            data: JSON.stringify(myObj),
            success : function(data) {
            location.href= 'ingredientes.html';
            localStorage.setItem('id',data.id);
            localStorage.setItem('nombre',data.nombre);
            console.log(data);
            },
            error : function() {
            console.log("An error ocurred");
            }
            });
        }

});

function validation() {
var campo = document.getElementById("insertForm");
    if(campo[0].value == "") {
        alert("Ingresa nombre de laReceta.");
        console.log("VACIO ");
        return false;
    }
    if(campo[3].value == "") {
            alert("Ingresa duración Receta (No. Entero).");
            console.log("VACIO ");
            return false;
        }
     if(campo[5].value == "") {
                alert("Ingresa porción Receta (No. Entero).");
                console.log("VACIO ");
                return false;
            }
    return true;
}


 function load() {

        var tokenStorageValue = localStorage.getItem('nombre');
        if(tokenStorageValue) {
            location.href="ingredientes.html";
        }
    }
