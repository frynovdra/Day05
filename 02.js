const axios = require('axios');

(async () => {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const users = await axios.get("https://jsonplaceholder.typicode.com/users ");

const newArr = posts.data.map(post => {
    return [
        ... post,
        {user : user.data.find(user => user.id == post.userid)
    }
})
    console.log(newArr[0])
])();