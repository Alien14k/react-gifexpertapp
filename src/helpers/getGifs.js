export const getGifs = async ( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=Kj2vLvNcvcPIn4buMOG89rYV9dYoeQmw`;
    const response = await fetch( url );

    // response.ok?
    const { data } = await response.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    } );
    return gifs;

}