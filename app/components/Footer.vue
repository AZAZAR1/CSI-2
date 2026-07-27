<template>
  <div class="border-t">
    <footer class="mx-auto max-w-7xl px-6 pb-8 pt-16">
      <div class="lg:grid lg:grid-cols-3 lg:gap-20">
        <div class="space-y-8">
          <NuxtLink
            :to="localePath('/')"
            aria-label="CDC"
            class="block h-10 [&>svg]:w-auto [&>svg]:h-full"
          >
            <div v-html="cdcLogo"></div>
          </NuxtLink>

          <p class="text-sm leading-6 text-neutral-400">
            {{ t('footer.description') }}
          </p>
        </div>

        <div
          class="w-full lg:w-fit mt-10 flex flex-col sm:flex-row justify-self-end gap-8 sm:gap-16 xl:gap-24 lg:col-span-2 lg:mt-0"
        >
          <div v-for="section in footerSections" :key="section.titleKey">
            <h3 class="text-sm font-semibold leading-6 text-primary-50">
              {{ t(section.titleKey) }}
            </h3>

            <ul role="list" class="mt-6 space-y-4" :aria-label="t(section.ariaLabelKey)">
              <li v-for="link in section.links" :key="link.textKey" class="w-fit">
                <NuxtLink
                  class="flex rounded-md text-sm text-neutral-400 transition hover:text-primary-500"
                  :to="localePath(link.href)"
                >
                  <span>{{ t(link.textKey) }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
        <p class="text-sm leading-5 text-neutral-400">
          {{ t('footer.copyright', { year: currentYear }) }}
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import cdcLogo from '~/assets/cdc-logo.svg?raw'

const { t } = useI18n()
const localePath = useLocalePath()

const currentYear = new Date().getFullYear()

const footerSections = [
  {
    titleKey: 'footer.sections.solutions.title',
    ariaLabelKey: 'footer.sections.solutions.ariaLabel',
    links: [
      {
        textKey: 'footer.links.flowBasedMethodologies',
        href: '/solutions#flow-based-methodologies'
      },
      {
        textKey: 'footer.links.integratedBusinessPlanning',
        href: '/solutions#integrated-and-enterprise-business-planning'
      },
      {
        textKey: 'footer.links.supplyChainManagement',
        href: '/solutions#supply-chain-management'
      },
      {
        textKey: 'footer.links.digitalTransformation',
        href: '/solutions#digital-transformation'
      }
    ]
  },
  {
    titleKey: 'footer.sections.company.title',
    ariaLabelKey: 'footer.sections.company.ariaLabel',
    links: [
      {
        textKey: 'footer.links.aboutUs',
        href: '/about-us'
      },
      {
        textKey: 'footer.links.useCases',
        href: '/use-cases'
      },
      {
        textKey: 'footer.links.contact',
        href: '/contact-us'
      }
    ]
  },
  {
    titleKey: 'footer.sections.legal.title',
    ariaLabelKey: 'footer.sections.legal.ariaLabel',
    links: [
      {
        textKey: 'footer.links.privacyPolicy',
        href: '/privacy-policy'
      },
      {
        textKey: 'footer.links.termsOfService',
        href: '/terms-of-service'
      }
    ]
  }
]
</script>
