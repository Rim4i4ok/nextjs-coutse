import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <a href="/portfolio">Portfolio (rerender)</a>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
