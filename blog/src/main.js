
import {user} from './data/user';
import { posts } from './data/posts';
let p = 1
//document.getElementById('pfp').src = user[0].pfp;
document.getElementById('name').textContent = user[0].name;
document.getElementById('bio').textContent = user[0].bio
document.getElementById('title').textContent = posts[p].title
document.getElementById('post').textContent = `Post:${posts[p].id}`
document.getElementById('content').textContent = posts[p].content
document.getElementById('date').textContent = `Date Posted: ${posts[p].date}`
let postTag = ''
posts[p].tags.forEach(tag => {
    postTag += `#${tag}` + " "
})
document.getElementById("tags").textContent = `Tags: ${postTag}`
