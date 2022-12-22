import React from 'react'

const Card = (props) => {
  return (
    <div style={{
        width:250,
        height:200,
        display:"flex",
        justifyContent:'center',
        flexDirection:'column',
        padding:'2rem',
        textAlign:'center',
        backgroundColor:'#ff0',
        border:'2px solid #000',
        borderRadius:18,

    }}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card