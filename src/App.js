import { useState, useEffect } from "react";
import './App.css';
import { Button } from "@material-tailwind/react";

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])
  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="bg-blue-gray-100 dark:bg-black h-screen w-screen flex items-center justify-center">
      <Button onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')}>Mode</Button>
    </div>
  )
}
