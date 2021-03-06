import React from 'react'
import { Link } from 'remix'

const Logo: React.FC = () => {
  return (
    <h1>
      <Link to="/" className="font-bold flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
          />
        </svg>

        <span>Personal Film Library</span>
      </Link>
    </h1>
  )
}

export default Logo
