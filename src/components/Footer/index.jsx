export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-content">
                    <div className="col-md-2"></div>
                    <div className="col-md-3 head">
                        <h3>越氣樂器行</h3>
                        <h5>TEL : 02 5719 3946</h5>
                        <h3>地址</h3>
                        <h5>台北市小安區和平西路87段87號</h5>
                    </div>
                    <div className="col-md-4">
                        <h3>營業時間/Open Time</h3>
                        <h5>週一至週日 12:00-21:00<br />Mon. - Sunday, 12pm - 9pm</h5>
                    </div>
                    <div className="col-md-3 info">
                        <h3>更多資訊</h3>
                        <a className="fb" href="#">
                            <img src="/images/fb.jpg" alt="" />
                            <h5>Facebook粉絲專頁</h5>
                        </a>
                        <a className="yt" href="#">
                            <img src="/images/yt.jpg" alt="" />
                            <h5>Youtube頻道</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
