// Crea un petit sistema de gestió de biblioteques on tinguis els llibres emmagatzemats com a objectes. 
// Cada objecte de llibre ha de tenir propietats com el títol, l'autor i l'estat (p. ex., disponible o prestat). 
// Crea un objecte biblioteca que implementi els mètodes necessaris per afegir un llibre nou, mostrar tots els llibres i demanar prestat un llibre canviant-ne l'estat.
let bib1 = new Biblioteca({titol: 'Far Cry', autor: 'Urban white'})
let bib2 = new Biblioteca({titol: 'Maldito Karma', autor: 'David Safer'})
bib1.estat = 'prestat'
let form = document.getElementById('form')
let formDiv = document.getElementById('afellirLlibreDiv')
llibresArray = [bib1, bib2]
mostrarLlibresPerPantalla()
function mostrarLlibresPerPantalla() {
    let addTh = document.getElementById('addTh')
    let addTd = document.getElementById('addTd')

    for (let i = 0; i < llibresArray.length; i++) {
        let th = document.createElement('th')
        th.textContent = llibresArray[i].getTitol
        addTh.appendChild(th)
        let td = document.createElement('td')
        let p = document.createElement('p')
        p.textContent = llibresArray[i].getAutor + ' / ' + llibresArray[i].getEstat
        p.id = llibresArray[i].titol
        td.appendChild(p)
        addTd.appendChild(td)

        // Boton para modificar estado
        let bt = document.createElement('button')
        bt.classList.add('btn', 'btn-dark', 'canviarEstat')
        bt.textContent = 'Demanar Llibre'
        td.appendChild(bt)
    }
}

document.addEventListener('click', function(Event) {
    let target = Event.target
    if (target.classList.contains('canviarEstat')) {
        // for (let i = 0; i < llibresArray.length; i++) {
       let llibre = llibresArray.find((element) => element.titol == target.previousElementSibling.id)
       llibre.setEstat = 'Prestat'
       target.previousElementSibling.textContent = llibre.getAutor + ' / ' + llibre.getEstat
    
        target.classList.add('retornar')
        target.classList.remove('canviarEstat')
        target.textContent = 'Retornar Llibre'
    } else if (target.classList.contains('retornar')) {

        let llibre = llibresArray.find((element) => element.titol == target.previousElementSibling.id)
        llibre.setEstat = 'Disponible'
        target.previousElementSibling.textContent = llibre.getAutor + ' / ' + llibre.getEstat

        target.classList.add('canviarEstat')
        target.classList.remove('retornar')
        target.textContent = 'Demanar Llibre'
    } else if (target.classList.contains('affegirLlibre')) {
        form.style.display = 'block'
    }
})
let titolNou = document.getElementById('titolNou')
let autorNou = document.getElementById('autorNou')
document.onsubmit = function (event) {
   
    let target = event.target
    if (target.classList.contains('afellirLlibreDiv')) {
        formDiv.style.display = 'none'
        llibresArray.push(new Biblioteca({titol: titolNou, autor: autorNou}))
        // form.style.display = 'none'
        console.log('hola');
    }
}