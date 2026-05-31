import { useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

/* ============================================================
   SWISS INSTITUTIONAL DESIGN SYSTEM -- ICSI PREDICTOR PRO
   Color palette: Carbon / ICSI Crimson / warm gold
   Typography: Cormorant Garamond (sections) + IBM Plex Mono (data)
   Spacing: 8pt grid throughout
   ============================================================ */

const DS = {
  // Color tokens
  bg:           "#0d0f11",        // near-black carbon
  bgCard:       "#131416",        // card surface
  bgPanel:      "#1a1c1f",        // raised panel
  bgInput:      "#0f1113",        // input surface
  border:       "rgba(255,255,255,0.07)",
  borderStrong: "rgba(255,255,255,0.12)",
  // ICSI institutional crimson -- matches logo seal
  accent:       "#8b1a1a",
  accentLight:  "#a52020",
  accentDim:    "rgba(139,26,26,0.18)",
  accentGlow:   "rgba(139,26,26,0.07)",
  // Warm gold -- complements the ICSI crest
  gold:         "#b8922a",
  goldDim:      "rgba(184,146,42,0.15)",
  success:      "#b8922a",        // validated / warm institutional gold
  successDim:   "rgba(184,146,42,0.14)",
  warning:      "#b07d2a",        // caution / warm amber
  warningDim:   "rgba(176,125,42,0.14)",
  danger:       "#8b1a1a",        // deviation / same as accent
  dangerDim:    "rgba(139,26,26,0.14)",
  textPrimary:  "#e6e2dc",        // warm off-white, not cold blue-white
  textSecond:   "#8a8278",        // warm mid-tone
  textMuted:    "#8a8278",        // warm muted, raised for on-screen legibility
  textMono:     "#e6e2dc",        // off-white for output readouts
  fontSerif:    "'Cormorant Garamond', 'Palatino Linotype', Georgia, serif",
  fontSans:     "'Cormorant Garamond', 'Palatino Linotype', Georgia, serif",
  fontMono:     "'Cormorant Garamond', 'Palatino Linotype', Georgia, serif",
};

/* ---- Inline style objects ---- */

const styles = {
  page: {
    background: DS.bg,
    minHeight: "100vh",
    fontFamily: DS.fontSans,
    color: DS.textPrimary,
    WebkitFontSmoothing: "antialiased",
  },

  container: {
    maxWidth: 1040,
    margin: "0 auto",
    padding: "0 24px 80px",
  },

  /* ── PAGE HEADER ── */
  pageHeader: {
    padding: "48px 0 40px",
    borderBottom: `1px solid ${DS.border}`,
    marginBottom: 32,
  },
  engineBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    background: DS.accentDim,
    border: `1px solid rgba(139,26,26,0.35)`,
    borderRadius: 2,
    padding: "3px 10px",
    fontSize: 15,
    fontFamily: DS.fontMono,
    letterSpacing: "0.12em",
    color: DS.gold,
    marginBottom: 16,
    textTransform: "uppercase",
  },
  dotActive: {
    width: 5,
    height: 5,
    borderRadius: "50%",
    background: DS.gold,
    boxShadow: `0 0 6px ${DS.gold}`,
    animation: "pulse 2s infinite",
  },
  h1: {
    fontFamily: DS.fontSans,
    fontSize: 28,
    fontWeight: 600,
    letterSpacing: "-0.02em",
    color: DS.textPrimary,
    margin: "0 0 8px",
    lineHeight: 1.2,
  },
  subtitle: {
    fontFamily: DS.fontMono,
    fontSize: 16,
    color: DS.textMuted,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    margin: 0,
  },

  /* ── CARDS ── */
  card: {
    background: DS.bgCard,
    border: `1px solid ${DS.border}`,
    borderRadius: 6,
    padding: "24px 28px",
    marginBottom: 16,
    position: "relative",
  },
  cardAccent: {
    borderLeft: `2px solid ${DS.accent}`,
  },

  sectionLabel: {
    fontFamily: DS.fontMono,
    fontSize: 14,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: DS.textMuted,
    marginBottom: 4,
  },
  h2: {
    fontFamily: DS.fontSerif,
    fontSize: 22,
    fontWeight: 600,
    letterSpacing: "0.04em",
    color: DS.textPrimary,
    margin: "0 0 20px",
    lineHeight: 1.2,
  },
  h3: {
    fontFamily: DS.fontSerif,
    fontSize: 22,
    fontWeight: 600,
    letterSpacing: "0.06em",
    color: DS.textSecond,
    margin: "0 0 10px",
    textTransform: "none",
  },

  /* ── FORM ELEMENTS ── */
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  label: {
    fontFamily: DS.fontMono,
    fontSize: 14,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: DS.textMuted,
    marginBottom: 4,
    display: "block",
  },
  input: {
    background: DS.bgInput,
    border: `1px solid ${DS.borderStrong}`,
    borderRadius: 3,
    color: DS.textPrimary,
    fontFamily: DS.fontSans,
    fontSize: 15,
    padding: "9px 12px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.15s",
    WebkitAppearance: "none",
  },
  select: {
    background: DS.bgInput,
    border: `1px solid ${DS.borderStrong}`,
    borderRadius: 3,
    color: DS.textPrimary,
    fontFamily: DS.fontSans,
    fontSize: 15,
    padding: "9px 12px",
    width: "100%",
    boxSizing: "border-box",
    outline: "none",
    appearance: "none",
    WebkitAppearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%234f5a65'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
    paddingRight: 32,
    cursor: "pointer",
    transition: "border-color 0.15s",
  },

  /* ── GRID LAYOUTS ── */
  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 16,
  },
  grid3: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
  },

  /* ── BUTTONS ── */
  btnPrimary: {
    background: DS.accent,
    border: "1px solid transparent",
    borderRadius: 2,
    color: "#f0e8e0",
    cursor: "pointer",
    fontFamily: DS.fontMono,
    fontSize: 15,
    fontWeight: 600,
    letterSpacing: "0.12em",
    padding: "11px 24px",
    textTransform: "uppercase",
    transition: "opacity 0.15s",
    outline: "none",
    whiteSpace: "nowrap",
  },
  btnSecondary: {
    background: "transparent",
    border: `1px solid ${DS.borderStrong}`,
    borderRadius: 2,
    color: DS.textSecond,
    cursor: "pointer",
    fontFamily: DS.fontMono,
    fontSize: 15,
    fontWeight: 500,
    letterSpacing: "0.12em",
    padding: "11px 24px",
    textTransform: "uppercase",
    transition: "border-color 0.15s, color 0.15s",
    outline: "none",
    whiteSpace: "nowrap",
  },

  /* ── STATUS / NOTICE ── */
  notice: {
    background: DS.dangerDim,
    border: `1px solid rgba(139,26,26,0.3)`,
    borderRadius: 3,
    padding: "12px 16px",
    fontSize: 12,
    color: "#c97a7a",
    fontFamily: DS.fontMono,
  },
  noticeWarning: {
    background: DS.warningDim,
    border: `1px solid rgba(176,125,42,0.3)`,
    borderRadius: 3,
    padding: "12px 16px",
    fontSize: 12,
    color: "#c9a050",
    fontFamily: DS.fontMono,
  },
  noticeSuccess: {
    background: DS.successDim,
    border: `1px solid rgba(45,122,79,0.3)`,
    borderRadius: 3,
    padding: "12px 16px",
    fontSize: 12,
    color: DS.gold,
    fontFamily: DS.fontMono,
  },
  noticeInfo: {
    background: DS.accentGlow,
    border: `1px solid rgba(139,26,26,0.2)`,
    borderRadius: 3,
    padding: "12px 16px",
    fontSize: 12,
    color: "#c9a96e",
    fontFamily: DS.fontMono,
  },

  /* ── DATA READOUTS (monospaced) ── */
  dataRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    padding: "7px 0",
    borderBottom: `1px solid ${DS.border}`,
  },
  dataLabel: {
    fontFamily: DS.fontMono,
    fontSize: 15,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: DS.textMuted,
  },
  dataValue: {
    fontFamily: DS.fontMono,
    fontSize: 16,
    color: DS.textMono,
    fontWeight: 500,
  },
  dataValuePrimary: {
    fontFamily: DS.fontMono,
    fontSize: 16,
    color: DS.gold,
    fontWeight: 600,
    letterSpacing: "0.04em",
  },

  /* ── RH DISPLAY ── */
  rhPanel: {
    background: DS.bgPanel,
    border: `1px solid ${DS.border}`,
    borderRadius: 4,
    padding: "20px 24px",
    textAlign: "center",
    flex: 1,
  },

  /* ── SEPARATOR ── */
  sep: {
    border: "none",
    borderTop: `1px solid ${DS.border}`,
    margin: "24px 0",
  },

  /* ── AUTOCOMPLETE ── */
  autocompleteBox: {
    position: "absolute",
    background: DS.bgPanel,
    border: `1px solid ${DS.borderStrong}`,
    borderRadius: 4,
    width: "100%",
    zIndex: 50,
    maxHeight: 220,
    overflowY: "auto",
    marginTop: 3,
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
  },
  autocompleteItem: {
    padding: "10px 14px",
    cursor: "pointer",
    borderBottom: `1px solid ${DS.border}`,
    fontSize: 15,
    fontFamily: DS.fontSans,
    color: DS.textSecond,
    transition: "background 0.1s",
  },

  /* ── METADATA FOOTER ── */
  metaBar: {
    display: "flex",
    gap: 24,
    flexWrap: "wrap",
    padding: "12px 0 0",
    borderTop: `1px solid ${DS.border}`,
    marginTop: 16,
  },
  metaItem: {
    fontFamily: DS.fontMono,
    fontSize: 14,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: DS.textMuted,
  },
  metaDot: {
    display: "inline-block",
    width: 4,
    height: 4,
    borderRadius: "50%",
    background: DS.gold,
    marginRight: 6,
    verticalAlign: "middle",
  },
};

/* ============================================================
   INLINE KEYFRAMES  (injected once)
   ============================================================ */

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.35; }
    }
    @keyframes countUp {
      from { opacity: 0; transform: translateY(6px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes sweep {
      from { clip-path: inset(0 100% 0 0); }
      to   { clip-path: inset(0 0% 0 0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .pp-input:focus  { border-color: rgba(139,26,26,0.6) !important; }
    .pp-select:focus { border-color: rgba(139,26,26,0.6) !important; }

    .pp-btn-primary:hover:not(:disabled)   { opacity: 0.85; }
    .pp-btn-primary:disabled               { opacity: 0.38; cursor: not-allowed; }
    .pp-btn-secondary:hover:not(:disabled) { border-color: rgba(139,26,26,0.45); color: #c9a96e; }
    .pp-btn-secondary:disabled             { opacity: 0.38; cursor: not-allowed; }

    .pp-ac-item:hover { background: rgba(139,26,26,0.1) !important; color: #e6e2dc !important; }

    .pp-datarow:last-child { border-bottom: none !important; }

    .pp-result { animation: fadeIn 0.35s ease both; }

    .pp-output-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }

    @media (max-width: 760px) {
      .pp-output-grid {
        grid-template-columns: 1fr !important;
      }

      .pp-output-grid .pp-datarow {
        display: flex !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 6px;
      }

      .pp-output-grid .pp-datarow span:last-child {
        text-align: left;
        overflow-wrap: anywhere;
        word-break: normal;
        font-size: 16px !important;
        line-height: 1.45;
      }

      .pp-output-grid .pp-datarow span:first-child {
        font-size: 15px !important;
        line-height: 1.2;
      }
    }

    .pp-rh-value {
      font-family: 'Cormorant Garamond', 'Palatino Linotype', Georgia, serif;
      font-size: 42px;
      font-weight: 600;
      color: #e6e2dc;
      letter-spacing: -0.02em;
      line-height: 1;
      animation: countUp 0.5s ease both;
    }

    .pp-sweep {
      animation: sweep 0.6s ease both;
    }

    
    @media (max-width: 760px) {
      .pp-input,
      .pp-select {
        font-size: 18px !important;
      }
    }


    /* Scrollbar */
    ::-webkit-scrollbar       { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }

    /* Instruction block */
    .pp-instructions {
      font-size: 18px;
      line-height: 1.9;
      color: #8a8278;
      border-left: 2px solid rgba(139,26,26,0.4);
      padding-left: 16px;
      margin: 0;
    }
    .pp-instructions strong {
      color: #e6e2dc;
      font-weight: 500;
    }
  `}</style>
);

/* ============================================================
   DATA CONSTANTS  (unchanged from original)
   ============================================================ */

const ORIGINS = ["","Cuba","Dominican Republic","Nicaragua","Honduras","Mexico","Costa Rica","Panama","Ecuador","Brazil","Peru","United States","Jamaica","Philippines"];
const FACTORIES = ["","A.CONTI","Abam","Abeja Cigar","Aganorsa","Agio","Agroindustrias","Altadis USA","Augusto Reyes","Barreda","Blackbird Dom","Blanco Cigars","Buena Vista","Caldwell","Camacho Factory","Casa 1910","Charles Fairmorn","CLE","Cortez","D'Hatuey","Dannemann","De Los reyes","Don Palomor","Drew Estate","El Aladino","El Laguito","El Maestro","El Paraiso","El Rey de Los Habanos","El Sueno","El Titan de Bronze","El Viejo","EPC","Fabrica Centroamericana","Fabrica De Tabacos HVC","Fabrica Oveja Negra","Flor de Copan","Garmendia","General Cigar Dominicana","GR Tabacaleras","Graycliff Factory","Gurkha","H. Upmann","HATSA","Honduras american","Horacio","JC Newman","JRE Tobacco","Kelner Boutique","Kristoff Cigars","la Alianza","La Aurora","La Corona","La Flor De Copa","La Zona","Luciano Tabacos","Maya Selva","Meerapfel","MGE","Mi Havana","Micallef","Mina Del Rey","My Father Cigars","Natura","Nica Sueno","Nicaragua American","Oscar Vallardes","Oveja Negra","Padron","Partagas","PDR","Plasencia Cigars","Pure Aroma","Quesada","Raices Cubanas","Rocky Patel","San Lotano","Sanj Patel","Selected Tobacco","ST Group","STG Esteli","Tabacalera Altagracia","Tabacalera AJ Fernandez","Tabacalera Carreras","Tabacalera Cubanas","Tabacalera Davidoff","Tabacalera De Oliva","Tabacalera Diaz","Tabacalera El Artista","Tabacalera Fuente","Tabacalera Garcia","Tabacalera Joya de Nicaragua","Tabacalera Kafie","Tabacalera La Alianza","Tabacalera La Flor","Tabacalera La Isla","Tabacalera Las Lavas","Tabacalera Oveja Negra","Tabacalera Palma","Tabacalera Pichardo","Tabacalera Rocky Patel","Tabacalera Tropical","Tabacalera Villa Cuba","Tabacalera William Ventura","Tabacos De Costa Rica","Tabacos De Exportacion","Tabacos de Valle Jalapa","Tabacos Ranchos","Tabacos Valle de Jalapa","Tabacuba","Tabadom","Tabaos Vale De Jalapa","TABSA","TacaNicsa","TAF","Tavicusa Factory","The Foundation Cigars","Topper","Ventura","Villiger de Nicaragua"];
const WRAPPERS = ["","Cuban","Nicaraguan Habano","Habano 2000","Dominican Corojo","Dominican Criollo","Brazilian","Nicaraguan Corojo","Nicaraguan Criollo","Ecuadorian Corojo","Ecuadorian Criollo","Honduran Corojo","Honduran Criollo","Connecticut Shade","Connecticut Broadleaf","Connecticut Habano","Costarican","Broadleaf","San Andres","Cameroon","Ecuadorian Sumatra","Ecuadorian Habano","Ecuadorian Connecticut","Pennsylvania Broadleaf","Yamasa","Peruvian","Indonesian Sumatra","Hybrid / Other"];
const WRAPPER_PROCESSES = ["","Natural","Claro","Colorado","Colorado Claro","Colorado Maduro","Rosado","Maduro","Oscuro","Corojo-processed","Sun Grown","Shade Grown","Double Fermented","Barrel Aged","Other"];
const WRAPPER_THICKNESS_OPTIONS = ["thin","medium","thick"];
const WRAPPER_OILINESS_OPTIONS = ["low","medium","high"];
const BINDERS = ["","Cuban","Dominican","Nicaraguan","Honduran","Mexican","Brazilian","Peruvian","Cameroon","Costarican","San Andres","Connecticut","Sumatra","Ecuadorian","Broadleaf","Criollo","Corojo","Hybrid / Other"];
const FILLER_OPTIONS = ["","Cuba","Cuban Viso","Alta Viso","Dominican Republic","Nicaragua","Honduras","Mexico","Costa Rica","Panama","Ecuador","Brazil","Peru","Cameroon","Colombia","United States","Piloto Cubano","Olor Dominicano","Corojo","Criollo","Ligero","Ecuadorian Ligero","Cuban Seco","Volado","Medio Tiempo","Zimbabwe","Paraguay"];
const LIGERO_OPTIONS = ["","none","low","moderate","high"];
const SPECIAL_TOBACCO_FLAGS_OPTIONS = ["","Medio Tiempo","Alta Viso-heavy","Piloto Cubano","Olor Dominicano","Dominican Bonao","Pelo de Oro","Corojo","Criollo","Andullo","Cotui","Yamasa","San Vicente","Somoto","Brazilian Cubra","Brazilian Mata Fina","Brazilian Mata Norte","Brazilian Arapiraca","Masatepe","Ometepe","Pueblo Nuevo","Jamastran","Broadleaf-heavy","San Andres-heavy","SA Negrito","HVA","Jalapa","Filipino Simaba","Vuelta Abajo","Honduran Talanga","Costarican Puriscal","Aged filler","Extra fermented","Culebra style bunching","Small-batch / experimental"];
const SMOKER_STYLE_OPTIONS = ["both","slow","fast"];

const EMPTY_LOOKUP_FIELDS = {
  origin:"",factory:"",wrapper:"",wrapper_custom:"",wrapper_process:"",
  wrapper_thickness:"medium",wrapper_oiliness:"medium",binder_1:"",binder_1_custom:"",
  binder_2:"",binder_2_custom:"",filler_1:"",filler_2:"",filler_3:"",
  ligero:"moderate",flag_1:"",flag_2:"",flag_3:"",
};

/* ============================================================
   SUB-COMPONENTS
   ============================================================ */

/* Precision data row */
const DataRow = ({ label, value, primary }) => (
  <div className="pp-datarow" style={styles.dataRow}>
    <span style={styles.dataLabel}>{label}</span>
    <span style={primary ? styles.dataValuePrimary : styles.dataValue}>{value}</span>
  </div>
);

/* Tasting / pairing sub-card */
const AnalyticalCard = ({ title, rows }) => (
  <div style={{ ...styles.card, ...styles.cardAccent, marginBottom: 0, padding: "16px 20px" }}>
    <div style={styles.h3}>{title}</div>
    {rows.map(({ label, value }) => (
      <DataRow key={label} label={label} value={value || "—"} />
    ))}
  </div>
);


/* Loading state indicator */
const ProcessingIndicator = ({ label }) => (
  <div style={{
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 0",
    fontFamily: DS.fontMono,
    fontSize: 16,
    color: DS.gold,
    letterSpacing: "0.08em",
  }}>
    <span style={{ ...styles.dotActive, animation: "pulse 1s infinite" }} />
    {label}
  </div>
);

/* Section divider with label */
const SectionDivider = ({ label }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "28px 0 20px" }}>
    <div style={{ height: 1, flex: 1, background: DS.border }} />
    <span style={{ ...styles.sectionLabel, marginBottom: 0 }}>{label}</span>
    <div style={{ height: 1, flex: 1, background: DS.border }} />
  </div>
);

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function PredictorPage() {
  const [brandSuggestions, setBrandSuggestions]     = useState([]);
  const [lineSuggestions, setLineSuggestions]       = useState([]);
  const [showBrandSuggestions, setShowBrandSuggestions] = useState(false);
  const [showLineSuggestions, setShowLineSuggestions]   = useState(false);

  const [form, setForm] = useState({
    user_email: "",
    brand: "",
    line: "",
    origin: "",
    factory: "",
    wrapper: "",
    wrapper_custom: "",
    wrapper_process: "",
    wrapper_thickness: "medium",
    wrapper_oiliness: "medium",
    binder_1: "",
    binder_1_custom: "",
    binder_2: "",
    binder_2_custom: "",
    filler_1: "",
    filler_2: "",
    filler_3: "",
    ligero: "moderate",
    flag_1: "",
    flag_2: "",
    flag_3: "",
    age_years: "",
    smoker_style: "both",
    vitola: "",
    bunch_density: "medium",
  });

  const [usage, setUsage]                   = useState(null);
  const [validatedEmail, setValidatedEmail] = useState("");
  const [isUserValidated, setIsUserValidated] = useState(false);

  const [result, setResult]                 = useState(null);
  const [tastingCard, setTastingCard]       = useState(null);
  const [pairingCard, setPairingCard]       = useState(null);
  const [pairingSelection, setPairingSelection] = useState("None");
  const [similarBlends, setSimilarBlends]   = useState(null);
  const [err, setErr]                       = useState("");

  const [loadingUsage, setLoadingUsage]     = useState(false);
  const [loadingPredict, setLoadingPredict] = useState(false);
  const [loadingPairing, setLoadingPairing] = useState(false);
  const [loadingLookup, setLoadingLookup]   = useState(false);
  const [loadingSimilar, setLoadingSimilar] = useState(false);
  const [instructionsOpen, setInstructionsOpen] = useState(false);

  const [lookupStatus, setLookupStatus]     = useState("");
  const [lookupSource, setLookupSource]     = useState("");
  const [predictStep, setPredictStep]       = useState(""); // descriptive micro-copy

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const cleanText = (value) =>
    String(value || "").normalize("NFKD")
      .replace(/[\u0300-\u036f]/g,"")
      .replace(/['']/g,"'").replace(/[""]/g,'"')
      .replace(/[–—]/g,"-").replace(/\s+/g," ").trim();

  const isAuthorizedUser =
    isUserValidated &&
    cleanText(validatedEmail).toLowerCase() === cleanText(form.user_email).toLowerCase();

  const hasProAccess = isAuthorizedUser && usage?.pro_access === true;

  /* ── Autocomplete (unchanged logic) ── */

  const uniqueByBrand = (items) => {
    const seen = new Set(), out = [];
    for (const item of items || []) {
      const brand = cleanText(item.brand), key = brand.toLowerCase();
      if (brand && !seen.has(key)) { seen.add(key); out.push({ brand, label: brand }); }
    }
    return out;
  };

  const uniqueLinesForBrand = (items, selectedBrand, q) => {
    const brandKey = cleanText(selectedBrand).toLowerCase();
    const lineQuery = cleanText(q).toLowerCase();
    const seen = new Set(), out = [];
    for (const item of items || []) {
      const itemBrand = cleanText(item.brand).toLowerCase();
      const line = cleanText(item.line), lineKey = line.toLowerCase();
      if (!line || itemBrand !== brandKey) continue;
      if (lineQuery && !lineKey.includes(lineQuery)) continue;
      if (!seen.has(lineKey)) { seen.add(lineKey); out.push({ brand: cleanText(item.brand), line, label: line }); }
    }
    return out;
  };

  const loadBrandSuggestions = async (q) => {
    const cleaned = cleanText(q);
    if (!cleaned || cleaned.length < 2) { setBrandSuggestions([]); setShowBrandSuggestions(false); return; }
    try {
      const res  = await fetch(`/api/predictor/autocomplete?q=${encodeURIComponent(cleaned)}&limit=100`);
      const data = await res.json().catch(() => ({}));
      if (Array.isArray(data?.results)) {
        const brands = uniqueByBrand(data.results).slice(0,12);
        setBrandSuggestions(brands); setShowBrandSuggestions(brands.length > 0);
      } else { setBrandSuggestions([]); setShowBrandSuggestions(false); }
    } catch { setBrandSuggestions([]); setShowBrandSuggestions(false); }
  };

  const loadLineSuggestions = async (brand, q) => {
    const selectedBrand = cleanText(brand);
    if (!selectedBrand) { setLineSuggestions([]); setShowLineSuggestions(false); return; }
    try {
      const res  = await fetch(`/api/predictor/autocomplete?q=${encodeURIComponent(selectedBrand)}&limit=250`);
      const data = await res.json().catch(() => ({}));
      if (Array.isArray(data?.results)) {
        const lines = uniqueLinesForBrand(data.results, selectedBrand, cleanText(q)).slice(0,20);
        setLineSuggestions(lines); setShowLineSuggestions(lines.length > 0);
      } else { setLineSuggestions([]); setShowLineSuggestions(false); }
    } catch { setLineSuggestions([]); setShowLineSuggestions(false); }
  };

  const selectBrandSuggestion = (item) => {
    update("brand", cleanText(item.brand || "")); update("line","");
    setShowBrandSuggestions(false); setBrandSuggestions([]);
    setLineSuggestions([]); setShowLineSuggestions(false);
  };
  const selectLineSuggestion = (item) => {
    update("line", cleanText(item.line || ""));
    setShowLineSuggestions(false); setLineSuggestions([]);
  };

  /* ── Helpers (unchanged logic) ── */

  const buildCustomValue = (choice, custom) =>
    (choice === "Custom / Other" || choice === "Hybrid / Other")
      ? String(custom || "").trim() : choice;

  const buildUniqueList = (values) =>
    [...new Set(values.map((v) => String(v||"").trim()).filter(Boolean))];

  const splitPipeValues = (value) =>
    String(value||"").split("|").map((x) => cleanText(x)).filter(Boolean);

  const mapLookupValue = (value, options) => {
    const v = cleanText(value);
    if (!v) return "";
    if (options.includes(v)) return v;
    const normalized = v.toLowerCase();
    const exactCaseInsensitive = options.find((x) => cleanText(x).toLowerCase() === normalized);
    if (exactCaseInsensitive) return exactCaseInsensitive;
    const compact = normalized.replace(/[^a-z0-9]/g, "");
    const compactMatch = options.find((x) => cleanText(x).toLowerCase().replace(/[^a-z0-9]/g, "") === compact);
    return compactMatch || "";
  };

  const firstCleanValue = (...values) => {
    for (const value of values) {
      const cleaned = cleanText(value);
      if (cleaned) return cleaned;
    }
    return "";
  };

  const lookupOptionList = (options, selectedValue) => {
    const selected = cleanText(selectedValue);
    if (!selected || options.includes(selected)) return options;
    const withoutBlank = options.filter(Boolean);
    return ["", selected, ...withoutBlank];
  };
  const resetUserValidation = () => {
    setUsage(null); setValidatedEmail(""); setIsUserValidated(false);
    setLookupStatus(""); setLookupSource("");
  };

  const displayPairingList = (values) =>
    (!Array.isArray(values) || values.length === 0) ? "—"
      : values.filter(Boolean).join(", ") || "—";

  const getFilteredPairingCard = () => {
    if (!pairingCard || pairingSelection === "None") return null;
   const mapping = {
      wine: pairingCard.wine,
      whisky: pairingCard.whisky,
      rum: pairingCard.rum,
      cognac: pairingCard.cognac,
      tequila: pairingCard.tequila,
      beer: pairingCard.beer,
      cocktail: pairingCard.cocktails,
      "non-alcoholic": pairingCard.non_alcoholic,
      non_alcoholic: pairingCard.non_alcoholic,
   };
    return mapping[pairingSelection.toLowerCase()] || null;
  };

  const applyLookupMatch = (match) => {
    const rawWrapper   = cleanText(match?.wrapper);
    const wrapperInList = rawWrapper && WRAPPERS.includes(rawWrapper);
    const binderPipe   = splitPipeValues(match?.binder);
    const rawB1 = cleanText(match?.binder_1||match?.binder1||match?.primary_binder||binderPipe[0]||match?.binder);
    const rawB2 = cleanText(match?.binder_2||match?.binder2||match?.secondary_binder||match?.second_binder||binderPipe[1]||"");
    const b1InList = rawB1 && BINDERS.includes(rawB1);
    const b2InList = rawB2 && BINDERS.includes(rawB2);
    const filler = Array.isArray(match?.filler) ? match.filler.map(cleanText).filter(Boolean) : [];
    const validFillers = filler.filter((x) => FILLER_OPTIONS.includes(x));
    const flags  = Array.isArray(match?.special_tobacco_flags) ? match.special_tobacco_flags.map(cleanText).filter(Boolean) : [];
    const validFlags = flags.filter((x) => SPECIAL_TOBACCO_FLAGS_OPTIONS.includes(x));

    setForm((f) => ({
      ...f,
      brand: cleanText(match?.brand) || f.brand,
      line:  cleanText(match?.line)  || f.line,
      ...EMPTY_LOOKUP_FIELDS,
      origin:            mapLookupValue(match?.origin,   ORIGINS),
      factory:           mapLookupValue(firstCleanValue(match?.factory, match?.factory_name, match?.factoryName, match?.manufacturing_factory, match?.manufacturingFactory, match?.tabacalera, match?.manufacturer, match?.producer, match?.made_by, match?.madeBy, match?.source?.factory, match?.source_factory, match?.factory_label, match?.factoryLabel), FACTORIES) || firstCleanValue(match?.factory, match?.factory_name, match?.factoryName, match?.manufacturing_factory, match?.manufacturingFactory, match?.tabacalera, match?.manufacturer, match?.producer, match?.made_by, match?.madeBy, match?.source?.factory, match?.source_factory, match?.factory_label, match?.factoryLabel),
      wrapper:           rawWrapper ? (wrapperInList ? rawWrapper : "Hybrid / Other") : "",
      wrapper_custom:    rawWrapper && !wrapperInList ? rawWrapper : "",
      wrapper_process:   mapLookupValue(match?.wrapper_process,   WRAPPER_PROCESSES),
      wrapper_thickness: mapLookupValue(match?.wrapper_thickness, WRAPPER_THICKNESS_OPTIONS) || "medium",
      wrapper_oiliness:  mapLookupValue(match?.wrapper_oiliness,  WRAPPER_OILINESS_OPTIONS)  || "medium",
      binder_1:          rawB1 ? (b1InList ? rawB1 : "Hybrid / Other") : "",
      binder_1_custom:   rawB1 && !b1InList ? rawB1 : "",
      binder_2:          rawB2 ? (b2InList ? rawB2 : "Hybrid / Other") : "",
      binder_2_custom:   rawB2 && !b2InList ? rawB2 : "",
      filler_1: validFillers[0]||"", filler_2: validFillers[1]||"", filler_3: validFillers[2]||"",
      ligero: mapLookupValue(match?.ligero, LIGERO_OPTIONS) || "moderate",
      flag_1: validFlags[0]||"", flag_2: validFlags[1]||"", flag_3: validFlags[2]||"",
    }));
  };

  const buildPayload = () => ({
    user_email:  cleanText(form.user_email),
    brand:       cleanText(form.brand),
    line:        cleanText(form.line),
    origin:      cleanText(form.origin),
    factory:     cleanText(form.factory),
    wrapper:     cleanText(buildCustomValue(form.wrapper, form.wrapper_custom)),
    wrapper_process:   cleanText(form.wrapper_process),
    wrapper_thickness: cleanText(form.wrapper_thickness),
    wrapper_oiliness:  cleanText(form.wrapper_oiliness),
    binder: [cleanText(buildCustomValue(form.binder_1,form.binder_1_custom)),cleanText(buildCustomValue(form.binder_2,form.binder_2_custom))].filter(Boolean).join("|"),
    binder_1: cleanText(buildCustomValue(form.binder_1,form.binder_1_custom)),
    binder_2: cleanText(buildCustomValue(form.binder_2,form.binder_2_custom)),
    binders:  [cleanText(buildCustomValue(form.binder_1,form.binder_1_custom)),cleanText(buildCustomValue(form.binder_2,form.binder_2_custom))].filter(Boolean),
    filler: buildUniqueList([cleanText(form.filler_1),cleanText(form.filler_2),cleanText(form.filler_3)]),
    ligero: cleanText(form.ligero),
    special_tobacco_flags: buildUniqueList([cleanText(form.flag_1),cleanText(form.flag_2),cleanText(form.flag_3)]),
    age_years:    form.age_years === "" ? null : Number(form.age_years),
    smoker_style: cleanText(form.smoker_style),
    vitola:       "",
    bunch_density:"medium",
  });

  /* ── API calls (unchanged logic) ── */

  const loadUsage = async () => {
    setErr(""); setLoadingUsage(true); setUsage(null); setLookupStatus(""); setLookupSource("");
    try {
      const cleanedEmail = cleanText(form.user_email);
      const res  = await fetch(`/api/predictor/usage?email=${encodeURIComponent(cleanedEmail)}`);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { setIsUserValidated(false); setValidatedEmail(""); throw new Error(data.error||data.detail||"Failed to load usage"); }
      setUsage(data); setValidatedEmail(cleanedEmail); setIsUserValidated(true);
    } catch(e) { setIsUserValidated(false); setValidatedEmail(""); setErr(e.message||"Usage request failed"); }
    finally { setLoadingUsage(false); }
  };

  const lookupBlend = async () => {
    setErr(""); setLookupSource("");
    if (!isAuthorizedUser) { setLookupStatus("Validate your registered email address first."); return; }
    if (!hasProAccess)     { setLookupStatus("Pro access not enabled for this account."); return; }
    const brand = cleanText(form.brand), line = cleanText(form.line);
    if (!brand || !line) { setLookupStatus("Enter Brand and Line before initiating lookup."); return; }
    setLoadingLookup(true); setLookupStatus("Querying ICSI blend database...");
    try {
      const res  = await fetch(`/api/predictor/lookup-blend`, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ user_email: cleanText(form.user_email), brand, line }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok||!data.ok||!data.match) { setLookupStatus(data.error||data.detail||"No reliable blend match found."); return; }
      applyLookupMatch(data.match);
      setLookupSource(data.source?.label||"");
      setLookupStatus("Blend data retrieved and applied.");
    } catch { setLookupStatus("Lookup failed \u2014 check connection and retry."); }
    finally { setLoadingLookup(false); }
  };

  const loadTastingCard = async (brand, line) => {
    try {
      const res  = await fetch(`/api/predictor/tasting-card`, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ user_email: cleanText(form.user_email), brand: cleanText(brand), line: cleanText(line) }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok||!data.ok||!data.tasting_card) { setTastingCard(null); return; }
      setTastingCard(data.tasting_card);
    } catch { setTastingCard(null); }
  };

  const loadPairingCard = async (predictionData) => {
    const family = cleanText(predictionData?.family||predictionData?.rh_family||predictionData?.cps_family||predictionData?.peak_flavor_family||predictionData?.cigar_peak_flavor_system_family);
    if (!family) { setPairingCard(null); return; }
    setLoadingPairing(true);
    try {
      const res  = await fetch(`/api/predictor/pairing-card`, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ ...buildPayload(), family }) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok||!data.ok||!data.pairing_card) { setPairingCard(null); return; }
      setPairingCard(data.pairing_card);
    } catch { setPairingCard(null); }
    finally { setLoadingPairing(false); }
  };

  const runPrediction = async () => {
    setErr("");
    if (!isAuthorizedUser) { setErr("Validate your registered email address first."); return; }
    if (!hasProAccess)     { setErr("Pro access not enabled for this account."); return; }
    setLoadingPredict(true); setResult(null); setTastingCard(null); setPairingCard(null); setSimilarBlends(null);
    setPredictStep("Initializing combustion model...");
    const cleanedBrand = cleanText(form.brand), cleanedLine = cleanText(form.line);
    try {
      setPredictStep("Modeling combustion profile...");
      const res  = await fetch(`/api/predictor/predict`, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(buildPayload()) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error||data.detail||"Prediction failed");
      setPredictStep("Calibrating RH equilibrium...");
      setResult(data);
      await loadUsage();
      setPredictStep("Generating analytical tasting profile...");
      await loadTastingCard(cleanedBrand, cleanedLine);
      if (pairingSelection !== "None") { setPredictStep("Computing pairing matrix..."); }
      await loadPairingCard(data);
      setPredictStep("");
    } catch(e) { setErr(e.message||"Prediction request failed"); setPredictStep(""); }
    finally { setLoadingPredict(false); }
  };

  const findSimilarBlends = async () => {
    setErr("");
    if (!isAuthorizedUser) { setErr("Validate your registered email address first."); return; }
    if (!hasProAccess)     { setErr("Pro access not enabled for this account."); return; }
    setLoadingSimilar(true); setSimilarBlends(null); setResult(null); setTastingCard(null); setPairingCard(null);
    try {
      const res  = await fetch(`/api/predictor/similar-blends`, { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(buildPayload()) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok||!data.ok) throw new Error(data.error||data.detail||"Similar blends lookup failed");
      setSimilarBlends(data);
      await loadUsage();
    } catch(e) { setErr(e.message||"Similar blends request failed"); }
    finally { setLoadingSimilar(false); }
  };

  /* ============================================================
     RENDER
     ============================================================ */

  const now = new Date();
  const timestamp = `${now.getDate().toString().padStart(2,"0")} ${now.toLocaleString("en",{month:"short"}).toUpperCase()} ${now.getFullYear()} \u2014 ${now.getHours().toString().padStart(2,"0")}:${now.getMinutes().toString().padStart(2,"0")} GST`;

  const filteredPairing = getFilteredPairingCard();

  return (
    <Layout>
      <Seo title="Predictor Pro | ICSI" path="/portal/predictorpro" />
      <GlobalStyles />

      <div style={styles.page}>
        <div style={styles.container}>

          {/* ── PAGE HEADER ── */}
          <div style={styles.pageHeader}>
            <div style={styles.engineBadge}>
              <span style={styles.dotActive} />
              CPFS Engine v4.8 Calibrated
            </div>
            <h1 style={styles.h1}>PredictorPro Enterprise Application</h1>
            <p style={styles.subtitle}>Cigar Peak-Flavor System</p>
          </div>

          {/* ── COLLAPSIBLE METHODOLOGY NOTICE ── */}
          <div style={{ ...styles.card, marginBottom: 24, borderColor: "rgba(37,99,235,0.18)", padding: instructionsOpen ? "20px 28px" : "14px 28px" }}>
            <button
              type="button"
              onClick={() => setInstructionsOpen((v) => !v)}
              aria-expanded={instructionsOpen}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
                color: DS.textPrimary,
                fontFamily: DS.fontMono,
                textAlign: "left",
              }}
            >
              <span style={{ ...styles.sectionLabel, marginBottom: 0 }}>Operational Protocol</span>
              <span style={{ ...styles.dataLabel, marginBottom: 0 }}>
                {instructionsOpen ? "Collapse" : "View Instructions"} {instructionsOpen ? "−" : "+"}
              </span>
            </button>

            {instructionsOpen && (
              <p className="pp-instructions" style={{ marginTop: 14 }}>
                Predictor Pro is available exclusively to approved subscribers. Validate your registered
                email address using the Check User control. In the Blend Lookup module, enter the Brand
                and Line identifiers, then initiate the Lookup Blend procedure and construction and tobacco
                composition parameters will populate automatically.
                <br /><br />
                Autofilled parameters are adjustable prior to analysis: wrapper, wrapper process, wrapper
                thickness and oiliness, binder components, filler components, ligero level, special tobacco
                flags, blend age, and smoker style. Optionally select a beverage category from the Pairing
                selector before running the predictor. Pressing <strong>Run Predictor</strong> generates the
                blend's optimal leaf-level relative humidity %, a professional analytical tasting card, and
                when selected, a dedicated pairing card. Pressing <strong>Find Similar Blends</strong> returns
                blends structurally and sensorially matched to the query.
                <br /><br />
                <strong>Note:</strong> Leaf-level relative humidity % is measured using a commercially
                available Cigar Humidity Meter.
              </p>
            )}
          </div>

          {/* ── USER VALIDATION ── */}
          <div style={{ ...styles.card, ...styles.cardAccent }}>
            <div style={styles.sectionLabel}>Section 01</div>
            <div style={styles.h2}>User Validation</div>

            <div style={{ maxWidth: 420 }}>
              <label style={styles.label}>Registered Email Address</label>
              <input
                className="pp-input"
                style={styles.input}
                value={form.user_email}
                placeholder="subscriber@domain.com"
                onChange={(e) => { update("user_email", e.target.value); resetUserValidation(); }}
              />
            </div>

            <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              <button
                className="pp-btn-primary"
                style={styles.btnPrimary}
                onClick={loadUsage}
                disabled={loadingUsage}
              >
                {loadingUsage ? "Validating..." : "Check User"}
              </button>

              {isAuthorizedUser && hasProAccess && (
                <span style={{ ...styles.noticeSuccess, padding: "6px 12px" }}>
                  &#x2713; Access Validated &#x2014; Pro Enabled
                </span>
              )}
              {isAuthorizedUser && !hasProAccess && (
                <span style={{ ...styles.noticeWarning, padding: "6px 12px" }}>
                  &#x26A0; Validated &#x2014; Pro Access Inactive
                </span>
              )}
              {!isAuthorizedUser && !loadingUsage && (
                <span style={{ fontFamily: DS.fontMono, fontSize: 15, color: DS.textMuted, letterSpacing: "0.08em" }}>
                  Validation required to enable Predictor Pro
                </span>
              )}
            </div>

          </div>

          {/* ── CIGAR BLEND LOOKUP ── */}
          <div style={styles.card}>
            <div style={styles.sectionLabel}>Section 02</div>
            <div style={styles.h2}>Cigar Blend Lookup</div>

            <div style={styles.grid2}>
              {/* Brand */}
              <div style={{ position: "relative" }}>
                <label style={styles.label}>Brand</label>
                <input
                  className="pp-input"
                  style={styles.input}
                  value={form.brand}
                  placeholder="Begin entering brand designation..."
                  autoComplete="off"
                  onFocus={() => loadBrandSuggestions(form.brand)}
                  onChange={(e) => {
                    const v = e.target.value;
                    update("brand", v); update("line","");
                    setLineSuggestions([]); setShowLineSuggestions(false);
                    loadBrandSuggestions(v);
                  }}
                  onBlur={() => setTimeout(() => setShowBrandSuggestions(false), 150)}
                />
                {showBrandSuggestions && brandSuggestions.length > 0 && (
                  <div style={styles.autocompleteBox}>
                    {brandSuggestions.map((s, i) => (
                      <div key={`${s.brand}-${i}`} className="pp-ac-item" style={styles.autocompleteItem}
                        onMouseDown={(e) => { e.preventDefault(); selectBrandSuggestion(s); }}>
                        {s.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Line */}
              <div style={{ position: "relative" }}>
                <label style={styles.label}>Line</label>
                <input
                  className="pp-input"
                  style={{ ...styles.input, opacity: cleanText(form.brand) ? 1 : 0.5 }}
                  value={form.line}
                  autoComplete="off"
                  disabled={!cleanText(form.brand)}
                  onFocus={() => loadLineSuggestions(form.brand, form.line)}
                  onChange={(e) => { const v = e.target.value; update("line", v); loadLineSuggestions(form.brand, v); }}
                  onBlur={() => setTimeout(() => setShowLineSuggestions(false), 150)}
                  placeholder={cleanText(form.brand) ? "Begin entering line designation..." : "Select brand first"}
                />
                {showLineSuggestions && lineSuggestions.length > 0 && (
                  <div style={styles.autocompleteBox}>
                    {lineSuggestions.map((s, i) => (
                      <div key={`${s.brand}-${s.line}-${i}`} className="pp-ac-item" style={styles.autocompleteItem}
                        onMouseDown={(e) => { e.preventDefault(); selectLineSuggestion(s); }}>
                        {s.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              <button
                className="pp-btn-secondary"
                style={styles.btnSecondary}
                onClick={lookupBlend}
                disabled={loadingLookup || !hasProAccess}
              >
                {loadingLookup ? "Querying Database..." : "Lookup Blend"}
              </button>

              {lookupStatus && (
                <span style={{ fontFamily: DS.fontMono, fontSize: 15, color: DS.textMuted, letterSpacing: "0.07em" }}>
                  {lookupStatus}
                </span>
              )}
            </div>

            {lookupSource && (
              <div style={{ marginTop: 8, fontFamily: DS.fontMono, fontSize: 15, color: DS.textMuted, letterSpacing: "0.07em" }}>
                Data Source: <span style={{ color: DS.textSecond }}>{lookupSource}</span>
              </div>
            )}

            <hr style={styles.sep} />

            <div style={styles.grid2}>
              <div>
                <label style={styles.label}>Origin</label>
                <select className="pp-select" style={styles.select} value={form.origin} onChange={(e) => update("origin", e.target.value)}>
                  {ORIGINS.map((x) => <option key={x||"blank-origin"} value={x}>{x||"Select Origin"}</option>)}
                </select>
              </div>
              <div>
                <label style={styles.label}>Factory</label>
                <select className="pp-select" style={styles.select} value={form.factory} onChange={(e) => update("factory", e.target.value)}>
                  {lookupOptionList(FACTORIES, form.factory).map((x) => <option key={x||"blank-factory"} value={x}>{x||"Select Factory"}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* ── BLEND CONSTRUCTION ── */}
          <div style={styles.card}>
            <div style={styles.sectionLabel}>Section 03</div>
            <div style={styles.h2}>Blend Construction: Autofilled &amp; Adjustable</div>

            <SectionDivider label="Wrapper" />
            <div style={styles.grid2}>
              <div>
                <label style={styles.label}>Wrapper Leaf</label>
                <select className="pp-select" style={styles.select} value={form.wrapper} onChange={(e) => update("wrapper", e.target.value)}>
                  {WRAPPERS.map((x) => <option key={x||"blank-wrapper"} value={x}>{x||"Select Wrapper"}</option>)}
                </select>
                {form.wrapper === "Hybrid / Other" && (
                  <input className="pp-input" style={{ ...styles.input, marginTop: 8 }}
                    value={form.wrapper_custom}
                    onChange={(e) => update("wrapper_custom", e.target.value)}
                    placeholder="Specify custom wrapper designation" />
                )}
              </div>
              <div>
                <label style={styles.label}>Wrapper Process</label>
                <select className="pp-select" style={styles.select} value={form.wrapper_process} onChange={(e) => update("wrapper_process", e.target.value)}>
                  {WRAPPER_PROCESSES.map((x) => <option key={x||"blank-wp"} value={x}>{x||"Select Process"}</option>)}
                </select>
              </div>
            </div>

            <div style={{ ...styles.grid2, marginTop: 14 }}>
              <div>
                <label style={styles.label}>Wrapper Thickness</label>
                <select className="pp-select" style={styles.select} value={form.wrapper_thickness} onChange={(e) => update("wrapper_thickness", e.target.value)}>
                  {WRAPPER_THICKNESS_OPTIONS.map((x) => <option key={x} value={x}>{x}</option>)}
                </select>
              </div>
              <div>
                <label style={styles.label}>Wrapper Oiliness</label>
                <select className="pp-select" style={styles.select} value={form.wrapper_oiliness} onChange={(e) => update("wrapper_oiliness", e.target.value)}>
                  {WRAPPER_OILINESS_OPTIONS.map((x) => <option key={x} value={x}>{x}</option>)}
                </select>
              </div>
            </div>

            <SectionDivider label="Binder Components" />
            <div style={styles.grid2}>
              <div>
                <label style={styles.label}>Binder 1</label>
                <select className="pp-select" style={styles.select} value={form.binder_1} onChange={(e) => update("binder_1", e.target.value)}>
                  {BINDERS.map((x) => <option key={x||"blank-b1"} value={x}>{x||"Select Binder"}</option>)}
                </select>
                {form.binder_1 === "Hybrid / Other" && (
                  <input className="pp-input" style={{ ...styles.input, marginTop: 8 }}
                    value={form.binder_1_custom} onChange={(e) => update("binder_1_custom", e.target.value)}
                    placeholder="Specify custom binder" />
                )}
              </div>
              <div>
                <label style={styles.label}>Binder 2</label>
                <select className="pp-select" style={styles.select} value={form.binder_2} onChange={(e) => update("binder_2", e.target.value)}>
                  {BINDERS.map((x) => <option key={x||"blank-b2"} value={x}>{x||"Select Binder"}</option>)}
                </select>
                {form.binder_2 === "Hybrid / Other" && (
                  <input className="pp-input" style={{ ...styles.input, marginTop: 8 }}
                    value={form.binder_2_custom} onChange={(e) => update("binder_2_custom", e.target.value)}
                    placeholder="Specify custom binder" />
                )}
              </div>
            </div>

            <div style={{ marginTop: 14, maxWidth: 320 }}>
              <label style={styles.label}>Ligero Level</label>
              <select className="pp-select" style={styles.select} value={form.ligero} onChange={(e) => update("ligero", e.target.value)}>
                {LIGERO_OPTIONS.map((x) => <option key={x||"blank-lig"} value={x}>{x||"Select Level"}</option>)}
              </select>
            </div>

            <SectionDivider label="Filler Components" />
            <div style={styles.grid3}>
              {["filler_1","filler_2","filler_3"].map((key, i) => (
                <div key={key}>
                  <label style={styles.label}>Filler {i+1}</label>
                  <select className="pp-select" style={styles.select} value={form[key]} onChange={(e) => update(key, e.target.value)}>
                    {FILLER_OPTIONS.map((x) => <option key={`${key}-${x||"blank"}`} value={x}>{x||"Select"}</option>)}
                  </select>
                </div>
              ))}
            </div>

            <SectionDivider label="Special Tobacco Flags" />
            <div style={styles.grid3}>
              {["flag_1","flag_2","flag_3"].map((key, i) => (
                <div key={key}>
                  <label style={styles.label}>Flag {i+1}</label>
                  <select className="pp-select" style={styles.select} value={form[key]} onChange={(e) => update(key, e.target.value)}>
                    {SPECIAL_TOBACCO_FLAGS_OPTIONS.map((x) => <option key={`${key}-${x||"blank"}`} value={x}>{x||"Select"}</option>)}
                  </select>
                </div>
              ))}
            </div>
          </div>

          {/* ── ENVIRONMENTAL + RUN CONTROLS ── */}
          <div style={styles.card}>
            <div style={styles.sectionLabel}>Section 04</div>
            <div style={styles.h2}>Optional Parameters &amp; Analysis Controls</div>

            <div style={styles.grid2}>
              <div>
                <label style={styles.label}>Blend Age (years)</label>
                <input
                  className="pp-input"
                  style={styles.input}
                  type="number" min="0" step="0.5"
                  value={form.age_years}
                  onChange={(e) => update("age_years", e.target.value)}
                  placeholder="0"
                />
              </div>
              <div>
                <label style={styles.label}>Smoker Style</label>
                <select className="pp-select" style={styles.select} value={form.smoker_style} onChange={(e) => update("smoker_style", e.target.value)}>
                  {SMOKER_STYLE_OPTIONS.map((x) => <option key={x} value={x}>{x}</option>)}
                </select>
              </div>
            </div>

            <div style={{ marginTop: 16, maxWidth: 320 }}>
              <label style={styles.label}>Pairing Category</label>
              <select className="pp-select" style={styles.select} value={pairingSelection} onChange={(e) => setPairingSelection(e.target.value)}>
                <option value="None">None &#x2014; Prediction Only</option>
                <option value="Wine">Wine</option>
                <option value="Whisky">Whisky</option>
                <option value="Rum">Rum</option>
                <option value="Cognac">Cognac</option>
                <option value="Tequila">Tequila</option>
                <option value="Beer">Beer</option>
                <option value="Cocktail">Cocktail</option>
                  <option value="Non-Alcoholic">Non-Alcoholic</option>
              </select>
            </div>

            <hr style={styles.sep} />

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <button
                className="pp-btn-primary"
                style={styles.btnPrimary}
                onClick={runPrediction}
                disabled={loadingPredict || !hasProAccess}
              >
                {loadingPredict ? "Computing..." : "Run Predictor"}
              </button>

              <button
                className="pp-btn-secondary"
                style={styles.btnSecondary}
                onClick={findSimilarBlends}
                disabled={loadingSimilar || !hasProAccess}
              >
                {loadingSimilar ? "Searching..." : "Find Similar Blends"}
              </button>

              {(loadingPredict && predictStep) && <ProcessingIndicator label={predictStep} />}
              {loadingSimilar && <ProcessingIndicator label="Scanning blend database..." />}
            </div>
          </div>

          {/* ── ERROR ── */}
          {err && (
            <div style={{ ...styles.notice, marginTop: 16 }}>
              ⚠  {err}
            </div>
          )}

          {/* ── ANALYTICAL OUTPUT ── */}
          {result && (
            <div className="pp-result" style={styles.card}>
              <div style={styles.sectionLabel}>Analytical Output</div>
              <div style={styles.h2}>Peak-Flavor Prediction Result</div>

              {/* RH Readout panels */}
              <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
                <div style={styles.rhPanel}>
                  <div style={styles.dataLabel}>Target RH%</div>
                  <div className="pp-rh-value">{result.target_rh}</div>
                  <div style={{ ...styles.dataLabel, marginTop: 6 }}>Optimal Leaf-Level</div>
                </div>
                <div style={styles.rhPanel}>
                  <div style={styles.dataLabel}>RH Window</div>
                  <div style={{ fontFamily: DS.fontMono, fontSize: 22, fontWeight: 600, color: DS.textMono, letterSpacing: "0.02em" }}>
                    {result.window_low}–{result.window_high}
                  </div>
                </div>
                <div style={styles.rhPanel}>
                  <div style={styles.dataLabel}>CPFS Family</div>
                  <div style={{ fontFamily: DS.fontMono, fontSize: 42, fontWeight: 600, color: DS.textPrimary, marginTop: 6, letterSpacing: "0.03em", lineHeight: 1 }}>
                    {result.family}
                  </div>
                  <div style={{ ...styles.dataLabel, marginTop: 4 }}>Classification</div>
                </div>
              </div>

              {/* Tasting Card */}
              {tastingCard && (
                <>
                  <SectionDivider label="Analytical Tasting Profile" />
                  <div className="pp-output-grid">
                    <AnalyticalCard
                      title="Palate Analysis"
                      rows={[
                        { label: "Primary",   value: (tastingCard?.palate?.primary  ||[]).join(", ") },
                        { label: "Secondary", value: (tastingCard?.palate?.secondary||[]).join(", ") },
                        { label: "Texture",   value: (tastingCard?.palate?.texture  ||[]).join(", ") },
                        { label: "Finish",    value: (tastingCard?.palate?.finish   ||[]).join(", ") },
                      ]}
                    />
                    <AnalyticalCard
                      title="Retrohale Profile"
                      rows={[
                        { label: "Primary",   value: (tastingCard?.retrohale?.primary  ||[]).join(", ") },
                        { label: "Secondary", value: (tastingCard?.retrohale?.secondary||[]).join(", ") },
                        { label: "Finish",    value: (tastingCard?.retrohale?.finish   ||[]).join(", ") },
                      ]}
                    />
                  </div>
                </>
              )}

              {/* Pairing Card */}
              {loadingPairing && pairingSelection !== "None" && (
                <ProcessingIndicator label={`Generating ${pairingSelection} pairing matrix...`} />
              )}

              {pairingCard && pairingSelection !== "None" && filteredPairing && (
                <>
                  <SectionDivider label={`${pairingSelection} Pairing Matrix`} />
                  <div className="pp-output-grid">
                    <AnalyticalCard
                      title={`${pairingSelection} \u2014 Pairing Recommendations`}
                      rows={[
                        { label: "Primary",   value: displayPairingList(filteredPairing?.primary) },
                        { label: "Secondary", value: displayPairingList(filteredPairing?.secondary) },
                      ]}
                    />
                  </div>
                </>
              )}

              {pairingCard && pairingSelection !== "None" && !filteredPairing && (
                <div style={{ ...styles.noticeInfo, marginTop: 16 }}>
                  No {pairingSelection.toLowerCase()} pairing data returned for this blend profile.
                </div>
              )}

              {/* Metadata footer */}
              <div style={styles.metaBar}>
                <span style={styles.metaItem}><span style={styles.metaDot} />CPFS Engine v4.8</span>
                <span style={styles.metaItem}>Calibrated · Reference-Standard</span>
                <span style={styles.metaItem}>Generated {timestamp}</span>
                <span style={styles.metaItem}>Combustion-density regression model v2.3</span>
              </div>
            </div>
          )}

          {/* ── SIMILAR BLENDS ── */}
          {similarBlends && (
            <div className="pp-result" style={styles.card}>
              <div style={styles.sectionLabel}>Structural Match Analysis</div>
              <div style={styles.h2}>Similar Blend Profiles</div>

              {Array.isArray(similarBlends.results) && similarBlends.results.length > 0 ? (
                similarBlends.results.map((blend, idx) => (
                  <div key={`${blend.brand||"b"}-${blend.line||"l"}-${idx}`}
                    style={{ padding: "18px 0", borderBottom: idx < similarBlends.results.length-1 ? `1px solid ${DS.border}` : "none" }}>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
                      <div>
                        <span style={{ fontWeight: 600, fontSize: 16, color: DS.textPrimary }}>
                          {blend.brand || "Unknown Brand"}
                        </span>
                        {blend.line && (
                          <span style={{ fontSize: 16, color: DS.textSecond, marginLeft: 8 }}>&mdash; {blend.line}</span>
                        )}
                      </div>
                      {blend.similarity_score != null && (
                        <div style={{ fontFamily: DS.fontMono, fontSize: 16, color: DS.gold, fontWeight: 600, letterSpacing: "0.04em" }}>
                          {blend.similarity_score}% Match
                        </div>
                      )}
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 2 }}>
                      {blend.origin         && <DataRow label="Origin"          value={blend.origin} />}
                      {blend.factory        && <DataRow label="Factory"         value={blend.factory} />}
                      {blend.wrapper        && <DataRow label="Wrapper"         value={blend.wrapper} />}
                      {blend.wrapper_process && <DataRow label="Wrapper Process" value={blend.wrapper_process} />}
                      {(blend.binder_1||blend.binder_2||blend.binder) && (
                        <DataRow label="Binder Components" value={[...splitPipeValues(blend.binder||""), cleanText(blend.binder_1||""), cleanText(blend.binder_2||"")].filter(Boolean).join(", ")} />
                      )}
                      {Array.isArray(blend.filler) && blend.filler.length > 0 && (
                        <DataRow label="Filler"  value={blend.filler.join(", ")} />
                      )}
                      {blend.ligero         && <DataRow label="Ligero"          value={blend.ligero} />}
                      {Array.isArray(blend.special_tobacco_flags) && blend.special_tobacco_flags.length > 0 && (
                        <DataRow label="Special Flags" value={blend.special_tobacco_flags.join(", ")} />
                      )}
                      {blend.source_label   && <DataRow label="Data Source"     value={blend.source_label} />}
                    </div>

                    {Array.isArray(blend.why_similar) && blend.why_similar.length > 0 && (
                      <div style={{ marginTop: 8, fontFamily: DS.fontMono, fontSize: 15, color: DS.textMuted, letterSpacing: "0.07em" }}>
                        Similarity basis: {blend.why_similar.join(" · ")}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div style={{ fontFamily: DS.fontMono, fontSize: 16, color: DS.textMuted }}>
                  No structurally similar blends identified in the current database.
                </div>
              )}

              <div style={styles.metaBar}>
                <span style={styles.metaItem}><span style={styles.metaDot} />Structural Match Engine</span>
                <span style={styles.metaItem}>Generated {timestamp}</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </Layout>
  );
}
