import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const OurTeamPost = () => {

    const {postId} =useParams();
    const [post,setPost]= useState();
    
    useEffect(async() => {
        try {
            const res= await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            setPost(res.data)
        } catch (error) {
            console.log(error);
        }
    }, [])

    let ImgURl= ''
    if(postId===97) ImgURl=`https://picsum.photos/id/${101}/800/300`;
    else if(postId===86) ImgURl=`https://picsum.photos/id/${102}/800/300`;
    else ImgURl= `https://picsum.photos/id/${postId}/800/300`;
    return (
        <>
            {
                post && (
                <div>
                    <Link to="/ourteamposts">Home</Link>
                    <div>
                        <img src={`${ImgURl}`} alt={`${post.title}`} />
                        <h1>{post.id}</h1>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                </div>
                ) 
            }
        </>
    )
}

export default OurTeamPost
