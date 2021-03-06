module.exports = {
  purge: {
    content: ['./src/**/*.html'],
    safelist: [
      'hover:bg-slate-900',
      'hover:bg-gray-900',
      'hover:bg-zinc-900',
      'hover:bg-neutral-900',
      'hover:bg-stone-900',
      'hover:bg-red-900',
      'hover:bg-orange-900',
      'hover:bg-amber-900',
      'hover:bg-yellow-900',
      'hover:bg-lime-900',
      'hover:bg-green-900',
      'hover:bg-emerald-900',
      'hover:bg-teal-900',
      'hover:bg-cyan-900',
      'hover:bg-sky-900',
      'hover:bg-blue-900',
      'hover:bg-indigo-900',
      'hover:bg-violet-900',
      'hover:bg-purple-900',
      'hover:bg-fuchsia-900',
      'hover:bg-pink-900',
      'hover:bg-rose-900',

      'hover:border-slate-500',
      'hover:border-gray-500',
      'hover:border-zinc-500',
      'hover:border-neutral-500',
      'hover:border-stone-500',
      'hover:border-red-500',
      'hover:border-orange-500',
      'hover:border-amber-500',
      'hover:border-yellow-500',
      'hover:border-lime-500',
      'hover:border-green-500',
      'hover:border-emerald-500',
      'hover:border-teal-500',
      'hover:border-cyan-500',
      'hover:border-sky-500',
      'hover:border-blue-500',
      'hover:border-indigo-500',
      'hover:border-violet-500',
      'hover:border-purple-500',
      'hover:border-fuchsia-500',
      'hover:border-pink-500',
      'hover:border-rose-500',

      'text-slate-300',
      'text-gray-300',
      'text-zinc-300',
      'text-neutral-300',
      'text-stone-300',
      'text-red-300',
      'text-orange-300',
      'text-amber-300',
      'text-yellow-300',
      'text-lime-300',
      'text-green-300',
      'text-emerald-300',
      'text-teal-300',
      'text-cyan-300',
      'text-sky-300',
      'text-blue-300',
      'text-indigo-300',
      'text-violet-300',
      'text-purple-300',
      'text-fuchsia-300',
      'text-pink-300',
      'text-rose-300',

      'border-slate-500',
      'border-gray-500',
      'border-zinc-500',
      'border-neutral-500',
      'border-stone-500',
      'border-red-500',
      'border-orange-500',
      'border-amber-500',
      'border-yellow-500',
      'border-lime-500',
      'border-green-500',
      'border-emerald-500',
      'border-teal-500',
      'border-cyan-500',
      'border-sky-500',
      'border-blue-500',
      'border-indigo-500',
      'border-violet-500',
      'border-purple-500',
      'border-fuchsia-500',
      'border-pink-500',
      'border-rose-500',

      'bg-slate-500',
      'bg-gray-500',
      'bg-zinc-500',
      'bg-neutral-500',
      'bg-stone-500',
      'bg-red-500',
      'bg-orange-500',
      'bg-amber-500',
      'bg-yellow-500',
      'bg-lime-500',
      'bg-green-500',
      'bg-emerald-500',
      'bg-teal-500',
      'bg-cyan-500',
      'bg-sky-500',
      'bg-blue-500',
      'bg-indigo-500',
      'bg-violet-500',
      'bg-purple-500',
      'bg-fuchsia-500',
      'bg-pink-500',
      'bg-rose-500'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        zinc: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        stone: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
        orange: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        amber: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        lime: {
          50: '#F7FEE7',
          100: '#ECFCCB',
          200: '#D9F99D',
          300: '#BEF264',
          400: '#A3E635',
          500: '#84CC16',
          600: '#65A30D',
          700: '#4D7C0F',
          800: '#3F6212',
          900: '#365314',
        },
        emerald: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        teal: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        cyan: {
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63',
        },
        sky: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
        violet: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        fuchsia: {
          50: '#FDF4FF',
          100: '#FAE8FF',
          200: '#F5D0FE',
          300: '#F0ABFC',
          400: '#E879F9',
          500: '#D946EF',
          600: '#C026D3',
          700: '#A21CAF',
          800: '#86198F',
          900: '#701A75',
        },
        rose: {
          50: '#FFF1F2',
          100: '#FFE4E6',
          200: '#FECDD3',
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#F43F5E',
          600: '#E11D48',
          700: '#BE123C',
          800: '#9F1239',
          900: '#881337',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// slate, zinc, neutral, stone, orange, amber, lime, emerald, teal, cyan, sky, violet, fuchsia, rose
