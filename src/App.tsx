import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary">Bienvenue sur mon Portfolio</h1>
        <p className="mt-4 text-lg">Dark mode fonctionne ! Clique sur l'icône lune/soleil.</p>
      </main>
    </div>
  )
}

export default App