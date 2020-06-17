import React from 'react'

function Popup({ selected, closePopup, searched }) {
    return (
        <section className="details-popup">
            <div className="content">
                <div className="title">
                    <h1>{selected.Title} <br/> <span><small>({ selected.Year })</small></span> <span><small>({ selected.Rated })</small></span></h1>
                    <h5>{selected.Rating}</h5>
                    { selected.Poster.includes("N/A") ? <div className="broken-img">This is a placeholder Image</div> : <img src={selected.Poster} alt={selected.Title}/>}
                </div>
                <div className="plot">
                    <h2>Plot</h2>
                    <p>{selected.Plot}</p>

                    <h3>Movie Data</h3>
                    <ul>
                        <li><span>director</span> : {selected.Director.includes("N/A") ? "director n/a" : selected.Director}</li>
                        <li><span>actors</span> : {selected.Actors.includes("N/A") ? "actors n/a" : selected.Actors}</li>
                        <li><span>box office</span> : { selected.BoxOffice.includes("N/A") ? "box office n/a" : selected.BoxOffice} </li>
                        <li><span>awards</span> : {selected.Awards.includes("N/A") ? "awards n/a" : selected.Awards}</li>
                        <li><span>country</span> : {selected.Country.includes("N/A") ? "country n/a" : selected.Country}</li>
                        <li><span>genre</span> : {selected.Genre.includes("N/A") ? "genre n/a" : selected.Genre}</li>
                        <li><span>metascore</span> : {selected.Metascore.includes("N/A") ? "metascore n/a" : selected.Metascore}</li>
                        <li><span>runtime</span> : {selected.Runtime.includes("N/A") ? "runtime n/a" : selected.Runtime}</li>
                        <li><span>imdb rating</span> : {selected.imdbRating.includes("N/A") ? "imdb rating n/a" : selected.imdbRating}</li>
                        <li><span>imdb votes</span> : {selected.imdbVotes.includes("N/A") ? "imdb votes n/a" : selected.imdbVotes}</li>
                        <li><span>writer</span> : { selected.Writer.includes("N/A") ?  "writer n/a" : selected.Writer}</li>
                    </ul>
                <button className="close-popup" onClick={closePopup}>Back to <span>{searched}</span></button>
                </div>
            </div>
        </section>
    )
}

export default Popup
