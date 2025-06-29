import user from './data/user.js';
fetch('http://localhost:3000/')
  .then(res => res.json())
  .then(posts => {
    const postsList = document.getElementById('postsList');
    postsList.innerHTML = posts.map(post => `
      <div class="bg-white rounded-xl shadow p-8">
        <p class="text-gray-500 text-sm mb-2">${new Date(post.date).toLocaleDateString('en-US', {year:'numeric', month:'long', day:'numeric'})}</p>
        <h1 class="text-3xl font-bold mb-2">${post.title}</h1>
        <p class="text-xl mb-4">${post.content}</p>
        <div class="flex flex-wrap gap-2">
          ${(post.tags || []).map(tag => `<span class="bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">#${tag}</span>`).join('')}
        </div>
      </div>
    `).join('');
  })
  .catch(err => console.log(err))



import { AboutPage } from './pages/about';
import { BlogPage } from './pages/blog';
import { ContactPage } from './pages/contact';
// let p = 0
// let count = 0
// const AboutShow = document.getElementById('About')
document.getElementById('Pfp').src = user.pfp;
document.getElementById('name').textContent = user.name;
document.getElementById('bio').textContent = user.bio
// const pfp = document.getElementById('Pfp');
// pfp.src = user[0].pfp

// let postTag = ''
// posts[p].tags.forEach(tag => {
//     postTag += `#${tag}` + " "
// })
// document.getElementById("tags").textContent = postTag

// function Menu(){
//     const arrow = document.querySelector('#arrow img');
//     count++;
//     if(count%2 == 0){
//         arrow.src = 'public/angle-right (1).png'
//         AboutShow.style.display = 'none'
//     }else{
//         arrow.src = 'public/angle-down.png'
//         AboutShow.style.display = 'block'
//     }
    
// }
function PostDown() {
    const postContent = document.getElementById('postContent');
  postContent.classList.remove('opacity-100');
  postContent.classList.add('opacity-0');

  setTimeout(() => {
    p = (p + 1) % posts.length;
    updatePostContent();
    postContent.classList.remove('opacity-0');
    postContent.classList.add('opacity-100');
  }, 300);
}
// function PostUp(){
//     if (p === 0) {
//     console.warn('No more posts');
//     return;
//   }

//   const postContent = document.getElementById('postContent');
//   postContent.classList.remove('opacity-100');
//   postContent.classList.add('opacity-0');

//   setTimeout(() => {
//     p = (p - 1 + posts.length) % posts.length;
//     updatePostContent();
//     postContent.classList.remove('opacity-0');
//     postContent.classList.add('opacity-100');
//   }, 300);
// }
    
// function updatePostContent(){
//     console.log('clicked')
//     document.getElementById('title').textContent = posts[p].title;
//   document.getElementById('post').textContent = `Post Counter: ${posts[p].id}`;
//   document.getElementById('content').textContent = posts[p].content;
//   document.getElementById('date').textContent = posts[p].date;

//   // Update tags
//   let postTag = '';
//   posts[p].tags.forEach(tag => {
//       postTag += `#${tag} `;
//   });
//   document.getElementById("tags").textContent = postTag;

//   // Update profile picture if needed
//   if (user[p] && user[p].pfp) {
//       document.getElementById('Pfp').src = user[p].pfp;
//   }}

// window.Menu = Menu;
// window.AboutPage = AboutPage;
// window.BlogPage = BlogPage;
// window.ContactPage = ContactPage;
// window.PostDown = PostDown;
// window.PostUp = PostUp;
// window.updatePostContent = updatePostContent;
const form = document.getElementById('form')
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const message = document.getElementById('contact-message').value;
  console.log(name,email,message)

  const data = { name, email, message };
  try {
    const response = await fetch('http://localhost:3000/messege', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      alert('Message Sent');
      form.reset();
    } else {
      alert('Message Not Sent');
    }
  } catch (err) {
    console.log(err);
  }
});


