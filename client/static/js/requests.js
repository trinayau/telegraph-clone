// const form = document.querySelector("form");

// form.addEventListener('submit', createPost)

// async function createPost(e){
//     try {
//         const options = {
//             method: 'POST',
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({title: e.target.title.value, author: e.target.author.value, content: e.target.body.value})
//         }
//         const response = await fetch('http://localhost:3000/posts', options);
//         const post = await response.json();
//             window.location = `#posts/${post.id}`
//     } catch (err) {
//         console.error(err);
//     }
// };
