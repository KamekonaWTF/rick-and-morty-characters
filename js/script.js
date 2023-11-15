
const previous = document.getElementById('prev-page');
const next = document.getElementById('next-page');
const personajes = document.getElementById('character-list');
let paginaActual = 1

previous.addEventListener('click', () => {
    let cambiopagina = paginaActual + 1;
    fetch(`https://rickandmortyapi.com/api/character/?page=${cambiopagina}`)
        .then((response) => {
            if(!response.ok) {
                throw new Error('No encontramos el personaje');
            }
            return response.json();
            })
        .then((data) => {
            const objetos = data.results
            for (i=0;i<objetos.length;i++) {
            personajes.innerHTML += `<li><img src="${objetos[i].image}"></img></li>`;
            }
        });
});

next.addEventListener('click', () => {
    fetch('https://rickandmortyapi.com/api/character/?page=1')
        .then((response) => {
            if(!response.ok) {
                throw new Error('No encontramos el personaje');
            }
            return response.json();
            })
        .then((data) => {
            const objetos2 = data.results
            for (i=0;i<objetos2.length;i++) {
            personajes.innerHTML += `<li><img src="${objetos2[i].image}"></img></li>`;
            }
            
        });
});
