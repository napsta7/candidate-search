import {useOutletContext} from 'react-router-dom';
import Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const { candidates } = useOutletContext<{ candidates: Candidate[] }>(); //Passing the candidates array so that each saved candidate can be displayed in the table.
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Location</th>
        <th>Avatar</th>
        <th>Email</th>
        <th>GitHub</th>
        <th>Company</th>
      </tr>
      {candidates.length > 0 ? (
        candidates.map((candidate) => (
          <tr key={candidate.login}>
            <td>{candidate?.name}</td>
            <td>{candidate.login}</td>
            <td>{candidate?.location}</td>
            <td className = 'tableImage'><img className = 'tableImage' src={candidate.avatar_url}></img></td>
            <td>{candidate?.email}</td>
            <td>{candidate.html_url}</td>
            <td>{candidate?.company}</td>
          </tr>
        ))
      ) : (
        <p>No candidates saved.</p>
      )}
    </table>
  ); //For each candidate in the array, a new table row with that user's information is displayed.
}

export default SavedCandidates;