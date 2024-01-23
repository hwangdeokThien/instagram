import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import PreviewUser from "../../components/PreviewUser";
import { Link } from "react-router-dom";
import Post from "../../components/Post";
import { useEffect } from "react";
const cx = classNames.bind(styles);

function Home() {
    const arrays = [1, 2, 3, 4, 5, 6, 7, 8];
    const arraysSuggestion = [1, 2, 3, 4];

    useEffect(() => {
        if(sessionStorage.getItem("userID") == null ) {
            window.location.href = "/login";
        }
    }, [sessionStorage.getItem("userID")])

    const renderPreview = (isExistingPoster: boolean) => {
        return (
            <div tabIndex={-1}>
                <PreviewUser isExistingPoster={isExistingPoster} />
            </div>
        );
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("content")}>
                <div className={cx("heading")}>
                    <FontAwesomeIcon className={cx("icon-show-more-left")} icon={faCircleChevronLeft} />
                    {arrays.map((index) => {
                        return (
                            <div  key={index} className={cx("list-stories")}>
                                <div className={cx("story")}>
                                    <img src="/img/VanLun.jpg" alt="" className={cx("avatar-user", "not-seen")} />
                                </div>
                                <p className={cx("username")}>ducvan_09</p>
                            </div>
                        );
                    })}
                    <FontAwesomeIcon className={cx("icon-show-more-right")} icon={faCircleChevronRight} />
                </div>
                <div className={cx("body")}>
                    <Post />
                    <Post />
                </div>
            </div>
            <div className={cx("right-sidebar")}>
                <div className={cx("my-account")}>
                    <Link hrefLang="/profile" className={cx("right-item")} to={"profile"}>
                        <img src="/img/VanLun.jpg" alt="" className={cx("my-avatar-user")} />
                        <div className={cx("infor")}>
                            <p className={cx("username")}>ducvan_09</p>
                            <p className={cx("myname")}>Đức Vấn</p>
                        </div>
                    </Link>
                    <a href="#">Chuyển</a>
                </div>
                <div className={cx("suggestion")}>
                    <div className={cx("title")}>
                        <p>Gợi ý cho bạn</p>
                        <a href="#">Xem tất cả</a>
                    </div>
                    {arraysSuggestion.map((index) => {
                        return (
                            <Tippy
                                key={index}
                                interactive
                                delay={[800, 0]}
                                placement="bottom-start"
                                offset={[-6, -20].join(",")}
                                content={<div>{renderPreview(true)}</div>}
                            >
                                <div className={cx("your-account")}>
                                    <div className={cx("right-item")}>
                                        <img src="/img/VanLun.jpg" alt="" className={cx("your-avatar-user")} />
                                        <div className={cx("infor")}>
                                            <p className={cx("username")}>ducvan_09</p>
                                            <p className={cx("myname")}>Đức Vấn</p>
                                        </div>
                                    </div>
                                    <a href="#" className={cx("following")}>
                                        Theo dõi
                                    </a>
                                </div>
                            </Tippy>
                        );
                    })}
                    <Tippy
                        interactive
                        delay={[800, 0]}
                        placement="bottom-start"
                        offset={[-6, -20].join(",")}
                        content={<div>{renderPreview(false)}</div>}
                    >
                        <div key={6} className={cx("your-account")}>
                            <div className={cx("right-item")}>
                                <img src="/img/VanLun.jpg" alt="" className={cx("your-avatar-user")} />
                                <div className={cx("infor")}>
                                    <p className={cx("username")}>ducvan_09</p>
                                    <p className={cx("myname")}>Đức Vấn</p>
                                </div>
                            </div>
                            <a href="#" className={cx("following")}>
                                Theo dõi
                            </a>
                        </div>
                    </Tippy>
                </div>
                <div className={cx("footer")}>
                    <div className={cx("extra-info")}>
                        <a>Giới thiệu .</a>
                        <a>Trợ giúp .</a>
                        <a>Báo chí .</a>
                        <a>API .</a>
                        <a>Việc làm </a>
                        <a>Quyền riêng tư .</a>
                        <a>Điều khoản .</a>
                        <a>Vị trí .</a>
                        <a>Ngôn ngữ </a>
                        <a>Meta đã xác minh .</a>
                    </div>
                    <p>© 2024 INSTAGRAM FROM META</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
