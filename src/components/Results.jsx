import React from 'react'
import Result from './Result';

function Results({ results, openPopup, searched}) {
    return (
        <section className="results">
            {
                results ? results.map(result => (
                    <Result key={result.imdbID} result={result} openPopup={openPopup}/>
                )) : (
                    <div className="error animate__animated animate__headShake">
                        <h4>Uh Oh! An error occured. Your search for <span>( {searched} )</span> may not match any records. Let's try again.</h4>
                    </div>
                )
            }
        </section>
    )
}

export default Results
