import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const storedCandidates = localStorage.getItem('candidates');
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);

  useEffect(() => {
    if (storedCandidates) {
      setCandidates(JSON.parse(storedCandidates));
    }
  }, [storedCandidates]);

  useEffect(() => {
    localStorage.setItem('candidates', JSON.stringify(candidates));
  }, [candidates]);

  const getCandidates = async () => {
    try {
      const candidatesList = await searchGithub();
      const randomCandidate = candidatesList[Math.floor(Math.random() * candidatesList.length)];
      const userInfo = await searchGithubUser(randomCandidate.login);
      setCurrentCandidate(userInfo);
    } catch (err) {
      console.log('Error fetching GitHub user(s):', err);
    }
  };

  useEffect(() => {
    getCandidates();
  }, []);

  const addCandidate = async() => {
    if (currentCandidate) {
      candidates.push(currentCandidate);
      getCandidates();
      console.log('CANDIDATES ARRAY:', candidates);
    }
  }

  return (
    <section className = 'candidateCard'>
      {currentCandidate ? (
        <>
          <img src={currentCandidate.avatar_url}></img>
          <p>{currentCandidate?.name}</p>
          <p>{currentCandidate.login}</p>
          <p>{currentCandidate?.location}</p>
          <p>{currentCandidate?.email}</p>
          <p>{currentCandidate?.company}</p>
          <a href={currentCandidate.html_url}>{currentCandidate.html_url}</a>
          <button onClick={getCandidates}>❌</button>
          <button onClick={addCandidate}>✅</button>
        </>
      ) : (
        <p>Loading Candidate...</p>
      )}
    </section>
  );
};

export default CandidateSearch;