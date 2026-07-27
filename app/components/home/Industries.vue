<script setup lang="ts">
const { tm, rt, t } = useI18n()

const industries = computed(() => {
  const items = tm('home.industries.items') as Array<{
    name: string
    description: string
    image: string
  }>

  return items.map(item => ({
    name: rt(item.name),
    description: rt(item.description),
    image: rt(item.image)
  }))
})

const loaded = ref(false)
</script>
