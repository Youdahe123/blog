
import {user} from './data/user';
import { posts } from './data/posts';
let p = 0
let count = 0
const AboutShow = document.getElementById('About')
//Block Content
// //document.getElementById('pfp').src = user[0].pfp;
// document.getElementById('name').textContent = user[0].name;
// document.getElementById('bio').textContent = user[0].bio
// document.getElementById('title').textContent = posts[p].title
// document.getElementById('post').textContent = `Post:${posts[p].id}`
// document.getElementById('content').textContent = posts[p].content
// document.getElementById('date').textContent = `Date Posted: ${posts[p].date}`
// let postTag = ''
// posts[p].tags.forEach(tag => {
//     postTag += `#${tag}` + " "
// })
// document.getElementById("tags").textContent = `Tags: ${postTag}`

function Menu(){
    const arrow = document.querySelector('#arrow img');
    count++;
    if(count%2 == 0){
        arrow.src = 'public/angle-right (1).png'
        AboutShow.style.display = 'none'
    }else{
        arrow.src = 'public/angle-down.png'
        AboutShow.style.display = 'block'
    }
    
}
window.Menu = Menu;




