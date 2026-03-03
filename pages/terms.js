import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

export default function Terms() {
  const { locale } = useRouter();
  const lang = (locale || "en").toLowerCase();

  const copy = {
    en: {
      title: "Terms & Program Conditions",
      body:
        "All CSI materials, frameworks, and proprietary methodologies (including the Scientific Peak-Flavor System™) are protected intellectual property. No content may be copied, recorded, redistributed, or reproduced without written authorization. Program structures, admissions criteria, and pricing are subject to change at the discretion of the Institute.",
      seoTitle:
        "Terms & Conditions | International Cigar Sommelier Institute",
      seoDescription:
        "Review the official Terms & Program Conditions of the International Cigar Sommelier Institute (ICSI). All materials are protected intellectual property.",
    },
    fr: {
      title: "Conditions & Règlement des Programmes",
      body:
        "Tous les supports, cadres méthodologiques et approches propriétaires de CSI (y compris le Scientific Peak-Flavor System™) constituent une propriété intellectuelle protégée. Toute reproduction, enregistrement ou redistribution est interdite sans autorisation écrite. Les programmes, critères d’admission et tarifs peuvent être modifiés à la discrétion de l’Institut.",
      seoTitle:
        "Conditions & Règlement | International Cigar Sommelier Institute",
      seoDescription:
        "Consultez les conditions officielles de l’International Cigar Sommelier Institute (ICSI). Les contenus et