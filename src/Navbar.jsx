export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        DataSoc Connect
      </a>
      <u1>
        <li>
          <a href="/pending">Pending Connections</a>
        </li>
        <li>
          <a href="/past">Past Connections</a>
        </li>
      </u1>
    </nav>
  );
}
