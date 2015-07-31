var $x = $('#save');
var aux=false;
var globalNombreImagen="";
var globalBase64="";

$x.click(function(evt) {
 aux= validation();
 console.log(aux);
  if (aux&&globalBase64!="")
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
            if(i==formPost.length-1)
                {
                     myObj["nombreimagen"] = globalNombreImagen;
                     myObj["base64"] = globalBase64;
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
        else
        {
             alert("Seleccione una imagen.");
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


    function encodeImage(){
        var files = event.target.files;
        var photoFile = files[0];
        console.log(photoFile);
        var imagenReceta=photoFile.name;

        console.log("NOMBRE   "+ imagenReceta);

            var reader = new FileReader();
            reader.onload = function(){
            var dataURL = reader.result;
            var output = document.getElementById('photo-preview');
            output.src = dataURL;

            var canvas = document.createElement('canvas');
                  canvas.width = 100;
                  canvas.height = 100;
                    var img = new Image();
                    img.src = dataURL;
                    var ctx = canvas.getContext("2d");
                    ctx.drawImage(img, 0, 0, 100, 100);

                var extImg="";
                var indice=0;
                for (i = 0; i < dataURL.length; i++) {
                    if(i>=11){
                        if(dataURL.charAt(i) != ';'){
                            extImg+= dataURL.charAt(i);
                        }
                        else{
                            indice = i;
                            break;
                        }
                    }
                }
                var finalFile = canvas.toDataURL("image/"+extImg);
                var stringBase64 = dataURL.substring(indice+8);
                var base64Small=finalFile.replace("data:image/"+extImg+";base64,", "");


                globalNombreImagen=imagenReceta;
                globalBase64=base64Small.toString();

                 console.log("La extension es: "+extImg+" la cadena base64 de la img grande es "+stringBase64);
                            console.log("La extension es: "+extImg+" la cadena base64 de la img pequeña es "+base64Small.toString());
                    };
        reader.readAsDataURL(photoFile);
    };
