import React from 'react'
import { useParams } from 'react-router-dom'

function singleProduct() {
  const {id} = useParams();
  console.log(id);
  return (
    <div>singleProduct</div>
  )
}

export default singleProduct