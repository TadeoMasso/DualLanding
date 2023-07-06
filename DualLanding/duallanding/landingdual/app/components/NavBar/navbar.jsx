import Link from "next/link";

const navigation = [
  {
    label: "tetonas aqui",
    route: "/#inicio",
    current: true,
  },
  {
    label: "Acerca de",
    route: "/#acerca-de",
    current: false,
  },
  {
    label: "Portfolio",
    route: "/#portfolio",
    current: false,
  },
  {
    label: "Contacto",
    route: "/#contacto",
    current: false,
  },
];

export default function NavBar() {
  return (
    <>
      <h1>Soy El Navbar</h1>
      <div>
      <ul>
        {navigation.map(({ label, route }) => (
            <div>
          <li key={route}>
            <Link href={route} id={route}>
              {label}
            </Link>
          </li>
          </div>

        ))}
      </ul>

      </div>
    </>
  );
}