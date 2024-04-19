import styles from "./Header.module.scss";

export default function Header({ view, changeView }) {
  return (
    <div className={` ${styles.header}`}>
      <h1 className={` ${styles.headerTitle}`}>NBA</h1>
      <button
        onClick={() => changeView((view = "East"))}
        className={` btn btn-primary m-5 ${styles.headerBtn}`}
      >
        East
      </button>
      <button
        onClick={() => changeView((view = "West"))}
        className={` btn btn-primary m-5 ${styles.headerBtn}`}
      >
        West
      </button>
      <button
        onClick={() => changeView((view = "All"))}
        className={` btn btn-primary m-5 ${styles.headerBtnAll}`}
      >
        All
      </button>
    </div>
  );
}
