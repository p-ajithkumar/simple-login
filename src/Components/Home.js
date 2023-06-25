import React,{useEffect,useState} from 'react'
import axios from 'axios'


function Home() {

    const [apiData,setData]=useState([])
    const i=0


const getData = async () =>
{

const result = await axios.get("https://restcountries.com/v2/all?fields=name,region,flag")

setData(result.data)

console.log("apidata ",apiData);
console.log("1 is",apiData[1]);

}

    useEffect(() => {
     
        getData()

    }, [])
    

  return (
    <div>
        <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Region</th>
      <th scope="col">Flag</th>
    </tr>
  </thead>
  <tbody>
    {apiData?.map((api,index)=>{
      return(
        <tr>
        <th scope="row">{index+1}</th>
        <td>{api.name}</td>
        <td>{api.region}</td>
        <td><img style={{width:"30px"}} src={api.flag}/></td>
      </tr>
      )
     
      
    })}
 
  </tbody>
</table>
    </div>
  )
}

export default Home