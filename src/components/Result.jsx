import React from 'react'

function Result({ result, openPopup }) {
    return (
        <div className="result" onClick={() => openPopup(result.imdbID)}>
            { result.Poster.includes("N/A") ? <div className="broken-img">This is a placeholder Image</div> : <img src={result.Poster} alt={result.Title}/>}
            <h3>{result.Title}</h3>
        </div>
    )
}
 
export default Result
