import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RestCard({ resto }) {
    return (
        <div>
            <Link to={`/view/${resto?.id}`} className='text-decoration-none'>
                <Card style={{ width: '18rem', height: '450px' }} className='ms-4 mb-4 shadow'>
                    <Card.Img style={{ height: '300px' }} variant="top" src={resto.photograph} />
                    <Card.Body>
                        <Card.Title>{resto.name}</Card.Title>
                        <Card.Text>
                            <p>Cuisine : {resto.cuisine_type}</p>
                            <p>{resto.neighborhood}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}

export default RestCard