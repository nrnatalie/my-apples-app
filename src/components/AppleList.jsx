import React, { useState } from "react";
import { useSelector } from "react-redux";
import AppleItem from "./AppleItem";

function AppleList() {
  const apples = useSelector((state) => state.drawerState);
  const [showImportant, setShowImportant] = useState(false);

  const filteredApples = showImportant
    ? apples.filter((a) => a.important)
    : apples;

  if (filteredApples.length === 0) {
    return <p className="text-gray-500">No apples for now</p>;
  }
  return (
    <>
      <div className="mb-4">
        <label className="mr-2">
          <input
            type="checkbox"
            checked={showImportant}
            onChange={() => setShowImportant(!showImportant)}
          />
          {""}Show only important
        </label>
      </div>
      <ul className="w-72">
        {filteredApples.map((apple) => (
          <AppleItem key={apple.id} apple={apple} />
        ))}
      </ul>
    </>
  );
}

export default AppleList;
