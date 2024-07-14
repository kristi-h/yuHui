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
  const [level, setLevel] = React.useState("easy")
  const clusterFilter = searchParams.get('cluster')

  React.useEffect(()=>{
    function createClusters(){
    console.log(typeof vocabList) 
    console.log(Array.isArray(vocabList))
      shuffle(vocabList)
      const clustered = []
      for (let i=0; i<vocabList.length; i++){
        clustered.push(vocabList.slice(i, i+20))
        i+=20
      }
      setClusters(clustered)
      }
      createClusters()
      
  },[vocabList])

  function handleLevelClick(e){
    setLevel(e.currentTarget.value)
  }

  function handleClusterClick(e) {
    setCluster(clusters[(e.currentTarget.value +1)])
    navigate(`/practice/:${parseInt(e.currentTarget.value)+1}`, {
      state: {
        cluster: clusters[e.currentTarget.value],
        level
      }
    })
  }
  console.log('chosen-cluster', cluster)
  console.log('level', level)

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
            <h1>Pick your Level:</h1>
            <button onClick={handleLevelClick} value="easy">Easy</button>
            <button onClick={handleLevelClick} value="medium">Medium</button>
            <button onClick={handleLevelClick} value="difficult">Difficult</button>

            <h1>Pick a cluster</h1>
            {clustersEle()}
        </>
    )
}