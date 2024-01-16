import styles from "./profile.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx("wrapper")}>
            <h2> Profile page</h2>
        </div>
    );
}

export default Profile;
