import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import styles from './DefaultLayout.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type DefaultLayout = {
  children: ReactNode
}

function DefaultLayout({ children }: DefaultLayout) {
  return (
    <div>
      <div className={cx('container')}>
        <div className={cx('wrapper')}><Sidebar /></div>
        <div className={cx("content")}>
          {children}
        </div>
      </div>

    </div>
  )
}

export default DefaultLayout;