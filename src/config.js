// Las variables de entorno que declaramos nosotros debe empezar
// por REACT_APP porque React pues tiene las suyas y para que 
// no se confundan jeje.

const config = {
    baseURL_API: process.env.REACT_APP_APIURI,
    clientID: process.env.REACT_APP_CLIENTID
}

export default config;
