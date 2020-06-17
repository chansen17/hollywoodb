import React from 'react';

function Search({ handleInput, search }) {
    return (
        <div>
            <section className="searchbox-wrap">
                <header className="header">
                    <h1>HollywooDB</h1>
                    <p>Search for your favorite movies or television shows!</p>
                </header>
                    <form onSubmit={search}>
                        <input 
                        type="text" 
                        placeholder="Search movie or TV show.." 
                        className="searchbox" 
                        onChange={handleInput}
                        />
                        <input className="search-btn" type="submit" value="Search" />
                    </form>
            </section>
        </div>
    )
}

export default Search
