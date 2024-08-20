import Header from "./components/header"
import List from "./components/list"
import Form from "./components/form"
import { SearchProvider } from "./contexts/search"

function App() {
  return (
    <div className={`flex items-center flex-col text-verkadaGray`}>
      <Header />
      <SearchProvider>
        <Form />
        <List />
      </SearchProvider>
    </div>
  )
}

export default App
