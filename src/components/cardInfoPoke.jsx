import React from 'react'
import "../sass/CardInfoP.scss"
import ProfileImg from "../assets/profile.png"
import {Chart as ChartJS, defaults} from "chart.js/auto"
import {Bar} from "react-chartjs-2"

defaults.maintainAspectRatio = false
defaults.responsive = true


function CardInfoP({data}) {
  return (
    <>
      {
        !data
        ?
        (
          <>
            <div className="card p-3 shadow">
              <img className="ProfileImg card-img-top mx-auto mb-3" src={ProfileImg} alt={ProfileImg} />
              <div className="card-body">
                  <h4 className="card-title text-center mb-2">Pokemon</h4>
                  <p className="boxInfo card-text mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptate fugiat odit cupiditate mollitia, aperiam ea, inventore perferendis numquam eius unde sed autem possimus eos? Harum vel assumenda ipsam impedit?
                  </p>
              </div>
            </div>
          </>
        )
        :
        (
          <>
            <div className="card p-3 shadow">
              <img className="card-img-top" src={data.sprites.other.dream_world.front_default} alt={data.name} />
              <div className="card-body">
                  <h5 className="card-title text-center mb-lg-4">{data.name}</h5>
                  <div className="text-center">
                    {
                      data.abilities.map((event)=>{
                        return(
                          <>
                            <span className="
                            ability
                            rounded-pill
                            m-lg-2
                            m-1
                            px-2
                            pb-lg-2 
                            pt-lg-1
                            d-lg-inline
                            d-grid
                            ">{event.ability.name}</span>
                          </>
                        )
                      })
                    }
                  </div>
                  
                  <div className="
                  p-2
                  mt-lg-3
                  border-top">
                    <Bar
                      data={{
                        labels: data.stats.map(event=>{
                          return event.stat.name;
                        }),
                        datasets:[{
                          label:"stats",
                          data:data.stats.map(event=>{
                            return event.base_stat;
                          }),
                          backgroundColor: [
                            'rgba(255,99,132, .3)',
                            'rgba(99,123,255, .3)',
                            'rgba(99,255,132, .3)',
                            'rgba(252,252,99, .3)',
                            'rgba(255,132,12, .3)',
                            'rgba(255,12,152, .3)'
                          ],
                          borderColor: [
                            'rgb(255,99,132)',
                            'rgb(99,123,255)',
                            'rgb(99,255,132)',
                            'rgb(252,252,99)',
                            'rgb(255,132,12)',
                            'rgb(255,12,152)'
                          ],
                          borderWidth:1 
                        }]
                      }}
                    />
                  </div>
              </div>
            </div>
          </>
        )
      }
        
    </>
  )
}

export {CardInfoP}