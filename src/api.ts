import axios from "axios"

const baseURL = 'https://api.anonfiles.com/'

export const api = {
    sendImage: async (image: File) => {
        let response = await axios({
            url: baseURL + '/upload',
            data: image,
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(response)
        return response
    }
}