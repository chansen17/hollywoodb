import React from 'react';

function Search({ handleInput, search }) {
    return (
        <div>
            <section className="searchbox-wrap">
                <header className="header">
                    <h1>HollywooDB</h1>
                    <p>Search for your favorite movies or television shows!</p>
                </header>
                <input 
                type="text" 
                placeholder="Search movie.." 
                className="searchbox" 
                onChange={handleInput}
                onKeyPress={search}
                />
            </section>
        </div>
    )
}

export default Search
