import Image from "next/image";
import React from "react";

const Empty = () => {
  return (
    <div className="h-full w-full  flex justify-center items-center flex-col">
      <Image
        src={"/img/empty.svg"}
        height={120}
        width={120}
        unoptimized
        alt="Empty State"
      />
      <div className="mt-5">
        <h3 className="text-2xl font-semibold text-white text-center">
          Select a note to view
        </h3>
        <p className="text-center mt-3  text-gray-400">
          Choose a note from the list on the left to view its contents, or
          create a<br /> new note to add to your collection.
        </p>
      </div>
    </div>
  );
};

export default Empty;
