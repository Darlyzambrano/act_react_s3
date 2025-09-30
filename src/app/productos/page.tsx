import Link from "next/link";

export default function ProductosPage() {
  return (
    <div>
      <h1>📦 Productos</h1>
      <ul>
        <li>
          <Link href="/productos/1">Laptop</Link>
        </li>
        <li>
          <Link href="/productos/2">Smartphone</Link>
        </li>
        <li>
          <Link href="/productos/3">Tablet</Link>
        </li>
      </ul>
    </div>
  );
}
