import Footer from "../../components/Layouts/DefautLayout/Footer";
import styles from "./profile.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("heading")}>
                
            </div>
            <div className={cx("content")}></div>
            <Footer/>
        </div>
    );
}

export default Profile;
