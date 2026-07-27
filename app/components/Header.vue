<template>
  <header
    class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div class="mx-auto w-full max-w-5xl px-6 md:max-w-7xl relative z-10 @container">
      <div class="border-b bg-background absolute left-0 top-0 z-20 flex w-full flex-col items-center @header:hidden">
        <div class="h-20 flex w-full items-center px-6 py-4">
          <div class="flex-auto h-10">
            <NuxtLink
              :to="localePath('/')"
              aria-label="CDC"
              class="outline-hidden transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7"
            >
              <div class="h-full [&>svg]:w-auto [&>svg]:h-full" v-html="cdcLogo"></div>
            </NuxtLink>
          </div>

          <div class="flex flex-auto justify-end">
            <button
              type="button"
              :aria-expanded="mobileMenuOpen"
              aria-controls="mobile-menu"
              :aria-label="mobileMenuOpen ? 'Close main menu' : 'Open main menu'"
              @click="toggleMobileMenu"
              class="inline-flex items-center justify-center rounded-md p-1 text-primary-300 transition ease-in-out hover:bg-primary-900 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-100 -mr-2"
            >
              <span class="sr-only">{{ mobileMenuOpen ? 'Close main menu' : 'Open main menu' }}</span>
              <svg
                aria-hidden="true"
                class="block h-8 w-8"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  v-if="!mobileMenuOpen"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  v-else
                  d="M6 18L18 6M6 6l12 12"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <Transition
          enter-active-class="transition duration-300 ease-in motion-reduce:transition-none"
          enter-from-class="opacity-0 -translate-y-4 motion-reduce:translate-y-0"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-200 ease-out motion-reduce:transition-none"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4 motion-reduce:translate-y-0"
        >
          <div
            v-if="mobileMenuOpen"
            id="mobile-menu"
            class="overflow-y-auto overflow-x-hidden h-[calc(100dvh-80px)] flex w-full py-4 @header:hidden"
          >
            <nav class="relative w-full" aria-label="Mobile main">
              <div class="absolute top-0 left-0 min-h-full px-6 w-screen">
                <template v-for="item in mainNav" :key="item.href">
                  <NuxtLink
                    :to="localePath(item.href)"
                    class="flex items-center justify-between text-md w-full border-b py-4 font-semibold text-primary-200 transition duration-200 ease-in-out last:border-none hover:text-primary-500"
                    @click="closeMobileMenu"
                  >
                    {{ $t(item.labelKey) }}
                    <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                      <path d="M19 12H4.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
                    </svg>
                  </NuxtLink>
                </template>

                <div class="mt-6 flex items-center gap-3">
                  <NuxtLink
                    v-for="language in languages"
                    :key="language.code"
                    :to="switchLocalePath(language.code)"
                    class="rounded-full border px-3 py-1 text-sm font-semibold transition hover:border-primary-500 hover:text-primary-500"
                    :class="locale === language.code ? 'border-primary-500 text-primary-500' : 'border-neutral-800 text-primary-200'"
                    @click="closeMobileMenu"
                  >
                    {{ language.label }}
                  </NuxtLink>
                </div>

                <NuxtLink
                  :to="localePath('/contact-us')"
                  class="outline-hidden relative inline-flex items-center justify-center select-none rounded-xl disabled:cursor-not-allowed ease-in-out text-primary-900 bg-origin-border bg-primary-500 shadow-sm not-disabled:hover:bg-primary-200 not-disabled:hover:text-black not-disabled:hover:shadow-button transition-all duration-200 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-hidden focus-visible:bg-primary-200 focus-visible:text-primary-900 text-base h-12 gap-2 px-4 font-semibold mt-6 w-full"
                  @click="closeMobileMenu"
                >
                  {{ $t('nav.talkToUs') }}
                </NuxtLink>
              </div>
            </nav>
          </div>
        </Transition>
      </div>

      <div class="mx-auto hidden h-23 w-full items-center justify-between transition duration-500 ease-in-out @header:flex">
        <div class="flex h-12">
          <NuxtLink
            :to="localePath('/')"
            aria-label="CDC"
            class="outline-hidden transition duration-150 ease-in-out focus-visible:ring-2 focus-visible:ring-slate-7"
          >
            <div class="h-full [&>svg]:w-auto [&>svg]:h-full" v-html="cdcLogo"></div>
          </NuxtLink>
        </div>

        <NavigationMenu>
          <NavigationMenuList class="md:gap-0 lg:gap-1">
            <NavigationMenuItem v-for="item in mainNav" :key="item.href">
              <NavigationMenuLink
                :href="localePath(item.href)"
                class="md:text-[13px] lg:text-sm"
                :class="navigationMenuTriggerStyle()"
              >
                {{ $t(item.labelKey) }}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <NuxtLink
              v-for="language in languages"
              :key="language.code"
              :to="switchLocalePath(language.code)"
              class="text-xs font-semibold transition hover:text-primary-500"
              :class="locale === language.code ? 'text-primary-500' : 'text-primary-200'"
            >
              {{ language.label }}
            </NuxtLink>
          </div>

          <NuxtLink
            :to="localePath('/contact-us')"
            class="w-full text-center outline-hidden relative inline-flex items-center justify-center select-none rounded-xl disabled:cursor-not-allowed ease-in-out text-primary-900 bg-origin-border bg-primary-500 shadow-sm not-disabled:hover:bg-primary-200 not-disabled:hover:text-black not-disabled:hover:shadow-button transition-all duration-200 focus-visible:ring-4 focus-visible:ring-white/30 focus-visible:outline-hidden focus-visible:bg-primary-200 focus-visible:text-primary-900 text-sm h-10 gap-0 px-4 font-semibold"
          >
            {{ $t('nav.talkToUs') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import cdcLogo from '~/assets/cdc-logo.svg?raw'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()

type NavItem = {
  labelKey: string
  href: string
}

const mainNav: ReadonlyArray<NavItem> = [
  { labelKey: 'nav.solutions', href: '/solutions' },
  { labelKey: 'nav.industries', href: '/industries' },
  { labelKey: 'nav.engagementModel', href: '/engagement-model' },
  { labelKey: 'nav.useCases', href: '/use-cases' },
  { labelKey: 'nav.resources', href: '/resources' },
  { labelKey: 'nav.aboutUs', href: '/about-us' },
] as const

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'de', label: 'DE' },
] as const

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeMobileMenu()
}

onMounted(() => {
  const stop = watch(
    mobileMenuOpen,
    (isOpen) => {
      document.body.classList.toggle('overflow-hidden', isOpen)
    },
    { immediate: true }
  )

  window.addEventListener('keydown', onKeydown)

  onBeforeUnmount(() => {
    stop()
    document.body.classList.remove('overflow-hidden')
    window.removeEventListener('keydown', onKeydown)
  })
})

const route = useRoute?.()

if (route) {
  watch(() => route.fullPath, () => closeMobileMenu())
}
</script>
