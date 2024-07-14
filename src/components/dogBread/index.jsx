import kids from "../../assets/images/dogBread/kids.png";
import trad from "../../assets/images/dogBread/trad.png";
import bacon from "../../assets/images/dogBread/bacon.png";
import chicken from "../../assets/images/dogBread/chicken.png";
import superdog from "../../assets/images/dogBread/super.png";

import { Product } from "../product";

export function DogBread({ ref }) {
  return (
    <div ref={ref} className="border border-black w-4/5 m-auto p-2 mt-6">
      <h1 className="font-title text-lg font-semibold">
        CACHORRO QUENTE NO PÃO
      </h1>

      <div className="md:grid md:grid-cols-3 grid grid-cols-1 gap-2 items-center justify-between">
        <Product
          image={kids}
          nameDog={"Kids"}
          price="14.90"
          description={
            "Cachorro quente kids: Pão Bambini, salsicha Perdigão, purê de batata caseiro, batata palha, ketchup e maionese Hellman's."
          }
        />

        <Product
          image={trad}
          nameDog={"Tradicional"}
          price="21.90"
          description={
            "Cachorro quente tradicional: Pão Bambini, salsicha Perdigão, purê de batata caseiro, vinagrete, muçarela ralada, batata palha, milho, ervilha, ketchup, mostarda e maionese Hellmann's."
          }
        />

        <Product
          image={bacon}
          nameDog={"Dog Bacon"}
          price="24.90"
          description={
            "Cachorro quente com bacon: Pão Bambini, salsicha Perdigão, bacon frito, purê de batata caseiro, muçarela ralada, batata palha, ketchup, mostarda e maionese Hellmann's."
          }
        />

        <Product
          image={chicken}
          nameDog={"Dog Frango"}
          price="24.90"
          description={
            "Cachorro quente com frango: Pão Bambini, salsicha Perdigão, frango desfiado temperado, purê de batata caseiro, muçarela ralada, batata palha, ketchup, mostarda e maionese Hellmann's."
          }
        />

        <Product
          image={superdog}
          nameDog={"Dog Super"}
          price="29.90"
          description=" Cachorro quente super: Pão Bambini, salsicha Perdigão, bacon
              frito, frango desfiado, Catupiry Original, purê de batata caseiro,
              vinagrete, muçarela ralada, batata palha, milho, ervilha, ketchup,
              mostarda e maionese Hellmann's."
        />
      </div>
    </div>
  );
}
