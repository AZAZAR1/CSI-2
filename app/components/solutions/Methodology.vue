<template>
  <div class="mb-20">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">
        Our Flow‑Based Methodology Solutions
      </h2>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        Integrated methodologies that create seamless flow from strategy to execution
      </p>
    </div>

    <div class="space-y-20">
      <div
        v-for="(method, methodIndex) in methodologies"
        :key="method.id"
        class="relative"
      >
        <!-- Flow Connection Line -->
        <div
          v-if="methodIndex < methodologies.length - 1"
          class="absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div class="flex flex-col items-center">
            <div class="w-[0.5px] h-8 bg-gray-300"></div>
            <ArrowRight class="w-6 h-6 text-gray-400 transform rotate-90" />
          </div>
        </div>

        <Card class="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
          <CardContent class="p-0">
            <div class="grid lg:grid-cols-5 gap-0">
              <!-- Left: Method Info & Stats -->
              <div class="lg:col-span-2 p-8 bg-white">
                <div class="space-y-6">
                  <!-- Header -->
                  <div class="flex items-center space-x-4">
                    <div
                      :class="`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center shadow-lg`"
                    >
                      <component :is="method.icon" class="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 class="text-2xl font-bold text-gray-900">{{ method.subtitle }}</h3>
                      <Badge class="mt-1 bg-gray-100 text-gray-700">
                        {{ method.timeline }}
                      </Badge>
                    </div>
                  </div>

                  <!-- Description -->
                  <p class="text-gray-600 leading-relaxed">
                    {{ method.description }}
                  </p>

                  <!-- Key Stats -->
                  <div class="grid grid-cols-3 gap-4">
                    <div
                      v-for="(outcome, idx) in method.outcomes"
                      :key="idx"
                      class="text-center"
                    >
                      <div
                        :class="`text-2xl font-bold bg-gradient-to-r ${method.color} bg-clip-text text-transparent`"
                      >
                        {{ outcome.split(' ')[0] }}
                      </div>
                      <div class="text-xs text-gray-500 mt-1">
                        {{ outcome.split(' ').slice(1).join(' ') }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right: Vector Flow Diagram -->
              <div class="lg:col-span-3 p-8 bg-gradient-to-br from-gray-50 to-white relative">
                <div class="relative h-full min-h-[300px]">
                  
                  <!-- Background Flow Pattern -->
                  <svg
                    class="absolute inset-0 w-full h-full opacity-10"
                    viewBox="0 0 400 300"
                  >
                    <defs>
                      <pattern
                        :id="`flowPattern${methodIndex}`"
                        patternUnits="userSpaceOnUse"
                        width="40"
                        height="40"
                      >
                        <path
                          d="M0 20h40M20 0v40"
                          stroke="currentColor"
                          stroke-width="1"
                          opacity="0.3"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      :fill="`url(#flowPattern${methodIndex})`"
                    />
                  </svg>

                  <!-- Process Flow Steps -->
                  <div class="relative z-10 h-full flex items-center">
                    <div class="w-full space-y-8">
                      
                      <!-- Input Flow -->
                      <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                          <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                            <component :is="method.flowSteps.input.icon" class="w-6 h-6 text-red-600" />
                          </div>
                          <div>
                            <div class="font-semibold text-gray-900">{{ method.flowSteps.input.title }}</div>
                            <div class="text-sm text-gray-600">{{ method.flowSteps.input.description }}</div>
                          </div>
                        </div>
                        <ArrowRight class="w-6 h-6 text-gray-400" />
                      </div>

                      <!-- Process Flow -->
                      <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                          <div
                            :class="`w-12 h-12 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center shadow-lg`"
                          >
                            <Cog class="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div class="font-semibold text-gray-900">{{ method.subtitle }} Process</div>
                            <div class="text-sm text-gray-600">Flow‑based transformation</div>
                          </div>
                        </div>
                        <ArrowRight class="w-6 h-6 text-gray-400" />
                      </div>

                      <!-- Output Flow -->
                      <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                          <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <component :is="method.flowSteps.output.icon" class="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <div class="font-semibold text-gray-900">{{ method.flowSteps.output.title }}</div>
                            <div class="text-sm text-gray-600">{{ method.flowSteps.output.description }}</div>
                          </div>
                        </div>
                        <div class="w-6 h-6"></div>
                      </div>

                    </div>
                  </div>

                  <!-- Capability Pills -->
                  <div class="absolute bottom-4 left-0 right-0">
                    <div class="flex flex-wrap gap-2 justify-center">
                      <Badge
                        v-for="(cap, capIndex) in method.capabilities.slice(0,4)"
                        :key="capIndex"
                        variant="secondary"
                        class="text-xs bg-white/80 backdrop-blur-sm border border-gray-200"
                      >
                        {{ cap }}
                      </Badge>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowRight,
  GitBranch,
  BarChart3,
  Truck,
  Target,
  TrendingUp,
  LineChart,
  Zap,
  Cog
} from 'lucide-vue-next'

const methodologies = ref([
  {
    id: "strategy",
    icon: GitBranch,
    subtitle: "FB‑SD",
    timeline: "24‑60 Months",
    description: "Align organizational strategy with operational execution through visual management and goal deployment",
    capabilities: [
      "Strategic Goal Alignment",
      "Visual Management Systems", 
      "Performance Deployment",
      "Value Stream Optimization"
    ],
    outcomes: [
      "20% faster strategy execution",
      "90% goal alignment across teams",
      "50% reduction in strategic drift"
    ],
    color: "from-teal-500 to-cyan-600",
    flowSteps: {
      input: {
        icon: Target,
        title: "Strategic Vision",
        description: "Disconnected goals & priorities"
      },
      output: {
        icon: TrendingUp,
        title: "Aligned Execution",
        description: "Synchronized organization‑wide delivery"
      }
    }
  },
  {
    id: "planning",
    icon: BarChart3,
    subtitle: "FB‑IBPE",
    timeline: "1‑12 Months",
    description: "Comprehensive planning framework integrating demand, supply, and financial planning",
    capabilities: [
      "SIOP Implementation",
      "Demand & Supply Planning",
      "Financial Integration",
      "Scenario Planning"
    ],
    outcomes: [
      "15% inventory reduction",
      "25% forecast accuracy improvement", 
      "30% faster planning cycles"
    ],
    color: "from-blue-500 to-indigo-600",
    flowSteps: {
      input: {
        icon: BarChart3,
        title: "Demand & Supply Data",
        description: "Siloed planning & forecasts"
      },
      output: {
        icon: LineChart,
        title: "Integrated Operations",
        description: "Synchronized demand‑supply‑finance"
      }
    }
  },
  {
    id: "execution",
    icon: Truck,
    subtitle: "FB‑DRPE",
    timeline: "1‑3 Months",
    description: "Optimize distribution and fulfillment operations for maximum efficiency",
    capabilities: [
      "Distribution Optimization",
      "Inventory Management",
      "Fulfillment Automation",
      "Performance Analytics"
    ],
    outcomes: [
      "40% faster order fulfillment",
      "20% reduction in logistics costs",
      "95% on‑time delivery rate"
    ],
    color: "from-green-500 to-emerald-600",
    flowSteps: {
      input: {
        icon: ArrowRight,
        title: "Customer Orders",
        description: "Manual fulfillment processes"
      },
      output: {
        icon: Zap,
        title: "Optimized Delivery",
        description: "Automated & efficient fulfillment"
      }
    }
  },
])
</script>
