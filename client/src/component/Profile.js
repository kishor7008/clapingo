import React, { useEffect, useState } from "react";
const Profile=()=>{
    const token=localStorage.getItem("token");
    const[list,setList]=useState()
    const favorite=()=>{
        fetch("http://localhost:8080/add/data",{
            method:"GET",
            headers:{
              "Content-type":"application/json",
              Accept:"application/json",
              Authorization: `Bearer ${token}`,


            }
          }).then(res=>res.json())
          .then((data)=>{
           
              setList(data)
           
          })
    }
    useEffect(()=>{
        favorite()
    },[])
    return(
        
        <>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      
    </tr>
  </thead>
  <tbody>
    
   
    
  
        {
            list && list[0].favorite.map((item,index)=>{
                return(
                    <>
                    <tr>
      <th scope="row">{index+1}</th>
      <td>{item.name}</td>
      
    </tr>
                    
                    </>
                )
            })
        }
        </tbody>
</table>
        </>
    )
}
export default Profile;