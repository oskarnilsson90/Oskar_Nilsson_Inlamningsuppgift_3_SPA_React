import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function AboutPage(){
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <Image
                className={styles.logo}
                src="/OIG3.jpg"
                alt="PitchPro planner Logo"
                width={284}
                height={284}
                priority
                />
            </div>
            <h1 className={styles.header}>About</h1>
            <div className={styles.section}>
                <h2>Description</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et orci sit amet tortor mollis iaculis. 
                    Duis tincidunt justo eget ullamcorper ullamcorper. Nulla nec luctus libero. 
                    Integer eget metus a ipsum vestibulum fermentum.
                </p>
            </div>
            <div className={styles.section}>
                <h2>Contact</h2>
                <p>
                    For customer support, please reach out via one of the following methods:
                </p>
                <ul>
                    <li>Chat: <Link href="/" className={styles.aboutLink}>Chat with us</Link></li>
                    <li>Email: <Link href="mailto:support@example.com" className={styles.aboutLink}>support@example.com</Link></li>
                    <li>Phone: +1234567890</li>
                </ul>
            </div>
        </div>
    );
}