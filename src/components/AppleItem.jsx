import React from "react";
import { useDispatch } from "react-redux";
import { toggleImportantApple, deleteApple } from "../redux/drawerSlice";

function AppleItem({ apple }) {
  const dispatch = useDispatch();

  return (
    <li className="flex justify-between items-center bg-white shadow p-2 mb-2 rounded">
      <span
        onClick={() => dispatch(toggleImportantApple(apple.id))}
        className={`cursor-pointer ${
          apple.important ? "font-bold text-yellow-600" : ""
        }`}
      >
        {apple.name}
      </span>
      <button
        onClick={() => dispatch(deleteApple(apple.id))}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
}

export default AppleItem;
