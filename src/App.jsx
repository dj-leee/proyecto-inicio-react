// src/App.jsx
import './App.css' // Importa los estilos (lo dejaremos vacío en el siguiente paso)
import TwitterFollowCard from './components/TwitterFollowCard'

// Explicación:
// 1. Esto es un Componente funcional. Siempre empieza con mayúscula.
// 2. Export default sirve para que otros archivos (como main.jsx) puedan usarlo.
function App() {
  
  // 2. DATOS DE LA APLICACIÓN
  // Explicación: En lugar de codificar los datos directamente, los ponemos en un array.
  // En un trabajo real, estos datos vendrían de una base de datos (SQL, etc.).
  const usuarios = [
    { userName: 'midudev', name: 'Miguel Ángel Durán', isFollowing: true },
    { userName: 'pheralb', name: 'Pablo H.', isFollowing: false },
    { userName: 'elonmusk', name: 'Elon Musk', isFollowing: false },
  ];

  return (
    <section className='app'>
        <h1>A quién seguir</h1>

        {/* 3. Renderizado de Componentes con Props */}
        {/* Explicación: Al usar el componente como una etiqueta (<TwitterFollowCard />),
           le pasamos la información como si fueran atributos HTML (userName="...").
           Esos atributos son las PROPS.
        */}

        {/* Ejemplo 1: El código de Midudev */}
        <TwitterFollowCard 
          userName="midudev" 
          name="Miguel Ángel Durán" 
        />
        
        {/* Ejemplo 2: Tu futuro componente para tu negocio */}
        <TwitterFollowCard 
          userName="djperez" 
          name="DJ Pérez"
        />

        {/* Ejemplo 3: El poder de los arrays y el método map (lo veremos después) */}
        {usuarios.map(user => (
            <TwitterFollowCard 
                key={user.userName} // Necesario para React, lo vemos luego
                userName={user.userName} 
                name={user.name} 
                // Aquí podrías añadir props para el estilo o la lógica inicial
            />
        ))}

    </section>
  );
}

export default App;