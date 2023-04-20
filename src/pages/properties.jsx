import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Properties from "../components/properties";

const index = () => {
  return (
    <>
      <Seo pageTitle="Properties" />
      <Properties />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
