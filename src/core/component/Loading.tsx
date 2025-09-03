import Image from "next/image";

const Loading = () => {
  return (
    <Image src="/svg/tube-spinner.svg" alt="Loading" width={30} height={30} />
  );
};

export default Loading;
