$(document).ready(function() 
{
    var inicialValorRegistrar = $('#spanUsuario').text();

    $("#pagina-principal").show();
    $( '#pagina-usuario').hide();
    $( '#pagina-protagonista').hide();
    $( '#pagina-fotoCarousel' ).hide();
    $( '#pagina-carrito' ).hide();
 $( '#pagina-NOTA' ).hide();
   $( '#corazon' ).hide();

    $( '#carrito' ).hide();

    $( '#megustan').show();
    $( '#notasparami').hide();
    $( '#compras' ).hide();

    $( '#clickModa' ).click( function() 
    {
        if($('#Usuario').text() == inicialValorRegistrar )
            return;

        $( '#pagina-usuario').hide();
        $( "#pagina-principal").hide();
        $( '#pagina-fotoCarousel' ).hide();
        $( '#pagina-protagonista').show();
        $( '#pagina-carrito' ).hide();
         $( '#pagina-NOTA' ).hide();
           $( '#corazon' ).hide();

    });

  


  $( '#clickImgCarousel' ).css( 'cursor', 'pointer' );

    $( '#clickImgCarousel' ).click( function() 
    {
        if($('#spanUsuario').text() == inicialValorRegistrar )
            return;

        $( '#pagina-usuario').hide();
        $( "#pagina-principal").hide();
        $( '#pagina-protagonista').hide();
        $( '#pagina-fotoCarousel' ).show();
        $( '#pagina-NOTA' ).hide();
         $( '#corazon' ).hide();
          $( '#pagina-carrito' ).hide();
    });
 


    $( "#logo-img" ).click( function() 
    {
        $("#pagina-principal").show();
        $( '#pagina-usuario').hide();
        $( '#pagina-protagonista').hide();
        $( '#pagina-fotoCarousel' ).hide();
        $( '#pagina-carrito' ).hide();
      $( '#pagina-NOTA' ).hide();
       $( '#pagina-carrito' ).hide();
        $( '#corazon' ).show();
    });

    $( "#spanUsuario" ).click( function() 
    {
        if($('#spanUsuario').text() == inicialValorRegistrar )
        {
            console.log('Apreto en Registrar');
            $("#myModal").modal('show');
        }
        else
        {
            console.log('Apreto en Usuario');
            $("#pagina-principal").fadeOut( 1000, function() 
            {
                console.log('Carrusel Oculto');
                $( '#pagina-usuario').fadeIn(600);
            });
        }

    });
    $('.registrar').css( 'cursor', 'pointer' );

    $( ".registrarButton" ).click( function()
    {
        $("#myModal").modal('hide');
        console.log('Usuario Registrado');
        $('#spanUsuario').text( $('#nombreField').val().toUpperCase() );
        $('#perfilUsuario').text( $('#nombreField').val() );

        $( '#carrito' ).show();
         $( '#corazon' ).show();
    });

    $( '#carrito').click( function() 
    {
        // pagina-carrito

        $( '#pagina-usuario').hide();
        $( "#pagina-principal").hide();
        $( '#pagina-fotoCarousel' ).hide();
        $( '#pagina-protagonista').hide();
        $( '#pagina-carrito' ).show();
         $( '#pagina-NOTA' ).hide();
          $( '#corazon' ).hide();
    });

   $( '#NOTA').click( function() 
    {
        // pagina-nota

        $( '#pagina-usuario').hide();
        $( "#pagina-principal").hide();
        $( '#pagina-fotoCarousel' ).hide();
        $( '#pagina-protagonista').hide();
        $( '#pagina-carrito' ).hide();
        $( '#pagina-NOTA' ).show();
         $( '#corazon' ).hide();
    });

    $( "#clickMeGustan" ).click( function() 
    {
        $( '#megustan').show();
        $( '#notasparami').hide();
        $( '#compras' ).hide();
         $( '#pagina-NOTA' ).hide();
          $( '#pagina-carrito' ).hide();

        $( '#clickMeGustan' ).removeClass('btn-default').addClass( 'btn-primary-outline');
        $( '#clickNotasParaMi' ).removeClass('btn-primary-outline').addClass( 'btn-default');
        $( '#clickCompras' ).removeClass('btn-primary-outline').addClass( 'btn-default');
    });

    $( "#clickNotasParaMi" ).click( function() 
    {
        $( '#notasparami').show();
        $( '#megustan').hide();
        $( '#compras' ).hide();
         $( '#pagina-NOTA' ).hide();
          $( '#pagina-carrito' ).hide();

        $( '#clickNotasParaMi' ).removeClass('btn-default').addClass( 'btn-primary-outline');
        $( '#clickMeGustan' ).removeClass('btn-primary-outline').addClass( 'btn-default');
        $( '#clickCompras' ).removeClass('btn-primary-outline').addClass( 'btn-default');
    });

    $( "#clickCompras" ).click( function() 
    {
        $( '#compras' ).show();
        $( '#megustan').hide();
        $( '#notasparami').hide();
 $( '#pagina-NOTA' ).hide();
  $( '#pagina-carrito' ).hide();
        $( '#clickCompras' ).removeClass('btn-default').addClass( 'btn-primary-outline');
        $( '#clickMeGustan' ).removeClass('btn-primary-outline').addClass( 'btn-default');
        $( '#clickNotasParaMi' ).removeClass('btn-primary-outline').addClass( 'btn-default');
    });
    
    
});