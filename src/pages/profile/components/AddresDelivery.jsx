import { AddresDeliveryCard } from "./AddresDeliveryCard";


export function AddresDelivery() {
  const addresses = [
    {
      id: 1,
      name: "Elias de Jesús Duran Sánchez",
      street: "Calle 73 #372 x 16a y 16b, Ampliación Miraflores",
      city: "Mérida",
      state: "Yucatán",
      zipCode: "97179",
    },
    {
      id: 2,
      name: "Elias de Jesús Duran Sánchez",
      street: "11 sur / calle central, Y primera pte #163",
      city: "Tuxtla Gutiérrez",
      state: "Chiapas",
      zipCode: "29066",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Delivery addresses
      </h1>
      <div className="bg-gray-50 flex items-center justify-center">
        <div className="w-full bg-white rounded-lg shadow-sm p-6">
          <div className="space-y-8">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">
              Delivery addresses save
            </h1>
            

            <div className="space-y-2">
            {addresses.length < 1 && <h2 className="text-xl font-medium">Dont have any address</h2> }
              {addresses.map((address) => (
                <AddresDeliveryCard key={address.id} address={address} />
              ))}
            </div>

            <div className="flex justify-end">
              <button className="px-6 py-2 bg-black text-white rounded-xl">
                Add new address
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
