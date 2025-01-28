import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Candidate from './interfaces/Candidate.interface';
import { useState, useEffect } from 'react';

function App() { //the candidates array is defined here so that it can be passed to CandidateSearch as well as SavedCandidates
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem('candidates');
    if (storedCandidates) { //if there are stored candidates, they are JSON.parsed
      setCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('candidates', JSON.stringify(candidates)); //Puts the candidates array into the user's local storage
  }, [candidates]);

  const addCandidate = (candidate: Candidate) => { //Function to save a candidate to the candidates array
    setCandidates((prevCandidates) => [...prevCandidates, candidate]);
  };

  return (
    <>
      <Nav />
      <main>
        {/* Pass candidates and addCandidate function to Outlet */}
        <Outlet context={{ candidates, addCandidate }} />
      </main>
    </>
  );
}

export default App;
