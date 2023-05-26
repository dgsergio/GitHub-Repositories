import { Github } from '../App.model';

const Card = ({ repo }: { repo: Github }) => {
  return (
    <div className="card">
      <h2>{repo.name}</h2>
      <img
        className="card-imgs-mark"
        src="/img/github-mark.png"
        alt="github logo"
      />
      <img
        className="card-imgs-mark"
        src="/img/gitHub_Logo.png"
        alt="github trade-mark"
      />
      <p>{repo.description}</p>
      <button>The Repository</button>
      <span>{repo.topics.join(', ')}</span>
    </div>
  );
};

export default Card;
