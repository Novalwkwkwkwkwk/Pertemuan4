// Import React
import React from 'react';

// Button Component
const Button = (props) => {
  const { children = "???", variant = "bg-black" } = props;

  return (
    <button
      className={`p-10 px-5 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

// App Component
export default function App() {
  return (
    <div className="text-xl flex justify-center bg-gray-200 min-h-screen items-center">
      <div className="flex gap-4">
        <Button variant="bg-red-500">Login</Button>
        <Button variant="bg-blue-500">Log out</Button>
        <Button>???</Button>
      </div>
    </div>
  );
}
