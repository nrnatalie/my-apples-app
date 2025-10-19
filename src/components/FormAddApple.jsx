import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addApple } from "../redux/drawerSlice";

function FormAddApple() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      dispatch(addApple(name));
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter an apple..."
        className="border rounded px-3 py-2 w-64"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add
      </button>
    </form>
  );
}

export default FormAddApple;
