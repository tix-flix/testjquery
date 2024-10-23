import React from 'react'
import st from "./Text.module.css"

function Text(props) {
  return (
    <h1 className={st.tx}>{props.children}</h1>
  )
}

export default Text