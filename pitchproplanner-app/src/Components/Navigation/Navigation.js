import styles from './Navigation.module.css';
import Link from 'next/link';

const LINKS = [
    { href: '/', text: 'Home', description: 'Go to home page'},
    { href: '/teams', text: 'My Teams', description: 'Manage my teams'},
    { href: '/trainings', text: 'My Trainings', description: 'Manage my training sessions'},
    { href: '/about', text: 'About/Contact', description: 'About PitchPro Planner and contact info'},
]

export default function Navigation(){
    return (<div className={styles.grid}>

        {LINKS.map(l => <NavigationLink key={l.href} {...l}/>)}
        
        </div>);
}

function NavigationLink({ href, text, description }){
    return (<Link
        href={href}
        className={styles.card}>
        <h2>
          {text} <span>-&gt;</span>
        </h2>
        <p>{description}</p>
      </Link>)
}