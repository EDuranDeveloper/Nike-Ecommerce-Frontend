export function Account() {
  return (
    <>
    <h1 className="text-2xl font-semibold text-gray-900 mb-6">Account settings</h1>
    <div className="bg-gray-50 flex items-center justify-center">
      <div className="w-full bg-white rounded-lg shadow-sm p-6">
        
        <div className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value="eliasdejesusduransanchez2019@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              readOnly
              disabled
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="flex items-center text-sm font-medium text-gray-700">
                Password
              </label>
              <button className="text-sm text-black underline">Edit</button>
            </div>
            <input
              type="password"
              value="••••••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              readOnly
              disabled
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="flex items-center text-sm font-medium text-gray-700">
                Phone number
              </label>
              <button className="text-sm text-black underline">Add</button>
            </div>
          </div>

          {/* Birth Date Field */}
          <div className="space-y-2">
            <label className="flex items-center text-sm font-medium text-gray-700">
                Birthdate
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Location Section */}
          <div className="space-y-4">
            <h2 className="flex items-center text-sm font-medium text-gray-700">
              Location
            </h2>
            
            <div className="space-y-4">
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white">
                <option>Country</option>
                
              </select>

              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white">
                <option>State</option>
              </select>

              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="City"
              />

              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="ZIP"
              />
            </div>
          </div>
        </div>


        {/* Save Button */}
        <div className="pt-6 flex justify-end">
          <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg- focus:ring-2  focus:ring-offset-2">
            Save
          </button>
        </div>

        {/* Delete Account Section */}
        <div className="pt-12">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-700">Eliminar cuenta</span>
            <button className="flex items-center px-4 py-2 text-sm text-red-600 hover:text-red-700 rounded-lg hover:bg-red-50">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}