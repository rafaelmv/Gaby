
function cambiar_titulo(){
	contenido = document.getElementById("primero_div");
	boton = document.getElementById("cambiar_cuestionario_titulo");
	nombre_final = document.getElementById("Cambio_titulo").value;
    contenido.innerHTML =
        "<input type='text' id='input_cambio_titulo' name='input_cambio_titulo' value='"+nombre_final+"'>"+
        "<input type='submit' value='Listo' id='cambiar_titulo'>";
    forma = document.getElementById("primero_form");
    forma.style.display = "inline";
    contenido.style.display = "inline";
    boton_borrar = document.getElementById("Borrar_cuestionario");
    boton_borrar.style.display = "none";
    }

    /*!
 * avgrund 0.1
 * http://lab.hakim.se/avgrund
 * MIT licensed
 *
 * Copyright (C) 2012 Hakim El Hattab, http://hakim.se
 */
var Avgrund = (function(){

	var container = document.documentElement,
		popup = document.querySelector( '.avgrund-popup-animate' ),
		cover = document.querySelector( '.avgrund-cover' ),
		currentState = null;

	container.className = container.className.replace( /\s+$/gi, '' ) + ' avgrund-ready';

	// Deactivate on ESC
	function onDocumentKeyUp( event ) {
		if( event.keyCode === 27 ) {
			deactivate();
		}
	}

	// Deactivate on click outside
	function onDocumentClick( event ) {
		if( event.target === cover ) {
			deactivate();
		}
	}

	function activate( state ) {
		document.addEventListener( 'keyup', onDocumentKeyUp, false );
		document.addEventListener( 'click', onDocumentClick, false );
		document.addEventListener( 'touchstart', onDocumentClick, false );

		removeClass( popup, currentState );
		addClass( popup, 'no-transition' );
		addClass( popup, state );

		setTimeout( function() {
			removeClass( popup, 'no-transition' );
			addClass( container, 'avgrund-active' );
		}, 0 );

		currentState = state;
	}

	function deactivate() {
		document.removeEventListener( 'keyup', onDocumentKeyUp, false );
		document.removeEventListener( 'click', onDocumentClick, false );
		document.removeEventListener( 'touchstart', onDocumentClick, false );

		removeClass( container, 'avgrund-active' );
		removeClass( popup, 'avgrund-popup-animate')
	}

	function disableBlur() {
		addClass( document.documentElement, 'no-blur' );
	}

	function addClass( element, name ) {
		element.className = element.className.replace( /\s+$/gi, '' ) + ' ' + name;
	}

	function removeClass( element, name ) {
		element.className = element.className.replace( name, '' );
	}

	function show(selector){
		popup = document.querySelector( selector );
		addClass(popup, 'avgrund-popup-animate');
		activate();
		return this;
	}
	function hide() {
		deactivate();
	}

	return {
		activate: activate,
		deactivate: deactivate,
		disableBlur: disableBlur,
		show: show,
		hide: hide
	}

})();

	function openDialog()
        {
        Avgrund.show( "#default-popup" );
	}
	function closeDialog()
    {
        Avgrund.hide();
	}
