import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Actividad 3 - Enrutamiento",
  description: "Práctica de rutas con App Router en Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ fontFamily: "sans-serif", padding: 20 }}>
        {/* 🧭 Menú de navegación principal */}
        <nav style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
          <Link href="/">Inicio</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        {/* 📄 Aquí se renderizan las páginas */}
        <main>{children}</main>
      </body>
    </html>
  );
}
