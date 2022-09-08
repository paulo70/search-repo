import { useContext } from 'react'
import { SearchContext } from '../../context/search'
import './style.css'
const Search = () => {
  const { value, setValue } = useContext(SearchContext)

  return (
    <input
      type="search"
      placeholder="busque pelo repositorio"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

export default Search