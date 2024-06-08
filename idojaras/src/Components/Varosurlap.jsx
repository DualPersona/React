import React from "react";

export default function Varosurlap({updateVaros}){
    const varosRef = React.useRef(null)

    const[varos, setVaros] = React.useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        updateVaros(varos)
    }

    const handleVarosChange = (event) =>{
        setVaros(event.target.value)
    }

    return(
       <form onSubmit={handleSubmit}>
            <label>
                Város?
                <input
                type="text" 
                name="varos" 
                ref={varosRef} 
                value={varos}
                onChange={handleVarosChange}
                />
            </label>
            <button type="submit">Lekérdezés</button>
       </form>
    )
}