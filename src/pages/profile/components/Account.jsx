import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { countries } from "../helpers/countryLibrary";
import { useAccountSettingsStore } from "../../../hooks/useAccountSettingsStore";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { Modal } from "./modal/modal";

export function Account() {

  const { status, user, errorMessage } = useSelector(state => state.auth )
  const { startGetAccountSettingsUser, startPostAccountSettingsUser } = useAccountSettingsStore();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false)



  useEffect(() => {
    const fetchData = async () => {
      const data = await startGetAccountSettingsUser(); 

      if (data) {

        const { birthdate, country, city, zip } = data

        setValue("birthdate", birthdate || "");
        setValue("country", country || "");
        setValue("city", city || "");
        setValue("zip", zip || "");
      }
    };

    fetchData();
  }, [setValue]);

  const onSubmit = async (data) => {
    startPostAccountSettingsUser(data);



    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your information is saved",
      showConfirmButton: false,
      timer: 1000
    });
  };

  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Account settings</h1>
      <div className="bg-gray-50 flex items-center justify-center">
        <div className="w-full bg-white rounded-lg shadow-sm p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                readOnly
                disabled
                value={user?.email}
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  Password
                </label>
              </div>
              <input
                type="password"
                value="••••••••••••"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                readOnly
                disabled
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  Phone
                </label>
              </div>
              <input
                type="text"
                value="Not provided"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                readOnly
                disabled
              />
            </div>

            <div className="flex justify-end">
              <button type="button" className="text-black hover:text-gray-800 text-xs underline" 
              onClick={() => {setIsModalOpen(true)}}>Change phone</button>
            <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}></Modal>
            </div>

            {/* Birth Date Field */}
            <div className="space-y-2">
              <label className="flex items-center text-sm font-medium text-gray-700">
                Birthdate
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                {...register("birthdate", {
                  required: {
                    value: true,
                    message: "The date is required"
                  }
                })}
              />
            </div>
            {errors.birthdate && <span className="text-xs text-red-700">{errors.birthdate.message}</span>}

            {/* Location Section */}
            <div className="space-y-4">
              <h2 className="flex items-center text-base font-medium text-gray-700">
                Location
              </h2>

              {/* Country Select */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  onChange={(e) => {
                    setValue("country", e.target.value);
                  }}
                  {...register("country", {
                    required: {
                      value: true,
                      message: "The country is required"
                    }
                  })}
                >
                  <option value="">Select a country</option>
                  {countries.map((country) => (
                    <option key={country.code} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>

                {errors.country && <span className="text-xs text-red-700">{errors.country.message}</span>}
              </div>

              {/* City Field */}
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="City"
                {...register("city", {
                  required: {
                    value: true,
                    message: "The city is required"
                  }
                })}
              />
              {errors.city && <span className="text-xs text-red-700">{errors.city.message}</span>}

              {/* ZIP Field */}
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                placeholder="ZIP"
                {...register("zip", {
                  required: {
                    value: true,
                    message: "The zip is required"
                  }
                })}
              />
              {errors.zip && <span className="text-xs text-red-700">{errors.zip.message}</span>}
            </div>

            {/* Save Button */}
            <div className="pt-6 flex justify-end">
              <button type="submit" className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black focus:ring-2 focus:ring-offset-2">
                Save
              </button>
            </div>
          </form>

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
