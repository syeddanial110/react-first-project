import React from 'react'
import { Col, Row } from 'react-bootstrap';
import OurTeamItem from './OurTeamItem';

const OurTeamList = (props) => {
    const {posts}=props;
    return (
        <>
           <Row>
               <Col className='d-grid' md={4}>
                {
                    posts &&  posts.length>0 && 
                    posts.map((post)=>{
                        return <OurTeamItem post={post} />
                    })
                }   
                </Col>
            </Row> 
        </>
    )
}

export default OurTeamList
