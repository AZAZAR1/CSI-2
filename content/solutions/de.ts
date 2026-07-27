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
    eyebrow: 'Abschnitt 01',
    title: 'Design und Umsetzung von Delivery-Systemen',
    description:
      'Entwicklung operativer Systeme, die Service, Kosten, Reaktionsfähigkeit und Resilienz ausbalancieren. Wir unterstützen Organisationen beim Aufbau integrierter Delivery-Modelle, die Strategie, Kapazität, Bestände, Durchlaufzeiten und Netzwerkdesign auf einen nachhaltigen Wettbewerbsvorteil ausrichten.',
    cards: [
      {
        number: '01',
        title: 'Ressourcenbasierte Industriestrategie',
        shortDescription:
          'Entwicklung einer pragmatischen 5-Jahres-Operations-Strategie auf Basis der Fähigkeiten, wirtschaftlichen Realitäten und Wettbewerbspositionierung Ihrer Organisation.',
        details: [
          'Bewertung aktueller operativer Fähigkeiten, Assets und strategischer Einschränkungen.',
          'Entwicklung einer ressourcenbasierten Industriestrategie im Einklang mit den Unternehmenszielen.',
          'Strukturierung der Strategie entlang von Business Intent, Operations-Strategie, Capability-Enablern sowie Industrie- und Marktdynamiken.',
          'Bewertung strategischer Initiativen anhand wirtschaftlicher Wertschöpfung und Ergebnisbeitrag.',
          'Validierung des Zielbetriebsmodells durch integrierte Business-Planning-Szenarien.',
          'Stresstest der strategischen Resilienz gegenüber Nachfrage-, Liefer- und Marktvolatilität.',
          'Definition von Umsetzungs-Roadmaps und Prioritäten für den Kompetenzaufbau.',
          'Einrichtung von Governance-Mechanismen zur nachhaltigen Umsetzung über mehrere Jahre.'
        ],
        cta: 'Industriestrategie erkunden →',
        anchor: 'industrial-strategy'
      },
      {
        number: '02',
        title: 'Servicekritikalität und Betriebsstrategie',
        shortDescription:
          'Definition von Service Levels auf Basis wirtschaftlicher Auswirkungen zur besseren Steuerung von Kapazität, Bestand und Kundenzusagen.',
        details: [
          'Bewertung der wirtschaftlichen Auswirkungen von Serviceausfällen über Produkte und Kundensegmente hinweg.',
          'Entwicklung eines Klassifizierungsrahmens für Servicekritikalität.',
          'Quantifizierung des Zielkonflikts zwischen Fehlmengenkosten und Bereitschaftskosten.',
          'Definition differenzierter Serviceziele nach Produkt, Kunde oder Marktsegment.',
          'Gestaltung von Bestands- und Kapazitätspuffern entsprechend der Kritikalität.',
          'Erstellung von Entscheidungsregeln zur Balance zwischen Serviceleistung und operativen Kosten.',
          'Einrichtung einer Service-Governance auf Führungsebene und Eskalationsmechanismen.',
          'Integration der Service-Level-Ökonomie in operative Planungsprozesse.'
        ],
        cta: 'Servicekritikalität erkunden →',
        anchor: 'service-criticality'
      },
      {
        number: '03',
        title: 'Time-to-Customer-Optimierung',
        shortDescription:
          'Reduktion von Durchlaufzeiten und Verbesserung der Reaktionsfähigkeit durch End-to-End-Flow-Analyse und wirtschaftlich begründete Serviceziele.',
        details: [
          'Kartierung operativer und supply-chain-bezogener End-to-End-Flüsse.',
          'Analyse von Durchlaufzeittreibern in Prozessen, Beständen, Logistik und Entscheidungspunkten.',
          'Durchführung von Nachfrage-Kapazitäts-Kongestionsanalysen.',
          'Identifikation von Engpässen und Verzögerungspunkten.',
          'Anwendung von Warteschlangentheorie und Flow-Analyse.',
          'Bewertung der Auswirkungen von Auslastung, Variabilität und Work-in-Process auf Durchlaufzeiten.',
          'Design zukünftiger Flow-Architekturen.',
          'Definition wirtschaftlich optimierter Durchlaufzeitziele und Verbesserungs-Roadmaps.'
        ],
        cta: 'Durchlaufzeitoptimierung erkunden →',
        anchor: 'time-to-customer'
      },
      {
        number: '04',
        title: 'Wertschöpfungs- und Supply-Chain-Architektur',
        shortDescription:
          'Design von Betriebsmodellen, die Wertschöpfung, Flow-Management und strategische Geschäftsziele ausrichten.',
        details: [
          'Abgrenzung wertschöpfender Aktivitäten von Supply-Chain-Ausführungsaktivitäten.',
          'Bewertung aktueller Wertschöpfungs- und Supply-Chain-Betriebsmodelle.',
          'Analyse reaktionsbasierter gegenüber antizipationsbasierter Planungsansätze.',
          'Bewertung zentraler Flow-Steuerungsvariablen wie Bestand, Kapazität, Forecasting, Logistik und Transport.',
          'Design von Synchronisationsmechanismen über Funktionen und Standorte hinweg.',
          'Ausrichtung der Netzwerkstrukturen an organisatorischen Kompetenzen und Marktanforderungen.',
          'Entwicklung von Zielarchitekturen für das Betriebsmodell.',
          'Einrichtung von Governance- und Performance-Management-Rahmenwerken.'
        ],
        cta: 'Supply-Chain-Architektur erkunden →',
        anchor: 'value-chain-design'
      },
      {
        number: '05',
        title: 'Wirtschaftlich optimales Service-Level-Design',
        shortDescription:
          'Festlegung von Servicezielen, die Profitabilität maximieren, indem Kundenerwartungen gegen die tatsächlichen Servicekosten abgewogen werden.',
        details: [
          'Quantifizierung der Service-Performance-Ökonomie über Produkte und Kundensegmente hinweg.',
          'Analyse von Fehlmengenkosten, entgangenen Umsätzen und Service-Strafzahlungen.',
          'Bewertung von Überbestands- und Überkapazitätskosten.',
          'Bestimmung optimaler Service Levels auf Basis wirtschaftlicher Zielkonflikte.',
          'Direkte Verknüpfung von Servicezielen mit Bestands-, Kapazitäts- und Durchlaufzeitentscheidungen.',
          'Harmonisierung von Service-Level-Methoden in mehrstufigen Netzwerken.',
          'Entwicklung von Entscheidungsrahmen für die Service-Level-Governance auf Führungsebene.',
          'Einrichtung von Monitoring-Mechanismen zur Sicherung der Zielperformance.'
        ],
        cta: 'Service-Level-Optimierung erkunden →',
        anchor: 'service-level-design'
      },
      {
        number: '06',
        title: 'Strategische Kapazitätsplanung',
        shortDescription:
          'Design von Kapazitätssystemen, die Serviceziele erreichen und gleichzeitig Kongestion, Variabilität und Betriebskosten kontrollieren.',
        details: [
          'Bewertung aktueller Kapazitätsauslastung und operativer Performance.',
          'Definition von Zielauslastungsbereichen nach Prozess- und Assettyp.',
          'Bewertung der Auswirkungen von Kongestion und Variabilität auf operative Performance.',
          'Berechnung effektiver Kapazität auf Basis von Verfügbarkeit, Leistung und Qualität.',
          'Ausrichtung der Kapazitätsplanung auf Service-Level-Ziele.',
          'Design strategischer Kapazitätspuffer und Flexibilitätsmechanismen.',
          'Entwicklung langfristiger Kapazitätserweiterungs- und Investitionspläne.',
          'Einrichtung von Governance-Prozessen für kontinuierliches Kapazitätsmanagement.'
        ],
        cta: 'Kapazitätsplanung erkunden →',
        anchor: 'capacity-planning'
      },
      {
        number: '07',
        title: 'Netzwerkdesign und Risk-Pooling-Optimierung',
        shortDescription:
          'Optimierung von Distributions- und Bestandsnetzwerken zur Balance von Reaktionsfähigkeit, Resilienz und Gesamtkosten.',
        details: [
          'Bewertung der aktuellen Netzwerkstruktur und Bestandspositionierung.',
          'Analyse von Zentralisierungs- und Dezentralisierungsszenarien.',
          'Quantifizierung von Risk-Pooling-Potenzialen und Bestandsreduktionsmöglichkeiten.',
          'Analyse von Nachfragevariabilität und Korrelationsmustern.',
          'Bewertung der Zielkonflikte zwischen Bestandsinvestition, Transportkosten, Durchlaufzeit und Serviceperformance.',
          'Design alternativer Netzwerkstrukturen einschließlich zentralisierter, regionaler, Hub-and-Spoke-, virtueller Pooling- und Postponement-Modelle.',
          'Entwicklung von Business Cases für Netzwerk-Redesign-Initiativen.',
          'Definition von Umsetzungs-Roadmaps und Übergangsplänen.'
        ],
        cta: 'Netzwerkdesign erkunden →',
        anchor: 'network-design'
      }
    ]
  },
  {
    eyebrow: 'Abschnitt 02',
    title: 'Operations Management',
    description:
      'Design und Implementierung von Managementsystemen, Planungsdisziplinen und Entscheidungsrahmen, die erforderlich sind, um komplexe Supply Chains auf hohem Leistungsniveau zu betreiben. Wir helfen Organisationen, Resilienz zu verbessern, Planung zu synchronisieren, Variabilität zu reduzieren, Bestände und Kapazitäten zu optimieren und integrierte Betriebsmodelle aufzubauen, die Strategie in Umsetzung übersetzen.',
    cards: [
      {
        number: '01',
        title: 'Design resilienter Netzwerke',
        shortDescription:
          'Aufbau resilienter Supply-Chain-Netzwerke, die Störungen absorbieren, schnell wiederherstellen und Profitabilität ohne übermäßige Redundanz schützen.',
        details: [
          'Bewertung der Resilienzexposition über Lieferanten, Standorte, Logistikdienstleister und Kunden hinweg.',
          'Quantifizierung operativer und finanzieller Auswirkungen von Störungsszenarien.',
          'Identifikation struktureller Schwachstellen und kritischer Ausfallpunkte.',
          'Entwicklung von Resilienzstrategien auf Basis von Transparenz, Analytics und Entscheidungsgeschwindigkeit statt Bestandsduplizierung.',
          'Design dynamischer Reaktionsmechanismen und Notfall-Playbooks.',
          'Einrichtung von Störungsmonitoring und Frühwarnsystemen.',
          'Definition von Governance-Strukturen für Resilienzmanagement und Krisenreaktion.',
          'Implementierung von Resilienzkennzahlen und kontinuierlichen Verbesserungsrahmen.'
        ],
        cta: 'Netzwerkresilienz erkunden →',
        anchor: 'network-resilience'
      },
      {
        number: '02',
        title: 'Digital Twin und zeitbasiertes Resilienzmanagement',
        shortDescription:
          'Erstellung eines lebenden digitalen Modells der Supply Chain zur Simulation von Störungen, Bewertung von Reaktionen und Verbesserung der Resilienzleistung.',
        details: [
          'Entwicklung ausführbarer Digital-Twin-Modelle von End-to-End-Supply-Chains.',
          'Simulation von Störungsszenarien und alternativen Wiederherstellungsstrategien.',
          'Bewertung finanzieller und operativer Folgen von Resilienzentscheidungen.',
          'Ersatz statischer KPIs durch zeitbasierte Resilienzmetriken.',
          'Definition kritischer Resilienzschwellen wie Time-to-Survive und Time-to-Recover.',
          'Ermöglichung von Echtzeit-Resilienzmonitoring und Stresstests.',
          'Aufbau von Entscheidungs-Playbooks für Störungsreaktion und Mitigation.',
          'Einrichtung von Governance-Prozessen für Resilienzplanung und -umsetzung.'
        ],
        cta: 'Digital-Twin-Resilienz erkunden →',
        anchor: 'digital-twin-resilience'
      },
      {
        number: '03',
        title: 'Advanced Analytics für Supply-Chain-Resilienz',
        shortDescription:
          'Transformation von Supply-Chain-Daten in prädiktive und präskriptive Erkenntnisse zur Verbesserung von Transparenz, Entscheidungsqualität und Resilienz.',
        details: [
          'Bewertung der Analytics-Reife und Entscheidungsunterstützung.',
          'Entwicklung von Roadmaps vom deskriptiven Reporting hin zu prädiktiver und präskriptiver Analytics.',
          'Identifikation kritischer Daten-, Transparenz- und Observability-Anforderungen.',
          'Aufbau der Datengrundlagen für KI- und Machine-Learning-Initiativen.',
          'Nutzung von Digital Twins und operativer Instrumentierung zur Erzeugung hochwertiger Datensätze.',
          'Implementierung fortgeschrittener Analytics-Lösungen zur Risikoidentifikation und -mitigation.',
          'Integration von Machine Learning, Simulationsmodellen und KI-Anwendungen.',
          'Aufbau von Governance-Strukturen für analytics-getriebene Entscheidungen.'
        ],
        cta: 'Resilienz-Analytics erkunden →',
        anchor: 'resilience-analytics'
      },
      {
        number: '04',
        title: 'Diagnose und Reduktion des Bullwhip-Effekts',
        shortDescription:
          'Identifikation, Quantifizierung und Beseitigung von Nachfrageverstärkung in der Supply Chain zur Verbesserung von Stabilität und Kosten.',
        details: [
          'Bewertung von Ausmaß und Ursachen des Bullwhip-Effekts im Netzwerk.',
          'Analyse von Signalverzerrung durch Forecasting, Bestellverhalten, Anreize und Informationsverzögerungen.',
          'Quantifizierung der Nachfrageverstärkung mit Varianz- und Flow-basierten Metriken.',
          'Identifikation operativer und verhaltensbezogener Volatilitätstreiber.',
          'Bewertung der Auswirkungen von Promotionen, Losgrößenbestellungen und Shortage Gaming.',
          'Design von Gegenmaßnahmen zur Verbesserung der Signalqualität und Reaktionsfähigkeit.',
          'Einrichtung von Mechanismen für Datenaustausch und Planungssynchronisierung.',
          'Reduktion von Beständen, Kapazitätsvolatilität und Serviceinstabilität.'
        ],
        cta: 'Bullwhip-Reduktion erkunden →',
        anchor: 'bullwhip-effect'
      },
      {
        number: '05',
        title: 'Strategie für Wettbewerbsfähigkeit und Reaktionsfähigkeit',
        shortDescription:
          'Optimierung des Zielkonflikts zwischen Kosteneffizienz und Reaktionsfähigkeit zur Schaffung nachhaltiger Wettbewerbsvorteile.',
        details: [
          'Bewertung der aktuellen Reaktionsfähigkeit und Kostenwettbewerbsfähigkeit.',
          'Quantifizierung wirtschaftlicher Auswirkungen von Durchlaufzeiten und Nachfragevariabilität.',
          'Bewertung von Reaktionsanforderungen über Produkte und Kundensegmente hinweg.',
          'Design differenzierter Betriebsmodelle auf Basis der Marktanforderungen.',
          'Optimierung von Kapazität, Bestand und Planungsrichtlinien zur Verbesserung der Reaktionsfähigkeit.',
          'Reduktion von Signalverzerrung durch verbesserte Zusammenarbeit und Informationsaustausch.',
          'Entwicklung serviceorientierter Netzwerk- und Planungsstrategien.',
          'Einrichtung von Performance-Rahmenwerken, die Reaktionsfähigkeit und Profitabilität ausbalancieren.'
        ],
        cta: 'Reaktionsstrategie erkunden →',
        anchor: 'responsiveness-strategy'
      },
      {
        number: '06',
        title: 'Optimierung der Push-Pull-Grenze',
        shortDescription:
          'Bestimmung, wo forecast-getriebene Planung enden und nachfragegetriebene Ausführung beginnen sollte, um Performance zu maximieren.',
        details: [
          'Bewertung aktueller Push-Pull-Grenzen über Produkte und Wertströme hinweg.',
          'Analyse von Nachfragevariabilität, Durchlaufzeiten und Serviceanforderungen.',
          'Bewertung von Bestandspositionierung und Pufferstrategien.',
          'Bestimmung optimaler Entkopplungspunkte innerhalb der Supply Chain.',
          'Design differenzierter Nachschub- und Fulfillment-Modelle.',
          'Ausrichtung von Planungs- und Ausführungsprozessen an Marktdynamiken.',
          'Reduktion der Nachfragevariabilitätsverstärkung im Netzwerk.',
          'Einrichtung von Governance für kontinuierliches Push-Pull-Management.'
        ],
        cta: 'Push-Pull-Design erkunden →',
        anchor: 'push-pull-boundary'
      },
      {
        number: '07',
        title: 'Supply-Chain-Segmentierungsstrategie',
        shortDescription:
          'Design differenzierter Planungs- und Ausführungsstrategien auf Basis von Produkt-, Kunden- und Kanalmerkmalen.',
        details: [
          'Segmentierung von Supply-Chain-Flüssen mithilfe von Produkt × Kunde × Kanal-Rahmenwerken.',
          'Analyse von Variabilität, Serviceanforderungen und Profitabilität je Segment.',
          'Entwicklung differenzierter Planungs- und Nachschubrichtlinien.',
          'Design von Segmentierungsmatrizen, die Flow-Merkmale mit Betriebsmodellen verknüpfen.',
          'Ausrichtung von Bestandspositionierung, Kapazitätsallokation und Servicezusagen.',
          'Definition segmentbezogener Performanceziele und Governance.',
          'Anpassung von Planungsstrategien bei veränderten Marktbedingungen.',
          'Einrichtung skalierbarer Segmentierungsmanagementprozesse.'
        ],
        cta: 'Supply-Chain-Segmentierung erkunden →',
        anchor: 'supply-chain-segmentation'
      },
      {
        number: '08',
        title: 'Flow-basiertes Demand-Forecasting-Design',
        shortDescription:
          'Transformation von Forecasting von einer statistischen Übung zu einem strategischen Planungsmechanismus für überlegene Flow-Performance.',
        details: [
          'Bewertung von Forecasting-Prozessen und Entscheidungswirksamkeit.',
          'Neugestaltung des Forecastings entlang von Push-Pull- und Flow-Management-Prinzipien.',
          'Definition von Forecasting-Rollen über strategische, taktische und operative Horizonte hinweg.',
          'Verbesserung der Forecast-Genauigkeit durch Aggregation und Segmentierung.',
          'Anwendung von Risk-Pooling-Prinzipien über Produkte, Standorte und Ressourcen hinweg.',
          'Einrichtung von Forecasting-Governance und Verantwortlichkeiten.',
          'Direkte Verknüpfung von Forecasting-Ergebnissen mit Bestands- und Kapazitätsentscheidungen.',
          'Design integrierter Planungsprozesse zur Verbesserung der Flow-Performance.'
        ],
        cta: 'Demand-Forecasting-Design erkunden →',
        anchor: 'demand-forecasting'
      },
      {
        number: '09',
        title: 'Plan-for-Every-Part Materialmanagement',
        shortDescription:
          'Einrichtung strukturierter Bestandsrichtlinien für jedes Material zur Verbesserung von Service, Resilienz und Working Capital.',
        details: [
          'Entwicklung eines umfassenden Plan-for-Every-Part-Rahmenwerks.',
          'Definition von Nachschubrichtlinien und Planungsparametern für alle Materialien.',
          'Festlegung service- und flow-basierter Bestandsziele.',
          'Differenzierung von Bestandsrichtlinien nach Materialhierarchie und Geschäftskritikalität.',
          'Optimierung von Sicherheitsbeständen anhand von Nachfrage- und Lieferveränderlichkeit.',
          'Anwendung von EOQ- und Nachschuboptimierungstechniken.',
          'Implementierung von Governance-Prozessen zur Sicherstellung der Richtlinieneinhaltung.',
          'Verbesserung der Bestandsperformance bei gleichzeitiger Einhaltung der Serviceziele.'
        ],
        cta: 'PFEP-Materialmanagement erkunden →',
        anchor: 'pfep-materials-management'
      },
      {
        number: '10',
        title: 'Kapazitätspooling und Variabilitätsmanagement',
        shortDescription:
          'Reduktion erforderlicher Kapazität und Verbesserung der Auslastung durch strategisches Pooling von Nachfragevariabilität.',
        details: [
          'Bewertung von Nachfragevariabilität und Kapazitätsauslastungsmustern.',
          'Quantifizierung von Pooling-Potenzialen über Produkte, Kunden und Ressourcen hinweg.',
          'Design servicelevel-angepasster Kapazitätsmodelle.',
          'Optimierung von Ressourcenflexibilität und Lastverteilung.',
          'Reduktion operativer Kongestion und Überkapazitätsanforderungen.',
          'Verbesserung der Reaktionsfähigkeit bei gleichzeitiger Einhaltung der Serviceziele.',
          'Ausrichtung von Kapazitätsentscheidungen an Nachfrageunsicherheitsprofilen.',
          'Einrichtung von Governance für Kapazitätsplanung und -management.'
        ],
        cta: 'Kapazitätspooling erkunden →',
        anchor: 'capacity-pooling'
      },
      {
        number: '11',
        title: 'Globale Bestands- und Zykluszeitoptimierung',
        shortDescription:
          'Optimierung von Bestand und Working Capital durch End-to-End-Flow-Management statt isolierter lokaler Entscheidungen.',
        details: [
          'Bewertung der Bestandsperformance im gesamten Netzwerk.',
          'Identifikation von Zykluszeittreibern und Engpässen.',
          'Quantifizierung der Bestandsauswirkungen von Durchlaufzeitvariabilität und Flow-Unterbrechungen.',
          'Design globaler Optimierungsstrategien für Bestandspositionierung und Flow.',
          'Reduktion doppelter Sicherheitsbestände und lokaler Optimierungsverhalten.',
          'Verbesserung der Kundenreaktionsfähigkeit durch Zykluszeitreduktion.',
          'Ausrichtung von Bestandsrichtlinien an den Gesamtzielen des Netzwerks.',
          'Einrichtung von End-to-End-Performance-Governance und Monitoring.'
        ],
        cta: 'Zykluszeitoptimierung erkunden →',
        anchor: 'cycle-time-optimization'
      },
      {
        number: '12',
        title: 'Flow-basierte integrierte Businessplanung und Ausführung',
        shortDescription:
          'Implementierung integrierter Planungssysteme, die Entscheidungen im Unternehmen anhand flow-basierter Betriebsprinzipien synchronisieren.',
        details: [
          'Design und Implementierung integrierter Business-Planning-Rahmenwerke.',
          'Synchronisierung der Planung über Produkte, Kunden, Kanäle, Materialien, Lieferanten und Distributionsnetzwerke hinweg.',
          'Einrichtung wertstrombasierter Entscheidungsfindung und Governance.',
          'Integration strategischer, taktischer und operativer Planungshorizonte.',
          'Implementierung ERP-getriebener Planungsdisziplin und Ausführungskontrollen.',
          'Definition von Entscheidungsrechten, Planungskadenzen und Eskalationsprozessen.',
          'Ausrichtung von Geschäftszielen an operativen Fähigkeiten.',
          'Schaffung eines nachhaltigen Planungsbetriebsmodells zur Verbesserung der unternehmensweiten Performance.'
        ],
        cta: 'Flow-basiertes IBP&E erkunden →',
        anchor: 'flow-based-ibpe'
      }
    ]
  }
]
