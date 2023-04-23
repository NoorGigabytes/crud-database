import React from 'react'
import { GrFormClose } from "react-icons/gr";

export default function InfoPopup({element, setIsPopupOpen, color}) {
  return (
    <div style={{
        position: "fixed",
        background: "rgba(0,0,0,0.7)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }}>
        <div style={{
            background: "white",
            border: `6px solid ${color}`,
            width: "600px",
            padding: "20px 40px",
            position: "relative",
            animation: "dropTop .2s linear"
        }}>
            <div>
                <h1 style={{color: color}}>{element.name}</h1>
                <div onClick={() => setIsPopupOpen(false)} style={{position: "absolute", top: 10, right: 10, cursor: "pointer"}}><GrFormClose size="1.5rem" /></div>
            </div>
            <div>
                <p><small>{element.summary}</small></p>
            </div>
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <p style={{border: `1px solid ${color}`, borderRadius: "5em", padding: "0.1em 0.35em"}}><span style={{fontStyle: "italic"}}>Phase: {element.phase}</span></p>
                <p style={{border: `1px solid ${color}`, borderRadius: "5em", padding: "0.1em 0.35em"}}><span style={{fontStyle: "italic"}}>Block: {element.block}</span></p>
                <p style={{border: `1px solid ${color}`, borderRadius: "5em", padding: "0.1em 0.35em"}}><span style={{fontStyle: "italic"}}>Atomic Mass: {element.atomic_mass.toFixed(2)}</span></p>
                <p style={{border: `1px solid ${color}`, borderRadius: "5em", padding: "0.1em 0.35em"}}><span style={{fontStyle: "italic"}}>Number: {element.number}</span></p>
                <p style={{border: `1px solid ${color}`, borderRadius: "5em", padding: "0.1em 0.35em"}}><span style={{fontStyle: "italic"}}>Symbol: {element.symbol}</span></p>
            </div>
            <div>
                <p>Electron Configuration: {element.electron_configuration}</p>
            </div>
            {element.appearance && <div>
                <p>Appearance: {element.appearance}</p>
            </div>}
            <div style={{display: "flex", justifyContent: "center"}}>
                <img src={element.image.url} alt={element.image.attribution} style={{maxWidth: "150px"}}/>
                {element.bohr_model_image && <img src={element.bohr_model_image} alt="bohr's model" style={{maxWidth: "250px"}}/>}
            </div>
            {element.discovered_by && <div>
                <p style={{fontStyle: "italic", fontWeight: 500}}><small>- Discovered by: {element.discovered_by}</small></p>
            </div>}
        </div>
    </div>
  )
}
