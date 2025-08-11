import React from "react";
import "./estiloCriaSeuSite.css";

export default function Conheca({ titulo }) {
  return (
    <section className="section-conheca">
      <h3 className="h1-criaseusite">{titulo}</h3>
    </section>
  );
}
