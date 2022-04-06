import axios from "axios"

const baseURL = 'https://api.anonfiles.com/'

export const api = {
    sendImage: async (image: File) => {
        let response = await axios({
            url: baseURL + '/upload',
            data: image,
            method: 'POST',
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(response)
        return response
    }
}