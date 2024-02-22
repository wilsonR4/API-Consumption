import "../sass/Pokes.scss"
import { motion } from "framer-motion"

const itemsAnim = {
    hidden:{
        opacity: 0,
        y:20
    },
    visible:{
        opacity:1,
        y:0,
        transition: {
            delay: 0.3,
            stagger: 0.2
          }
    }
}

function Pokes({items,loading,information}) {
  return (
    <>
        <motion.div className="
        contentPoke
        row
        p-3
        mx-auto
        d-flex
        align-items-center
        justify-content-center
        overflow-y-auto
        "
        variants={itemsAnim}
        initial="hidden"
        animate="visible"
        >
            {
                loading?
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">loading...</span>
                </div>
                :
                items.map((data)=>{
                    return(
                        <>
                            <motion.div
                            className="contentImg col-3 p-2 m-1 mx-2 border rounded"
                            key={data.name}
                            onClick={()=>information(data)}
                            variants={itemsAnim}
                            >
                                <img className="contentImg__img" src={data.sprites.other.dream_world.front_default} alt={data.name} />
                                <span className="contentImg__index">{data.id}</span>
                            </motion.div>
                        </>
                    )
                })
            }
        </motion.div>
    </>
  )
}

export {Pokes}