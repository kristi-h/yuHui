import React from 'react'

export default function ClusterButton({handleClick, cluster}){
    return(
        <button onClick={handleClick}>{cluster}</button>
    )
}