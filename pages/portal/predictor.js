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
  marginTop: 6
};

const autocompleteItem = {
  padding: "10px 12px",
  cursor: "pointer",
  borderBottom: "1px solid rgba(0,0,0,.06)"
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
  "El Laguito",
  "H. Upmann",
  "Partagas",
  "La Corona",
  "TABACUBA",
  "My Father Cigars",
  "Tabacalera Garcia",
  "General Cigar Dominicana",
  "La Aurora",
  "La Flor Dominicana",
  "Quesada Cigars",
  "Tabacalera AJ Fernandez",
  "Plasencia Cigars",
  "Joya de Nicaragua",
  "Oliva Cigar Co.",
  "PDR Cigars",
  "Davidoff",
  "Tabadom",
  "Tabacos de Costa Rica",
  "Unknown / Mixed",
];

const WRAPPERS = [
  "",
  "Cuban",
  "Habano",
  "Nicaraguan Habano",
  "Habano 2000",
  "Corojo",
  "Corojo 99",
  "Criollo",
  "Criollo 98",
  "Connecticut Shade",
  "Connecticut Broadleaf",
  "Broadleaf",
  "San Andrés",
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
  "San Andrés",
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
  "Piloto Cubano",
  "Olor Dominicano",
  "Corojo",
  "Criollo",
  "Ligero",
  "Seco",
  "Volado",
  "Medio Tiempo",
];

const LIGERO_OPTIONS = ["", "none", "low", "moderate", "high"];

const SPECIAL_TOBACCO_FLAGS_OPTIONS = [
  "",
  "Medio Tiempo",
  "Piloto Cubano",
  "Olor Dominicano",
  "Corojo",
  "Criollo",
  "Andullo",
  "Broadleaf-heavy",
  "San Andrés-heavy",
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
  marginTop: 8
};

/* --------------------------
COMPONENT
-------------------------- */

export default function PredictorPage() {

  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);

  const [form,setForm] = useState({

    user_email:"",
    brand:"",
    line:"",

    origin:"",
    factory:"",

    wrapper:"",
    wrapper_custom:"",
    wrapper_process:"",
    wrapper_thickness:"medium",
    wrapper_oiliness:"medium",

    binder:"",
    binder_custom:"",

    filler_1:"",
    filler_2:"",
    filler_3:"",

    ligero:"moderate",

    flag_1:"",
    flag_2:"",
    flag_3:"",

    age_years:"",
    smoker_style:"both",

    /* hidden fields for backend compatibility */

    vitola:"",
    bunch_density:"medium"
  });

  const [usage,setUsage] = useState(null);
  const [result,setResult] = useState(null);
  const [err,setErr] = useState("");

  const [loadingUsage,setLoadingUsage] = useState(false);
  const [loadingPredict,setLoadingPredict] = useState(false);
  const [loadingLookup,setLoadingLookup] = useState(false);

  const [lookupStatus,setLookupStatus] = useState("");
  const [lookupSource,setLookupSource] = useState("");

  const update = (key,value) => {
    setForm(f => ({...f,[key]:value}));
  };

  /* --------------------------
AUTOCOMPLETE
-------------------------- */

  const loadSuggestions = async(q)=>{

    if(!q || q.length < 2){
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    try{

      const res = await fetch(`/api/predictor/autocomplete?q=${encodeURIComponent(q)}`);
      const data = await res.json();

      if(data?.results){

        setSuggestions(data.results);
        setShowSuggestions(true);
      }

    }catch{}
  };

  const selectSuggestion = (item)=>{

    update("brand",item.brand);
    update("line",item.line);

    setShowSuggestions(false);
  };

  /* --------------------------
HELPERS
-------------------------- */

  const buildCustomValue = (choice,custom)=>{

    if(choice === "Custom / Other" || choice === "Hybrid / Other"){

      return String(custom||"").trim();
    }

    return choice;
  };

  const buildUniqueList = (values)=>{

    return [...new Set(values.map(v=>String(v||"").trim()).filter(Boolean))];
  };

  const buildPayload = ()=>({

    user_email:String(form.user_email||"").trim(),

    brand:String(form.brand||"").trim(),
    line:String(form.line||"").trim(),

    origin:form.origin,
    factory:form.factory,

    wrapper:buildCustomValue(form.wrapper,form.wrapper_custom),
    wrapper_process:form.wrapper_process,
    wrapper_thickness:form.wrapper_thickness,
    wrapper_oiliness:form.wrapper_oiliness,

    binder:buildCustomValue(form.binder,form.binder_custom),

    filler:buildUniqueList([
      form.filler_1,
      form.filler_2,
      form.filler_3
    ]),

    ligero:form.ligero,

    special_tobacco_flags:buildUniqueList([
      form.flag_1,
      form.flag_2,
      form.flag_3
    ]),

    age_years:form.age_years === "" ? null : Number(form.age_years),
    smoker_style:form.smoker_style,

    vitola:"",
    bunch_density:"medium"
  });

/* --------------------------
API CALLS
-------------------------- */

const loadUsage = async()=>{

setErr("");
setLoadingUsage(true);
setUsage(null);

try{

const res = await fetch(`/api/predictor/usage?email=${encodeURIComponent(form.user_email)}`);

const data = await res.json();

if(!res.ok) throw new Error(data.error || data.detail);

setUsage(data);

}catch(e){

setErr(e.message);

}

finally{

setLoadingUsage(false);
}
};

const runPrediction = async()=>{

setErr("");
setLoadingPredict(true);
setResult(null);

try{

const res = await fetch(`/api/predictor/predict`,{

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(buildPayload())
});

const data = await res.json();

if(!res.ok) throw new Error(data.error || data.detail);

setResult(data);

await loadUsage();

}catch(e){

setErr(e.message);

}

finally{

setLoadingPredict(false);
}
};

/* --------------------------
UI
-------------------------- */

return(

<Layout>

<Seo title="Predictor | ICSI" path="/portal/predictor"/>

<div className="section">
<div className="container" style={{maxWidth:980}}>

<h1>Predictor Prototype</h1>

{/* USER */}

<div className="card" style={{marginTop:16}}>

<h3>User</h3>

<label>Email</label>

<input
value={form.user_email}
placeholder="Enter your subscription email"
onChange={(e)=>update("user_email",e.target.value)}
/>

<div className="ctaRow" style={{marginTop:12}}>

<button className="btn" onClick={loadUsage} disabled={loadingUsage}>
{loadingUsage ? "Loading..." : "Check usage"}
</button>

</div>

</div>

{/* CIGAR IDENTITY */}

<div className="card" style={{marginTop:16}}>

<h3>Cigar Identity</h3>

<div className="row2">

<div style={{position:"relative"}}>

<label>Brand</label>

<input
value={form.brand}
placeholder="Start typing brand..."
onChange={(e)=>{

update("brand",e.target.value);
loadSuggestions(e.target.value);

}}
/>

{showSuggestions && suggestions.length>0 &&(

<div style={autocompleteBox}>

{suggestions.map((s,i)=>(
<div key={i}
style={autocompleteItem}
onClick={()=>selectSuggestion(s)}
>

{s.label}

</div>
))}

</div>
)}

</div>

<div>

<label>Line</label>

<input
value={form.line}
onChange={(e)=>update("line",e.target.value)}
placeholder="e.g. No. 2"
/>

</div>

</div>

</div>

{/* RUN */}

<div className="card" style={{marginTop:16}}>

<button
className="btn primary"
onClick={runPrediction}
disabled={loadingPredict}
>

{loadingPredict ? "Running..." : "Run Predictor"}

</button>

</div>

{err && (

<div className="notice" style={{marginTop:16}}>
<b>Error:</b> {err}
</div>

)}

{result && (

<div className="card" style={{marginTop:16}}>

<h3>Prediction Result</h3>

<p>{result.report_summary}</p>

</div>

)}

</div>
</div>

</Layout>
);
}