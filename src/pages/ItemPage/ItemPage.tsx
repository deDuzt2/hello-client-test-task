import React from "react";
import { Outlet } from "react-router-dom";

interface PageProps {
  id: number;
}

function ItemPage({ id }: PageProps) {
  return (
    <>
      <div className="px-[20px] py-[25px]">This is {id} page</div>
      <Outlet />
    </>
  );
}

export default ItemPage;
