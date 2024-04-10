import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/OIG3.jpg"
          alt="PitchPro planner Logo"
          width={384}
          height={384}
          priority
        />
      </div>

    </>
  );
}
