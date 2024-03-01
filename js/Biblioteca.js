// Cada objecte de llibre ha de tenir propietats com el títol, l'autor i l'estat (p. ex., disponible o prestat). 
class Biblioteca {
    constructor({titol, autor, estat = 'Disponible'}) {
        this.titol = titol
        this.autor = autor
        this.estat = estat
    }
    // Crea un objecte biblioteca que implementi els mètodes necessaris per afegir un llibre nou, mostrar tots els llibres i demanar prestat un llibre canviant-ne l'estat.
    set setTitol(titol) {
        this.titol = titol
    }
    set setAutor(autor) {
        this.autor = autor
    }
    set setEstat(nouestat) {
        this.estat = nouestat
    }
    get getTitol() {
        return `Titol: ${this.titol}`
    }
    get getAutor() {
        return `Autor: ${this.autor}`
    }
    get getEstat() {
        return `Estat: ${this.estat}`
    }
    mostrarLlibres() {
        return `Titol: ${this.titol} Autor: ${this.autor} Estat: ${this.estat}`
    //   return 'Titol: ' + this.titol + ' Autor: ' + this.autor + ' Estat: ' + this.estat
    }
}
