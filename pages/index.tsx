import { ContentLayout } from "@/components/layouts/ContentLayout";
import { GetServerSideProps, NextPage } from "next";

type IHelloWorld = {
  name: string;
};

const HelloWorld: NextPage<IHelloWorld> = ({ name }) => {
  return <div className="text-lg font-bold">Hello World {name}</div>;
};

export const getServerSideProps: GetServerSideProps<IHelloWorld> = async () => {
  return { props: { name: "Juju" } };
};

export default HelloWorld;
