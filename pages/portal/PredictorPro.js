import { useState } from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

/* --------------------------
AUTOCOMPLETE UI STYLE
-------------------------- */

const autocompleteBox = {
  position: "absolute",
  background: "#fff",
  border: "1px solid rgba(0,0,0,.1)",
  borderRadius: 8,
  width: "100%",
  zIndex: 50,
  maxHeight: 220,
  overflowY: "auto",
  marginTop: 6,
};

const autocompleteItem = {
  padding: "10px 12px",
  cursor: "pointer",
  borderBottom: "1px solid rgba(0,0,0,.06)",
};

/* --------------------------
DATA CONSTANTS
-------------------------- */

const ORIGINS = [
  "",
  "Cuba",
  "Dominican Republic",
  "Nicaragua",
  "Honduras",
  "Mexico",
  "Costa Rica",
  "Panama",
  "Ecuador",
  "Brazil",
  "Peru",
  "United States",
  "Jamaica",
  "Philippines",
];

const FACTORIES = [
  "",
  "A.CONTI",
  "Abam",
  "Abeja Cigar",
  "Aganorsa",
  "Agio",
  "Agroindustrias",
  "Altadis USA",
  "Augusto Reyes",
  "Barreda",
  "Blackbird Dom",
  "Blanco Cigars",
  "Buena Vista",
  "Caldwell",
  "Camacho Factory",
  "Casa 1910",
  "Charles Fairmorn",
  "CLE",
  "Cortez",
  "D'Hatuey",
  "Dannemann",
  "De Los reyes",
  "Don Palomor",
  "Drew Estate",
  "El Aladino",
  "El Laguito",
  "El Maestro",
  "El Paraiso",
  "El Rey de Los Habanos",
  "El Sueno",
  "El Titan de Bronze",
  "El Viejo",
  "EPC",
  "Fabrica Centroamericana",
  "Fabrica De Tabacos HVC",
  "Fabrica Oveja Negra",
  "Flor de Copan",
  "Garmendia",
  "General Cigar Dominicana",
  "GR Tabacaleras",
  "Graycliff Factory",
  "Gurkha",
  "H. Upmann",
  "HATSA",
  "Honduras american",
  "Horacio",
  "JC Newman",
  "JRE Tobacco",
  "Kelner Boutique",
  "Kristoff Cigars",
  "la Alianza",
  "La Aurora",
  "La Corona",
  "La Flor De Copa",
  "La Zona",
  "Luciano Tabacos",
  "Maya Selva",
  "Meerapfel",
  "MGE",
  "Mi Havana",
  "Micallef",
  "Mina Del Rey",
  "My Father Cigars",
  "Natura",
  "Nica Sueno",
  "Nicaragua American",
  "Oscar Vallardes",
  "Oveja Negra",
  "Padron",
  "Partagas",
  "PDR",
  "Plasencia Cigars",
  "Pure Aroma",
  "Quesada",
  "Raices Cubanas",
  "Rocky Patel",
  "San Lotano",
  "Sanj Patel",
  "Selected Tobacco",
  "ST Group",
  "STG Esteli",
  "Tabacalera Altagracia",
  "Tabacalera AJ Fernandez",
  "Tabacalera Carreras",
  "Tabacalera Cubanas",
  "Tabacalera Davidoff",
  "Tabacalera De Oliva",
  "Tabacalera Diaz",
  "Tabacalera El Artista",
  "Tabacalera Fuente",
  "Tabacalera Garcia",
  "Tabacalera Joya de Nicaragua",
  "Tabacalera Kafie",
  "Tabacalera La Alianza",
  "Tabacalera La Flor",
  "Tabacalera La Isla",
  "Tabacalera Las Lavas",
  "Tabacalera Oveja Negra",
  "Tabacalera Palma",
  "Tabacalera Pichardo",
  "Tabacalera Rocky Patel",
  "Tabacalera Tropical",
  "Tabacalera Villa Cuba",
  "Tabacalera William Ventura",
  "Tabacos De Costa Rica",
  "Tabacos De Exportacion",
  "Tabacos de Valle Jalapa",
  "Tabacos Ranchos",
  "Tabacos Valle de Jalapa",
  "Tabacuba",
  "Tabadom",
  "Tabaos Vale De Jalapa",
  "TABSA",
  "TacaNicsa",
  "TAF",
  "Tavicusa Factory",
  "The Foundation Cigars",
  "Topper",
  "Ventura",
  "Villiger de Nicaragua"
];

const WRAPPERS = [
  "",
  "Cuban",
  "Habano",
  "Nicaraguan Habano",
  "Habano 2000",
  "Dominican",
  "Brazilian",
  "Corojo",
  "Corojo 99",
  "Criollo",
  "Criollo 98",
  "Connecticut Shade",
  "Connecticut Broadleaf",
  "Connecticut Habano",
  "Costarican",
  "Broadleaf",
  "Honduran",
  "San Andres",
  "Cameroon",
  "Sumatra",
  "Ecuadorian Sumatra",
  "Ecuadorian Habano",
  "Ecuadorian Connecticut",
  "Maduro",
  "Oscuro",
  "Rosado",
  "Colorado",
  "Mexican",
  "Pennsylvania Broadleaf",
  "Hybrid / Other",
];

const WRAPPER_PROCESSES = [
  "",
  "Natural",
  "Claro",
  "Colorado",
  "Colorado Claro",
  "Colorado Maduro",
  "Rosado",
  "Maduro",
  "Oscuro",
  "Corojo-processed",
  "Sun Grown",
  "Shade Grown",
  "Double Fermented",
  "Barrel Aged",
  "Other",
];

const WRAPPER_THICKNESS_OPTIONS = ["thin", "medium", "thick"];
const WRAPPER_OILINESS_OPTIONS = ["low", "medium", "high"];

const BINDERS = [
  "",
  "Cuban",
  "Dominican",
  "Nicaraguan",
  "Honduran",
  "Mexican",
  "Brazilian",
  "Peruvian",
  "Cameroon",
  "Costarican",
  "San Andres",
  "Connecticut",
  "Sumatra",
  "Ecuadorian",
  "Broadleaf",
  "Criollo",
  "Corojo",
  "Hybrid / Other",
];

const FILLER_OPTIONS = [
  "",
  "Cuba",
  "Cuban Viso",
  "Alta Viso",
  "Dominican Republic",
  "Nicaragua",
  "Honduras",
  "Mexico",
  "Costa Rica",
  "Panama",
  "Ecuador",
  "Brazil",
  "Peru",
  "Cameroon",
  "Colombia",
  "United States",
  "Piloto Cubano",
  "Olor Dominicano",
  "Corojo",
  "Criollo",
  "Ligero",
  "Ecuadorian Ligero",
  "Cuban Seco",
  "Volado",
  "Medio Tiempo",
  "Zimbabwe",
  "Paraguay",
];

const LIGERO_OPTIONS = ["", "none", "low", "moderate", "high"];

const SPECIAL_TOBACCO_FLAGS_OPTIONS = [
  "",
  "Medio Tiempo",
  "Alta Viso-heavy",
  "Piloto Cubano",
  "Olor Dominicano",
  "Dominican Bonao",
  "Pelo de Oro",
  "Corojo",
  "Criollo",
  "Andullo",
  "Cotui",
  "Yamasa",
  "San Vicente",
  "Somoto",
  "Brazilian Cubra",
  "Brazilian Mata Fina",
  "Brazilian Mata Norte",
  "Brazilian Arapiraca",
  "Masatepe",
  "Ometepe",
  "Pueblo Nuevo",
  "Jamastran",
  "Broadleaf-heavy",
  "San Andres-heavy",
  "SA Negrito",
  "HVA",
  "Jalapa",
  "Filipino Simaba",
  "Vuelta Abajo",
  "Honduran Talanga",
  "Costarican Puriscal",
  "Aged filler",
  "Extra fermented",
  "Culebra style bunching",
  "Small-batch / experimental",
];

const SMOKER_STYLE_OPTIONS = ["both", "slow", "fast"];

const row3Style = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0,1fr))",
  gap: 12,
  marginTop: 8,
};

const EMPTY_LOOKUP_FIELDS = {
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
};

/* --------------------------
COMPONENT
-------------------------- */

export default function PredictorPage() {
  const [brandSuggestions, setBrandSuggestions] = useState([]);
  const [lineSuggestions, setLineSuggestions] = useState([]);
  const [showBrandSuggestions, setShowBrandSuggestions] = useState(false);
  const [showLineSuggestions, setShowLineSuggestions] = useState(false);

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

    /* hidden fields for backend compatibility */
    vitola: "",
    bunch_density: "medium",
  });

  const [usage, setUsage] = useState(null);
  const [validatedEmail, setValidatedEmail] = useState("");
  const [isUserValidated, setIsUserValidated] = useState(false);

  const [result, setResult] = useState(null);
  const [tastingCard, setTastingCard] = useState(null);
  const [pairingCard, setPairingCard] = useState(null);
  const [pairingSelection, setPairingSelection] = useState("None");
  const [similarBlends, setSimilarBlends] = useState(null);
  const [err, setErr] = useState("");

  const [loadingUsage, setLoadingUsage] = useState(false);
  const [loadingPredict, setLoadingPredict] = useState(false);
  const [loadingPairing, setLoadingPairing] = useState(false);
  const [loadingLookup, setLoadingLookup] = useState(false);
  const [loadingSimilar, setLoadingSimilar] = useState(false);

  const [lookupStatus, setLookupStatus] = useState("");
  const [lookupSource, setLookupSource] = useState("");

  const update = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }));
  };

  const cleanText = (value) => {
    return String(value || "")
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[’‘]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/[–—]/g, "-")
      .replace(/\s+/g, " ")
      .trim();
  };

  const isAuthorizedUser =
    isUserValidated &&
    cleanText(validatedEmail).toLowerCase() ===
      cleanText(form.user_email).toLowerCase();

  const hasProAccess =
    isAuthorizedUser && usage?.pro_access === true;

  /* --------------------------
AUTOCOMPLETE
-------------------------- */

  const uniqueByBrand = (items) => {
    const seen = new Set();
    const out = [];

    for (const item of items || []) {
      const brand = cleanText(item.brand);
      const key = brand.toLowerCase();

      if (brand && !seen.has(key)) {
        seen.add(key);
        out.push({ brand, label: brand });
      }
    }

    return out;
  };

  const uniqueLinesForBrand = (items, selectedBrand, q) => {
    const brandKey = cleanText(selectedBrand).toLowerCase();
    const lineQuery = cleanText(q).toLowerCase();
    const seen = new Set();
    const out = [];

    for (const item of items || []) {
      const itemBrand = cleanText(item.brand).toLowerCase();
      const line = cleanText(item.line);
      const lineKey = line.toLowerCase();

      if (!line || itemBrand !== brandKey) continue;
      if (lineQuery && !lineKey.includes(lineQuery)) continue;

      if (!seen.has(lineKey)) {
        seen.add(lineKey);
        out.push({ brand: cleanText(item.brand), line, label: line });
      }
    }

    return out;
  };

  const loadBrandSuggestions = async (q) => {
    const cleaned = cleanText(q);

    if (!cleaned || cleaned.length < 2) {
      setBrandSuggestions([]);
      setShowBrandSuggestions(false);
      return;
    }

    try {
      const res = await fetch(
        `/api/predictor/autocomplete?q=${encodeURIComponent(cleaned)}&limit=100`
      );
      const data = await res.json().catch(() => ({}));

      if (Array.isArray(data?.results)) {
        const brands = uniqueByBrand(data.results).slice(0, 12);
        setBrandSuggestions(brands);
        setShowBrandSuggestions(brands.length > 0);
      } else {
        setBrandSuggestions([]);
        setShowBrandSuggestions(false);
      }
    } catch {
      setBrandSuggestions([]);
      setShowBrandSuggestions(false);
    }
  };

  const loadLineSuggestions = async (brand, q) => {
    const selectedBrand = cleanText(brand);
    const cleanedLine = cleanText(q);

    if (!selectedBrand) {
      setLineSuggestions([]);
      setShowLineSuggestions(false);
      return;
    }

    try {
      const res = await fetch(
        `/api/predictor/autocomplete?q=${encodeURIComponent(selectedBrand)}&limit=250`
      );
      const data = await res.json().catch(() => ({}));

      if (Array.isArray(data?.results)) {
        const lines = uniqueLinesForBrand(data.results, selectedBrand, cleanedLine).slice(0, 20);
        setLineSuggestions(lines);
        setShowLineSuggestions(lines.length > 0);
      } else {
        setLineSuggestions([]);
        setShowLineSuggestions(false);
      }
    } catch {
      setLineSuggestions([]);
      setShowLineSuggestions(false);
    }
  };

  const selectBrandSuggestion = (item) => {
    update("brand", cleanText(item.brand || ""));
    update("line", "");
    setShowBrandSuggestions(false);
    setBrandSuggestions([]);
    setLineSuggestions([]);
    setShowLineSuggestions(false);
  };

  const selectLineSuggestion = (item) => {
    update("line", cleanText(item.line || ""));
    setShowLineSuggestions(false);
    setLineSuggestions([]);
  };

  /* --------------------------
HELPERS
-------------------------- */

  const buildCustomValue = (choice, custom) => {
    if (choice === "Custom / Other" || choice === "Hybrid / Other") {
      return String(custom || "").trim();
    }
    return choice;
  };

  const buildUniqueList = (values) => {
    return [...new Set(values.map((v) => String(v || "").trim()).filter(Boolean))];
  };

  const splitPipeValues = (value) => {
    return String(value || "")
      .split("|")
      .map((x) => cleanText(x))
      .filter(Boolean);
  };

  const mapLookupValue = (value, options) => {
    const v = cleanText(value);
    if (!v) return "";
    return options.includes(v) ? v : "";
  };

  const resetUserValidation = () => {
    setUsage(null);
    setValidatedEmail("");
    setIsUserValidated(false);
    setLookupStatus("");
    setLookupSource("");
  };

  const displayPairingList = (values) => {
    if (!Array.isArray(values) || values.length === 0) return "—";
    return values.filter(Boolean).join(", ") || "—";
  };

  const displayBinderComponents = () => {
    const values = [
      cleanText(buildCustomValue(form.binder_1, form.binder_1_custom)),
      cleanText(buildCustomValue(form.binder_2, form.binder_2_custom)),
    ].filter(Boolean);

    return values.length > 0 ? values.join(", ") : "—";
  };

  const getFilteredPairingCard = () => {
    if (!pairingCard || pairingSelection === "None") {
      return null;
    }

    const normalized = pairingSelection.toLowerCase();

    const mapping = {
      wine: pairingCard.wine,
      whisky: pairingCard.whisky,
      rum: pairingCard.rum,
      cognac: pairingCard.cognac,
      tequila: pairingCard.tequila,
      beer: pairingCard.beer,
      cocktail: pairingCard.cocktails,
    };

    return mapping[normalized] || null;
  };

  const PairingCategoryCard = ({ title, data }) => (
    <div className="card" style={{ marginTop: 0 }}>
      <h4 style={{ marginTop: 0 }}>{title}</h4>

      <div className="small" style={{ lineHeight: 1.8 }}>
        <div>
          <b>Primary:</b>{" "}
          {displayPairingList(data?.primary)}
        </div>
        <div>
          <b>Secondary:</b>{" "}
          {displayPairingList(data?.secondary)}
        </div>
      </div>
    </div>
  );

  const applyLookupMatch = (match) => {
    const cleanedBrand = cleanText(match?.brand);
    const cleanedLine = cleanText(match?.line);

    const cleanedOrigin = mapLookupValue(match?.origin, ORIGINS);
    const cleanedFactory = mapLookupValue(match?.factory, FACTORIES);

    const rawWrapper = cleanText(match?.wrapper);
    const wrapperInList = rawWrapper && WRAPPERS.includes(rawWrapper);

    const binderPipeValues = splitPipeValues(match?.binder);

    const rawBinder1 = cleanText(
      match?.binder_1 ||
        match?.binder1 ||
        match?.primary_binder ||
        binderPipeValues[0] ||
        match?.binder
    );

    const rawBinder2 = cleanText(
      match?.binder_2 ||
        match?.binder2 ||
        match?.secondary_binder ||
        match?.second_binder ||
        binderPipeValues[1] ||
        ""
    );

    const binder1InList = rawBinder1 && BINDERS.includes(rawBinder1);
    const binder2InList = rawBinder2 && BINDERS.includes(rawBinder2);

    const filler = Array.isArray(match?.filler)
      ? match.filler.map(cleanText).filter(Boolean)
      : [];

    const validFillers = filler.filter((x) => FILLER_OPTIONS.includes(x));

    const flags = Array.isArray(match?.special_tobacco_flags)
      ? match.special_tobacco_flags.map(cleanText).filter(Boolean)
      : [];

    const validFlags = flags.filter((x) =>
      SPECIAL_TOBACCO_FLAGS_OPTIONS.includes(x)
    );

    const cleanedLigero = mapLookupValue(match?.ligero, LIGERO_OPTIONS);
    const cleanedWrapperProcess = mapLookupValue(
      match?.wrapper_process,
      WRAPPER_PROCESSES
    );
    const cleanedWrapperThickness = mapLookupValue(
      match?.wrapper_thickness,
      WRAPPER_THICKNESS_OPTIONS
    );
    const cleanedWrapperOiliness = mapLookupValue(
      match?.wrapper_oiliness,
      WRAPPER_OILINESS_OPTIONS
    );

    setForm((f) => ({
      ...f,

      brand: cleanedBrand || f.brand,
      line: cleanedLine || f.line,

      ...EMPTY_LOOKUP_FIELDS,

      origin: cleanedOrigin,
      factory: cleanedFactory,

      wrapper: rawWrapper
        ? (wrapperInList ? rawWrapper : "Hybrid / Other")
        : "",
      wrapper_custom: rawWrapper && !wrapperInList ? rawWrapper : "",
      wrapper_process: cleanedWrapperProcess,
      wrapper_thickness: cleanedWrapperThickness || "medium",
      wrapper_oiliness: cleanedWrapperOiliness || "medium",

      binder_1: rawBinder1
        ? (binder1InList ? rawBinder1 : "Hybrid / Other")
        : "",
      binder_1_custom: rawBinder1 && !binder1InList ? rawBinder1 : "",

      binder_2: rawBinder2
        ? (binder2InList ? rawBinder2 : "Hybrid / Other")
        : "",
      binder_2_custom: rawBinder2 && !binder2InList ? rawBinder2 : "",

      filler_1: validFillers[0] || "",
      filler_2: validFillers[1] || "",
      filler_3: validFillers[2] || "",

      ligero: cleanedLigero || "moderate",

      flag_1: validFlags[0] || "",
      flag_2: validFlags[1] || "",
      flag_3: validFlags[2] || "",
    }));
  };

  const buildPayload = () => ({
    user_email: cleanText(form.user_email),

    brand: cleanText(form.brand),
    line: cleanText(form.line),

    origin: cleanText(form.origin),
    factory: cleanText(form.factory),

    wrapper: cleanText(buildCustomValue(form.wrapper, form.wrapper_custom)),
    wrapper_process: cleanText(form.wrapper_process),
    wrapper_thickness: cleanText(form.wrapper_thickness),
    wrapper_oiliness: cleanText(form.wrapper_oiliness),

    binder: [
      cleanText(buildCustomValue(form.binder_1, form.binder_1_custom)),
      cleanText(buildCustomValue(form.binder_2, form.binder_2_custom)),
    ]
      .filter(Boolean)
      .join("|"),
    binder_1: cleanText(buildCustomValue(form.binder_1, form.binder_1_custom)),
    binder_2: cleanText(buildCustomValue(form.binder_2, form.binder_2_custom)),
    binders: [
      cleanText(buildCustomValue(form.binder_1, form.binder_1_custom)),
      cleanText(buildCustomValue(form.binder_2, form.binder_2_custom)),
    ].filter(Boolean),

    filler: buildUniqueList([
      cleanText(form.filler_1),
      cleanText(form.filler_2),
      cleanText(form.filler_3),
    ]),

    ligero: cleanText(form.ligero),

    special_tobacco_flags: buildUniqueList([
      cleanText(form.flag_1),
      cleanText(form.flag_2),
      cleanText(form.flag_3),
    ]),

    age_years: form.age_years === "" ? null : Number(form.age_years),
    smoker_style: cleanText(form.smoker_style),

    vitola: "",
    bunch_density: "medium",
  });

  /* --------------------------
API CALLS
-------------------------- */

  const loadUsage = async () => {
    setErr("");
    setLoadingUsage(true);
    setUsage(null);
    setLookupStatus("");
    setLookupSource("");

    try {
      const cleanedEmail = cleanText(form.user_email);

      const res = await fetch(
        `/api/predictor/usage?email=${encodeURIComponent(cleanedEmail)}`
      );

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setIsUserValidated(false);
        setValidatedEmail("");
        throw new Error(data.error || data.detail || "Failed to load usage");
      }

      setUsage(data);
      setValidatedEmail(cleanedEmail);
      setIsUserValidated(true);
    } catch (e) {
      setIsUserValidated(false);
      setValidatedEmail("");
      setErr(e.message || "Usage request failed");
    } finally {
      setLoadingUsage(false);
    }
  };

  const lookupBlend = async () => {
    setErr("");
    setLookupSource("");

    if (!isAuthorizedUser) {
      setLookupStatus("Please enter your registered email and press Check User first.");
      return;
    }

    if (!hasProAccess) {
      setLookupStatus("Pro access is not enabled for this account.");
      return;
    }

    const brand = cleanText(form.brand);
    const line = cleanText(form.line);

    if (!brand || !line) {
      setLookupStatus("Enter brand and line first.");
      return;
    }

    setLoadingLookup(true);
    setLookupStatus("Searching ICSI blend database...");

    try {
      const res = await fetch(`/api/predictor/lookup-blend`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_email: cleanText(form.user_email),
          brand,
          line,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok || !data.match) {
        setLookupStatus(data.error || data.detail || "No reliable blend match found.");
        return;
      }

      applyLookupMatch(data.match);
      setLookupSource(data.source?.label || "");
      setLookupStatus("Blend found and applied to the form.");
    } catch {
      setLookupStatus("Lookup failed.");
    } finally {
      setLoadingLookup(false);
    }
  };

  const loadTastingCard = async (brand, line) => {
    try {
      const res = await fetch(`/api/predictor/tasting-card`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_email: cleanText(form.user_email),
          brand: cleanText(brand),
          line: cleanText(line),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok || !data.tasting_card) {
        setTastingCard(null);
        return;
      }

      setTastingCard(data.tasting_card);
    } catch {
      setTastingCard(null);
    }
  };

  const loadPairingCard = async (predictionData) => {
    const family = cleanText(
      predictionData?.family ||
        predictionData?.rh_family ||
        predictionData?.cps_family ||
        predictionData?.peak_flavor_family ||
        predictionData?.cigar_peak_flavor_system_family
    );

    if (!family) {
      setPairingCard(null);
      setErr("Pairing card failed: prediction response did not include an RH family.");
      return;
    }

    setLoadingPairing(true);

    try {
      const payload = {
        ...buildPayload(),
        family,
      };

      const res = await fetch(`/api/predictor/pairing-card`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok || !data.pairing_card) {
        setPairingCard(null);

        if (pairingSelection !== "None") {
          setErr(
            data.error ||
              data.detail ||
              `Pairing card failed with status ${res.status}.`
          );
        }

        return;
      }

      setPairingCard(data.pairing_card);
    } catch (e) {
      setPairingCard(null);

      if (pairingSelection !== "None") {
        setErr(e.message || "Pairing card request failed.");
      }
    } finally {
      setLoadingPairing(false);
    }
  };

  const runPrediction = async () => {
    setErr("");

    if (!isAuthorizedUser) {
      setErr("Please enter your registered email and press Check User first.");
      return;
    }

    if (!hasProAccess) {
      setErr("Pro access is not enabled for this account.");
      return;
    }

    setLoadingPredict(true);
    setResult(null);
    setTastingCard(null);
    setPairingCard(null);
    setSimilarBlends(null);

    const cleanedBrand = cleanText(form.brand);
    const cleanedLine = cleanText(form.line);

    try {
      const res = await fetch(`/api/predictor/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload()),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || data.detail || "Prediction failed");
      }

      setResult(data);
      await loadUsage();
      await loadTastingCard(cleanedBrand, cleanedLine);
      await loadPairingCard(data);
    } catch (e) {
      setErr(e.message || "Prediction request failed");
    } finally {
      setLoadingPredict(false);
    }
  };

  const findSimilarBlends = async () => {
    setErr("");

    if (!isAuthorizedUser) {
      setErr("Please enter your registered email and press Check User first.");
      return;
    }

    if (!hasProAccess) {
      setErr("Pro access is not enabled for this account.");
      return;
    }

    setLoadingSimilar(true);
    setSimilarBlends(null);
    setResult(null);
    setTastingCard(null);
    setPairingCard(null);

    try {
      const res = await fetch(`/api/predictor/similar-blends`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload()),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        throw new Error(data.error || data.detail || "Similar blends lookup failed");
      }

      setSimilarBlends(data);
      await loadUsage();
    } catch (e) {
      setErr(e.message || "Similar blends request failed");
    } finally {
      setLoadingSimilar(false);
    }
  };

  /* --------------------------
UI
-------------------------- */

  return (
    <Layout>
      <Seo title="Predictor Pro | ICSI" path="/portal/predictorpro" />

      <div className="section">
        <div className="container" style={{ maxWidth: 980 }}>
          <h1>Cigar Peak-Flavor Predictor (beta)</h1>

          <label>
            Instructions: Predictor Pro is available exclusively to approved
            subscribers. Enter your registered email address and press the "Check
            User" button to access the platform. In the Cigar Blend Lookup section,
            enter the blend Brand and Line, then press the "Lookup Blend" button.
            The blend's construction and tobacco composition details will
            automatically populate below.
            <br />
            <br />
            Predictor Pro allows you to manually adjust the autofilled blend
            details using the dropdown menus before running the prediction. These
            adjustable fields include wrapper, wrapper process, wrapper thickness,
            wrapper oiliness, binder components, filler components, ligero level, special
            tobacco flags, blend age, and smoker style.
            <br />
            <br />
            Before running the prediction, you may optionally select a beverage
            category from the "Pairing" dropdown menu. Available categories include
            Wine, Whisky, Rum, Cognac, Tequila, Beer, and Cocktail. If "None" is
            selected, the application will only generate the peak-flavor prediction
            result and tasting card.
            <br />
            <br />
            By pressing the "Run Predictor" button, the application will generate
            the blend's optimal smoking leaf-level relative humidity %, together
            with a professional tasting card describing the predicted palate,
            retrohale, texture, and finish characteristics at peak-flavor
            equilibrium. If a pairing category has been selected, the application
            will also generate a dedicated pairing card for that selected beverage
            category only.
            <br />
            <br />
            By pressing the "Find Similar Blends" button, the application will
            identify and display the cigar blends that most closely match the
            selected blend's structural and sensory profile.
            <br />
            <strong>Important note</strong>: Leaf-level relative humidity % is measured using a
            commercially available Cigar Humidity Meter.
          </label>

          {/* USER */}
          <div className="card" style={{ marginTop: 16 }}>
            <h3>User Login</h3>

            <label>Email</label>
            <input
              value={form.user_email}
              placeholder="Enter your subscription email"
              onChange={(e) => {
                update("user_email", e.target.value);
                resetUserValidation();
              }}
            />

            <div className="ctaRow" style={{ marginTop: 12 }}>
              <button className="btn" onClick={loadUsage} disabled={loadingUsage}>
                {loadingUsage ? "Loading..." : "Check User"}
              </button>
            </div>

            {!isAuthorizedUser && (
              <div className="small" style={{ marginTop: 10 }}>
                Please check your registered email first to enable Predictor Pro.
              </div>
            )}

            {isAuthorizedUser && !hasProAccess && (
              <div className="notice" style={{ marginTop: 12 }}>
                <b>Pro access is not enabled for this account.</b>
                <br />
                Please contact ICSI to activate Predictor Pro.
              </div>
            )}

            {usage && (
              <div className="small" style={{ marginTop: 12, lineHeight: 1.8 }}>
                <div>
                  Tier: <b>{usage.tier}</b>
                </div>
                <div>
                  Pro Access: <b>{usage.pro_access ? "Yes" : "No"}</b>
                </div>
                <div>
                  Annual: <b>{usage.runs_used}</b> used / <b>{usage.annual_limit}</b>
                </div>
                <div>
                  Remaining: <b>{usage.runs_remaining}</b>
                </div>
                <div>
                  Today: <b>{usage.daily_used}</b> used / <b>{usage.daily_limit}</b>
                </div>
                <div>
                  Daily remaining: <b>{usage.daily_remaining}</b>
                </div>
                <div>
                  Period: <b>{usage.period_start}</b> → <b>{usage.period_end}</b>
                </div>
              </div>
            )}
          </div>

          {/* CIGAR IDENTITY */}
          <div className="card" style={{ marginTop: 16 }}>
            <h3>Cigar Blend Lookup</h3>

            <div className="row2">
              <div style={{ position: "relative" }}>
                <label>Brand</label>
                <input
                  value={form.brand}
                  placeholder="Start typing brand..."
                  autoComplete="off"
                  onFocus={() => loadBrandSuggestions(form.brand)}
                  onChange={(e) => {
                    const value = e.target.value;
                    update("brand", value);
                    update("line", "");
                    setLineSuggestions([]);
                    setShowLineSuggestions(false);
                    loadBrandSuggestions(value);
                  }}
                  onBlur={() => {
                    setTimeout(() => setShowBrandSuggestions(false), 150);
                  }}
                />

                {showBrandSuggestions && brandSuggestions.length > 0 && (
                  <div style={autocompleteBox}>
                    {brandSuggestions.map((s, i) => (
                      <div
                        key={`${s.brand}-${i}`}
                        style={autocompleteItem}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          selectBrandSuggestion(s);
                        }}
                      >
                        {s.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div style={{ position: "relative" }}>
                <label>Line</label>
                <input
                  value={form.line}
                  autoComplete="off"
                  disabled={!cleanText(form.brand)}
                  onFocus={() => loadLineSuggestions(form.brand, form.line)}
                  onChange={(e) => {
                    const value = e.target.value;
                    update("line", value);
                    loadLineSuggestions(form.brand, value);
                  }}
                  onBlur={() => {
                    setTimeout(() => setShowLineSuggestions(false), 150);
                  }}
                  placeholder={
                    cleanText(form.brand)
                      ? "Start typing line..."
                      : "Select brand first"
                  }
                />

                {showLineSuggestions && lineSuggestions.length > 0 && (
                  <div style={autocompleteBox}>
                    {lineSuggestions.map((s, i) => (
                      <div
                        key={`${s.brand}-${s.line}-${i}`}
                        style={autocompleteItem}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          selectLineSuggestion(s);
                        }}
                      >
                        {s.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div
              style={{
                marginTop: 14,
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <button
                className="btn"
                type="button"
                onClick={lookupBlend}
                disabled={loadingLookup || !hasProAccess}
              >
                {loadingLookup ? "Searching..." : "Lookup Blend"}
              </button>

              {lookupStatus && (
                <span className="small" style={{ lineHeight: 1.4 }}>
                  {lookupStatus}
                </span>
              )}
            </div>

            {lookupSource && (
              <p className="small" style={{ marginTop: 8 }}>
                Source: <b>{lookupSource}</b>
              </p>
            )}

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Origin</label>
                <select
                  value={form.origin}
                  onChange={(e) => update("origin", e.target.value)}
                >
                  {ORIGINS.map((x) => (
                    <option key={x || "blank-origin"} value={x}>
                      {x || "Select origin"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>Factory</label>
                <select
                  value={form.factory}
                  onChange={(e) => update("factory", e.target.value)}
                >
                  {FACTORIES.map((x) => (
                    <option key={x || "blank-factory"} value={x}>
                      {x || "Select factory"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* BLEND CONSTRUCTION */}
          <div className="card" style={{ marginTop: 16 }}>
            <h3>Blend Details: Autofilled &amp; Adjustable</h3>

            <div className="row2">
              <div>
                <label>Wrapper</label>
                <select
                  value={form.wrapper}
                  onChange={(e) => update("wrapper", e.target.value)}
                >
                  {WRAPPERS.map((x) => (
                    <option key={x || "blank-wrapper"} value={x}>
                      {x || "Select wrapper"}
                    </option>
                  ))}
                </select>

                {form.wrapper === "Hybrid / Other" && (
                  <>
                    <label style={{ marginTop: 10, display: "block" }}>
                      Custom Wrapper
                    </label>
                    <input
                      value={form.wrapper_custom}
                      onChange={(e) => update("wrapper_custom", e.target.value)}
                      placeholder="e.g. Ecuador Hybrid"
                    />
                  </>
                )}
              </div>

              <div>
                <label>Wrapper Process</label>
                <select
                  value={form.wrapper_process}
                  onChange={(e) => update("wrapper_process", e.target.value)}
                >
                  {WRAPPER_PROCESSES.map((x) => (
                    <option key={x || "blank-wrapper-process"} value={x}>
                      {x || "Select wrapper process"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Wrapper Thickness</label>
                <select
                  value={form.wrapper_thickness}
                  onChange={(e) => update("wrapper_thickness", e.target.value)}
                >
                  {WRAPPER_THICKNESS_OPTIONS.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>Wrapper Oiliness</label>
                <select
                  value={form.wrapper_oiliness}
                  onChange={(e) => update("wrapper_oiliness", e.target.value)}
                >
                  {WRAPPER_OILINESS_OPTIONS.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Binder 1</label>
                <select
                  value={form.binder_1}
                  onChange={(e) => update("binder_1", e.target.value)}
                >
                  {BINDERS.map((x) => (
                    <option key={x || "blank-binder-1"} value={x}>
                      {x || "Select binder 1"}
                    </option>
                  ))}
                </select>

                {form.binder_1 === "Hybrid / Other" && (
                  <>
                    <label style={{ marginTop: 10, display: "block" }}>
                      Custom Binder 1
                    </label>
                    <input
                      value={form.binder_1_custom}
                      onChange={(e) => update("binder_1_custom", e.target.value)}
                      placeholder="e.g. Ecuador Hybrid"
                    />
                  </>
                )}
              </div>

              <div>
                <label>Binder 2</label>
                <select
                  value={form.binder_2}
                  onChange={(e) => update("binder_2", e.target.value)}
                >
                  {BINDERS.map((x) => (
                    <option key={x || "blank-binder-2"} value={x}>
                      {x || "Select binder 2"}
                    </option>
                  ))}
                </select>

                {form.binder_2 === "Hybrid / Other" && (
                  <>
                    <label style={{ marginTop: 10, display: "block" }}>
                      Custom Binder 2
                    </label>
                    <input
                      value={form.binder_2_custom}
                      onChange={(e) => update("binder_2_custom", e.target.value)}
                      placeholder="e.g. Ecuador Hybrid"
                    />
                  </>
                )}
              </div>
            </div>

            <div className="row2" style={{ marginTop: 10 }}>
              <div>
                <label>Ligero</label>
                <select
                  value={form.ligero}
                  onChange={(e) => update("ligero", e.target.value)}
                >
                  {LIGERO_OPTIONS.map((x) => (
                    <option key={x || "blank-ligero"} value={x}>
                      {x || "Select ligero level"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
              <label>Filler Components</label>
              <div style={row3Style}>
                <div>
                  <label className="small" style={{ display: "block", marginBottom: 6 }}>
                    Filler 1
                  </label>
                  <select
                    value={form.filler_1}
                    onChange={(e) => update("filler_1", e.target.value)}
                  >
                    {FILLER_OPTIONS.map((x) => (
                      <option key={`f1-${x || "blank"}`} value={x}>
                        {x || "Select filler"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="small" style={{ display: "block", marginBottom: 6 }}>
                    Filler 2
                  </label>
                  <select
                    value={form.filler_2}
                    onChange={(e) => update("filler_2", e.target.value)}
                  >
                    {FILLER_OPTIONS.map((x) => (
                      <option key={`f2-${x || "blank"}`} value={x}>
                        {x || "Select filler"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="small" style={{ display: "block", marginBottom: 6 }}>
                    Filler 3
                  </label>
                  <select
                    value={form.filler_3}
                    onChange={(e) => update("filler_3", e.target.value)}
                  >
                    {FILLER_OPTIONS.map((x) => (
                      <option key={`f3-${x || "blank"}`} value={x}>
                        {x || "Select filler"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 14 }}>
              <label>Special Tobacco Flags</label>
              <div style={row3Style}>
                <div>
                  <label className="small" style={{ display: "block", marginBottom: 6 }}>
                    Flag 1
                  </label>
                  <select
                    value={form.flag_1}
                    onChange={(e) => update("flag_1", e.target.value)}
                  >
                    {SPECIAL_TOBACCO_FLAGS_OPTIONS.map((x) => (
                      <option key={`flag1-${x || "blank"}`} value={x}>
                        {x || "Select flag"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="small" style={{ display: "block", marginBottom: 6 }}>
                    Flag 2
                  </label>
                  <select
                    value={form.flag_2}
                    onChange={(e) => update("flag_2", e.target.value)}
                  >
                    {SPECIAL_TOBACCO_FLAGS_OPTIONS.map((x) => (
                      <option key={`flag2-${x || "blank"}`} value={x}>
                        {x || "Select flag"}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="small" style={{ display: "block", marginBottom: 6 }}>
                    Flag 3
                  </label>
                  <select
                    value={form.flag_3}
                    onChange={(e) => update("flag_3", e.target.value)}
                  >
                    {SPECIAL_TOBACCO_FLAGS_OPTIONS.map((x) => (
                      <option key={`flag3-${x || "blank"}`} value={x}>
                        {x || "Select flag"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* SMOKING PROFILE */}
          <div className="card" style={{ marginTop: 16 }}>
            <h3>Optional Input: Blend Age &amp; Smoking Style</h3>

            <div className="row2">
              <div>
                <label>Age (years)</label>
                <input
                  type="number"
                  min="0"
                  step="0.5"
                  value={form.age_years}
                  onChange={(e) => update("age_years", e.target.value)}
                />
              </div>

              <div>
                <label>Smoker Style</label>
                <select
                  value={form.smoker_style}
                  onChange={(e) => update("smoker_style", e.target.value)}
                >
                  {SMOKER_STYLE_OPTIONS.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div
              style={{
                marginTop: 16,
                marginBottom: 12,
                maxWidth: 320,
              }}
            >
              <label>Pairing</label>

              <select
                value={pairingSelection}
                onChange={(e) => setPairingSelection(e.target.value)}
              >
                <option value="None">None</option>
                <option value="Wine">Wine</option>
                <option value="Whisky">Whisky</option>
                <option value="Rum">Rum</option>
                <option value="Cognac">Cognac</option>
                <option value="Tequila">Tequila</option>
                <option value="Beer">Beer</option>
                <option value="Cocktail">Cocktail</option>
              </select>
            </div>

            <div
              className="ctaRow"
              style={{
                marginTop: 16,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <button
                className="btn primary"
                onClick={runPrediction}
                disabled={loadingPredict || !hasProAccess}
                type="button"
              >
                {loadingPredict ? "Running..." : "Run Predictor"}
              </button>

              <button
                className="btn"
                onClick={findSimilarBlends}
                disabled={loadingSimilar || !hasProAccess}
                type="button"
              >
                {loadingSimilar ? "Searching..." : "Find Similar Blends"}
              </button>
            </div>
          </div>

          {err && (
            <div className="notice" style={{ marginTop: 16 }}>
              <b>Error:</b> {err}
            </div>
          )}

          {result && (
            <div className="card" style={{ marginTop: 16 }}>
              <h3>Blend Peak-Flavor Prediction Result</h3>

              <div className="small" style={{ lineHeight: 1.8 }}>
                <div>
                  Cigar Peak-Flavor System Family: <b>{result.family}</b>
                </div>
                <div>
                  Target Smoking Core Relative Humidity % (measured with Cigar Humidity Meter):{" "}
                  <b>{result.target_rh}</b>
                </div>
                <div>
                  Smoking Core Relative Humidity % Window: <b>{result.window_low}</b> to{" "}
                  <b>{result.window_high}</b>
                </div>
                <div>
                  Runs used: <b>{result.runs_used}</b>
                </div>
                <div>
                  Runs remaining: <b>{result.runs_remaining}</b>
                </div>
                <div>
                  Daily used: <b>{result.daily_used}</b>
                </div>
                <div>
                  Daily remaining: <b>{result.daily_remaining}</b>
                </div>
              </div>

              <hr className="sep" />

              {tastingCard && (
                <>
                  <hr className="sep" />

                  <h3>Tasting Card</h3>

                  <div className="row2" style={{ marginTop: 12 }}>
                    <div className="card" style={{ marginTop: 0 }}>
                      <h4 style={{ marginTop: 0 }}>Palate</h4>

                      <div className="small" style={{ lineHeight: 1.8 }}>
                        <div>
                          <b>Primary:</b>{" "}
                          {(tastingCard?.palate?.primary || []).join(", ") || "—"}
                        </div>
                        <div>
                          <b>Secondary:</b>{" "}
                          {(tastingCard?.palate?.secondary || []).join(", ") || "—"}
                        </div>
                        <div>
                          <b>Texture:</b>{" "}
                          {(tastingCard?.palate?.texture || []).join(", ") || "—"}
                        </div>
                        <div>
                          <b>Finish:</b>{" "}
                          {(tastingCard?.palate?.finish || []).join(", ") || "—"}
                        </div>
                      </div>
                    </div>

                    <div className="card" style={{ marginTop: 0 }}>
                      <h4 style={{ marginTop: 0 }}>Retrohale</h4>

                      <div className="small" style={{ lineHeight: 1.8 }}>
                        <div>
                          <b>Primary:</b>{" "}
                          {(tastingCard?.retrohale?.primary || []).join(", ") || "—"}
                        </div>
                        <div>
                          <b>Secondary:</b>{" "}
                          {(tastingCard?.retrohale?.secondary || []).join(", ") || "—"}
                        </div>
                        <div>
                          <b>Finish:</b>{" "}
                          {(tastingCard?.retrohale?.finish || []).join(", ") || "—"}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {loadingPairing && pairingSelection !== "None" && (
                <>
                  <hr className="sep" />
                  <div className="small">Loading pairing card...</div>
                </>
              )}

              {pairingCard && pairingSelection !== "None" && (
                <>
                  <hr className="sep" />

                  <h3>{pairingSelection} Pairing Card</h3>

                  <div
                    style={{
                      marginTop: 12,
                      maxWidth: 760,
                    }}
                  >
                    {getFilteredPairingCard() ? (
                      <PairingCategoryCard
                        title={pairingSelection}
                        data={getFilteredPairingCard()}
                      />
                    ) : (
                      <div className="small">
                        No {pairingSelection.toLowerCase()} pairing data was returned for this blend.
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          )}

          {similarBlends && (
            <div className="card" style={{ marginTop: 16 }}>
              <h3>Similar Blends</h3>

              {Array.isArray(similarBlends.results) && similarBlends.results.length > 0 ? (
                <div className="small" style={{ lineHeight: 1.8 }}>
                  {similarBlends.results.map((blend, idx) => (
                    <div
                      key={`${blend.brand || "brand"}-${blend.line || "line"}-${idx}`}
                      style={{
                        padding: "12px 0",
                        borderBottom:
                          idx === similarBlends.results.length - 1
                            ? "none"
                            : "1px solid rgba(0,0,0,.08)",
                      }}
                    >
                      <div>
                        <b>{blend.brand || "Unknown Brand"}</b>
                        {blend.line ? ` — ${blend.line}` : ""}
                      </div>

                      {blend.similarity_score != null && (
                        <div>
                          Similarity score: <b>{blend.similarity_score}%</b>
                        </div>
                      )}

                      {Array.isArray(blend.why_similar) &&
                        blend.why_similar.length > 0 && (
                          <div>Why similar: {blend.why_similar.join(", ")}</div>
                        )}

                      {blend.origin && <div>Origin: {blend.origin}</div>}
                      {blend.factory && <div>Factory: {blend.factory}</div>}
                      {blend.wrapper && <div>Wrapper: {blend.wrapper}</div>}
                      {blend.wrapper_process && (
                        <div>Wrapper process: {blend.wrapper_process}</div>
                      )}
                      {(blend.binder_1 || blend.binder_2 || blend.binder) && (
                        <div>
                          Binder Components:{" "}
                          {[
                            ...splitPipeValues(blend.binder || ""),
                            cleanText(blend.binder_1 || ""),
                            cleanText(blend.binder_2 || ""),
                          ]
                            .filter(Boolean)
                            .join(", ")}
                        </div>
                      )}

                      {Array.isArray(blend.filler) && blend.filler.length > 0 && (
                        <div>Filler: {blend.filler.join(", ")}</div>
                      )}

                      {blend.ligero && <div>Ligero: {blend.ligero}</div>}

                      {Array.isArray(blend.special_tobacco_flags) &&
                        blend.special_tobacco_flags.length > 0 && (
                          <div>Flags: {blend.special_tobacco_flags.join(", ")}</div>
                        )}

                      {blend.source_label && <div>Source: {blend.source_label}</div>}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="small">No similar blends found.</div>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
