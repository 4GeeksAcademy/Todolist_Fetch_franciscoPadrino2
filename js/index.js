// Llamar api

//fetch("https://fakestoreapi.com/products").then(response => response.json())
//.then(data => {console.table(data);})
//.catch(error => {//
  //  console.log(error);
//})

// ASYNC .. AWAIT
//async function listarProductos2() {
//    const response = await fetch("https://fakestoreapi.com/products")
//    const data = await response.json();
//    console.log(data);
//}

//listarProductos2();


//const handlingAllPromises = async () => {
 //   let [first, second, third] = await Promise.all([promise1(), promise2(), promise3()]);
  
//    console.log(first);
//    console.log(second);
 //   console.log(third);
//}
async function postearProduct() {
    
    try {
            const nombre = document.getElementById("nombre").value; 
    const precio = document.getElementById("precio").value;
    const resultado = document.getElementById("resultado");

    const producto = {nombre,precio}; // crear el objecto producto 
    const response = await fetch ("https://fakestoreapi.com/products", {
         method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)  // convertir el object js a un formato json
        });
    const data = await response.json();
    //console.log(data);
    console.log(response);

    if (response.status == 201) {
        resultado.innerHTML = `<div class="alert alert-success" role="alert">Los no datos fueron cargado correctamente</div>`; 
        }
    } catch {

    }
}

// llamada de API
// [GET] /URL_API/PRODUCTS => TRAER TODOS LOS PRODUCTOS
// [GET] /URL_API/PRODUCTS/{ID} => TRAER TODOS LOS PRODUCTOS
// [POST] /URL_API/PRODUCTS/ => AGREGAR UN NUEVO PRODUCTOS, EL NUMERO DE #ID LO DEVUELVE LA API
// [POST] /URL_API/PRODUCTS/{ID} => ACTUALIZAR EL PRODUCTO #{ID}
// [DELETE] /URL_API/PRODUCTS/{ID} => ELIMINAR #{ID}


async function crearUsuario() {
        try {
        const nombre = document.getElementById("nombre").value; 
        const resultado = document.getElementById("resultado");
        const response = await fetch("https://playground.4geeks.com/todo/users/"+nombre, {
         method: 'POST'
        });
        const data = await response.json();
        //console.log(data);

        if (response.status == 201) {
            //console.log(response);
            resultado.innerHTML = `<div class="alert alert-success" role="alert">Los datos fueron cargado correctamente</div>`; 
            }
        } catch {
        }
}
async function listarUsuarios() {
        const resultado = document.getElementById("resultado");
        const response = await fetch("https://playground.4geeks.com/todo/users/");
        const data = await response.json();
        //console.log(data);
        let contenidoHTML = "<ul class='list-group'>";

        for (const item of data.users) {
            contenidoHTML += `<li class="list-group-item">#${item.id} - ${item.name}</li>`;
        }
        contenidoHTML += "<ul class='list-group'>";
        resultado.innerHTML = contenidoHTML;
}

async function crearTarea() {
     const tarea_nombre = document.getElementById("tarea_nombre").value; 
     const tarea_completada = document.getElementById("tarea_completada").value; 
     const resultado_tareas = document.getElementById("resultado_tareas");
     const tarea = {
                    label:tarea_nombre, 
                    is_done:(tarea_completada == "true" ? true : false)
                };
    //console.log(tarea);                
     const response = await fetch("https://playground.4geeks.com/todo/todos/Francisco/", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(tarea)
     });
     console.log(response);
     const data = await response.json();
     //console.log(data);
listarTareas();
}

async function listarTareas() {
        const resultado_tareas = document.getElementById("resultado_tareas");
        const response = await fetch("https://playground.4geeks.com/todo/users/Francisco");
        const data = await response.json();
        console.log(data);
        let contenidoHTML = "<ul class='list-group'>";

        for (const item of data.todos) {
            contenidoHTML += `<li class="list-group-item">#${item.id} - ${item.label}</li>`;
        }
        contenidoHTML += "<ul class='list-group'>";
        resultado_tareas.innerHTML = contenidoHTML;
}

async function eliminarTarea() {
    const tarea_Eliminar = document.getElementById("tarea_Eliminar").value;
    const response = await fetch("https://playground.4geeks.com/todo/todos/"+tarea_Eliminar, {
         method: 'DELETE'
        });
    console.log(response);    
listarTareas();     
}

listarUsuarios();
listarTareas();