import type { NextPage } from "next";
import { Sidebar } from "components/layout";

const SystemList: NextPage = () => {
  return (
    <>
      <div>
        <Sidebar />
        <div className="lg:pl-64 flex flex-col flex-1">
          <main>System List</main>
        </div>
      </div>
    </>
  );
};

export default SystemList;
