import classNames from "classnames/bind";
import styles from "./home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Home() {
    const arrays = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className={cx("wrapper")}>
            <div className={cx("content")}>
                <div className={cx("heading")}>
                    <FontAwesomeIcon className={cx("icon-show-more-left")} icon={faCircleChevronLeft} />
                    {arrays.map((index) => {
                        return (
                            <div className={cx("list-stories")}>
                                <div key={index} className={cx("story")}>
                                    <img src="/img/VanLun.jpg" alt="" className={cx("avatar-user", "not-seen")} />
                                </div>
                                <p className={cx("username")}>ducvan_09</p>
                            </div>
                        );
                    })}
                    <FontAwesomeIcon className={cx("icon-show-more-right")} icon={faCircleChevronRight} />
                </div>
                <div className={cx("body")}></div>
            </div>
            <div className={cx("right-sidebar")}></div>
        </div>
    );
}

export default Home;
