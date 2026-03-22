import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = ['About', 'Skills', 'Experience', 'Service', 'Contact']

const neuStyles = `
  .neu-switch { position:relative; width:80px; height:40px; background:#d6d6d6; border-radius:50px; box-shadow:inset -5px -5px 10px #fff, inset 5px 5px 10px #b0b0b0; cursor:pointer; }
  .dark .neu-switch { background:#1e1e2e; box-shadow:inset -5px -5px 10px #2a2a3e, inset 5px 5px 10px #12121a; }
  .neu-switch input { display:none; }
  .neu-knob { position:absolute; width:32px; height:30px; top:5px; left:5px; border-radius:50px; background:linear-gradient(145deg,#e0e0e0,#c8c8c8); box-shadow:-3px -3px 6px #fff, 3px 3px 6px #b0b0b0; display:flex; align-items:center; justify-content:center; transition:left .3s; }
  .neu-switch input:checked ~ .neu-knob { left:43px; }
  .neu-led { width:8px; height:8px; border-radius:50%; background:#aaa; transition:all .3s; }
  .neu-switch input:checked ~ .neu-knob .neu-led { background:#facc15; box-shadow:0 0 10px 3px #facc15; }
`

function NeuToggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <label className="neu-switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <div className="neu-knob"><div className="neu-led" /></div>
    </label>
  )
}

export default function Header() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const toggle = () => setIsDark(d => !d)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <>
      <style>{neuStyles}</style>
      <header className="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[8vh]">
            <a href="#" className="text-2xl font-bold text-primary">Valisoa</a>

            <div className="hidden md:flex items-center gap-8">
              <nav className="flex gap-6 text-sm font-medium">
                {navItems.map(item => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">{item}</a>
                ))}
              </nav>
              <NeuToggle checked={isDark} onChange={toggle} />
            </div>

            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-5 space-y-4 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm">{isDark ? 'Dark' : 'Light'}</span>
              <NeuToggle checked={isDark} onChange={toggle} />
            </div>
            {navItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block hover:text-primary text-[1.5rem]" onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
          </div>
        )}
      </header>
    </>
  )
}