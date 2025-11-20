<script setup>
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import { db } from '../firebase_conf'
import { RouterLink } from 'vue-router'

// IMPORTANT: collection name must match Firestore exactly: "Flash Cards"
const cards = useCollection(collection(db, 'Flash Cards'))
</script>

<template>
  <div>
    <h1>Flash Cards</h1>

    <!-- Loading state -->
    <div v-if="cards === undefined">
      Loading cards...
    </div>

    <!-- List of cards -->
    <ul v-else>
      <li v-for="card in cards" :key="card.id">
        <!-- link to /test/:id -->
        <RouterLink :to="{ name: 'test_w_id', params: { id: card.id } }">
          {{ card.Front }} <!-- uses your 'Front' field -->
        </RouterLink>
      </li>
    </ul>

    <p>
      <RouterLink to="/">Back to Home</RouterLink>
    </p>
  </div>
</template>
