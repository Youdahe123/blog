import {user} from './data/user';
import { posts } from './data/posts';
import { AboutPage } from './pages/about';
import { BlogPage } from './pages/blog';
import { ContactPage } from './pages/contact';
let p = 0
let count = 0
const AboutShow = document.getElementById('About')
//document.getElementById('pfp').src = user[0].pfp;
document.getElementById('name').textContent = user[0].name;
document.getElementById('bio').textContent = user[0].bio
document.getElementById('title').textContent = posts[p].title
document.getElementById('post').textContent = `Post Counter: ${posts[p].id}`
document.getElementById('content').textContent = posts[p].content
document.getElementById('date').textContent = posts[p].date
const pfp = document.getElementById('Pfp');
pfp.src = user[0].pfp

let postTag = ''
posts[p].tags.forEach(tag => {
    postTag += `#${tag}` + " "
})
document.getElementById("tags").textContent = postTag

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
function PostDown() {
    const postContent = document.getElementById('postContent');
  postContent.classList.add('opacity-0');
  setTimeout(() => {
    p = (p + 1) % posts.length; // Loop to first post if at end
    updatePostContent();
    postContent.classList.remove('opacity-0');
  }, 300);
}
function PostUp(){
    if(p == 0){
        Error('no more posts')
    }else{
    const postContent = document.getElementById('postContent')
    postContent.classList.add('opacity-0');
    setTimeout(() => {
    p = (p - 1 + posts.length) % posts.length; // Loop to last post if at start
    updatePostContent();
    postContent.classList.remove('opacity-0');
    }, 300);
    }
}
    
function updatePostContent(){
    document.getElementById('title').textContent = posts[p].title;
  document.getElementById('post').textContent = `Post Counter: ${posts[p].id}`;
  document.getElementById('content').textContent = posts[p].content;
  document.getElementById('date').textContent = posts[p].date;

  // Update tags
  let postTag = '';
  posts[p].tags.forEach(tag => {
      postTag += `#${tag} `;
  });
  document.getElementById("tags").textContent = postTag;

  // Update profile picture if needed
  if (user[p] && user[p].pfp) {
      document.getElementById('Pfp').src = user[p].pfp;
  }}

window.Menu = Menu;
window.AboutPage = AboutPage;
window.BlogPage = BlogPage;
window.ContactPage = ContactPage;
window.PostDown = PostDown;
window.PostUp = PostUp;
window.updatePostContent = updatePostContent;




