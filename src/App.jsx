import React from 'react'
import { 
  useSearchParams,
  useNavigate, 
  RouterProvider, 
  createBrowserRouter,
  createRoutesFromElements,
  Routes, 
  Route
  } from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import Practice from './pages/Practice'
import Layout from './components/Layout'
import ReactDOM from "react-dom/client";
import { hsk3 } from './hsk3.jsx'

export function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  } 
}

function App() {
  const ClusterContext = React.createContext()
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate();

  const [vocabList, setVocabList] = React.useState(hsk3)
  const [clusters, setClusters] = React.useState([])
  const [cluster, setCluster] = React.useState() 
  const [level, setLevel] = React.useState()
  const clusterFilter = searchParams.get('cluster')

  const router = createBrowserRouter(createRoutesFromElements(
    
      <Route path="/" element={<Layout />}>
       <Route index element={<Home vocabList={vocabList} level={level} clusters={clusters} cluster={cluster} setCluster={setCluster} />} />
       <Route path="/practice/:cluster" element={<Practice level={level} cluster={cluster}/>} />
      </Route>
    
  ))

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

  React.useEffect(()=> {
    navigate(`/practice/:${cluster}`)
  }, [clusterFilter])
 
  return (
    <ClusterContext.Provider value={cluster}>
       <RouterProvider router={router} />
    </ClusterContext.Provider>
   
  )
}

export default App
