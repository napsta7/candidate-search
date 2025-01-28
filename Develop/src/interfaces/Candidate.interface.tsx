// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    name?: string;
    login: string;
    location?: string;
    avatar_url: string;
    email?: string;
    html_url: string;
}

export default Candidate;