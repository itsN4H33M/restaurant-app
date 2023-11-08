import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function View() {
  const { id } = useParams()
  const { allRestos, loading, error } = useSelector((state) => state.restoSlice)
  const [resto, setResto] = useState({})

  useEffect(() => {
    setResto(allRestos.find(item => item.id === id))
  }, [])

  console.log(resto);

  return (
    <div>
      View
    </div>
  )
}

export default View