// src/components/TwitterFollowCard.jsx

// 1. IMPORTACIÓN: Mínimo necesario
// Explicación: No siempre es necesario importar React, pero es buena práctica
// y en proyectos grandes ayuda a la claridad.
import React from 'react';

// ----------------------------------------------------

// 2. COMPONENTE FUNCIONAL Y PROPS
// Explicación: Un componente es una función. Recibe un objeto como argumento: las PROPS.
// Las Props son la información que el "Padre" (App.jsx) le pasa al "Hijo" (este componente).

// Desestructuramos las props para usarlas más fácilmente.
// Aquí esperamos recibir 'userName' y 'name'.
function TwitterFollowCard ({ userName, name }) { 
    
    // 3. Lógica interna: Definir el texto del botón
    // Explicación: Definimos un estado simple, que es la única lógica que reside
    // dentro de la tarjeta (si está siguiendo o no). Esto usa el hook useState.
    // Aunque aún no lo hemos visto, lo pongo para que el componente sea funcional.
    const [isFollowing, setIsFollowing] = React.useState(false);
    
    // 4. Lógica de renderizado:
    // Explicación: Creamos variables para decidir qué texto o clase usar.
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing 
      ? 'tw-follow-card__button is-following' 
      : 'tw-follow-card__button';

    // 5. Función para manejar el clic:
    const handleClick = () => {
        // Explicación: Cambia el valor de isFollowing al contrario (true -> false o false -> true)
        // Esto automáticamente hace que el componente se re-renderice.
        setIsFollowing(!isFollowing); 
    };

    return (
        // 6. El JSX (La estructura visual)
        <article className='tw-follow-card'>
            <header className='tw-follow-card__header'>
                <img
                    className='tw-follow-card__avatar'
                    alt={`El avatar de ${name}`}
                    // Explicación: Usamos la prop 'userName' para obtener la imagen
                    src={`https://unavatar.io/${userName}`} 
                />
                <div className='tw-follow-card__info'>
                    {/* Explicación: Usamos la prop 'name' para mostrar el nombre */}
                    <strong className='tw-follow-card__name'>{name}</strong> 
                    {/* Explicación: Usamos la prop 'userName' */}
                    <span className='tw-follow-card__info-username'>@{userName}</span> 
                </div>
            </header>

            <aside>
                {/* Usamos el handleClick que creamos antes */}
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    );
}

// 7. EXPORTACIÓN
// Explicación: Para que App.jsx pueda usar este componente, debe ser exportado.
export default TwitterFollowCard;