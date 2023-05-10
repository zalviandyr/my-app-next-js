import { ContentLayout } from "@/components/layouts/ContentLayout";
import { GetServerSideProps, NextPage } from "next";

const HelloWorld: NextPage = () => {
  return <div className="text-lg font-bold">About</div>;
};
export default HelloWorld;
