import React from "react";
import logo from "../../assets/images/logo.jpg";

export function Header({
  scrollToPressed,
  scrollToDogBread,
  scrollToDogPlatter,
  scrollToDogGratinated,
  scrollToDrinks,
}) {
  return (
    <header className="w-full bg-orange-800 fixed top-0 z-50 py-3">
      <div className="flex justify-center items-center gap-4 md:gap-10">
        <img src={logo} alt="Logo do site" className="w-16 h-16 rounded-full" />
        <h1 className="font-header text-xl md:text-2xl text-white">
          Cachorro Quente Imperador
        </h1>
      </div>
      <nav className="flex-1 flex justify-center items-center">
        <ul className="flex flex-row gap-2 md:gap-5">
          <li>
            <span
              onClick={scrollToPressed}
              className="text-white cursor-pointer text-sm md:text-xl"
            >
              Prensados
            </span>
          </li>
          <li>
            <span
              onClick={scrollToDogBread}
              className="text-white cursor-pointer text-sm md:text-xl"
            >
              No Pão
            </span>
          </li>
          <li>
            <span
              onClick={scrollToDogPlatter}
              className="text-white cursor-pointer text-sm md:text-xl"
            >
              Na Bandeja
            </span>
          </li>
          <li>
            <span
              onClick={scrollToDogGratinated}
              className="text-white cursor-pointer text-sm md:text-xl"
            >
              Gratinados
            </span>
          </li>
          <li>
            <span
              onClick={scrollToDrinks}
              className="text-white cursor-pointer text-sm md:text-xl"
            >
              Bebidas
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
