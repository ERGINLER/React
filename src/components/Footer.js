import React from 'react'

function Footer(props){
  let {footerText}=props;
  return (
    // <div>Merhaba Ben Footer Componentim</div>
    <>
        <h1>{footerText}</h1>    
        <h1>{props.age}</h1>
    </>
  )
}

export default Footer