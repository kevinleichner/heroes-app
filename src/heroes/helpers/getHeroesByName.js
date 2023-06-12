import { heroes } from '../data/heroes';


export const getHeroesByName = ( name = '' ) => { //Obtiene el heroe por su nombre, si no se pasa nada entonces es un string vacío

    name = name.toLocaleLowerCase().trim(); //Le quitamos los espacios y convertimos todo a minusculas
    
    if ( name.length === 0 ) return []; //Si no se escribió nada se retorna un arreglo vacío

    return heroes.filter( //Sinó se retorna un arreglo (la función filter retorna un arreglo) con los heroes que contengan el fragmento buscado
        hero => hero.superhero.toLocaleLowerCase().includes( name ) 
    );

}



