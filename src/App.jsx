import { useState } from "react";
import "./App.css";
import FormAddApple from "./components/FormAddApple";
import AppleList from "./components/AppleList";

export default function App() {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-start py-10">
      <h1 className="text-3xl font-bold text-green-700 mb-8">
        🍏 Apple Drawer
      </h1>
      <FormAddApple />
      <AppleList />
    </div>
  );
}
