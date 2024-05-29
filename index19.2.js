// Функция для создания HTML-разметки поста
function createPostHTML(post) {
  return `
    <div class="post">
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    </div>
  `;
}

// Функция для добавления HTML-разметки в контейнер
function addPostToContainer(container, postHTML) {
  container.innerHTML += postHTML;
}

// Функция для выполнения GET-запроса и добавления постов на страницу
async function fetchAndDisplayPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    const postContainer = document.getElementById("post-container");

    posts.forEach((post) => {
      const postHTML = createPostHTML(post);
      addPostToContainer(postContainer, postHTML);
    });
  } catch (error) {
    console.error("Произошла ошибка при получении постов:", error);
  }
}

// Вызов функции для получения и отображения постов
fetchAndDisplayPosts();
