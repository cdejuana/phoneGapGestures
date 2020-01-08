var app = {
    inicio: function() {
    	this.iniciaBotones();
    	this.iniciaFastClick();
    	this.iniciaHammer();        
    },

    iniciaFastClick: function(){
    	FastClick.attach(document.body);
    },

    iniciaBotones: function(){
    	var botonClaro = document.querySelector('#claro');
        var botonOscuro = document.querySelector('#oscuro');

        botonClaro.addEventListener('click', this.ponloClaro, false);
        botonOscuro.addEventListener('click', this.ponloOscuro, false);
    },

    iniciaHammer: function() {
        var zona = document.getElementById('zona-gestos');
        var hammertime = new Hammer(zona);

        hammertime.get('pinch').set({ enable: true });
        hammertime.get('rotate').set({ enable: true });

        /*zona.addEventListener('webkitAnimationEnd', function(e) {
            zona.className = '';
        });*/

        hammertime.on('tap doubletap pan swipe press pinch rotate', function(ev) {
            document.querySelector('#info').innerHTML = ev.type + '!';
        });

        /*hammertime.on('doubletap', function(ev) {
            zona.className = 'press';
        });*/
    },

    ponloClaro: function() {
        document.body.className = 'claro';
    },

    ponloOscuro: function() {
        document.body.className = 'oscuro';
    },
};

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        app.inicio();
    }, false);
}