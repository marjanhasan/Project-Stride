import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditProfile = () => {
  const user = useLoaderData();
  console.log(user);
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(0);
  const [mobileNumber, setMobileNumber] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const mobileNumber = form.mobileNumber.value;

    const data = { name, age, mobileNumber, email: user?.email };

    await fetch(`http://localhost:3000/user/${user?.email}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your edit has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Edit Product</h1>

      <div className="my-16">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="number"
              name="age"
              placeholder="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="mobileNumber"
              placeholder="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="btn mt-4 w-full bg-red-500 text-white p-4"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
