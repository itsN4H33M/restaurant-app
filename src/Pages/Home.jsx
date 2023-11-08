import React, { useEffect } from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import RestCard from '../Components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestos } from '../redux/restoSlice'

function Home() {

  const { allRestos, loading, error } = useSelector((state) => state.restoSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRestos())
  }, [])

  return (
    <div>
      {/* loading */}
      {
        loading &&
        <div className='d-flex justify-content-center align-items-center flex-column my-5'>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p>Loading...</p>
        </div>
      }
      {/* error */}
      {
        !loading && error ? <p>{error}</p> : null
      }
      {/* resolved */}
      <Row className='mt-5 w-100'>
        {
          !loading && allRestos?.length > 0 ? allRestos?.map(resto => (
            <Col className='' sm={12} md={6} lg={3}>
              <RestCard resto={resto} />
            </Col>
          )) : <p className='text-center text-danger'>No Restos Available</p>
        }

      </Row>
    </div>
  )
}

export default Home