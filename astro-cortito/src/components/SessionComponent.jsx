import React from 'react'

const sessionComponent = ({session}) => {
    // crear usuario pasandole todos shortcuts en el state
    // peticion a la api para obtener el el id del usuario y guardarlo en localstorage
    // arreglar shortcutstore para que si hay una session, reemplace localstorage por una peticion a la api, prefiblemente usando params, importante seguir usando el state
  return (
    <p className='hidden'>
      {session.user.email}
    </p>
  )
}

export default sessionComponent
