import React, {useEffect, useState} from "react"
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer() {
    const [gifs, setGifs] = useState([])
    const [search, setSearch] = useState("dolphin")

    function fetchGifs(search) {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=KuvcjFwd8oTZlTriAajDKeI5kTEPU9ZI`)
        .then(resp => resp.json())
        .then(data => setGifs(data.data.slice(0,3)))
    }

    useEffect(() => {
        fetchGifs(search)
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        fetchGifs(search)
    }

    return (<div>
        <GifSearch handleSubmit={handleSubmit} setSearch={setSearch} />
        <GifList gifs={gifs} />
    </div>)
}

export default GifListContainer