<script setup>
import { useCollection, useCurrentUser, useFirebaseAuth } from 'vuefire'
import { collection } from 'firebase/firestore'
import { db } from '../firebase_conf'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const tests = useCollection(collection(db, 'Flash Cards'))

const user = useCurrentUser()     
const auth = useFirebaseAuth()     

const provider = new GoogleAuthProvider()

async function login() {
  try {
    await signInWithPopup(auth, provider)
  } catch (error) {
    console.error(error)
    alert('oh no')
  }
}

async function logout() {
  try {
    await signOut(auth)
  } catch (error) {
    console.error(error)
    alert('oh no')
  }
}
</script>

<template>
  <div v-if="user">user: {{ user }}</div>

  <button class="button" @click="login()" v-if="!user">log in</button>

  <button class="button" @click="logout()" v-else>log out</button>

</template>

<style scoped>
.button {
  display: inline-flex;      /* don’t stretch to full width */
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem;      /* controls height & width */
  font-size: 0.9rem;         /* smaller text */
  max-width: 120px;  
  height: 40px;        /* optional: fixed-ish width */
  box-sizing: border-box;

  font-weight: 600;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background-color: #42b883;
  color: white;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

</style>
