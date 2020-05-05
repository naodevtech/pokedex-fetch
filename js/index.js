const container = document.getElementById('container')
function fetching(){
    for(let i = 1; i < 151; i++){
        const url = `https://pokeapi.co/api/v2/pokemon-form/${i}/?limit=151`
        fetch(url)
        .then( data => data.json())
        .then( pokemon => {
            container.innerHTML += 
            `<div class='box'>
            <h1>${pokemon.name}</h1>
            <img src='${pokemon.sprites.front_default}' alt='pokemon' />
            </div>`
        })
    }
}
fetching()