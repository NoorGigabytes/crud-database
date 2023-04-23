import React from 'react'
import InfoPopup from './InfoPopup';
import "./PeriodicTable.css"
import data from "./PeriodicTableJSON.json"

export default function PeriodicTable() {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [activeElement, setActiveElement] = React.useState({});
    const [color, setColor] = React.useState('');
    const colorMap = {
        "noble gas": "#FFBC42",
        "alkaline earth metal": "#EC674E",
        "diatomic nonmetal": "#D81159",
        "alkali metal": "#8F2D56",
        "transition metal": "#58586B",
        "post-transition metal": "#218380",
        "polyatomic nonmetal": "#454dd9",
        "lanthanide": "#4AABAF",
        "actinide": "#de8e73",
        "metalloid": "#73D2DE",
        "unknown, probably transition metal": "#a19e9d",
        "unknown, probably post-transition metal": "#a19e9d",
        "unknown, probably metalloid": "#a19e9d",
        "unknown, predicted to be noble gas": "#a19e9d",
        "unknown, but predicted to be an alkali metal": "#a19e9d",
      };

    const handleClick= (element) => {
        setIsPopupOpen(true)
        setActiveElement(element)
        setColor(colorMap[element.category])
    };
    
  return (
    <div className='wrapper'>
        <div className='periodic-table'>
            {data.elements.map((element) => (
                <>
                {/* <div className='periodic-table'> */}
                    <div
                        key={element.name}
                        className="element"
                        style={{
                            gridColumn: element.xpos,
                            gridRow: element.ypos,
                            borderColor: colorMap[element.category]
                        }}
                        onClick={() => handleClick(element)}
                    >
                        <strong style={{ color: colorMap[element.category] }}>{element.symbol}</strong>
                        <small className='number'>{element.number}</small>
                        <small className='name'>{element.name}</small>
                    </div>
                {/* </div> */}
            </>
            ))}
        </div>
        {isPopupOpen && <InfoPopup element={activeElement} setIsPopupOpen={setIsPopupOpen} color={color}/>}
    </div>
  )
}
