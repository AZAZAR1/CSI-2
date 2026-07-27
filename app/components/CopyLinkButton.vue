<script setup lang="ts">
import { ref } from 'vue'
import { toast } from 'vue-sonner'
import { Link, Check } from 'lucide-vue-next'

const props = defineProps<{
  anchorId: string
  size?: number
  duration?: number
}>()

const showSuccess = ref(false)

async function handleClick() {
  try {
    const url = new URL(window.location.href)
    url.hash = props.anchorId
    await navigator.clipboard.writeText(url.toString())

    toast.success('Link copied to clipboard')
    showSuccess.value = true
    setTimeout(() => (showSuccess.value = false), props.duration ?? 1800)
  } catch {
    toast.error('Failed to copy link')
  }
}
</script>

<template>
  <button
    type="button"
    :aria-label="`Copy link to ${anchorId}`"
    title="Copy link"
    @click="handleClick"
    class="cursor-pointer ml-2 inline-flex h-5 w-5 items-center justify-center text-neutral-400
           opacity-0 transition-opacity duration-200 ease-[cubic-bezier(.4,0,.2,1)]
           group-hover:opacity-100"
  >
    <Transition
      mode="out-in"
      enter-from-class="opacity-0 scale-90 -rotate-6"
      enter-active-class="transition duration-150 ease-in-out"
      enter-to-class="opacity-100 scale-100 rotate-0"
      leave-from-class="opacity-100 scale-100 rotate-0"
      leave-active-class="transition duration-150 ease-in-out"
      leave-to-class="opacity-0 scale-90 -rotate-6"
    >
      <component
        :is="showSuccess ? Check : Link"
        :key="showSuccess"
        :size="size ?? 18"
        :stroke-width="1.6"
        class="transition-colors hover:text-neutral-200"
      />
    </Transition>
  </button>
</template>