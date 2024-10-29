// ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

// Define the context type
interface ThemeContextType {
  theme: "dark" | "light";
  toggleTheme: () => void;
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Load theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  // Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Set the theme class on the body
  useEffect(() => {
    const root = document?.querySelector("html");
    if (root) {
      root.className = theme;
      root.style.colorScheme = theme;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
