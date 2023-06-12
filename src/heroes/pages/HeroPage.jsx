import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';


export const HeroPage = () => {

  const { id } = useParams(); //Tiene la siguiente estructura parametros{ *: hero/marvel-spider id:marvel-spider } el * es todo el path que pusimos en el HeroesRoutes para el <HeroPage> y id es el nombre que pusimos en el path (hero/:id)
                              //Esto en el caso de que el usuario haya buscado el "marverl-spider", si busca "batman" en la ruta va a aparecer hero/batman y el id: batman
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById( id ), [ id ]); 

  const onNavigateBack = () => {
    navigate(-1); //Volver a la página anterior
  }


  if ( !hero ) { //Si el heroe no se reconoce te devuelve a /marvel
    return <Navigate to="/marvel" />
  }
  
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={ `/assets/heroes/${ id }.jpg` } 
          alt={ hero.superhero }
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> { hero.alter_ego } </li>
          <li className="list-group-item"> <b>Publisher:</b> { hero.publisher } </li>
          <li className="list-group-item"> <b>First appearance:</b> { hero.first_appearance } </li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{ hero.characters }</p>

        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          Regresar
        </button>

      </div>

    </div>
  )
}
