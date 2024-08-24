<script setup lang="ts">
import { VICTORY_MESSAGE, DEFEAT_MESSAGE } from '@/settings'
import letters from '@/fiveLetterWords.json'
import { computed, ref } from 'vue'
defineProps({
  wordOfTheDay: {
    type: String,
    validator: (word: string) => letters.includes(word)
  }
})

const guessInProgress = ref('')
const guessSubmitted = ref('')
const isSubmitted = computed(() => guessSubmitted.value.length > 0)
</script>

<template>
  <input type="text" v-model="guessInProgress" @keydown.enter="guessSubmitted = guessInProgress" />
  <p v-if="isSubmitted && guessSubmitted === wordOfTheDay">{{ VICTORY_MESSAGE }}</p>
  <p v-if="isSubmitted && guessSubmitted !== wordOfTheDay">{{ DEFEAT_MESSAGE }}</p>
</template>

<style scoped></style>
