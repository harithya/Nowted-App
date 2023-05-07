import MainLayout from "@/components/Layout/MainLayout";
import DropdownAction from "@/components/Write/DropdownAction";
import React from "react";

const Write = () => {
  return (
    <MainLayout>
      <div className="lg:p-10 px-5 py-10">
        {/* Input header */}
        <div className="flex justify-between space-x-5">
          <input
            type="text"
            className="w-full text-3xl outline-none font-semibold bg-transparent text-white"
            onChange={() => null}
            placeholder="Type your title"
            value={"Reflection on the Month of June"}
          />
          <DropdownAction />
        </div>
      </div>
    </MainLayout>
  );
};

export default Write;
