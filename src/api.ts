import axios from "axios"

const baseURL = 'https://api.imgur.com/3/image'

export const api = {
    sendImage: async (image: File) => {
        let response = await axios({
            method: 'POST',
            url: baseURL,
            headers: {
                'Authorization': 'Client-ID a4895ad056588bd'
            },
            data: image
        })
        console.log(response.data.data.link)
        return response
    }
}