import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: (() => void) | undefined
  switchable: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  switchable = false,
}: {
  children: ReactNode
  defaultTheme?: Theme
  switchable?: boolean
}) {
  const [theme, setTheme] = useState<Theme>(() =>
    switchable ? (localStorage.getItem("theme") as Theme) || defaultTheme : defaultTheme
  )

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
    if (switchable) {
      localStorage.setItem("theme", theme)
    }
  }, [theme, switchable])

  const toggleTheme = switchable
    ? () => setTheme((prev) => (prev === "light" ? "dark" : "light"))
    : undefined

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, switchable }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within ThemeProvider")
  return context
}
