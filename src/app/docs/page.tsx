import Link from "next/link";

export default function DocsHome() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Documentación</h1>
      <p>Bienvenido a la documentación. Explora las secciones disponibles:</p>

      <ul>
        <li>
          <Link href="/docs/guia/instalacion">Guía de instalación</Link>
        </li>
        <li>
          <Link href="/docs/api/componentes">Documentación de componentes</Link>
        </li>
        <li>
          <Link href="/docs/ejemplos">Ejemplos y tutoriales</Link>
        </li>
      </ul>
    </div>
  );
}
