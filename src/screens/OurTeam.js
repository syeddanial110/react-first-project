import React, { useEffect, useState } from 'react'
// import React from 'react'
// import { Helmet } from 'react-helmet'
import CustomTitle from '../components/CustomTitle'
import axios from "axios";
import { Row } from 'react-bootstrap';
import OurTeamList from '../components/OurTeamList';

const OurTeam = () => {
    const [posts, setPosts] = useState([])
  useEffect(async()=>{
    try {
      let res= await axios.get("https://jsonplaceholder.typicode.com/posts")
    //   let res= await axios.get("https://pixabay.com/api/?key=24952702-0fb54b5d053c710c62a7c1222")
    //   console.log(res.data.hits, "res");

      setPosts(res.data)
    } catch (error) {
      console.log(error);
      
    }
  },[])
    return (
        <div>
                <CustomTitle title="OurTeam" />

                 {/* <ul>
            
                   
                <tr style={{border:"1px solid blue"}}>
                    <th style={{padding:"25px"}}>Id</th>
                    <th style={{padding:"25px"}}>Title</th>
                    <th style={{padding:"25px"}}>Body</th>
                  </tr>
                
        {
          post && post.length>0 && post.map((posts)=>{

            return (<div key={posts.id} style={{margin:"10px 10px 5px 10px", border:"1px solid red",padding:"5px", listStyle:"none"}} >
                
                <table>

                  <tr>
                    <td style={{padding:"15px"}}>{posts.id}</td>
                    <td style={{padding:"15px"}}> {posts.title}</td>
                    <td style={{padding:"15px"}}>{posts.body}</td>
                  </tr>
                </table>
               </div>)
          })
        }
      </ul>  */}

      <div className='my-5'>
        <h1 className='mb-5'>Our Team List</h1>
        <OurTeamList posts={posts}  />
        {console.log(posts,"posts")}
      </div>
                
        </div>
    )
}

export default OurTeam
