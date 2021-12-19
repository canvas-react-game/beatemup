import React, {FC} from 'react';

import styles from './NavBar.module.scss';

export interface Link {
    route: string;
    label: string;
}

interface Props {
    currentRoute?: string;
    links: Link[];
}

const NavBar: FC<Props> = ({ currentRoute, links }) => {
    return (
        <div className={styles.ulContainer}>
            <ul className={styles.ul}>
                {links.map(link =>
                    <li className={link.route === currentRoute ? styles.active : styles.inactive}
                        key={link.route}>
                        <a href={link.route}>{link.label}</a>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default NavBar;