import React from "react";

const LoadingFolder = () => {
  return (
    <div className="animate-pulse px-5 pt-5 pb-3 space-y-5">
      {new Array(4).fill(0).map((_, i) => (
        <div key={i} className="flex space-x-5 items-center">
          <div className="h-5 w-5 bg-primary rounded-sm" />
          <div className="w-3/4 h-3 bg-primary rounded-sm" />
        </div>
      ))}
    </div>
  );
};

export default LoadingFolder;
