import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Sustainability from "../components/sustainability";

const index = () => {
  return (
    <>
      <Seo pageTitle="Sustainability" />
      <Sustainability />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
