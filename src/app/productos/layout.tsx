import Link from "next/link";

export const metadata = {
  title: "Sección de Productos",
};

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>🛒 Sección de Productos</h1>

      {/* 🔗 Navegación secundaria */}
      <nav style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
        <Link href="/productos/electronicos">Electrónicos</Link>
        <Link href="/productos/ropa">Ropa</Link>
      </nav>

      {/* 📦 Aquí se muestran las páginas hijas */}
      <div>{children}</div>
    </section>
  );
}
