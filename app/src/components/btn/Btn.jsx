import React from 'react'
import st from "./Btn.module.css"

function Btn({a, b, c, d, e}) {
  return (
    <>
    <center>
    <button className={st.btn} onClick={() => a()}>+</button>
    <button className={st.btn} onClick={() => b()}>-</button>
    <button className={st.btn} onClick={() => c()}>*</button>
    <button className={st.btn} onClick={() => d()}>/</button>
    <button className={st.btn__c} onClick={() => e()}>Clear</button>
    </center>
    </>
  )
}

export default Btn