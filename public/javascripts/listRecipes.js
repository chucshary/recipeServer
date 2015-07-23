var $recipesDiv = $('#recipes');

$.ajax({
    url:'/recipes',
    type:'GET',
    success: function(recipes){
    console.log(recipes);

    var html='';
    html+='<table>';

     html += '<tr>';
            html += '<td><h5>Nombre</h5></td>';
            html += '<td><h5>Tipo</h5></td>';
            html += '<td><h5>Categoria</h5></td>';
            html += '<td></td>';
            html += '</tr>';

    for(var i = 0; i<recipes.length; i++){
    var trid='rec-'+recipes[i].id;
        html += '<tr id="'+ trid+'">';
        html += '<td>' + recipes[i].nombre + '</td>';
        html += '<td>' + recipes[i].tipo + '</td>';
        html += '<td>' + recipes[i].categoria + '</td>';
       // html += '<td>' +'<button class="delete" data-id="'+recipes[i].id+'">Eliminar</button>' + '</td>';
        html += '</tr>';
    }
    html += '</table>';

    $recipesDiv.html(html);

   /* for(var i=0;i<recipes.length;i++)
    {
    var trid='rec-'+recipes[i].id;
    var $tr= $('#'+trid);

    var $deleteButton= $('.delete',$tr);
     $deleteButton.click(function(){
            var id = $(this).attr('data-id');
            alert('Delete rec '+ id);
            $.ajax({
                        url:'/recipes/'+id,
                        type :  "DELETE",
                        });
                        location.reload();

        });
    }*/
  },
    error:function(){
        console.log("An error ocurred");
    }
});