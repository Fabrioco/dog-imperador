import { Product } from "../product";
import dog from "../../assets/images/dogPlatter/bandeija.png";

export function DogPlatter({ ref }) {
  return (
    <div ref={ref} className="border border-black w-4/5 m-auto p-2 mt-6">
      <h1 className="font-title text-lg font-semibold">
        CACHORRO QUENTE NA BANDEJA
      </h1>
      <div className="md:grid md:grid-cols-3 grid grid-cols-1 gap-2 items-center justify-between">
        <Product
          description="Cachorro quente kids na bandeja: 2 salsichas Perdigão, purê de batata caseiro, batata palha, ketchup e maionese Hellman's. (não acompanha o pão)"
          image={dog}
          nameDog={"Kids na bandeja"}
          price={"16,90"}
        />
        <Product
          description="Cachorro quente tradicional na bandeja: 2 salsichas Perdigão, purê de batata caseiro, vinagrete, muçarela ralada, batata palha, milho, ervilha, ketchup, mostarda e maionese Hellmann's. (não acompanha o pão)"
          image={dog}
          nameDog={"Tradicional na bandeja"}
          price={"24,90"}
        />
        <Product
          description="Cachorro quente com bacon na bandeja: 2 salsichas Perdigão, bacon frito, purê de batata caseiro, vinagrete, muçarela ralada, batata palha, milho, ervilha, ketchup, mostarda e maionese Hellmann's. (não acompanha o pão)"
          image={dog}
          nameDog={"Dog Bacon na bandeja"}
          price={"29,90"}
        />
        <Product
          description="Cachorro quente com frango na bandeja: 2 salsichas Perdigão, frango desfiado temperado, purê de batata caseiro, vinagrete, muçarela ralada, batata palha, milho, ervilha, ketchup, mostarda e maionese Hellmann's. (não acompanha o pão)"
          image={dog}
          nameDog={"Dog Frango na bandeja"}
          price={"29,90"}
        />
        <Product
          description="Cachorro quente super na bandeja: 2 salsichas Perdigão, bacon frito, frango desfiado, Catupiry Original, purê de batata caseiro, vinagrete, muçarela ralada, batata palha, milho, ervilha, ketchup, mostarda e maionese Hellmann's. (não acompanha o pão)"
          image={dog}
          nameDog={"Dog Super na bandeja"}
          price={"32,90"}
        />
      </div>
    </div>
  );
}
