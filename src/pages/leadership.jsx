import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Leadership from "../components/leadership";

const index = () => {
  return (
    <>
      <Seo pageTitle="Leadership" />
      <Leadership />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
