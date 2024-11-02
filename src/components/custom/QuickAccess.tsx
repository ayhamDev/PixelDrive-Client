import React from "react";
import ItemGrid from "./ItemGrid";

const QuickAccess = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-3 justify-between items-center">
      <ItemGrid />
      <ItemGrid />
      <ItemGrid />
      <ItemGrid />
      <ItemGrid />
      <ItemGrid />
      <ItemGrid />
      <ItemGrid />
    </div>
  );
};

export default QuickAccess;
