import Candidate from '../interfaces/Candidate.interface';

const Row: React.FC<Candidate> = ({ name, login, location, avatar_url, email, html_url, company }) => {
    return (
        <tr>
            <td><img src={avatar_url} alt={`${name}'s avatar`} /></td>
            <td>{name}</td>
            <td>{login}</td>
            <td>{location}</td>
            <td>{email}</td>
            <td>{html_url}</td>
            <td>{company}</td>
        </tr>
    );
};

export default Row;