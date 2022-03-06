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
          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
        />
      </svg>
    </span>
  )
}

export default NextIcon
