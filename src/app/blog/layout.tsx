import Link from "next/link";

export const metadata = {
  title: "Sección de Blog",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>📝 Sección de Blog</h1>

      {/* 🔗 Navegación secundaria */}
      <nav style={{ display: "flex", gap: "20px", margin: "20px 0" }}>
        <Link href="/blog">Inicio del Blog</Link>
        <Link href="/blog/introduccion-nextjs">Artículo Destacado</Link>
      </nav>

      {/* 📄 Aquí van las páginas del blog */}
      <div>{children}</div>
    </section>
  );
}
