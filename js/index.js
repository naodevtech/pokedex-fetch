console.log('hello')
const container = document.querySelectorAll('.container')
const boxPokemon = document.querySelectorAll('.box')
const containerbis = document.getElementsByClassName('container')
let array = []
function fetching(){
    for(let i = 1; i < 151; i++){
        const url = `https://pokeapi.co/api/v2/pokemon-form/${i}/?limit=151`
        fetch(url)
        .then( data => data.json())
        .then( pokemon => {
            // console.log(pokemon)
            const box = document.createElement('div')
            box.setAttribute('class', 'box')
            let title = document.createElement('h1')
            title.innerHTML = pokemon.name
            box.appendChild(title)
            let img = document.createElement('img')
            img.setAttribute('src', pokemon.sprites.front_default)
            box.appendChild(img)
            container[0].appendChild(box)
            // console.log(box)
            
        })
    }
}
fetching()