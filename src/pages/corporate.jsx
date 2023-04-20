import dynamic from "next/dynamic";
import Seo from "../components/common/seo";
import Corporate from "../components/corporate";

const index = () => {
  return (
    <>
      <Seo pageTitle="Corporate Profile" />
      <Corporate />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
