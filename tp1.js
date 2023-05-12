'use strict';
/*----------------------------EJERCICIO 1--------------------------------- */
class ProductoRoli{

    roli = [
    ['Placa madre','imagenes/roliplus/placa.jpg',50000],
    ['Procesador','imagenes/roliplus/procesador.jpg',100000],
    ['Tarjeta de video','imagenes/roliplus/tarjeta.jpg',150000],
    ['Memoria ram','imagenes/roliplus/ram.jpg',20000],
    ['Disco duro','imagenes/roliplus/disco.jpg',10000],
    ['Fuente de alimentacion','imagenes/roliplus/fuente.jpg',18000],
    ['Mouse','imagenes/roliplus/mouse.jpg',17000],
    ['Teclado','imagenes/roliplus/teclado.jpg',14000],
    ['Auriculares','imagenes/roliplus/auriculares.jpg',25000],
    ];
    verProductosRoli(){
        let inforoli = '';
        for(let i of this.roli){
            inforoli += `<div class="tarjeta"><ul>`;
            for(let x in i){
                if(x == 1){
                    inforoli += `<li><a href="${i[x]}" target="_blank"></a><img src="${i[x]}"/></li>`;
                }else if(x == 2){
                    inforoli += `<li>$ ${i[x]}</li>`;
                }else{
                    inforoli += `<li>${i[x]}</li>`;
                }
            }
            inforoli += `</ul></div>`;
        }
        document.getElementById('inforoliplus').innerHTML = inforoli;
    }
}
let ro = new ProductoRoli();

/*----------------------------EJERCICIO 2--------------------------------- */

class ProductoTexit{
    texit = [];
    codigo = 0;
    nombre = '';
    categoria = '';
    precio = 0;
    descripcion = '';
    cont = 0;
    cargarProductoTexit(){
        this.codigo = document.getElementById('codigoproducto').value;
        this.nombre = document.getElementById('nombreproducto').value;
        this.categoria = document.getElementById('categoriaproducto').value;
        this.precio = document.getElementById('precioproducto').value;
        this.descripcion = document.getElementById('descripcionproducto').value;
        this.texit[this.cont] = [this.codigo,this.nombre,this.categoria,this.precio,this.descripcion];
        this.cont++;
    }
    verProductosTexit(){
        let infotexit = '';
        for(let z of this.texit){
            infotexit += '<div class="producto"><ul>';
            for(let c in z){
                if(c == 0){
                    infotexit+=`<li>Código: ${z[c]}</li>`;
                }else if(c == 1){
                    infotexit+=`<li>Nombre: ${z[c]}</li>`;
                }else if(c == 2){
                    infotexit+=`<li>Categoria: ${z[c]}</li>`;
                }else if(c == 3){
                    infotexit+=`<li>Precio: $${z[c]}</li>`;
                }else{
                    infotexit+=`<li>Descripción: ${z[c]}</li>`;
                }
            }
            infotexit += `</ul></div>`;
        }
        document.getElementById('infotexit').innerHTML = infotexit;
    }
}
let pr = new ProductoTexit();

/*----------------------------EJERCICIO 3--------------------------------- */

class ProductoNoblex{
    noblex = [
    [2345,10,'imagenes/noblex/tv1.jpg',125000,'Smart led TV Samsung 50 pulgadas 4K UHD','Añadir al carrito'],
    [1234,3,'imagenes/noblex/tv2.jpg',115000,'Smart led TV LG 50 pulgadas UHD','Añadir al carrito'],
    [3456,20,'imagenes/noblex/tv3.jpg',80000,'Smart led android TV BGH 50 pulgadas HD','Añadir al carrito'],
    [4567,7,'imagenes/noblex/tv4.jpg',75000,'Smart TV AOC 50 pulgadas HD','Añadir al carrito'],
    [5678,15,'imagenes/noblex/tv5.jpg',110000,'Smart TV Samsung Neo QLED 50 pulgadas HD','Añadir al carrito'],
    [6789,1,'imagenes/noblex/tv6.jpg',130000,'Smart led TV LG 50 pulgadas 4K UHD','Añadir al carrito'],
    [7890,6,'imagenes/noblex/tv7.jpg',105000,'Smart led TV LG 50 pulgadas UHD','Añadir al carrito'],
    [8901,2,'imagenes/noblex/tv8.jpg',70000,'Smart led TV QUINT 50 pulgadas HD','Añadir al carrito'],
    [9012,5,'imagenes/noblex/tv9.jpg',60000,'led TV E-NOVA 50 pulgadas HD','Añadir al carrito'],
    ];
    ordenado = [];
    precio=0;
    precioMayor=0;
    precioMenor=0;
    mostrar= 0;
    verTelevisores(){
        let infotv = '';
        for(let j of this.noblex){
            infotv = '<div class="tarjeta"><ul>';
            for(let k in j){
                if(k == 0){
                    infotv+=`<li>Código: ${j[k]}</li>`;
                }else if(k == 1){
                    infotv+=`<li>Stock: ${j[k]}</li>`;
                }else if(k == 2){
                    infotv+=`<li><img src="${j[k]}" /></li>`;
                }else if(k == 3){
                    infotv+=`<li>$ ${j[k]}</li>`;
                }else if(k == 5){
                    infotv+=`<button>${j[k]}</button>`;
                }else{
                    infotv+=`<li>${j[k]}</li>`;
                }
            }
            infotv+=`</ul></di>`;
            document.getElementById('infotv').innerHTML += infotv;
        }
    }
    ordenarTelevisores(){
    }
}
let nb =new ProductoNoblex();