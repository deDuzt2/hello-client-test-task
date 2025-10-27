import React, { JSX } from "react";

interface PageProps {
  id: number;
}

function ChildrenPage({ id }: PageProps): JSX.Element {
  return <div className="px-[20px] py-[25px]">This is {id} children page</div>;
}

export default ChildrenPage;
