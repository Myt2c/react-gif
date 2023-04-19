export const GetGifs = async(categoryHtml) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Rl962khQc48f2JLBVummai9E2YlNi0Ol&q=${categoryHtml}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.original.url
    }));
    return gifs;
}