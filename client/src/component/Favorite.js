import React, { useEffect, useState } from "react";
const Favorite = () => {
    const [list, setList] = useState()
    const favoriteTecher = () => {
        fetch("http://localhost:8080/techerfavorite")
            .then(res => res.json())
            .then(data => {
                let arr = [];
                for (let i = 0; i < data.length; i++) {
                    for (let j = 0; j < data[i].length; j++) {
                        arr.push(data[i][j].name)
                    }
                }
                let map = {};
                arr.forEach(item => {
                    if (map[item]) {
                        map[item]++;
                    } else {
                        map[item] = 1;
                    }
                });
                let arr1 = []
                let myMap = map;
                const entries = Object.entries(myMap)
                Object.entries(myMap).forEach(([key, value]) => {
                    arr1.push({ key, value })
                })
                setList(arr1)
                console.log(arr1)
                // console.log("list")
            })
    }
    useEffect(() => {
        favoriteTecher()
       
    }, [])
    return (
        <>
        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Followers</th>
      <th scope="col">Icon</th>
    </tr>
  </thead>
  <tbody>
    
    
  
            {list && list.map((item,index)=>{
            return(
                <>
                <tr>
      <th scope="row">{index+1}</th>
      <td>{item.key}</td>
      <td>{item.value}</td>
      <td><i className="fa-solid fa-heart"></i></td>
    </tr>
               
                </>
            )
        })}
        </tbody>
</table>
        </>
    )
}
export default Favorite;