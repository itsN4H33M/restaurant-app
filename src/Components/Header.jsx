import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchResto } from '../redux/restoSlice'


function Header() {
  const dispatch = useDispatch()

  return (
    <Navbar className="bg-info">
      <Container>
        <Navbar.Brand>
          <Link to={'/'} className='text-decoration-none text-light fw-bolder fs-2'>
            Resto
          </Link>
        </Navbar.Brand>
        <div className='d-flex ms-auto align-items-center'>
          <input onChange={(e) => dispatch(searchResto(e.target.value))} className='p-1' type="text" placeholder='Search resto by location' />
          <i className='fa-solid fa-search 2x' style={{ marginLeft: '-25px' }}></i>
        </div>
      </Container>
    </Navbar>
  )
}

export default Header