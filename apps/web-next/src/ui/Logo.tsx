import { FilmIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'

const Icon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 512 364.21"
    >
      <path
        d="M107.46,73.89H68.83v37H29.21v-37H0V438.11H29.21v-33.3H68.83v33.3H441.26v-33.3h41.53v33.3H512V73.89H482.79v37H441.26v-37H107.46ZM68.83,375.6H29.21v-37H68.83Zm0-66.19H29.21v-37H68.83Zm0-66.18H29.21v-37H68.83Zm0-66.18H29.21v-37H68.83Zm414-37v37H441.26v-37h41.53ZM441.26,243.23v-37h41.53v37Zm41.53,29.21v37H441.26v-37ZM441.26,375.6v-37h41.53v37Z"
        transform="translate(0 -73.89)"
        className="text-gray-300 dark:text-gray-700"
        style={{ fill: 'currentColor' }}
      />
      <rect
        x="96.22"
        y="26.78"
        width="317.66"
        height="310.65"
        className="text-gray-50 dark:text-gray-900"
        style={{ fill: 'currentColor' }}
      />

      <polygon
        points="257.82 97.17 282.83 152 342.71 158.84 298.29 199.58 310.29 258.64 257.82 228.98 205.36 258.64 217.35 199.58 172.93 158.84 232.81 152 257.82 97.17"
        className="text-cta-600 dark:text-cta-400"
        style={{ fill: 'currentColor' }}
      />
    </svg>
  )
}

const Logo: React.FC = () => {
  return (
    <div className="flex-shrink-0 flex flex-col items-center">
      <Link href="/">
        <a>
          <Icon className="h-12 w-auto mx-auto mb-1" />
          <h1 className="text-center text-sm font-bold text-neutral-800 dark:text-neutral-200">
            PFL
          </h1>
        </a>
      </Link>
    </div>
  )
}

export default Logo
