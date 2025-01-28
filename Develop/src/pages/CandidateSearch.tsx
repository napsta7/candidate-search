import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {//Passing the candidates array as well as addCandidate to update the array with new candidates
  const { candidates, addCandidate } = useOutletContext<{ candidates: Candidate[]; addCandidate: (candidate: Candidate) => void }>();
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);//currentCandidate is updated with the setCurrentCandidate function

  const getCandidates = async () => { //This function gets a random list of github users, then selects a random one from that list. Then setCurrentCandidate is updated with that information
    try {
      const candidatesList = await searchGithub();
      const randomCandidate = candidatesList[Math.floor(Math.random() * candidatesList.length)];
      const userInfo = await searchGithubUser(randomCandidate.login);
      setCurrentCandidate(userInfo);
    } catch (err) {
      console.log('Error fetching GitHub user(s):', err);
    }
  };

  useEffect(() => { //getCandidates is called whenever the candidates array is updated, so whenever a user adds a new candidate
    getCandidates();
  }, [candidates]);

  const handleAddCandidate = () => { //When a user adds a candidate, addCandidate is called and passed the currentCandidate, then getCandidates is called again to get another user.
    if (currentCandidate) {
      addCandidate(currentCandidate);
      console.log('CANDIDATES ARRAY:', candidates);
      getCandidates();
    }
  };

  return ( //Section where the random user's info is displayed, with buttons to either go to the next candidate, or add the candidate which will also move on to the next candidate
    <section className='candidateCard'>
      {currentCandidate ? (
        <>
          <img src={currentCandidate.avatar_url} alt={currentCandidate.name} />
          <p>{currentCandidate?.name}</p>
          <p>{currentCandidate.login}</p>
          <p>{currentCandidate?.location}</p>
          <p>{currentCandidate?.email}</p>
          <p>{currentCandidate?.company}</p>
          <a href={currentCandidate.html_url}>{currentCandidate.html_url}</a>
          <button onClick={getCandidates}>❌</button>
          <button onClick={handleAddCandidate}>✅</button>
        </>
      ) : (
        <p>Loading Candidate...</p>
      )}
    </section>
  ); //If there is no current candidate, "Loading Candidate" is displayed.
};

export default CandidateSearch;