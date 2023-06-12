import { heroes } from '../data/heroes';


export const getHeroById = ( id ) => { //Obtiene el heroe por su id

    return heroes.find( hero => hero.id === id ); //Busca el heroe que tenga la id pasada como parámetro
}