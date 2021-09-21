import React from "react"

function GifList({gifs}) {
    const gifLis = gifs.map(gifObj => {
        return (<li>
            <img src={gifObj.images.original.url} />
        </li>)
    })

    return (
        <ul>
            {gifLis}
        </ul>
    )
}

export default GifList