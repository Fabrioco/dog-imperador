import { Product } from "../product";
import water from "../../assets/images/drinks/water.png";
import waterzero from "../../assets/images/drinks/water-bubble.png";
import coca from "../../assets/images/drinks/coca.png";
import cocazero from "../../assets/images/drinks/coca-zero.png";
import xereta from "../../assets/images/drinks/xereta.png";
import coca2l from "../../assets/images/drinks/coca2l.png";

export function Drinks({ ref }) {
  return (
    <div ref={ref} className="border border-black w-4/5 m-auto p-2 mt-6 ">
      <h1 className="font-title text-lg font-semibold">BEBIDAS</h1>

      <div className="md:grid md:grid-cols-3 grid-cols-1 gap-2 items-center justify-between">
        <Product
          description="Garrafa 510ml"
          image={water}
          nameDog={"Água Mineral sem Gás Pompéia 510ml"}
          price="4,00"
        />
        <Product
          description="Garrafa 510ml"
          image={waterzero}
          nameDog={"Água Mineral com Gás Pompéia 510ml"}
          price="4,00"
        />
        <Product
          description="Lata 350ml"
          image={coca}
          nameDog={"Coca-Cola Lata 350ml"}
          price="6,00"
        />
        <Product
          description="Lata 350ml"
          image={cocazero}
          nameDog={"Coca-Cola Zero Lata 350ml"}
          price="6,00"
        />
        <Product
          description="Garrafa 2L"
          image={xereta}
          nameDog={"Guaraná Xereta 2L"}
          price="10,00"
        />
        <Product
          description="Garrafa 2L"
          image={coca2l}
          nameDog={"Coca-Cola Original 2l"}
          price="15,00"
        />
      </div>
    </div>
  );
}
