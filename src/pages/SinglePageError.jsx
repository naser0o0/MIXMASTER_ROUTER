import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function SinglePageError() {
    const error = useRouteError();
    console.log(error);
  return (
    // <h2>{error.message}</h2>
    <h2>there was ann error...</h2>
  )
}
