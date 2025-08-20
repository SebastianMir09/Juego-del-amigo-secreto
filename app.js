// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function actualizarLista(){
    let listaAmigosHTML = document.getElementById("listaAmigos");
    // ListaAmigosHTML es una variable apuntando a un objetivo(ul: Unordered list- ol: order list) en el HTMl 
    listaAmigosHTML.innerHTML = '';
    //.innetHTML lo utilizo para definir el contenido del HTML
    if (amigos.length === 0) {
        listaAmigosHTML.textContent = 'No hay amigos en la lista.';
        //Si el arreglo "amigos" está vacío, muestra ese texto dentro del elemento
    } else {
        for (let i = 0; i < amigos.length; i++) {
            let nuevoElemento = document.createElement('li');
            // Crea un nuevo elemento de lista <li>
            nuevoElemento.textContent = amigos[i];
            //Le pone como texto el nombre del amigo en la posición i del arreglo
            listaAmigosHTML.appendChild(nuevoElemento);
            //Agrega ese <li> dentro de la lista en el HTML
        }
    }    
}

function agregarAmigo(){
    let inputHTML = document.getElementById("amigo");
    //inputHTML esta auntando al tag(id) amigo en el HMTL
    let nombreAmigo = inputHTML.value.trim();
    if (nombreAmigo === ''){
        alert("Por favor, inserte un nombre");
        return;
    }
    amigos.push(nombreAmigo);
    //utilizo el .push para agregar elementos a la lista amigos
    actualizarLista();
    //llamo a la funcion actualizar lista 
    console.log(inputHTML.value);

    inputHTML.value = '';
    //Aqui estoy indicando que en caso de cumplirse se limpie, con el input vacio
}

function sortearAmigo(){
    //Primer paso: Validar longitud (min 2 personas)
    if(amigos.length < 2){
        alert("Debes indicar al menos dos personas");
        return;
    }
    //segundo paso: Elegir aleatoriamente a uno
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoAleatorio = amigos[indiceAleatorio];
    //tercer paso: mostrar resultado
    alert(`Tu amigo secreto es ${amigoAleatorio}`);
    //cuarto paso: eliminar al ganador
    amigos = [...amigos.slice(0,indiceAleatorio), ...amigos.slice(indiceAleatorio+1,amigos.length)];
    actualizarLista();
}
