import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
<div
      className="
        min-h-screen
        bg-white dark:bg-zinc-950
        text-zinc-900 dark:text-zinc-100
        transition-colors duration-300 ease-in-out
      "
    >
      <Header />
      <Hero />
    </div>
  )
}

export default App