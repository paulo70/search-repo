import { useCallback, useContext, useEffect, useState } from 'react';
import Header from './components/Header'
import Search from './components/Search'

import { SearchContext } from './context/search'
import { getRepositories } from './serivces';

import './style.css'
function App() {

  const [data, setData] = useState([])
  const [allRepositories, setAllRepositories] = useState([])

  const [page, setPage] = useState(0);
  const [perPage] = useState(5);

  const { value } = useContext(SearchContext)

  const noMoreRepositories = page + perPage >= allRepositories.length

  const handleLoadRepo = useCallback(async () => {
    const raw = await getRepositories(`paulo70`)
    setData(raw.data.slice(page, perPage))
    setAllRepositories(raw.data)
  }, [page, perPage])

  const handleLoadMore = () => {
    const nextPage = page + perPage
    const nextRepositories = allRepositories.slice(nextPage, nextPage + perPage)

    data.push(...nextRepositories)
    setData(data)
    setPage(nextPage)
  }


  const filteredRepositories = !!value ?
    allRepositories.filter(repo => {
      return repo.name.toLowerCase().includes(
        value.toLowerCase()
      )
    }) : data

  useEffect(() => {
    handleLoadRepo()
  }, [handleLoadRepo])

  return (
    <div className="App">
      <Header>
        <Search />
      </Header>
      {
        filteredRepositories.length > 0
          ?
          filteredRepositories?.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))
          : <p>repositório não encontrado</p>
      }

      {!value ?
        <button
          onClick={handleLoadMore}
          disabled={noMoreRepositories}
        >
          carregar repositorios
        </button>
        : ''
      }

    </div>
  );
}

export default App;
