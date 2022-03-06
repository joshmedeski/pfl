import React from 'react'

const NextIcon: React.FC = () => {
  return (
    <span className="inline-block h-16 w-16 p-2 rounded-full overflow-hidden bg-neutral-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full text-neutral-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
    </span>
  )
}

export default NextIcon
