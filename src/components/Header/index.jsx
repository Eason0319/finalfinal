import { useState } from "react";
import Link from "../Link"
import NavBar from "../NavBar";
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu"
import CartSummary from "../CartSummary";
import SetColorMode from "../SetColorMode"

export default function Header({ title, slogan }) {
    const [isOnTouch, setIsOnTouch] = useState(false);

    return (
        <div className="container">
            <div className={styles.header}>
                <div className={styles.headerWwrap}>
                    <HamburgerMenu
                        onClick={() => setIsOnTouch(!isOnTouch)}
                        isOnTouch={isOnTouch}
                    />
                    <Link to="/">
                        <img src="/images/logo.jpg" width={"10%"}/>
                    </Link>
                    <Link to="/buy">
                        <h1 className={styles.headerTitle}>
                            {title}
                        </h1>
                    </Link>

                    <p className={styles.headerSlogan}>
                        {slogan}
                    </p>

                </div>


                <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
            </div>
            <div className={styles.iconWrap}>
                <CartSummary/>                
            </div>

        </div>

    );
}

