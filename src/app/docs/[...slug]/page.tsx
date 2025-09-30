import Link from "next/link";

export default function DocsPage({ params }: { params: { slug?: string[] } }) {
  const segmentos = params.slug || []; // Si no hay segmentos, devuelve un array vacío
  const ruta = segmentos.join(" > "); // Convierte ["guia", "instalacion"] en "guia > instalacion"

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Documentación</h1>

      {segmentos.length === 0 ? (
        <p>Bienvenido a la documentación. Selecciona una sección para comenzar.</p>
      ) : (
        <>
          <h2>📁 Sección actual: {ruta}</h2>
          <p>Estás viendo la documentación de: {ruta}</p>
        </>
      )}

      {/* Breadcrumbs simples */}
      <nav style={{ marginTop: "20px", fontSize: "14px" }}>
        <strong>Breadcrumbs:</strong>{" "}
        {["Docs", ...segmentos].join(" > ")}
      </nav>

      {/* Enlace de vuelta */}
      <div style={{ marginTop: "20px" }}>
        <Link href="/docs">⬅️ Volver a la página principal de Docs</Link>
      </div>
    </div>
  );
}
