import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./sass/App.scss"
import { Pokes } from './components/itemsPoke'
import { CardInfoP } from './components/cardInfoPoke'

function App() {

  const [itemsP,setItemsP]=useState([])
  const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
  const [loading,setLoading]=useState(Boolean)
  const [previousUrl,setPreviousUrl]=useState()
  const [nextUrl,setNextUrl]=useState()
  const [pokeInformation,setPokeInformation]=useState()

  const fetchPoke = async()=>{
    setLoading(true)
    const response = await axios.get(url)
    setNextUrl(response.data.next)
    setPreviousUrl(response.data.previous)
    getPoke(response.data.results)
    setLoading(false)
  }

  const getPoke = async(res)=>{
    res.map(async(item)=>{
      const response = await axios.get(item.url)
      setItemsP(state=>{
        state=[...state,response.data]
        state.sort((a,b)=>a.id>b.id?1:-1)
        const uniqueArr = state.filter((item, index, self) =>
          index === self.findIndex((t) => (
            t.id === item.id
          ))
        )
        return uniqueArr;
      })
    }) 
  }

    useEffect(()=>{
      fetchPoke()
    }, [url] )

  return (
    <>
      <div className="container p-3">
        <h2 className="text-center mb-5">STATS POKE</h2>
        <div className="row">
          {/* grid poke */}
          <div className="
          col-lg-6
          content_main
          position-relative
          ">
            {
              (previousUrl === null)?"":
              (
                <button className="buttonFx btn" onClick={()=>{setItemsP([]);setUrl(previousUrl)}}>
                  <i className="bi bi-arrow-left"></i>
                </button>
              )
            }
            <Pokes items={itemsP} loading={loading} information={e=>setPokeInformation(e)}/>
            {
              (nextUrl === null)?"":
              (
                <button className="buttonFx btn" onClick={()=>{setItemsP([]);setUrl(nextUrl)}}>
                  <i className="bi bi-arrow-right"></i>
                </button>
              )
            }
            
          </div>
          {/* statistics poke */}
          <div className="col-lg-6 content_main">
            <CardInfoP data={pokeInformation}/>
          </div>
        </div>
        <span className="d-flex flex-column">
          <span className="text-primary fw-bold miniInfo">
            version 1.0.0
          </span>
          <span className="text-primary fw-bold miniInfo">
            Developer by WILSON RIVERO
          </span>      
        </span>
      </div>
    </>
  )
}

export default App
