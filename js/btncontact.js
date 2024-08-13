/*boton whaap*/
let btnwh = document.getElementById('btnwh');
let bannerwh = document.getElementById('bannerwh');

btnwh.addEventListener('mouseenter',function(){
   'use strict';
    bannerwh.classList.toggle('mostrar-btnwh');
});
btnwh.addEventListener('mouseleave',function(){
   'use strict';
    bannerwh.classList.toggle('mostrar-btnwh');
});
/*boton correo*/
let btncorreo = document.getElementById('btncorreo');
let bannercorreo = document.getElementById('bannercorreo');
btncorreo.addEventListener('mouseenter',function(){
   'use strict';
    bannercorreo.classList.toggle('mostrar-btncorreo');
});
btncorreo.addEventListener('mouseleave',function(){
   'use strict';
    bannercorreo.classList.toggle('mostrar-btncorreo');
});