export function AddresDeliveryCard({ address }) {
  return (
    <div className="p-4 border-b border-gray-200 last:border-b-0">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <p className="text-gray-700">{address.name}</p>
          <p className="text-gray-600">{address.street}</p>
          <p className="text-gray-600">
            {address.zipCode} {address.city}, {address.state}
          </p>
        </div>
        <button className="text-sm text-black">
          Edit
        </button>
      </div>
    </div>
  );
}
