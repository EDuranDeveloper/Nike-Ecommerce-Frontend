export function NavbarProfile({ section, setSection }) {

  
  const sections = [
    "Favorites",
    "Account settings",
    "Delivery addresses",
    "Orders",
    "Payment methods",
  ];

  return (
    <nav className="flex md:justify-center items-center m-4 max-w-full gap-8 overflow-scroll md:overflow-hidden cursor-pointer">
      {sections.map((sec) => (
        <span
          key={sec}
          className={section === sec ? "font-bold" : ""}
          onClick={() => setSection(sec)}
        >
          {sec}
        </span>
      ))}
    </nav>
  );
}
