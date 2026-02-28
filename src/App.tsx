import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
<div
      className="
        min-h-screen
        bg-white dark:bg-zinc-950
        text-zinc-900 dark:text-zinc-100
        transition-colors duration-300 ease-in-out"
    >
      <Header />
      <Hero />
      <Contact/>
    </div>
  )
}

export default App