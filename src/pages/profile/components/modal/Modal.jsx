import { countriesArea } from "../../helpers/countryNumbersLibrary";

export function Modal({ isOpen, closeModal }) {
    if (!isOpen) return null;
  
    return (
      <div
        className="fixed inset-0 h-full z-50 bg-black bg-opacity-50 flex items-center justify-center"
        onClick={closeModal}
      >
        <div
          className="bg-white rounded-lg shadow-lg p-6 w-96 mx-2"
          onClick={(e) => e.stopPropagation()} 
        >
          <h1 className="text-xl font-bold mb-4">Update your phone</h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">
             <select name="Select a option" className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                {countriesArea.map((countryArea) => (
                  <option key={ countryArea.name }>{ countryArea.code } { countryArea.name }</option>
                ))}
             </select>
            </p>
            <p className="text-gray-700">
             <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="New phone" />
            </p>
          </div>
          <div className="flex items-center justify-between w-full mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            onClick={closeModal}
          >
            Close
          </button>
          <button
            className="bg-black text-white px-4 py-2 rounded-lg"
            onClick={closeModal}
          >
            Update
          </button>
          </div>
        </div>
      </div>
    );
  }
  