export function Product({ nameDog, price, description, image }) {
  return (
    <div className="flex flex-col border border-gray-300 p-2 rounded">
      <h2 className="font-title font-regular">{nameDog}</h2>
      <div className="flex flex-col md:flex-row justify-items-end min-h-40">
        <span className="font-body text-sm text-gray-500 leading-5 w-full md:w-3/3 pr-1">
          {description}
        </span>
        <img
          src={image}
          alt="foto de exemplo"
          className="  w-32  h-32 rounded  self-center"
        />
      </div>
      <span className="text-lg mt-2">R$ {price}</span>
    </div>
  );
}
