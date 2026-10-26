/* Sestavení CSS (po každé změně tříd v HTML):
   npx tailwindcss@3.4.17 -i src/input.css -o styles.css --minify */
module.exports = {
  content: ['./*.html', './script.js'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0B0F17',
          card: '#131926',
          cardBorder: '#1F293D',
          purple: '#8B5CF6',
          purpleSoft: '#A78BFA',
          cyan: '#06B6D4',
          emerald: '#10B981'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif']
      }
    }
  }
};
