import React from 'react'
import { useNavigate,  useSearchParams } from 'react-router-dom'
import '../App.css'
import { hsk3 } from '../hsk3.jsx'

export function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  } 
}

export default function Home(){
  const navigate = useNavigate()
  // const ClusterContext = React.createContext()
  const [searchParams, setSearchParams] = useSearchParams()

  const [vocabList, setVocabList] = React.useState(hsk3)
  const [clusters, setClusters] = React.useState([])
  const [cluster, setCluster] = React.useState() 
  const [level, setLevel] = React.useState()
  const clusterFilter = searchParams.get('cluster')

  React.useEffect(()=>{
    function createClusters(){
    console.log(typeof vocabList) 
    console.log(Array.isArray(vocabList))
      shuffle(vocabList)
      const clustered = []
      for (let i=0; i<vocabList.length; i++){
        clustered.push(vocabList.slice(i, i+21))
        i+=20
      }
      setClusters(clustered)
      }
      createClusters()
      
  },[vocabList])
  console.log('clusters', clusters)

  // React.useEffect(()=> {
  //   navigate(`/practice/:${cluster}`)
  // }, [clusterFilter])

  function handleClusterClick(e) {
    // setCluster(clusters[(e.target.value +1)])
    navigate(`/practice/:${parseInt(e.currentTarget.value)+1}`, {
      state: {
        cluster: clusters[e.currentTarget.value],
      }
    })
    // console.log('value', e.target.value)
    // console.log(e.currentTarget)
    // console.log("parseInt(e.currentTarget.value)+1", parseInt(e.currentTarget.value)+1)
    // console.log("e.currentTarget.value", e.currentTarget.value)
    console.log("clusters[e.currentTarget.value]", clusters[e.currentTarget.value])
  }
  console.log('chosen-cluster', cluster)

  function clustersEle(){
    
    return clusters.map((word, index)=>{
      return(
      <button key={index} onClick={handleClusterClick} className='clusters-btn' value={index}>
        {(index +1)}
      </button>
      )
    })
  }
  console.log('clusters', clusters)


    return(
        <>
            <h1>Pick a cluster</h1>
            {clustersEle()}
        </>
    )
}