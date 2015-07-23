var $x = $('#saveStep');
var aux=false;

$x.click(function(evt) {
 aux= validation();
 console.log(aux);
  if (aux)
    {
        var formPost = document.getElementById('insertForm');
        var myObj = {};
            for(var i = 0; i < formPost.length; i++){
                if(formPost[i].name){
                   myObj[formPost[i].name] = formPost[i].value
                 }
            if(i==formPost.length-1)
                {
                    myObj["idRecipe_step"] = localStorage.getItem('id');
                    myObj["idRecipeStep"] = localStorage.getItem('id');
                }

         }

    console.log(myObj);

        $.ajax({
            url:'/instructions',
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
        alert("Ingresa No. de paso.");
        console.log("VACIO ");
        return false;
    }
    if(campo[1].value == "") {
            alert("Ingresa descripción de paso.");
            console.log("VACIO ");
            return false;
        }
    return true;
}

    function dashLoad() {

            var tokenStorageValue = localStorage.getItem('id');
            if(!tokenStorageValue) {
                location.href="receta.html";
            }
        }