import styles from "./service.module.css"
import Link from "../Link";

export default function Service() {
    return (
        <div className={styles.service}>
            <div className={styles.shop}>
                <img src="public/images/logo.jpg" alt="" />
                <h1>線上商城</h1>
                <h3>想買東西不知道從何下手嗎?
                    <br />推薦的精選商品任君挑選
                    <br />還有各種款式的樂器供您參考 快來看看吧!
                </h3>
                <Link to="/buy">
                    <button className={styles.seeMore1}>查看更多</button>
                </Link>
            </div>
            <div className={styles.classroom}>
                <h1>音樂教室</h1>
                <h3>不知道如何彈奏樂器嗎?
                    <br />這裡有最優秀的師資
                    <br />快來購買相關課程吧!
                </h3>
                <button className={styles.seeMore2}>查看更多</button>
                <img src="public/images/serviceAside1.jpg" alt="" />
            </div>
            <div className={styles.trainroom}>
                <img src="public/images/serviceAside2.jpg" alt="" />
                <h1>訂練團室</h1>
                <h3>不知道哪裡可以練團嗎?
                    <br />越氣樂器行不僅提供教學服務
                    <br />還有練團室供顧客們使用
                    <br />歡迎預約！
                </h3>
                <button className={styles.seeMore3}>查看更多</button>
            </div>
        </div>
    );
}