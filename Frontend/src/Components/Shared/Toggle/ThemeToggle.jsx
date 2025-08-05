import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from "react";


const getPreferredTheme = () => {
  if (localStorage.theme === "light") return "light";
  if (localStorage.theme === "dark") return "dark";
  // System preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export default function ThemeToggle() {
 const [theme, setTheme] = useState(getPreferredTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
 <label className="flex cursor-pointer gap-2">
<Sun height={20} width={20}/>
  <input
   type="checkbox"
   value={'dark'}
     onChange={toggleTheme}
        checked={theme === "dark"}
         className="toggle " />
<Moon height={20} width={20} />
</label>
  )
}
