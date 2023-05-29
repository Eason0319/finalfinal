import NavLink from '../NavLink';
import { Drawer } from 'antd';

import styles from './navbar.module.css';

export default function NavBar({ open, onClose }) {

    const NavBarContent = () => (
        <>
            <NavLink to="/products/category/精選商品"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                精選商品
            </NavLink>
            <NavLink to="/products/category/電吉他"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                電吉他
            </NavLink>
            <NavLink to="/products/category/貝斯"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                貝斯
            </NavLink>
                    
        </>
    )

    return (
        <>
            <div className={styles.navBar}>
                <NavBarContent />
            </div>
            <Drawer 
                title="類別" 
                placement="left" 
                onClose={onClose} 
                open={open} 
            >
                <div className={styles.drawer}>
                    <NavBarContent />
                </div>
            </Drawer>
        </>

    );
}