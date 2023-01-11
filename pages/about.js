import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
const About = () => {
  const [text, setText] = useState("값을 작성하세요");
  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <h1>about페이지 입니다</h1>
        <p>
          아래 input에 값을 넣으면 값이 바뀝니다 <br />:{text}
        </p>
        <input onChange={onChange} placeholder="값을 작성하세요" />
        <Link href={"/"}>Main으로 이동</Link>
      </div>
    </div>
  );
};

export default About;
