

/*=============================================
ELIMINAR producto
=============================================*/
$(document).on("click", ".btnDelproducto", function(){

  var idPersona = $(this).attr("id");
  
  Swal.fire({
    title: '¿Está seguro de eliminar el producto?',
    icon: "question",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si'
  }).then(function(result){

    if(result.value){

      window.location = "indexadmin.php?rutaadmin=usuarios";

    }

  })

})