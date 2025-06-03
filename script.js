// Function to fetch posts from server and display them
async function loadPosts() {
  const response = await fetch('/posts');
  const posts = await response.json();

  const postsDiv = document.getElementById('posts');
  postsDiv.innerHTML = ''; // Clear existing posts

  if (posts.length === 0) {
    postsDiv.innerHTML = '<p>No posts yet. Be the first to add one!</p>';
    return;
  }

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <small>Posted on: ${post.date}</small>
      <p>${post.content}</p>
    `;

    postsDiv.appendChild(postElement);
  });
}

// Load posts when page loads
window.onload = loadPosts;
