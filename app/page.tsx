import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/one">One</Link>
        </li>
        <li>
          <Link href="/two">Two</Link>
        </li>
        <li>
          <a href="/three">Three</a>
        </li>
      </ul>
    </main>
  );
}
