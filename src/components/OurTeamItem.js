import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OurTeamItem = (props) => {
    const {post}=props;
    return (
        <>
           
                <Col className="d-flex my-3 mx-4" key={post.id} xs={12} sm={12} md={6} lg={4} xl={4} >
                    <Link to={`/ourteamposts/${post.id}`}>
                        <Card style={{ width: '18rem' }}>
                           <Card.Img variant="top" src={`https://picsum.photos/id/${post.id === 97 ? 101 : post.id === 86 ? 102 : post.id}/300/300`} />
                            <Card.Title>{post.title}</Card.Title>
                        </Card>
                    
                    </Link>
                </Col>
             
        </>
    )
}

export default OurTeamItem
