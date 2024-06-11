

const PORT = 5000

const express = require('express');
const cors = require('cors');
const axios = require('axios')
const app = express();

app.use(cors())

app.get("/posts", (req, res) => {
    // We need 3 for the placeholder homepage and 9 for the related posts
    const LENGTH = 9 + 3
    const END = 0 + LENGTH;

    console.log("Fetching Posts")
    const urls = ["https://jsonplaceholder.typicode.com/photos", "https://jsonplaceholder.typicode.com/posts"];
    const requests = urls.map(axios.get);

    axios.all(requests)
        .then(responses => {
            let photos = responses[0].data.slice(0, END)
            let posts = responses[1].data.slice(0, END)

            let result = [];
            for (let i = 0; i < LENGTH; ++i) {
                result.push({
                    "id": posts[i].id,
                    "photoTitle": photos[i].title,
                    "url": photos[i].url,
                    "thumbnailUrl": photos[i].thumbnailUrl,
                    "title": posts[i].title,
                    // There is no author field in the API
                    "author": /*posts[i].author*/ "Placeholder"
                })
            }
            res.json(result);
        })
})

app.get("/post/:id", (req, res) => {
    console.log("Fetching Post " + req.params.id)

    const urls = [`https://jsonplaceholder.typicode.com/photos/${req.params.id}`, `https://jsonplaceholder.typicode.com/posts/${req.params.id}`];
    const requests = urls.map(axios.get);
    
    axios.all(requests)
        .then(responses => {
            let photo = responses[0].data
            let post = responses[1].data
            let result = {
                "id": post.id,
                "photoTitle": photo.title,
                "url": photo.url,
                "title": post.title,
                // There is no author field in the API
                "author": /*post.author*/ "Placeholder"
            }
            res.json(result)
        })
})

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})
