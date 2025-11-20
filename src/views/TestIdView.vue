<!-- <script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div>
    <h1>See the Test ID below:</h1>
    <p>ID: {{ route.params.id }}</p>
  </div>
</template>

 -->

 <script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { useDocument } from 'vuefire'
import { doc } from 'firebase/firestore'
import { db } from '../firebase_conf'


const route = useRoute()
const router = useRouter()

// Build a document reference based on the URL param
const cardRef = computed(() =>
  doc(db, 'Flash Cards', route.params.id)  // same collection name
)

// Reactive document
const card = useDocument(cardRef)

// Optional: if the card doesn't exist, go back to /testing
watch(card, (val) => {
  if (val === null) {
    router.push('/testing')
  }
})
</script>

<template>
  <div>
    <h1>Card Detail</h1>

    <!-- Still loading -->
    <div v-if="card === undefined">
      Loading...
    </div>

    <!-- Not found (in case you remove the redirect) -->
    <div v-else-if="card === null">
      <p>Card not found.</p>
      <RouterLink to="/testing">Back to list</RouterLink>
    </div>

    <!-- Successfully loaded -->
    <div v-else>
      <p><strong>ID:</strong> {{ card.id }}</p>
      <p><strong>Front:</strong> {{ card.Front }}</p>
      <p><strong>Back:</strong> {{ card.Back }}</p>

      <RouterLink to="/testing">Back to all cards</RouterLink>
    </div>
  </div>
</template>
