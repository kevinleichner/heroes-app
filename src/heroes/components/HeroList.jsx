
import { useMemo } from 'react';
import { HeroCard } from './';
import { getHeroesByPublisher } from '../helpers';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [ publisher ]); //Memorizamos los valores del getHeroesByPublisher a menos que cambie su 
                                                                                    //publisher (cosa que no va a pasar) para que no se ejecute de nuevo la función

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( hero => ( //Por cada heroe ejecutamos el <HeroCard>
                    <HeroCard 
                        key={ hero.id } //Toma como key la id del heroe
                        { ...hero } //Y todos los demás datos del héroe
                    />
                ))
            }
        </div>
    )
}
