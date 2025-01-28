// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    name?: string; //Properties that may not be available are optional
    login: string;
    location?: string;
    avatar_url: string;
    email?: string;
    html_url: string;
    company?: string;
}

export default Candidate;