import Link from "next/link";

export default function ArticuloPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>📝 Artículo: {params.slug}</h1>
      <p>Este es el contenido del artículo "{params.slug}".</p>

      <Link href="/blog">⬅️ Volver al Blog</Link>
    </div>
  );
}
