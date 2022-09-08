import { createContext, memo, useState } from "react"

export const SearchContext = createContext()
SearchContext.displayName = "Search"

const SearchContextProvider = ({ children }) => {
  const [value, setValue] = useState('')
  return (
    <SearchContext.Provider value={{ value, setValue }}>
      {children}
    </SearchContext.Provider>
  )
}

export default memo(SearchContextProvider) 