<script setup lang="ts">
type Industry = 'MedTech' | 'CPG' | 'FMCG'
type CompanySize = 'Small' | 'Medium' | 'Large'
type DeliveryMode = 'Automation + Offshoring' | 'Offshoring only'

interface Result {
  currency: string
  annual_baseline_cost: number
  annual_client_savings: {
    conservative: number
    base: number
    high_potential: number
  }
  base_savings_percentage: number
  baseline_repetitive_fte: number
  tower_savings: Array<{ category: string; annual_client_savings: number }>
}

const config = useRuntimeConfig()
const apiBase = String(config.public.scmCalculatorApiBase || '').replace(/\/$/, '')

const industry = ref<Industry>('MedTech')
const companySize = ref<CompanySize>('Medium')
const deliveryMode = ref<DeliveryMode>('Automation + Offshoring')
const result = ref<Result | null>(null)
const calculating = ref(false)
const calculateError = ref('')
const leadSent = ref(false)
const sendingLead = ref(false)
const leadError = ref('')
const lead = reactive({
  name: '', business_email: '', company: '', job_title: '', phone: '',
  country: '', message: '', consent: false, website: '',
})

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency', currency: 'USD', maximumFractionDigits: 0,
})

async function calculateSavings() {
  calculating.value = true
  calculateError.value = ''
  leadSent.value = false
  try {
    result.value = await $fetch<Result>(`${apiBase}/api/v1/scm-savings/calculate`, {
      method: 'POST',
      body: {
        industry: industry.value,
        company_size: companySize.value,
        delivery_mode: deliveryMode.value,
      },
    })
    await nextTick()
    document.querySelector('#savings-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } catch {
    calculateError.value = 'We could not calculate your estimate. Please try again.'
  } finally {
    calculating.value = false
  }
}

async function submitLead() {
  if (!result.value) return
  sendingLead.value = true
  leadError.value = ''
  try {
    await $fetch(`${apiBase}/api/v1/scm-savings/leads`, {
      method: 'POST',
      body: {
        ...lead,
        industry: industry.value,
        company_size: companySize.value,
        delivery_mode: deliveryMode.value,
      },
    })
    leadSent.value = true
  } catch {
    leadError.value = 'Your inquiry could not be sent. Please try again or contact CDC directly.'
  } finally {
    sendingLead.value = false
  }
}
</script>

<template>
  <section class="calculator-shell">
    <div class="calculator-intro">
      <p class="eyebrow">CDC Supply Chain Managed Services</p>
      <h1>How much could repetitive supply chain work be costing you?</h1>
      <p class="intro-copy">
        Estimate your potential annual savings from standardising, automating and
        operating repetitive supply chain tasks through CDC.
      </p>
      <div class="trust-row">
        <span>36 repetitive SCM tasks</span>
        <span>4 service towers</span>
        <span>Client savings estimate</span>
      </div>
    </div>

    <div class="calculator-card">
      <div class="step-heading">
        <span>01</span>
        <div><p>Build your estimate</p><small>Choose the profile closest to your organisation.</small></div>
      </div>

      <form class="selector-grid" @submit.prevent="calculateSavings">
        <label>
          <span>Industry</span>
          <select v-model="industry">
            <option>MedTech</option><option>CPG</option><option>FMCG</option>
          </select>
        </label>
        <label>
          <span>Company size</span>
          <select v-model="companySize">
            <option>Small</option><option>Medium</option><option>Large</option>
          </select>
          <small>Small: $10m to $50m · Medium: $50m to $500m · Large: $500m to $10bn</small>
        </label>
        <label>
          <span>Delivery mode</span>
          <select v-model="deliveryMode">
            <option>Automation + Offshoring</option><option>Offshoring only</option>
          </select>
        </label>
        <button class="primary-button" type="submit" :disabled="calculating">
          {{ calculating ? 'Calculating...' : 'Calculate potential savings' }}
        </button>
        <p v-if="calculateError" class="form-error" role="alert">{{ calculateError }}</p>
      </form>
    </div>

    <div v-if="result" id="savings-results" class="results-card">
      <div class="step-heading">
        <span>02</span>
        <div><p>Your indicative opportunity</p><small>Estimated annual client savings after CDC service delivery.</small></div>
      </div>

      <div class="hero-result">
        <p>Base annual savings estimate</p>
        <strong>{{ currency.format(result.annual_client_savings.base) }}</strong>
        <span>{{ result.base_savings_percentage }}% of the estimated repetitive-task baseline</span>
      </div>

      <div class="range-grid">
        <article><span>Conservative</span><strong>{{ currency.format(result.annual_client_savings.conservative) }}</strong></article>
        <article class="featured"><span>Base estimate</span><strong>{{ currency.format(result.annual_client_savings.base) }}</strong></article>
        <article><span>High potential</span><strong>{{ currency.format(result.annual_client_savings.high_potential) }}</strong></article>
      </div>

      <div class="tower-section">
        <h2>Potential savings by service tower</h2>
        <div v-for="tower in result.tower_savings" :key="tower.category" class="tower-row">
          <span>{{ tower.category }}</span>
          <strong>{{ currency.format(tower.annual_client_savings) }}</strong>
        </div>
      </div>

      <div class="disclaimer">
        <strong>Indicative estimate</strong>
        <p>
          This result is an opportunity-sizing benchmark and is not a quotation or
          guaranteed saving. Confirmed savings will be established through a free
          diagnostic visit by CDC experts, based on your actual workload, costs,
          systems, controls and service requirements.
        </p>
      </div>

      <div class="lead-panel">
        <div class="step-heading">
          <span>03</span>
          <div><p>Confirm your savings opportunity</p><small>Request a free diagnostic with a CDC expert.</small></div>
        </div>
        <div v-if="leadSent" class="success-message">
          <strong>Thank you. Your request has been received.</strong>
          <p>A CDC expert will contact you to arrange the diagnostic.</p>
        </div>
        <form v-else class="lead-form" @submit.prevent="submitLead">
          <label><span>Name *</span><input v-model="lead.name" required autocomplete="name"></label>
          <label><span>Business email *</span><input v-model="lead.business_email" required type="email" autocomplete="email"></label>
          <label><span>Company *</span><input v-model="lead.company" required autocomplete="organization"></label>
          <label><span>Job title</span><input v-model="lead.job_title" autocomplete="organization-title"></label>
          <label><span>Phone</span><input v-model="lead.phone" type="tel" autocomplete="tel"></label>
          <label><span>Country</span><input v-model="lead.country" autocomplete="country-name"></label>
          <label class="wide"><span>Anything we should know?</span><textarea v-model="lead.message" rows="3"></textarea></label>
          <label class="honeypot" aria-hidden="true"><span>Website</span><input v-model="lead.website" tabindex="-1" autocomplete="off"></label>
          <label class="consent wide">
            <input v-model="lead.consent" required type="checkbox">
            <span>I agree that CDC may use my details to contact me about this diagnostic and related services.</span>
          </label>
          <button class="primary-button wide" type="submit" :disabled="sendingLead">
            {{ sendingLead ? 'Sending...' : 'Request my free diagnostic' }}
          </button>
          <p v-if="leadError" class="form-error wide" role="alert">{{ leadError }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.calculator-shell{--navy:#0a0a0a;--mint:#89ead8;--ink:#f7f7f7;--soft:#173c36;max-width:1180px;margin:0 auto;padding:96px 24px 112px;color:var(--ink);font-family:inherit}
.calculator-intro{max-width:880px;margin-bottom:40px}.eyebrow{color:var(--mint);font-size:.78rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
h1{max-width:900px;margin:12px 0 18px;color:#fff;font-size:clamp(2.55rem,5.5vw,5.3rem);line-height:.96;letter-spacing:-.05em}
.intro-copy{max-width:720px;font-size:1.18rem;line-height:1.65;color:#b3b3b3}.trust-row{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
.trust-row span{padding:8px 12px;border:1px solid #333;border-radius:999px;color:#d4d4d4;font-size:.82rem;font-weight:700}
.calculator-card,.results-card{background:#141414;border:1px solid #2d2d2d;border-radius:22px;box-shadow:0 18px 60px rgba(0,0,0,.28);padding:34px}
.step-heading{display:flex;align-items:center;gap:14px;margin-bottom:28px}.step-heading>span{display:grid;place-items:center;width:42px;height:42px;border-radius:50%;background:var(--mint);color:#0b1715;font-weight:900}
.step-heading p{margin:0;font-size:1.25rem;font-weight:850;color:#fff}.step-heading small{color:#999}
.selector-grid,.lead-form{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px}
label{display:flex;flex-direction:column;gap:8px;font-size:.88rem;font-weight:750;color:#e5e5e5}label small{color:#8c8c8c;font-weight:400;line-height:1.4}
select,input,textarea{width:100%;box-sizing:border-box;border:1px solid #3b3b3b;border-radius:10px;padding:13px 14px;background:#0d0d0d;color:#fff;font:inherit;outline:none}
select:focus,input:focus,textarea:focus{border-color:var(--mint);box-shadow:0 0 0 3px rgba(137,234,216,.14)}
.primary-button{align-self:end;min-height:49px;border:0;border-radius:10px;padding:13px 20px;background:#f7f7f7;color:#171717;font:inherit;font-weight:800;cursor:pointer}.primary-button:hover{background:var(--mint)}.primary-button:disabled{opacity:.6;cursor:wait}
.results-card{margin-top:28px}.hero-result{padding:34px;border-radius:16px;background:#090909;border:1px solid #292929;color:white;text-align:center}.hero-result p{margin:0 0 8px;color:#bdbdbd}.hero-result strong{display:block;color:var(--mint);font-size:clamp(2.5rem,7vw,5.5rem);line-height:1}.hero-result span{display:block;margin-top:12px;color:#bfbfbf}
.range-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:18px 0 36px}.range-grid article{padding:20px;border:1px solid #303030;border-radius:12px}.range-grid article span{display:block;color:#949494;font-size:.82rem}.range-grid article strong{display:block;margin-top:5px;color:#fff;font-size:1.35rem}.range-grid .featured{border-color:#50cdb5;background:var(--soft)}
.tower-section{max-width:760px;margin:0 auto 32px}.tower-section h2{font-size:1.2rem}.tower-row{display:flex;justify-content:space-between;gap:20px;padding:14px 0;border-bottom:1px solid #303030}.tower-row strong{color:var(--mint)}
.disclaimer{padding:20px;border-left:4px solid #e6b85c;background:#2a2418;border-radius:6px}.disclaimer p{margin:5px 0 0;line-height:1.55;color:#d3c8b1}
.lead-panel{margin-top:36px;padding-top:34px;border-top:1px solid #303030}.wide{grid-column:1/-1}.consent{flex-direction:row;align-items:flex-start;font-weight:400;line-height:1.45}.consent input{width:auto;margin-top:3px}.honeypot{position:absolute;left:-9999px}.form-error{color:#ff8d84;font-weight:700}.success-message{padding:26px;border-radius:12px;background:#173c36;color:#bdf8ed}
@media(max-width:700px){.calculator-shell{padding:44px 16px 70px}.calculator-card,.results-card{padding:22px 18px}.selector-grid,.lead-form,.range-grid{grid-template-columns:1fr}.wide{grid-column:auto}.hero-result{padding:28px 12px}.tower-row{align-items:flex-start;flex-direction:column;gap:4px}}
</style>
