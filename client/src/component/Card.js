import { useState } from "react"

const Card=({item})=>{
const [name,setName]=useState()
const[show,setShow]=useState(false)
    
    const token=localStorage.getItem("token");
    // console.log(token)
    return(

    <>
  
  {/* <button type="button" class="btn btn-secondary">Logout</button> */}
    <section className="vh-1" style={{ backgroundColor: "#eee" }} key={item.toString()}>
                            <div className="container py-5 ">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-4 col-xl-4">

                                        <div className="card" style={{ borderRadius: "15px" }}>
                                            <div className="card-body text-center">
                                                <div className="mt-3 mb-4">
                                                    <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                                                        className="rounded-circle img-fluid" style={{ width: "100px" }} />
                                                </div>
                                                <h4 className="mb-2">{item.name}</h4>
                                                <p className="text-muted mb-4">{item.dept}<span className="mx-2">|</span> <a
                                                    href="#!">{item.email}</a></p>
                                                <div className="mb-4 pb-2">
                                                    <button type="button" className="btn btn-outline-primary btn-floating">
                                                        <i className="fab fa-facebook-f fa-lg"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-outline-primary btn-floating">
                                                        <i className="fab fa-twitter fa-lg"></i>
                                                    </button>
                                                    <button type="button" className="btn btn-outline-primary btn-floating">
                                                        <i className="fab fa-skype fa-lg"></i>
                                                    </button>
                                                </div>
                                                
                                        {show ?  <i className="fa-solid fa-heart"> </i> : <i className="fa-regular fa-heart"> </i>}
                                        <button className="btn btn-primary m-4" onClick={()=>{
                                            if(show==false){
                                            fetch("http://localhost:8080/add",{
                                                method:"POST",
                                                headers:{
                                                    "Content-Type":"application/json",
                                                    Accept:"application/json",
                                                    Authorization: `Bearer ${token}`,
                                                },
                                                body:JSON.stringify({name:item.name})
                                            })
                                            .then(res=>res.json())
                                            .then(data=>console.log(data))
                                            setShow(!show)
                                            console.log(show)
                                        }else{
                                            fetch("http://localhost:8080/add/delete",{
                                                method:"POST",
                                                headers:{
                                                    "Content-Type":"application/json",
                                                    Accept:"application/json",
                                                    Authorization: `Bearer ${token}`,
                                                },
                                                body:JSON.stringify({name:item.name})
                                            })
                                            .then(res=>res.json())
                                            .then(data=>console.log(data))
                                            setShow(!show)
                                            console.log(show)
                                        }
                                        }}>Add To Favorite</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
    
    
    </>
    )
}
export default Card;