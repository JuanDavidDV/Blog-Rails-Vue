<template>
  <div>
    <h1 class="title">Posts</h1>
    <input type="text"
          v-model="title"
          placeholder="Title"
          class="title-input"
    />
    <input type="text"
          v-model="body"
          placeholder="Body"
          class="body-input"
    />
  </div>
  <!-- only renders if editing the post-->
  <button v-if="isEditing" @click="updatePost">Update</button>
  <button v-if="isEditing" @click="cancelEdit">Cancel</button>

  <!--only renders if not editing the post-->
  <button v-else @click="createPost">Create</button>
</template>

<script setup>
  import "./Posts.css"
  import { ref, onMounted } from "vue";

  const posts = ref([]);
  const title = ref("");
  const body = ref("");
  const postId = ref(0);
  const isEditing = ref(false);

  const API_URL = "http://localhost:3000/posts";

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
</script>
