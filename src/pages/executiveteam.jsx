import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Executiveteam from "../components/executiveteam";

const index = () => {
  return (
    <>
      <Seo pageTitle="Executiveteam" />
      <Executiveteam />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
