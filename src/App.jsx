import React from 'react'
import './App.css'
import {hsk3} from './hsk3.jsx'
import Home from './pages/Home'
import ClusterButton from './components/ClusterButton'

function App() {
  const [vocabList, setVocabList] = React.useState(hsk3)
  const [cluster, setCluster] = React.useState()
  const [clusters, setClusters] = React.useState([])
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
      console.log(clustered)
      // return clustered
      setClusters(clustered)
      }
      createClusters()
      
  },[vocabList])

  function handleClusterClick(e) {
    setCluster(clusters[e.target.value])
  }

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


  return (
    <>
      <Home />
      {clustersEle()}
    </>
  )
}

export default App
