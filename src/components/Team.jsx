import styles from "./Team.module.scss";
import DisplayConf from "./DisplayConf";
import OneTeam from "./OneTeam";

export default function Team({ person, teams, licensed, setLicensed, view }) {
  //   console.log({ person });
  //   console.log({ teams });

  function handleLicensed() {
    setLicensed(!licensed);
    if (!licensed) {
      setLicensed(true);
    } else {
      setLicensed(false);
    }
  }
  return (
    <>
      <div
        className="d-flex flex-row justify-content-center align-items-center mt-30"
        style={{ width: "100%" }}
      >
        {licensed ? (
          <h2 className={`  ${styles.presentation}`}>
            Welcome {person.name} !
          </h2>
        ) : (
          <p className={`  ${styles.p}`}>Vous devez être connecté</p>
        )}
        <button
          onClick={handleLicensed}
          className={`btn  m-5 ${styles.button}`}
        >
          {licensed ? "Logout" : "Login"}
        </button>
      </div>
      {licensed ? (
        <>
          {view !== "All" ? (
            <>
              <DisplayConf teams={teams} view={view} />
            </>
          ) : (
            <>
              <DisplayConf teams={teams} view="East" />
              <DisplayConf teams={teams} view="West" />
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
