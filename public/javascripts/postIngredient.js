var $x = $('#saveIng');
var aux=false;

$x.click(function(evt) {
 aux= validation();
 console.log(aux);
  if (aux)
    {
        var formPost = document.getElementById('insertForm');
        var myObj = {};
            for(var i = 0; i < formPost.length; i++){
            if(i!=2)
            {
                if(formPost[i].name){
                   myObj[formPost[i].name] = formPost[i].value
                 }
            }
            if(i==1)
            {
                if(formPost[i].name){
                    myObj[formPost[i].name] = formPost[i].value + " "+ formPost[i+1].value
               }
            }
            if(i==formPost.length-1)
                {
                    myObj["idRecipeIngredient"] = localStorage.getItem('id');
                    myObj["idRecipe"] = localStorage.getItem('id');
                 }

         }

    console.log(myObj);

        $.ajax({
            url:'/ingredients',
            type :  "POST",
            contentType: 'application/json',
            dataType: 'JSON',
            data: JSON.stringify(myObj),
            success : function(data) {

            console.log(data);
            },
            error : function() {
            console.log("An error ocurred");
            }
            });
            location.reload();
        }

});

function validation() {
var campo = document.getElementById("insertForm");
    if(campo[0].value == "") {
        alert("Ingresa nombre de Ingrediente.");
        console.log("VACIO ");
        return false;
    }
    if(campo[1].value == "") {
            alert("Ingresa cantidad de Ingrediente (No. Entero).");
            console.log("VACIO ");
            return false;
        }
    return true;
}

    function dashLoad() {

            var tokenStorageValue = localStorage.getItem('nombre');
            if(!tokenStorageValue) {
                location.href="instruccion.html";
            }
        }