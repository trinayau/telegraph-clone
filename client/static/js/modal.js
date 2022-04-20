const form = document.querySelector("form");
const title = document.getElementById("titleForm");
const description = document.getElementById("descriptionForm");
const content = document.getElementById("contentForm");
const gif = document.getElementById("gifForm");

form.addEventListener('click', createPost)

async function createPost(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(e.target))
        }
        
        const response = await fetch('http://localhost:3000/posts', options);

        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location = `#posts/${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}
