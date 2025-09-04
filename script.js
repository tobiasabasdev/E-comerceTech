function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('hide');
    sidebar.classList.add('show');
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('show');
    sidebar.classList.add('hide');
    sidebar.addEventListener('animationend', function handler() {
        if (sidebar.classList.contains('hide')) {
            sidebar.style.display = "none";
        }
        sidebar.removeEventListener('animationend', handler);
    });
}

const listaProductos = document.getElementById('listaproductos');
function agregarProducto(nombre,descripcion,imagen,precio) { 
const card = document.createElement('article');
card.classList.add('card');

card.innerHTML = `<div class=  "card-content">
<h3>${nombre}</h3>
<p>${descripcion}</p>
<img src="${imagen}" alt="${imagen}">
<p class= "price" > $ARS ${precio} </p>
</div>
`;

listaProductos.append(card);
}

agregarProducto(
  "Joystick",
  "Joystick gamer con vibración",
  "img/joystick.jpg",
  12000,

);


console.log(listaProductos.innerHTML);