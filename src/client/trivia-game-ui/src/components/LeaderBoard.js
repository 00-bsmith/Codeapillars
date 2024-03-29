import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../AuthContext";

const LeaderBoard = () => {
  const [shortScoreEntries, setShortScoreEntries] = useState([]);
  const [mediumScoreEntries, setMediumScoreEntries] = useState([]);
  const [longScoreEntries, setLongScoreEntries] = useState([]);
  // const [scoreId, setScoreId] = useState(0);
  // const [initials, setInitials] = useState("");
  // const [score, setScore] = useState(0);
  // const [scoreDateTime, setScoreDateTime] = useState("");

  const auth = useContext(AuthContext);
  const apiUrl = window.API_URL;
  const getShortData = async () => {
    const init = {
      method: "GET",
      // headers: {
      //   Authorization: `Bearer ${auth.user.token}`,
      // }
    };

    fetch(`${apiUrl}/score/short/hiscores`, init)
      .then((response) => response.json())
      .then((data) => setShortScoreEntries(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getShortData();
  }, []);

  const getMediumData = async () => {
    const init = {
      method: "GET",
      // headers: {
      //   Authorization: `Bearer ${auth.user.token}`,
      // }
    };

    fetch(`${apiUrl}/score/medium/hiscores`, init)
      .then((response) => response.json())
      .then((data) => setMediumScoreEntries(data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getMediumData();
  }, []);

  const getLongData = async () => {
    const init = {
      method: "GET",
      // headers: {
      //   Authorization: `Bearer ${auth.user.token}`,
      // }
    };

    fetch(`${apiUrl}/score/long/hiscores`, init)
      .then((response) => response.json())
      .then((data) => setLongScoreEntries(data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getLongData();
  }, []);

  const handleShortDelete = async (scoreId) => {
    try {
      const response = await fetch(
        `${apiUrl}/score/short/${scoreId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${auth.user.token}`,
          },
        }
      );

      if (response.status === 204) {
        const newScoreEntry = shortScoreEntries.filter(
          (entry) => entry.scoreId !== scoreId
        );
        setShortScoreEntries(newScoreEntry);
      } else {
        throw new Error("Server Error: Something unexpected went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleMediumDelete = async (scoreId) => {
    try {
      const response = await fetch(
        `${apiUrl}/score/medium/${scoreId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${auth.user.token}`,
          },
        }
      );

      if (response.status === 204) {
        const newScoreEntry = mediumScoreEntries.filter(
          (entry) => entry.scoreId !== scoreId
        );
        setMediumScoreEntries(newScoreEntry);
      } else {
        throw new Error("Server Error: Something unexpected went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLongDelete = async (scoreId) => {
    try {
      const response = await fetch(
        `${apiUrl}/score/long/${scoreId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${auth.user.token}`,
          },
        }
      );

      if (response.status === 204) {
        const newScoreEntry = longScoreEntries.filter(
          (entry) => entry.scoreId !== scoreId
        );
        setLongScoreEntries(newScoreEntry);
      } else {
        throw new Error("Server Error: Something unexpected went wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 style={{ margin: "18px" }}>Leaderboards</h1>
      <h2 style={{ margin: "18px" }} className="my-4">
        Short Round Leaderboard
        <hr />
      </h2>
      
      <table className="table table-borderless table-hover " >
        <thead>
          <tr>
            <th scope="col">Initials</th>
            <th scope="col">Score</th>
            <th scope="col">Date</th>
            <th scope="col">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {shortScoreEntries.map((shortScoreEntry) => (
            <tr key={shortScoreEntry.score}>
              <td>{shortScoreEntry.initials}</td>
              <td>{shortScoreEntry.score}</td>
              <td>{shortScoreEntry.scoreDateTime}</td>
              <td>
                {auth.user ? (
                  <button
                    onClick={() => handleShortDelete(shortScoreEntry.scoreId)}
                    className="btn btn-danger btn-sm ml-2"
                  >
                    Delete
                  </button>
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h2 style={{ margin: "18px" }} className="my-4">
        Medium Round Leaderboard
        <hr />
      </h2>
      
      <table className="table table-borderless table-hover " >
        <thead>
          <tr>
            <th scope="col">Initials</th>
            <th scope="col">Score</th>
            <th scope="col">Date</th>
            <th scope="col">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {mediumScoreEntries.map((mediumScoreEntry) => (
            <tr key={mediumScoreEntry.score}>
              <td>{mediumScoreEntry.initials}</td>
              <td>{mediumScoreEntry.score}</td>
              <td>{mediumScoreEntry.scoreDateTime}</td>
              <td>
                {auth.user ? (
                  <button
                    onClick={() => handleMediumDelete(mediumScoreEntry.scoreId)}
                    className="btn btn-danger btn-sm ml-2"
                  >
                    Delete
                  </button>
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <h2 style={{ margin: "18px" }} className="my-4">
        Long Round Leaderboard
        <hr />
      </h2>
      
      <table className="table table-borderless table-hover " >
        <thead>
          <tr>
            <th scope="col">Initials</th>
            <th scope="col">Score</th>
            <th scope="col">Date</th>
            <th scope="col">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {longScoreEntries.map((longScoreEntry) => (
            <tr key={longScoreEntry.score}>
              <td>{longScoreEntry.initials}</td>
              <td>{longScoreEntry.score}</td>
              <td>{longScoreEntry.scoreDateTime}</td>
              <td>
                {auth.user ? (
                  <button
                    onClick={() => handleLongDelete(longScoreEntry.scoreId)}
                    className="btn btn-danger btn-sm ml-2"
                  >
                    Delete
                  </button>
                ) : (
                  ""
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LeaderBoard;
