import React from 'react'
import {hsk3} from '../hsk3.jsx'
import '../App.css'

export default function Home(){
  const [vocabList, setVocabList] = React.useState(hsk3)
  const [clusters, setClusters] = React.useState([])
  const [cluster, setCluster] = React.useState()
  const [word, setWord] = React.useState({
    english: "",
    pinyin: "",
    traditional: ""
  })
  console.log(vocabList)
  
  React.useEffect(()=>{
    function createClusters(){
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

  function handleClusterClick(e) {
    setCluster(clusters[e.target.value])
  }
  console.log('chosen-cluster', cluster)

  function shuffle(array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    } 
  }

  function clustersEle(){
    console.log(clusters)
    return clusters.map((word, index)=>{
      return(
      <button key={index} onClick={handleClusterClick} className='clusters-btn' value={index}>
        {index+1}
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