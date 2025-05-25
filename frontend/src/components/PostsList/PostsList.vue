<template>
  <div class="posts-list">
    <h2 class="posts-list-title">My Posts</h2>
    <div class="posts-list-container" v-for="post in posts" :key="post.id">
      <h3>[{{ post.id }}] {{ post.title }}</h3>
      <p>{{ post.body }}</p>

      <button @click="editPost(post.id)">Edit</button>
      <button @click="deletePost(post.id)">Delete</button>
    </div>
  </div>
</template>

<script setup>
  import "./PostsList.css";
  import { usePosts } from "../../composables/usePost";
  import { onMounted } from "vue";

  const {
    posts,
    editPost,
    deletePost,
    fetchPosts
  } = usePosts();

  onMounted(() => {
    fetchPosts();
  });
</script>
