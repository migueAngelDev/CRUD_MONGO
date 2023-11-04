import styles from "@/components/Navbar/Navbar.module.css";
import VercelIcon from "../../../public/vercel.svg";
import Link from "next/link";

const Navbar = () => {
  const routesNav = [
    {
      label: "Inicio",
      path: "/",
    },
    {
      label: "Formularios",
      path: "/formularios",
    },
    {
      label: "Tablas",
      path: "/tablas",
    },
  ];

  const mapRoutesNav = routesNav.map(({ label, path }) => (
    <li key={label}>
      <Link href={path}>{label}</Link>
    </li>
  ));

  return (
    <>
      <header className={styles.headerPage}>
        <nav>
          <Link href="/">
            <VercelIcon className={styles.icon} />
          </Link>
          <ul>{mapRoutesNav}</ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
