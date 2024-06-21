import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import { hsk3 } from '../hsk3.jsx'

// export function shuffle(array) {
//     let currentIndex = array.length;
//     while (currentIndex != 0) {
//       let randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     } 
// }

export default function Home(){
  const navigate = useNavigate()
  const [vocabList, setVocabList] = React.useState(hsk3)
  const [clusters, setClusters] = React.useState([])
  const [cluster, setCluster] = React.useState() 
  const [level, setLevel] = React.useState()


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
    navigate(`/practice/:${e.target.value}`)
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