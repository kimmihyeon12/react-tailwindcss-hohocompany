module.exports = {
    mode: 'jit',
    purge: [
      './public/**/*.html',
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    corePlugins: {
        boxShadow: false,
      },
      plugins: [
        require('tailwindcss-box-shadow'),
        // ...
      ],
    theme: {
        extend:{
            fontFamily: {
                'neob': ['NeoB'],
                'neoeb': ['NeoEB'],
                'neoh': ['NeoH'],
                'neol': ['NeoL'],
                'neom': ['NeoM'],
                'neor': ['NeoR'],
                'neosb': ['NeoSB'],
                'neot': ['NeoT'],
                'neoul': ['NeoUL'] 
            },
            animation: {
                'bounce-1s': 'bounce 1s linear infinite',
                'bounce-2s': 'bounce 2s linear infinite',
                'bounce-3s': 'bounce 3s linear infinite',
                'bounce-4s': 'bounce 4s linear infinite',
               },
            dropShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            none: 'none',
            }

        },
        screens:{
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            'msm': { 'max': '640px' },
            'mmd': { 'max': '768px' },
            'mlg': { 'max': '1024px' },
            'mxl': { 'max': '1280px' },
            'm2xl': { 'max': '1536px' },
        },
      
    }
  }
