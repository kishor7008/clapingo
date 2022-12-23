import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Card from "./Card";
const TecherList = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const [show, setShow] = useState(false)
    const [techer, setTecher] = useState();
    const [name, setName] = useState()
    const [user, setUser] = useState()
    const techerApi = () => {
        fetch("http://localhost:8080/techer/list")
            .then(res => res.json())
            .then(data => setTecher(data));
    }
    const userDetails = () => {
        fetch("http://localhost:8080/user/profile", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,

            }
        })
            .then(res => res.json())
            .then(data => {
                setUser(data)
                console.log(data)
            });
    }
    useEffect(() => {
        techerApi();
        userDetails();
    }, [])
    // const handel=(id)=>{
    //     console.log("id")
    // }
    // console.log(name)
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login")
    }
    return (

        <>
            <div >

                <div>{user && user.map((item) => {
                    return (
                        <>

                            {/* <button type="button" class="btn btn-primary " style={{width:"100px"}}>{item.name}</button> */}
                            <Link to="/profile"><button type="button" class="btn btn-info m-3" style={{ float: "left" }} >Hi {item.name} <i class="fa-solid fa-chevron-down" ></i></button>
                            </Link>


                        </>
                    )
                })}</div>
                <button type="button" class="btn btn-primary m-3" style={{ float: "right" }} onClick={logout}>Logout</button>

                {/* <button type="button" classNameName="btn btn-secondary m-3 " style={{float:"right"}} onClick={logout}>Logout</button> */}
                <Link to="/favorite"> <button type="button" class="btn btn-primary m-3" style={{ float: "right" }} >Most Followers</button>
                </Link>
            </div>
            <h1 >Teacher List</h1>
            {techer && techer.map((item, index) => {
                return (
                    <>
                        <Card item={item} />
                    </>
                )
            })}
        </>
    )
}
export default TecherList;