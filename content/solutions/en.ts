export type ServiceCard = {
  number: string
  title: string
  shortDescription: string
  details: string[]
  cta: string
  anchor: string
}

export type ServiceSection = {
  eyebrow: string
  title: string
  description: string
  cards: ServiceCard[]
}

export const solutionsContent: ServiceSection[] = [
  {
    eyebrow: 'Section 01',
    title: 'Delivery System Design & Deployment',
    description:
      'Design operational systems that balance service, cost, responsiveness, and resilience. We help organizations build integrated delivery models that align strategy, capacity, inventory, lead times, and network design to create sustainable competitive advantage.',
    cards: [
      {
        number: '01',
        title: 'Resource-Based Industrial Strategy Design',
        shortDescription:
          "Build a practical 5-year operations strategy grounded in your organization's capabilities, economic realities, and competitive positioning.",
        details: [
          'Assess current operational capabilities, assets, and strategic constraints.',
          'Develop a resource-based industrial strategy aligned with business objectives.',
          'Structure strategy across Business Intent, Operations Strategy, Capability Enablers, and Industry & Market Dynamics.',
          'Evaluate strategic initiatives through economic value creation and profit contribution.',
          'Validate the strategic operating model through integrated business planning scenarios.',
          'Stress-test strategy resilience against demand, supply, and market variability.',
          'Define implementation roadmaps and capability development priorities.',
          'Establish governance mechanisms to sustain execution over a multi-year horizon.'
        ],
        cta: 'Explore Industrial Strategy Design →',
        anchor: 'industrial-strategy'
      },
      {
        number: '02',
        title: 'Service Criticality Framework & Operating Strategy',
        shortDescription:
          'Define service levels based on economic impact, enabling smarter decisions on capacity, inventory, and customer commitments.',
        details: [
          'Assess the economic impact of service failures across products and customer segments.',
          'Develop a service criticality classification framework.',
          'Quantify the trade-off between shortage costs and readiness costs.',
          'Define differentiated service targets by product, customer, or market segment.',
          'Design inventory and capacity buffering strategies aligned with criticality.',
          'Create decision rules for balancing service performance and operational cost.',
          'Establish executive-level service governance and escalation mechanisms.',
          'Embed service-level economics into operational planning processes.'
        ],
        cta: 'Explore Service Criticality Design →',
        anchor: 'service-criticality'
      },
      {
        number: '03',
        title: 'Time-to-Customer Optimization',
        shortDescription:
          'Reduce lead times and improve responsiveness through end-to-end flow analysis and economically justified service targets.',
        details: [
          'Map end-to-end operational and supply chain flows.',
          'Analyze lead-time drivers across processes, inventory, logistics, and decision points.',
          'Conduct demand-capacity-congestion assessments.',
          'Identify bottlenecks and delay accumulation points.',
          'Apply queueing theory and flow analysis techniques.',
          'Evaluate the impact of utilization, variability, and work-in-process on lead times.',
          'Design future-state flow architectures.',
          'Establish economically optimized lead-time targets and improvement roadmaps.'
        ],
        cta: 'Explore Lead Time Optimization →',
        anchor: 'time-to-customer'
      },
      {
        number: '04',
        title: 'Value Chain & Supply Chain Architecture',
        shortDescription:
          'Design operating models that align value creation, flow management, and strategic business objectives.',
        details: [
          'Differentiate value creation activities from supply chain execution activities.',
          'Assess current value chain and supply chain operating models.',
          'Evaluate reaction-based versus anticipation-based planning approaches.',
          'Analyze key flow control variables including inventory, capacity, forecasting, logistics, and transportation.',
          'Design synchronization mechanisms across functions and sites.',
          'Align network structures with organizational competencies and market requirements.',
          'Develop future-state operating model architectures.',
          'Establish governance and performance management frameworks.'
        ],
        cta: 'Explore Supply Chain Architecture →',
        anchor: 'value-chain-design'
      },
      {
        number: '05',
        title: 'Economically Optimal Service Level Design',
        shortDescription:
          'Set service targets that maximize profitability by balancing customer expectations against the true cost of service.',
        details: [
          'Quantify service-performance economics across products and customer segments.',
          'Analyze shortage costs, lost sales, and service penalties.',
          'Assess excess inventory and excess capacity costs.',
          'Determine optimal service levels based on economic trade-offs.',
          'Link service targets directly to inventory, capacity, and lead-time decisions.',
          'Harmonize service level methodologies across multi-echelon networks.',
          'Develop executive decision frameworks for service-level governance.',
          'Establish monitoring mechanisms to sustain target performance.'
        ],
        cta: 'Explore Service Level Optimization →',
        anchor: 'service-level-design'
      },
      {
        number: '06',
        title: 'Strategic Capacity Planning',
        shortDescription:
          'Design capacity systems that achieve service objectives while controlling congestion, variability, and operating costs.',
        details: [
          'Assess current capacity utilization and operational performance.',
          'Define target utilization ranges by process and asset type.',
          'Evaluate the impact of congestion and variability on operational performance.',
          'Calculate effective capacity based on availability, performance, and quality.',
          'Align capacity planning with service-level objectives.',
          'Design strategic capacity buffers and flexibility mechanisms.',
          'Develop long-term capacity expansion and investment plans.',
          'Establish governance processes for ongoing capacity management.'
        ],
        cta: 'Explore Capacity Planning →',
        anchor: 'capacity-planning'
      },
      {
        number: '07',
        title: 'Network Design & Risk Pooling Optimization',
        shortDescription:
          'Optimize distribution and inventory networks to balance responsiveness, resilience, and total cost.',
        details: [
          'Evaluate current network footprint and inventory positioning.',
          'Assess centralization versus decentralization scenarios.',
          'Quantify risk pooling opportunities and inventory reduction potential.',
          'Analyze demand variability and correlation patterns.',
          'Evaluate trade-offs between inventory investment, transportation cost, lead time, and service performance.',
          'Design alternative network structures including centralized networks, regional networks, hub-and-spoke models, virtual pooling models, and postponement strategies.',
          'Develop business cases for network redesign initiatives.',
          'Define implementation roadmaps and transition plans.'
        ],
        cta: 'Explore Network Design →',
        anchor: 'network-design'
      }
    ]
  },
  {
    eyebrow: 'Section 02',
    title: 'Operations Management',
    description:
      'Design and install the management systems, planning disciplines, and decision frameworks required to operate complex supply chains at high levels of performance. We help organizations improve resilience, synchronize planning, reduce variability, optimize inventory and capacity, and build integrated operating models that convert strategy into execution.',
    cards: [
      {
        number: '01',
        title: 'Network Resilience Design',
        shortDescription:
          'Build resilient supply chain networks that absorb disruption, recover rapidly, and protect profitability without excessive redundancy.',
        details: [
          'Assess network resilience exposure across suppliers, facilities, logistics providers, and customers.',
          'Quantify operational and financial impact of disruption scenarios.',
          'Identify structural vulnerabilities and critical failure points.',
          'Develop resilience strategies based on visibility, analytics, and decision speed rather than inventory duplication.',
          'Design dynamic response mechanisms and contingency playbooks.',
          'Establish disruption monitoring and early-warning systems.',
          'Define governance structures for resilience management and crisis response.',
          'Implement resilience metrics and continuous improvement frameworks.'
        ],
        cta: 'Explore Network Resilience →',
        anchor: 'network-resilience'
      },
      {
        number: '02',
        title: 'Digital Twin & Time-Based Resilience Management',
        shortDescription:
          'Create a living digital model of your supply chain to simulate disruptions, evaluate responses, and improve resilience performance.',
        details: [
          'Develop executable digital twin models of end-to-end supply chains.',
          'Simulate disruption scenarios and alternative recovery strategies.',
          'Evaluate financial and operational consequences of resilience decisions.',
          'Replace static KPIs with time-based resilience metrics.',
          'Define critical resilience thresholds such as Time-to-Survive and Time-to-Recover.',
          'Enable real-time resilience monitoring and stress testing.',
          'Build decision playbooks for disruption response and mitigation.',
          'Establish governance processes for resilience planning and execution.'
        ],
        cta: 'Explore Digital Twin Resilience →',
        anchor: 'digital-twin-resilience'
      },
      {
        number: '03',
        title: 'Advanced Analytics for Supply Chain Resilience',
        shortDescription:
          'Transform supply chain data into predictive and prescriptive insights that improve visibility, decision quality, and resilience.',
        details: [
          'Assess analytics maturity and decision-support capabilities.',
          'Develop roadmaps from descriptive reporting to predictive and prescriptive analytics.',
          'Identify critical data, visibility, and observability requirements.',
          'Establish data foundations required for AI and machine learning initiatives.',
          'Leverage digital twins and operational instrumentation to generate high-quality datasets.',
          'Deploy advanced analytics solutions for risk identification and mitigation.',
          'Integrate machine learning, simulation models, and AI applications.',
          'Build governance structures for analytics-driven decision making.'
        ],
        cta: 'Explore Resilience Analytics →',
        anchor: 'resilience-analytics'
      },
      {
        number: '04',
        title: 'Bullwhip Effect Diagnosis & Mitigation',
        shortDescription:
          'Identify, quantify, and eliminate demand amplification across the supply chain to improve stability and reduce costs.',
        details: [
          'Assess the magnitude and sources of bullwhip effects across the network.',
          'Analyze signal distortion caused by forecasting, ordering, incentives, and information delays.',
          'Quantify demand amplification using variance and flow-based metrics.',
          'Identify operational and behavioral drivers of volatility.',
          'Evaluate impacts of promotions, batch ordering, and shortage gaming.',
          'Design countermeasures to improve signal quality and responsiveness.',
          'Establish data-sharing and planning synchronization mechanisms.',
          'Reduce inventory, capacity volatility, and service instability.'
        ],
        cta: 'Explore Bullwhip Reduction →',
        anchor: 'bullwhip-effect'
      },
      {
        number: '05',
        title: 'Supply Chain Competitiveness & Responsiveness Strategy',
        shortDescription:
          'Optimize the trade-off between cost efficiency and responsiveness to create sustainable competitive advantage.',
        details: [
          'Assess current responsiveness and cost competitiveness performance.',
          'Quantify economic impacts of lead times and demand variability.',
          'Evaluate responsiveness requirements across products and customer segments.',
          'Design differentiated operating models based on market needs.',
          'Optimize capacity, inventory, and planning policies to improve responsiveness.',
          'Reduce signal distortion through enhanced collaboration and information sharing.',
          'Develop service-driven network and planning strategies.',
          'Establish performance frameworks balancing responsiveness and profitability.'
        ],
        cta: 'Explore Responsiveness Strategy →',
        anchor: 'responsiveness-strategy'
      },
      {
        number: '06',
        title: 'Push-Pull Boundary Optimization',
        shortDescription:
          'Determine where forecast-driven planning should end and demand-driven execution should begin to maximize performance.',
        details: [
          'Assess current push-pull boundaries across products and value streams.',
          'Analyze demand variability, lead times, and customer service requirements.',
          'Evaluate inventory positioning and buffering strategies.',
          'Determine optimal decoupling points within the supply chain.',
          'Design differentiated replenishment and fulfillment models.',
          'Align planning and execution processes with market dynamics.',
          'Reduce amplification of demand variability across the network.',
          'Establish governance for ongoing push-pull boundary management.'
        ],
        cta: 'Explore Push-Pull Design →',
        anchor: 'push-pull-boundary'
      },
      {
        number: '07',
        title: 'Supply Chain Segmentation Strategy',
        shortDescription:
          'Design differentiated planning and execution strategies based on product, customer, and channel characteristics.',
        details: [
          'Segment supply chain flows using Product × Customer × Channel frameworks.',
          'Analyze variability, service requirements, and profitability by segment.',
          'Develop differentiated planning and replenishment policies.',
          'Design segmentation matrices linking flow characteristics to operating models.',
          'Align inventory positioning, capacity allocation, and service commitments.',
          'Define segment-specific performance objectives and governance.',
          'Adapt planning strategies as market conditions evolve.',
          'Establish scalable segmentation management processes.'
        ],
        cta: 'Explore Supply Chain Segmentation →',
        anchor: 'supply-chain-segmentation'
      },
      {
        number: '08',
        title: 'Flow-Based Demand Forecasting Design',
        shortDescription:
          'Transform forecasting from a statistical exercise into a strategic planning mechanism that drives superior flow performance.',
        details: [
          'Assess forecasting processes and decision-making effectiveness.',
          'Redesign forecasting around push-pull and flow management principles.',
          'Define forecasting roles across strategic, tactical, and operational horizons.',
          'Improve forecast accuracy through aggregation and segmentation techniques.',
          'Apply risk-pooling principles across products, locations, and resources.',
          'Establish forecasting governance and accountability structures.',
          'Link forecasting outputs directly to inventory and capacity decisions.',
          'Design integrated planning processes that improve flow performance.'
        ],
        cta: 'Explore Demand Forecasting Design →',
        anchor: 'demand-forecasting'
      },
      {
        number: '09',
        title: 'Plan-for-Every-Part Materials Management',
        shortDescription:
          'Establish structured inventory policies for every material to improve service, resilience, and working capital performance.',
        details: [
          'Develop a comprehensive Plan-for-Every-Part framework.',
          'Define replenishment policies and planning parameters for all materials.',
          'Establish service-level and flow-based inventory targets.',
          'Differentiate inventory policies by material hierarchy and business criticality.',
          'Optimize safety stock using demand and supply variability analysis.',
          'Apply economic order quantity and replenishment optimization techniques.',
          'Implement governance processes ensuring policy compliance.',
          'Improve inventory performance while maintaining service objectives.'
        ],
        cta: 'Explore PFEP Materials Management →',
        anchor: 'pfep-materials-management'
      },
      {
        number: '10',
        title: 'Capacity Pooling & Variability Management',
        shortDescription:
          'Reduce required capacity and improve utilization by strategically pooling demand variability across operations.',
        details: [
          'Assess demand variability and capacity utilization patterns.',
          'Quantify opportunities for variability pooling across products, customers, and resources.',
          'Design service-level-adjusted capacity models.',
          'Optimize resource flexibility and workload balancing.',
          'Reduce operational congestion and overcapacity requirements.',
          'Improve responsiveness while maintaining service targets.',
          'Align capacity decisions with demand uncertainty profiles.',
          'Establish governance for capacity planning and management.'
        ],
        cta: 'Explore Capacity Pooling →',
        anchor: 'capacity-pooling'
      },
      {
        number: '11',
        title: 'Global Inventory & Cycle Time Optimization',
        shortDescription:
          'Optimize inventory and working capital through end-to-end flow management rather than isolated local decisions.',
        details: [
          'Assess inventory performance across the entire network.',
          'Identify cycle-time drivers and bottlenecks.',
          'Quantify inventory impacts of lead-time variability and flow interruptions.',
          'Design global optimization strategies for inventory placement and flow.',
          'Reduce duplicated safety stock and local optimization behaviors.',
          'Improve customer responsiveness through cycle-time reduction.',
          'Align inventory policies with overall network objectives.',
          'Establish end-to-end performance governance and monitoring.'
        ],
        cta: 'Explore Cycle Time Optimization →',
        anchor: 'cycle-time-optimization'
      },
      {
        number: '12',
        title: 'Flow-Based Integrated Business Planning & Execution',
        shortDescription:
          'Implement integrated planning systems that synchronize decisions across the enterprise using flow-based operating principles.',
        details: [
          'Design and deploy integrated business planning frameworks.',
          'Synchronize planning across products, customers, channels, materials, suppliers, and distribution networks.',
          'Establish value-stream-based decision making and governance.',
          'Integrate strategic, tactical, and operational planning horizons.',
          'Implement ERP-driven planning discipline and execution controls.',
          'Define decision rights, planning cadences, and escalation processes.',
          'Align business objectives with operational capabilities.',
          'Create a sustainable planning operating model that improves enterprise-wide performance.'
        ],
        cta: 'Explore Flow-Based IBP&E →',
        anchor: 'flow-based-ibpe'
      }
    ]
  }
]
