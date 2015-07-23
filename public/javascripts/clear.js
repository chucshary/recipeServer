var $cerrar = $('#finish');
$cerrar.click(function(evt) {
        console.log("ENTRO CERRAR");
        var idStorageValue = localStorage.getItem('id');
        localStorage.clear();
        localStorage.setItem('id',idStorageValue);
        location.reload();
       });

       var $finalizar = $('#finishStep');
       $finalizar.click(function(evt) {
               console.log("ENTRO CERRAR");
               localStorage.clear();
               location.reload();
              });