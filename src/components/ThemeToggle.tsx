
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/Themecontext';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 border border-gray-200 dark:border-gray-700"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </motion.div>
      
      {/* Active state indicator */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-transparent"
        initial={false}
        animate={{ 
          borderColor: theme === 'light' ? 'transparent' : 'rgba(139, 92, 246, 0.5)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}