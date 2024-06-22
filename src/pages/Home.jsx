import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import { shuffle } from '../App'
// import { hsk3 } from '../hsk3.jsx'



export default function Home({vocabList, clusters, cluster, setCluster}){
  const navigate = useNavigate()

  function handleClusterClick(e) {
    setCluster(clusters[e.target.value])
    navigate(`/practice/:${e.target.value}`)
  }
  console.log('chosen-cluster', cluster)

  function clustersEle(){
    console.log(clusters)
    return clusters.map((word, index)=>{
      return(
      <button key={index} onClick={handleClusterClick} className='clusters-btn' value={index}>
        {index}
      </button>
      )
    })
  }


    return(
        <>
            <h1>Pick a cluster</h1>
            {clustersEle()}
        </>
    )
}