import Link from "next/link";
import Image from "next/image";
const Main = () => {
  return (
    <>
      <h1>Main 페이지 입니다</h1>
      <Image src="/next.svg" height={100} width={100} alt="Your Name" />
      <p>
        <Link href={"/about"}>About으로 이동</Link>
      </p>
    </>
  );
};

export default Main;
