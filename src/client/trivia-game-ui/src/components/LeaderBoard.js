import React, { useContext, useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import AuthContext from '../AuthContext';

const LeaderBoard = () => {
  const [shortScoreEntries, setShortScoreEntries] = useState([]);
  const [mediumScoreEntries, setMediumScoreEntries] = useState([]);
  const [longScoreEntries, setLongScoreEntries] = useState([]);
  const [initials, setInitials] = useState("");
  const [score, setScore] = useState(0);
  const [date, setDate] = useState("");

  const auth = useContext(AuthContext);

  const getShortData = async () => {
    const init = {
      method: 'GET',
      // headers: {
      //   Authorization: `Bearer ${auth.user.token}`,
      // }
    };

    fetch("http://localhost:8080/api/score/short", init)
      .then((response) => response.json())
      .then((data) => setShortScoreEntries(data))
      .catch((error) => console.log(error));
  };
  
  useEffect(() => {
    getShortData();
  }, []);

  const getMediumData = async () => {
    const init = {
      method: 'GET',
      // headers: {
      //   Authorization: `Bearer ${auth.user.token}`,
      // }
    };

    fetch("http://localhost:8080/api/score/medium", init)
      .then((response) => response.json())
      .then((data) => setShortScoreEntries(data))
      .catch((error) => console.log(error));
  };
  
  useEffect(() => {
    getMediumData();
  }, []);

  const getLongData = async () => {
    const init = {
      method: 'GET',
      // headers: {
      //   Authorization: `Bearer ${auth.user.token}`,
      // }
    };

    fetch("http://localhost:8080/api/score/long", init)
      .then((response) => response.json())
      .then((data) => setShortScoreEntries(data))
      .catch((error) => console.log(error));
  };
  
  useEffect(() => {
    getLongData();
  }, []);

  return (
      <>
    <h1>Leaderboards</h1>
    <Navbar />
    <h2 className='my-4'>Short Round Leaderboard</h2>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th scope='col'>Initials</th>
            <th scope='col'>Score</th>
            <th scope='col'>Date</th>
          </tr>
        </thead>
        <tbody>
          {shortScoreEntries.map((shortScoreEntry) => (
            <tr key={shortScoreEntry.score}>
              <td>{shortScoreEntry.initials}</td>
              <td>{shortScoreEntry.score}</td>
              <td>{shortScoreEntry.date}</td>
            </tr>
          )) }
        </tbody>
      </table>
      <h2 className='my-4'>Medium Round Leaderboard</h2>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th scope='col'>Initials</th>
            <th scope='col'>Score</th>
            <th scope='col'>Date</th>
          </tr>
        </thead>
        <tbody>
          {mediumScoreEntries.map((mediumScoreEntry) => (
            <tr key={mediumScoreEntry.score}>
              <td>{mediumScoreEntry.initials}</td>
              <td>{mediumScoreEntry.score}</td>
              <td>{mediumScoreEntry.date}</td>
            </tr>
          )) }
        </tbody>
      </table>
      <h2 className='my-4'>Long Round Leaderboard</h2>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th scope='col'>Initials</th>
            <th scope='col'>Score</th>
            <th scope='col'>Date</th>
          </tr>
        </thead>
        <tbody>
          {longScoreEntries.map((longScoreEntry) => (
            <tr key={longScoreEntry.score}>
              <td>{longScoreEntry.initials}</td>
              <td>{longScoreEntry.score}</td>
              <td>{longScoreEntry.date}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </>
  )
}

export default LeaderBoard