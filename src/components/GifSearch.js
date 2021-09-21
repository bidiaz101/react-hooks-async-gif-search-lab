import React from "react"

function GifSearch({handleSubmit, setSearch}) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setSearch(e.target.value)} ></input>
            <button type="submit">Search</button>
        </form>
    )
}

export default GifSearch