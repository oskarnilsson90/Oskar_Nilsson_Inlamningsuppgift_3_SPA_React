import styles from "./page.module.css";
import Image from "next/image";

export default function TeamsPage(){

    const teams = [
        { id: 1, name: 'Team A', imageUrl: '/pitch.png' },
        { id: 2, name: 'Team B', imageUrl: '/pitch.png' },
        { id: 3, name: 'Team C', imageUrl: '/pitch.png' },
        { id: 4, name: 'Team D', imageUrl: '/pitch.png' },
      ];

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Teams Page</h1>
            <button className={styles.btn}><span>➕</span> Add New Team</button>
            <div className={styles.teamsGrid}>
                {teams.map(team => (
                <div key={team.id} className={styles.teamCard}>
                    <Image src={team.imageUrl} alt={team.name} width={100} height={100} className={styles.teamImage} />
                    <h2>{team.name}</h2>
                    <button className={styles.btn}>Edit</button>
                </div>
                ))}
            </div>
        </div>
    );
}