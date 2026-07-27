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
    title: 'Conception et déploiement des systèmes de livraison',
    description:
      'Concevoir des systèmes opérationnels qui équilibrent service, coût, réactivité et résilience. Nous aidons les organisations à construire des modèles de livraison intégrés qui alignent stratégie, capacité, stocks, délais et architecture réseau afin de créer un avantage concurrentiel durable.',
    cards: [
      {
        number: '01',
        title: 'Conception de stratégie industrielle basée sur les ressources',
        shortDescription:
          'Construire une stratégie opérationnelle à 5 ans, pragmatique et fondée sur les capacités, les réalités économiques et le positionnement concurrentiel de l’organisation.',
        details: [
          'Évaluer les capacités opérationnelles actuelles, les actifs et les contraintes stratégiques.',
          'Développer une stratégie industrielle basée sur les ressources et alignée avec les objectifs business.',
          'Structurer la stratégie autour de l’intention business, de la stratégie opérationnelle, des leviers de capacité et des dynamiques industrielles et marché.',
          'Évaluer les initiatives stratégiques selon leur création de valeur économique et leur contribution au profit.',
          'Valider le modèle opérationnel cible à travers des scénarios de planification intégrée.',
          'Tester la résilience de la stratégie face aux variations de demande, d’approvisionnement et de marché.',
          'Définir les feuilles de route de mise en œuvre et les priorités de développement des capacités.',
          'Mettre en place les mécanismes de gouvernance nécessaires pour soutenir l’exécution sur plusieurs années.'
        ],
        cta: 'Explorer la stratégie industrielle →',
        anchor: 'industrial-strategy'
      },
      {
        number: '02',
        title: 'Cadre de criticité service et stratégie opérationnelle',
        shortDescription:
          'Définir les niveaux de service selon leur impact économique afin de mieux décider en matière de capacité, de stocks et d’engagements clients.',
        details: [
          'Évaluer l’impact économique des défaillances de service par produit et segment client.',
          'Développer un cadre de classification de la criticité service.',
          'Quantifier l’arbitrage entre coûts de rupture et coûts de préparation.',
          'Définir des objectifs de service différenciés par produit, client ou segment de marché.',
          'Concevoir des stratégies de stocks et de capacité alignées avec la criticité.',
          'Créer des règles de décision équilibrant performance de service et coût opérationnel.',
          'Établir une gouvernance service au niveau exécutif et des mécanismes d’escalade.',
          'Intégrer l’économie des niveaux de service dans les processus de planification opérationnelle.'
        ],
        cta: 'Explorer la criticité service →',
        anchor: 'service-criticality'
      },
      {
        number: '03',
        title: 'Optimisation du délai client',
        shortDescription:
          'Réduire les délais et améliorer la réactivité grâce à l’analyse des flux de bout en bout et à des objectifs de service économiquement justifiés.',
        details: [
          'Cartographier les flux opérationnels et supply chain de bout en bout.',
          'Analyser les facteurs de délai à travers les processus, les stocks, la logistique et les points de décision.',
          'Réaliser des analyses demande-capacité-congestion.',
          'Identifier les goulots d’étranglement et les points d’accumulation des retards.',
          'Appliquer des techniques de théorie des files d’attente et d’analyse des flux.',
          'Évaluer l’impact de l’utilisation, de la variabilité et des encours sur les délais.',
          'Concevoir des architectures de flux cibles.',
          'Établir des objectifs de délai économiquement optimisés et des feuilles de route d’amélioration.'
        ],
        cta: 'Explorer l’optimisation des délais →',
        anchor: 'time-to-customer'
      },
      {
        number: '04',
        title: 'Architecture de chaîne de valeur et de supply chain',
        shortDescription:
          'Concevoir des modèles opérationnels qui alignent création de valeur, gestion des flux et objectifs stratégiques.',
        details: [
          'Distinguer les activités de création de valeur des activités d’exécution supply chain.',
          'Évaluer les modèles actuels de chaîne de valeur et de supply chain.',
          'Comparer les approches de planification réactives et anticipatives.',
          'Analyser les variables clés de contrôle des flux : stocks, capacité, prévisions, logistique et transport.',
          'Concevoir des mécanismes de synchronisation entre fonctions et sites.',
          'Aligner les structures réseau avec les compétences organisationnelles et les exigences marché.',
          'Développer les architectures de modèle opérationnel cible.',
          'Établir les cadres de gouvernance et de pilotage de la performance.'
        ],
        cta: 'Explorer l’architecture supply chain →',
        anchor: 'value-chain-design'
      },
      {
        number: '05',
        title: 'Conception économique des niveaux de service optimaux',
        shortDescription:
          'Définir des objectifs de service maximisant la rentabilité en équilibrant attentes clients et coût réel du service.',
        details: [
          'Quantifier l’économie de la performance service par produit et segment client.',
          'Analyser les coûts de rupture, les ventes perdues et les pénalités de service.',
          'Évaluer les coûts de surstock et de surcapacité.',
          'Déterminer les niveaux de service optimaux selon les arbitrages économiques.',
          'Relier les objectifs de service aux décisions de stock, de capacité et de délai.',
          'Harmoniser les méthodologies de niveau de service dans les réseaux multi-échelons.',
          'Développer des cadres de décision exécutifs pour la gouvernance des niveaux de service.',
          'Mettre en place des mécanismes de suivi pour maintenir la performance cible.'
        ],
        cta: 'Explorer l’optimisation des niveaux de service →',
        anchor: 'service-level-design'
      },
      {
        number: '06',
        title: 'Planification stratégique de la capacité',
        shortDescription:
          'Concevoir des systèmes de capacité qui atteignent les objectifs de service tout en maîtrisant congestion, variabilité et coûts opérationnels.',
        details: [
          'Évaluer l’utilisation actuelle de la capacité et la performance opérationnelle.',
          'Définir les plages d’utilisation cibles par processus et type d’actif.',
          'Évaluer l’impact de la congestion et de la variabilité sur la performance opérationnelle.',
          'Calculer la capacité effective selon la disponibilité, la performance et la qualité.',
          'Aligner la planification de capacité avec les objectifs de service.',
          'Concevoir des buffers de capacité stratégiques et des mécanismes de flexibilité.',
          'Développer les plans d’expansion et d’investissement capacitaire à long terme.',
          'Établir les processus de gouvernance pour le management continu de la capacité.'
        ],
        cta: 'Explorer la planification de capacité →',
        anchor: 'capacity-planning'
      },
      {
        number: '07',
        title: 'Conception réseau et optimisation du risk pooling',
        shortDescription:
          'Optimiser les réseaux de distribution et de stocks afin d’équilibrer réactivité, résilience et coût total.',
        details: [
          'Évaluer l’empreinte réseau actuelle et le positionnement des stocks.',
          'Analyser les scénarios de centralisation et de décentralisation.',
          'Quantifier les opportunités de risk pooling et le potentiel de réduction des stocks.',
          'Analyser la variabilité de la demande et les corrélations entre flux.',
          'Évaluer les arbitrages entre investissement stock, coût de transport, délai et performance service.',
          'Concevoir des structures réseau alternatives : réseaux centralisés, régionaux, hub-and-spoke, pooling virtuel et stratégies de différenciation retardée.',
          'Développer les business cases associés aux initiatives de redesign réseau.',
          'Définir les feuilles de route de mise en œuvre et les plans de transition.'
        ],
        cta: 'Explorer la conception réseau →',
        anchor: 'network-design'
      }
    ]
  },
  {
    eyebrow: 'Section 02',
    title: 'Management des opérations',
    description:
      'Concevoir et installer les systèmes de management, disciplines de planification et cadres de décision nécessaires pour opérer des supply chains complexes à haut niveau de performance. Nous aidons les organisations à renforcer leur résilience, synchroniser leur planification, réduire la variabilité, optimiser stocks et capacité, et construire des modèles opérationnels intégrés qui transforment la stratégie en exécution.',
    cards: [
      {
        number: '01',
        title: 'Conception de la résilience réseau',
        shortDescription:
          'Construire des réseaux supply chain résilients capables d’absorber les disruptions, de récupérer rapidement et de protéger la rentabilité sans redondance excessive.',
        details: [
          'Évaluer l’exposition à la résilience à travers fournisseurs, sites, prestataires logistiques et clients.',
          'Quantifier l’impact opérationnel et financier des scénarios de disruption.',
          'Identifier les vulnérabilités structurelles et les points critiques de défaillance.',
          'Développer des stratégies de résilience basées sur la visibilité, l’analytique et la vitesse de décision plutôt que sur la duplication des stocks.',
          'Concevoir des mécanismes de réponse dynamique et des playbooks de contingence.',
          'Établir des systèmes de surveillance des disruptions et d’alerte précoce.',
          'Définir les structures de gouvernance pour le management de la résilience et la réponse de crise.',
          'Mettre en œuvre des métriques de résilience et des cadres d’amélioration continue.'
        ],
        cta: 'Explorer la résilience réseau →',
        anchor: 'network-resilience'
      },
      {
        number: '02',
        title: 'Jumeau numérique et management de la résilience temporelle',
        shortDescription:
          'Créer un modèle numérique vivant de la supply chain pour simuler les disruptions, évaluer les réponses et améliorer la performance de résilience.',
        details: [
          'Développer des modèles de jumeau numérique exécutables de la supply chain de bout en bout.',
          'Simuler des scénarios de disruption et des stratégies de récupération alternatives.',
          'Évaluer les conséquences financières et opérationnelles des décisions de résilience.',
          'Remplacer les KPI statiques par des métriques de résilience basées sur le temps.',
          'Définir les seuils critiques de résilience tels que Time-to-Survive et Time-to-Recover.',
          'Permettre le suivi en temps réel de la résilience et les stress tests.',
          'Construire des playbooks de décision pour la réponse et la mitigation des disruptions.',
          'Établir les processus de gouvernance pour la planification et l’exécution de la résilience.'
        ],
        cta: 'Explorer la résilience par jumeau numérique →',
        anchor: 'digital-twin-resilience'
      },
      {
        number: '03',
        title: 'Analytics avancés pour la résilience supply chain',
        shortDescription:
          'Transformer les données supply chain en insights prédictifs et prescriptifs afin d’améliorer visibilité, qualité de décision et résilience.',
        details: [
          'Évaluer la maturité analytique et les capacités d’aide à la décision.',
          'Développer des feuilles de route allant du reporting descriptif à l’analytique prédictive et prescriptive.',
          'Identifier les besoins critiques en données, visibilité et observabilité.',
          'Établir les fondations data nécessaires aux initiatives d’IA et de machine learning.',
          'Exploiter les jumeaux numériques et l’instrumentation opérationnelle pour générer des jeux de données de qualité.',
          'Déployer des solutions d’analytics avancés pour l’identification et la mitigation des risques.',
          'Intégrer machine learning, modèles de simulation et applications d’IA.',
          'Construire des structures de gouvernance pour la décision pilotée par l’analytique.'
        ],
        cta: 'Explorer les analytics de résilience →',
        anchor: 'resilience-analytics'
      },
      {
        number: '04',
        title: 'Diagnostic et réduction de l’effet coup de fouet',
        shortDescription:
          'Identifier, quantifier et réduire l’amplification de la demande dans la supply chain afin d’améliorer stabilité et coûts.',
        details: [
          'Évaluer l’ampleur et les sources de l’effet coup de fouet dans le réseau.',
          'Analyser la distorsion du signal causée par les prévisions, les commandes, les incitations et les délais d’information.',
          'Quantifier l’amplification de la demande à l’aide de métriques de variance et de flux.',
          'Identifier les facteurs opérationnels et comportementaux de volatilité.',
          'Évaluer l’impact des promotions, des commandes par lots et des comportements de rationnement.',
          'Concevoir des contre-mesures pour améliorer la qualité du signal et la réactivité.',
          'Établir des mécanismes de partage de données et de synchronisation de la planification.',
          'Réduire les stocks, la volatilité capacitaire et l’instabilité du service.'
        ],
        cta: 'Explorer la réduction du bullwhip →',
        anchor: 'bullwhip-effect'
      },
      {
        number: '05',
        title: 'Stratégie de compétitivité et de réactivité supply chain',
        shortDescription:
          'Optimiser l’arbitrage entre efficacité coût et réactivité afin de créer un avantage concurrentiel durable.',
        details: [
          'Évaluer la performance actuelle en matière de réactivité et de compétitivité coût.',
          'Quantifier les impacts économiques des délais et de la variabilité de la demande.',
          'Évaluer les besoins de réactivité par produit et segment client.',
          'Concevoir des modèles opérationnels différenciés selon les besoins marché.',
          'Optimiser capacité, stocks et politiques de planification pour améliorer la réactivité.',
          'Réduire la distorsion du signal grâce à une collaboration renforcée et au partage d’information.',
          'Développer des stratégies réseau et de planification guidées par le service.',
          'Établir des cadres de performance équilibrant réactivité et rentabilité.'
        ],
        cta: 'Explorer la stratégie de réactivité →',
        anchor: 'responsiveness-strategy'
      },
      {
        number: '06',
        title: 'Optimisation de la frontière Push-Pull',
        shortDescription:
          'Déterminer où la planification pilotée par les prévisions doit s’arrêter et où l’exécution tirée par la demande doit commencer.',
        details: [
          'Évaluer les frontières push-pull actuelles par produit et chaîne de valeur.',
          'Analyser variabilité de la demande, délais et exigences de service client.',
          'Évaluer le positionnement des stocks et les stratégies de buffering.',
          'Déterminer les points de découplage optimaux dans la supply chain.',
          'Concevoir des modèles de réapprovisionnement et de fulfillment différenciés.',
          'Aligner les processus de planification et d’exécution avec les dynamiques marché.',
          'Réduire l’amplification de la variabilité de la demande dans le réseau.',
          'Établir la gouvernance du management continu des frontières push-pull.'
        ],
        cta: 'Explorer le design Push-Pull →',
        anchor: 'push-pull-boundary'
      },
      {
        number: '07',
        title: 'Stratégie de segmentation supply chain',
        shortDescription:
          'Concevoir des stratégies de planification et d’exécution différenciées selon les caractéristiques produit, client et canal.',
        details: [
          'Segmenter les flux supply chain avec des cadres Produit × Client × Canal.',
          'Analyser variabilité, exigences de service et rentabilité par segment.',
          'Développer des politiques de planification et de réapprovisionnement différenciées.',
          'Concevoir des matrices de segmentation reliant caractéristiques de flux et modèles opérationnels.',
          'Aligner positionnement des stocks, allocation de capacité et engagements de service.',
          'Définir les objectifs de performance et la gouvernance par segment.',
          'Adapter les stratégies de planification à l’évolution des conditions marché.',
          'Établir des processus de management de la segmentation scalables.'
        ],
        cta: 'Explorer la segmentation supply chain →',
        anchor: 'supply-chain-segmentation'
      },
      {
        number: '08',
        title: 'Conception du forecasting basé sur les flux',
        shortDescription:
          'Transformer le forecasting d’un exercice statistique en mécanisme stratégique de planification améliorant la performance des flux.',
        details: [
          'Évaluer les processus de forecasting et l’efficacité de la décision.',
          'Redessiner le forecasting autour des principes push-pull et de gestion des flux.',
          'Définir les rôles du forecasting sur les horizons stratégique, tactique et opérationnel.',
          'Améliorer la précision des prévisions par agrégation et segmentation.',
          'Appliquer les principes de risk pooling entre produits, sites et ressources.',
          'Établir la gouvernance et les responsabilités du forecasting.',
          'Relier directement les sorties de forecasting aux décisions de stocks et de capacité.',
          'Concevoir des processus de planification intégrés améliorant la performance des flux.'
        ],
        cta: 'Explorer le forecasting basé sur les flux →',
        anchor: 'demand-forecasting'
      },
      {
        number: '09',
        title: 'Management des matières Plan-for-Every-Part',
        shortDescription:
          'Établir des politiques de stock structurées pour chaque matière afin d’améliorer service, résilience et besoin en fonds de roulement.',
        details: [
          'Développer un cadre complet Plan-for-Every-Part.',
          'Définir les politiques de réapprovisionnement et les paramètres de planification pour toutes les matières.',
          'Établir des objectifs de stock basés sur les niveaux de service et les flux.',
          'Différencier les politiques de stock par hiérarchie matière et criticité business.',
          'Optimiser les stocks de sécurité selon la variabilité de la demande et de l’approvisionnement.',
          'Appliquer les techniques d’optimisation de quantité économique de commande et de réapprovisionnement.',
          'Mettre en œuvre les processus de gouvernance assurant la conformité aux politiques.',
          'Améliorer la performance des stocks tout en maintenant les objectifs de service.'
        ],
        cta: 'Explorer le PFEP matières →',
        anchor: 'pfep-materials-management'
      },
      {
        number: '10',
        title: 'Mutualisation des capacités et gestion de la variabilité',
        shortDescription:
          'Réduire la capacité requise et améliorer l’utilisation en mutualisant stratégiquement la variabilité de la demande.',
        details: [
          'Évaluer les profils de variabilité de la demande et d’utilisation de la capacité.',
          'Quantifier les opportunités de pooling de variabilité entre produits, clients et ressources.',
          'Concevoir des modèles de capacité ajustés aux niveaux de service.',
          'Optimiser la flexibilité des ressources et l’équilibrage des charges.',
          'Réduire la congestion opérationnelle et les besoins de surcapacité.',
          'Améliorer la réactivité tout en maintenant les objectifs de service.',
          'Aligner les décisions de capacité avec les profils d’incertitude de la demande.',
          'Établir la gouvernance de la planification et du management capacitaire.'
        ],
        cta: 'Explorer la mutualisation des capacités →',
        anchor: 'capacity-pooling'
      },
      {
        number: '11',
        title: 'Optimisation globale des stocks et des temps de cycle',
        shortDescription:
          'Optimiser stocks et besoin en fonds de roulement par la gestion des flux de bout en bout plutôt que par des décisions locales isolées.',
        details: [
          'Évaluer la performance des stocks sur l’ensemble du réseau.',
          'Identifier les facteurs de temps de cycle et les goulots d’étranglement.',
          'Quantifier l’impact des variations de délai et des interruptions de flux sur les stocks.',
          'Concevoir des stratégies globales d’optimisation du positionnement des stocks et des flux.',
          'Réduire les stocks de sécurité dupliqués et les comportements d’optimisation locale.',
          'Améliorer la réactivité client par la réduction des temps de cycle.',
          'Aligner les politiques de stock avec les objectifs globaux du réseau.',
          'Établir la gouvernance et le suivi de la performance de bout en bout.'
        ],
        cta: 'Explorer l’optimisation des temps de cycle →',
        anchor: 'cycle-time-optimization'
      },
      {
        number: '12',
        title: 'Planification et exécution intégrées basées sur les flux',
        shortDescription:
          'Mettre en œuvre des systèmes de planification intégrée synchronisant les décisions dans l’entreprise selon des principes opérationnels basés sur les flux.',
        details: [
          'Concevoir et déployer des cadres de planification intégrée.',
          'Synchroniser la planification entre produits, clients, canaux, matières, fournisseurs et réseaux de distribution.',
          'Établir une prise de décision et une gouvernance basées sur les flux de valeur.',
          'Intégrer les horizons stratégique, tactique et opérationnel.',
          'Mettre en œuvre la discipline de planification ERP et les contrôles d’exécution.',
          'Définir les droits de décision, cadences de planification et processus d’escalade.',
          'Aligner les objectifs business avec les capacités opérationnelles.',
          'Créer un modèle opérationnel de planification durable améliorant la performance globale.'
        ],
        cta: 'Explorer l’IBP&E basé sur les flux →',
        anchor: 'flow-based-ibpe'
      }
    ]
  }
]
