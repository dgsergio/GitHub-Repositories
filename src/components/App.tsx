import Card from './Card';
import { useEffect, useState } from 'react';
import { Github } from '../App.model';
import useFetch from '../hooks/useFetch';

const App = () => {
  const [repos, setRepos] = useState<Github[]>([]);
  const { sendRequest, status } = useFetch();

  const trasnformRepos = (repos: Github[]) => {
    let newData: Github[] = [];
    for (const item of repos) {
      newData.push({
        id: item.id,
        name: item.name,
        html_url: item.html_url,
        description: item.description,
        topics: [...item.topics],
      });
    }
    setRepos(newData);
  };

  useEffect(() => {
    console.log('ef');
    sendRequest('https://api.github.com/users/dgsergio/repos', trasnformRepos);
  }, []);

  return (
    <>
      <h1>Github repositories</h1>
      <main>
        {status.loading && <div className="message">Loading...</div>}
        {status.error && !status.loading && (
          <div className="message error">{status.error}</div>
        )}
        <div className="cards">
          {repos.length > 0 &&
            !status.loading &&
            !status.error &&
            repos.map((repo) => <Card key={repo.id} repo={repo} />)}
        </div>
      </main>
    </>
  );
};

export default App;
