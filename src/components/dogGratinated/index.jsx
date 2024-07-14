import { Product } from "../product";
import gratined from "../../assets/images/dogGratinated/gratinated.png";

export function DogGratinated({ref}) {
  return (
    <div ref={ref} className="border border-black w-4/5 m-auto p-2 mt-6">
      <h1 className="font-title text-lg font-semibold">
        CACHORRO QUENTE GRATINADO
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 items-center justify-between">
        <Product
          image={gratined}
          nameDog="Dog Tradicional Gratinado"
          price="29.90"
          description="Cachorro quente tradicional com queijo gratinado: 2 salsichas Perdigão, purê de batata caseiro, vinagrete, milho, ervilha, ketchup, mostarda e maionese Hellmann's, muçarela gratinada, parmesão e orégano. (não acompanha o pão)"
        />
        <Product
          image={gratined}
          nameDog="Dog 4 Queijos Gratinado"
          price="34.90"
          description="Cachorro quente bacon com queijo gratinado: 2 salsichas Perdigão, muçarela gratinada, parmesão, cheddar, Catupiry Original, purê de batata caseiro, vinagrete, batata palha, milho, ervilha, ketchup, mostarda e maionese Hellmann's e orégano. (não acompanha o pão)"
        />
        <Product
          image={gratined}
          nameDog="Dog Bacon Gratinado"
          price="34.90"
          description="Cachorro quente bacon com queijo gratinado: 2 salsichas Perdigão, bacon frito, purê de batata caseiro, vinagrete, milho, ervilha, ketchup, mostarda e maionese Hellmann's, muçarela gratinada, parmesão e orégano. (não acompanha o pão)"
        />
        <Product
          image={gratined}
          nameDog="Dog Frango Gratinado"
          price="34.90"
          description="Cachorro quente frango com queijo gratinado: 2 salsichas Perdigão, frango desfiado temperado, purê de batata caseiro, vinagrete, milho, ervilha, ketchup, mostarda e maionese Hellmann's, muçarela gratinada, parmesão e orégano. (não acompanha o pão)"
        />
        <Product
          image={gratined}
          nameDog="Dog Super Gratinado"
          price="39.90"
          description="Cachorro quente bacon com queijo gratinado: 2 salsichas Perdigão, frango desfiado temperado, bacon frito, Catupiry Original, purê de batata caseiro, vinagrete, milho, ervilha, ketchup, mostarda e maionese Hellmann's, muçarela gratinada, parmesão e orégano. (não acompanha o pão)"
        />
      </div>
    </div>
  );
}
