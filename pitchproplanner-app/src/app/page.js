import Image from "next/image";
import styles from "./page.module.css";
import Navigation from "@/Components/Navigation/Navigation";

export default function Home() {
  return (
    <main className={styles.main}>

      <Navigation />

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

      <div className={styles.description}>
        <p>
          Oskar Nilsson ⚽
        </p>
        <div>
          <a
            href="https://github.com/oskarnilsson90"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/github.png"
              alt="GitHub Logo"
              className={styles.vercelLogo}
              width={48}
              height={48}
              priority
            />
          </a>
        </div>
      </div>

    </main>
  );
}
