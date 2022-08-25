import * as S from './styles';
import { useEffect, useState } from 'react';
import axios from 'axios';

const URL_GITHUB_REPOS = 'https://api.github.com/users/Gustavo-Jezini/repos';
const pinedRepos = ['nasa-apod', 'desafio-DigitalRepublic', 'Full-Stack-project-for-study', 'boilerplate']

const SectionGithub = () => {
  const [repositories, setRepositories] = useState([
    {
      name: '',
      html_url: '',
      language: ''
    }
  ]);

  useEffect(() => {
    const fetchThePinedRepos = async () => {
      const {data: repos} = await axios.get(URL_GITHUB_REPOS);
      const justPinedRepos = repos
        .filter((repo: any) => (pinedRepos).includes(repo.name))

      setRepositories(justPinedRepos);
    }

    fetchThePinedRepos();
  }, [])

return (
  <S.Wrapper>
    <h1>GitHub</h1>
    {repositories.map((repository) => (
      <div key={repository.name}>
        <h3>{repository.name}</h3>
        <a href={repository.html_url} target='_blank' rel="noreferrer">{repository.html_url}</a>
        <p>{repository.language}</p>
      </div>
    ))}
  </S.Wrapper>
  )
}


export default SectionGithub
