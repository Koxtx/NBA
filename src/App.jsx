import { useState } from "react";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Team from "./components/Team";

function App() {
  const teams = [
    {
      id: 1,
      name: "Boston",
      club: "Celtics",
      conference: "East",
      logo: "https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg",
    },
    {
      id: 2,
      name: "Brooklyn",
      club: "Nets",
      conference: "East",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Brooklyn_Nets_newlogo.svg",
    },
    {
      id: 3,
      name: "New York",
      club: "Knicks",
      conference: "East",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/25/New_York_Knicks_logo.svg",
    },
    {
      id: 4,
      name: "Philadelphia",
      club: "76ers",
      conference: "East",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0e/Philadelphia_76ers_logo.svg",
    },
    {
      id: 5,
      name: "Toronto",
      club: "Raptors",
      conference: "East",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/36/Toronto_Raptors_logo.svg",
    },
    {
      id: 6,
      name: "Chicago",
      club: "Bulls",
      conference: "East",
      logo: "https://upload.wikimedia.org/wikipedia/en/6/67/Chicago_Bulls_logo.svg",
    },
    {
      id: 7,
      name: "Cleveland",
      club: "Cavaliers",
      conference: "East",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Cleveland_Cavaliers_logo.svg",
    },
    {
      id: 8,
      name: "Detroit",
      club: "Pistons",
      conference: "East",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/39/Logo_of_the_Detroit_Pistons.png",
    },
    {
      id: 9,
      name: "Indiana",
      club: "Pacers",
      conference: "East",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1b/Indiana_Pacers.svg",
    },
    {
      id: 10,
      name: "Milwaukee",
      club: "Bucks",
      conference: "East",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/4a/Milwaukee_Bucks_logo.svg",
    },
    {
      id: 11,
      name: "Atlanta",
      club: "Hawks",
      conference: "East",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/24/Atlanta_Hawks_logo.svg",
    },
    {
      id: 12,
      name: "Charlotte",
      club: "Hornets",
      conference: "East",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/c4/Charlotte_Hornets_%282014%29.svg",
    },
    {
      id: 13,
      name: "Miami",
      club: "Heat",
      conference: "East",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/fb/Miami_Heat_logo.svg",
    },
    {
      id: 14,
      name: "Orlando",
      club: "Magic",
      conference: "East",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/10/Orlando_Magic_logo.svg",
    },
    {
      id: 15,
      name: "Washington",
      club: "Wizards",
      conference: "East",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/02/Washington_Wizards_logo.svg",
    },
    {
      id: 16,
      name: "Denver",
      club: "Nuggets",
      conference: "West",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/76/Denver_Nuggets.svg",
    },
    {
      id: 17,
      name: "Minneapolis",
      club: "Timberwolves",
      conference: "West",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/c2/Minnesota_Timberwolves_logo.svg",
    },
    {
      id: 18,
      name: "Oklahoma City",
      club: "Thunder",
      conference: "West",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/5d/Oklahoma_City_Thunder.svg",
    },
    {
      id: 19,
      name: "Portland",
      club: "Trail Blazers",
      conference: "West",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/21/Portland_Trail_Blazers_logo.svg",
    },
    {
      id: 20,
      name: "Salt Lake City",
      club: "Jazz",
      conference: "West",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/04/Utah_Jazz_logo_%282016%29.svg",
    },
    {
      id: 21,
      name: "San Francisco",
      club: "Warriors",
      conference: "West",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg",
    },
    {
      id: 22,
      name: "Los Angeles",
      club: "Clippers",
      conference: "West",
      logo: "https://upload.wikimedia.org/wikipedia/fr/b/b8/Clippers_de_Los_Angeles_2024.png",
    },
    {
      id: 23,
      name: "Los Angeles",
      club: "Lakers",
      conference: "West",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg",
    },
    {
      id: 24,
      name: "Phoenix",
      club: "Suns",
      conference: "West",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/dc/Phoenix_Suns_logo.svg",
    },
    {
      id: 25,
      name: "Sacramento",
      club: "Kings",
      conference: "West",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/c7/SacramentoKings.svg",
    },
    {
      id: 26,
      name: "Dallas",
      club: "Mavericks",
      conference: "West",
      logo: "https://upload.wikimedia.org/wikipedia/en/9/97/Dallas_Mavericks_logo.svg",
    },
    {
      id: 27,
      name: "Houston",
      club: "Rockets",
      conference: "West",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg",
    },
    {
      id: 28,
      name: "Memphis",
      club: "Grizzlies",
      conference: "West",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/f1/Memphis_Grizzlies.svg",
    },
    {
      id: 29,
      name: "New Orleans",
      club: "Pelicans",
      conference: "West",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0d/New_Orleans_Pelicans_logo.svg",
    },
    {
      id: 30,
      name: "San Antonio",
      club: "Spurs",
      conference: "West",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a2/San_Antonio_Spurs.svg",
    },
  ];

  const person = {
    name: "John",
    age: 20,
  };

  const [licensed, setLicensed] = useState(true);
  const [view, setview] = useState("All");
  function changeView(value) {
    setview(value);
  }
  return (
    <div className={`d-flex align-items-center flex-column  ${styles.main}`}>
      <Header view={view} changeView={changeView} />
      <Team
        view={view}
        person={person}
        teams={teams}
        licensed={licensed}
        setLicensed={setLicensed}
      />
    </div>
  );
}

export default App;
