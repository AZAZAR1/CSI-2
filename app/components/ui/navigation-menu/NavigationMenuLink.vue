<script setup lang="ts">
import type { NavigationMenuLinkEmits, NavigationMenuLinkProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
  NavigationMenuLink,

  useForwardPropsEmits,
} from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<NavigationMenuLinkProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<NavigationMenuLinkEmits>()

const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <NavigationMenuLink
    data-slot="navigation-menu-link"
    v-bind="forwarded"
    :class="cn(`'!bg-transparent data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex-col gap-1 p-2 [&_svg:not([class*='size-'])]:size-4' group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent text-primary-200 px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1`, props.class)"
  >
    <slot />
  </NavigationMenuLink>
</template>
