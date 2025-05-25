import { ref, onMounted } from "vue";

const API_URL = "http://localhost:3000/posts";

const posts = ref([]);
const title = ref("");
const body = ref("");
const postId = (0);
const isEditing = ref(false);

const fetchPosts = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  posts.value = data;
};

  const createPost = async() => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title.value,
        body: body.value
      })
    })

    const data = await res.json();

    postId.value.push(data);
    title.value = "";
    body.value = "";
    postId.value = 0;
  };

  const updatePost = async() => {
    return true;
  };

  const cancelEdit = () => {
    return true;
  };

  export function usePosts() {
    return {
      posts,
      title, 
      body,
      postId,
      isEditing,
      fetchPosts,
      createPost,
      updatePost,
      cancelEdit
    }
  }
