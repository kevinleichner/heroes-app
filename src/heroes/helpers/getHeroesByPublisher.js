import { heroes } from '../data/heroes';


export const getHeroesByPublisher = ( publisher ) =>{ //Se busca heroes por su publisher

    const validPublishers = ['DC Comics','Marvel Comics']; //Hacemos un arreglo con los publisher
    if ( !validPublishers.includes( publisher ) ) { //Si lo que se busca no es 'DC Comics'o 'Marvel Comics' se retorna un error de que el publisher no es valido
        throw new Error(`${ publisher } is not a valid publisher`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher ); //Sino se devuelve un arreglo con los heroes que tengan este publisher
}


