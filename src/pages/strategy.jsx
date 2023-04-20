import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Strategy from "../components/strategy";

const index = () => {
  return (
    <>
      <Seo pageTitle="Our Strategy" />
      <Strategy />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
