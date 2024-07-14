import trad from "../../assets/images/dogPressed/trad.png";
import { Product } from "../product";

export function Pressed({ref}) {
  return (
    <div ref={ref} className="border border-black w-4/5 m-auto p-2 mt-6">
      <h1 className="font-title text-lg font-semibold">
        CACHORRO QUENTE PRENSADO
      </h1>

      <div className="md:grid md:grid-cols-3 grid grid-cols-1 gap-2 items-center justify-between">
        <Product
          description="Cachorro quente tradicional prensado: Pão Bambini, salsicha
              Perdigão, purê de batata caseiro, muçarela ralada, batata palha,
              ketchup, mostarda e maionese Hellmann's."
          image={trad}
          nameDog={"Dog Tradicional Prensado"}
          price="21.90"
        />

        <Product
          description="Cachorro quente com bacon prensado: Pão Bambini, salsicha
              Perdigão, bacon frito, purê de batata caseiro, muçarela ralada,
              batata palha, ketchup, mostarda e maionese Hellmann's."
          image={trad}
          nameDog={"Dog Tradicional Prensado"}
          price="24.90"
        />

        <Product
          description="Cachorro quente misto prensado: Pão Bambini, salsicha Perdigão,
              presunto, purê de batata caseiro, muçarela ralada, batata palha,
              ketchup, mostarda e maionese Hellmann's."
          image={trad}
          nameDog={"Dog Tradicional Prensado"}
          price="24.90"
        />

        <Product
          description="Cachorro quente com frango e Catupiry prensado: Pão Bambini,
              salsicha Perdigão, frango desfiado temperado, Catupiry Original,
              purê de batata caseiro, muçarela ralada, batata palha, ketchup,
              mostarda e maionese Hellmann's."
          image={trad}
          nameDog={"Dog Tradicional Prensado"}
          price="26.90"
        />
      </div>
    </div>
  );
}
