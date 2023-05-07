import MainLayout from "@/components/Layout/MainLayout";
import FolderContent from "@/components/FolderContent";
import React from "react";
import Empty from "@/components/State/Empty";

const Home = () => {
  return (
    <MainLayout>
      <div className="lg:w-4/12  w-full lg:block h-screen">
        <FolderContent />
      </div>
      <div className=" lg:block h-screen bg-base-100 lg:w-8/12 hidden relative right-0 left-0">
        <Empty />
      </div>
    </MainLayout>
  );
};

export default Home;
