import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

  const navigate = useNavigate(); //CustomHook que nos permite obtener props y funciones del Navigation.Provider

  const onLogin = () => { //Funcion que se ejecuta al dar click en Login
    navigate('/', { 
      replace: true //Hacemos que una vez que el usuario da click en Login no pueda volver hacia atrás y estar en el Login de nuevo, si se supone que ya inició sesión (que navegue a la Route '/' que por
                    //defecto se irá a /marvel y reemplace el historial de navegación así no podemos volver hacia atrás)
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}
