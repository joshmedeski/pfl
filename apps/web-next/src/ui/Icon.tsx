import {
  CogIcon,
  DesktopComputerIcon,
  EyeIcon,
  FilmIcon,
  LibraryIcon as HeroLibraryIcon,
  LoginIcon as HeroLoginIcon,
  SearchIcon as HeroSearchIcon,
  InboxIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
  XIcon
} from '@heroicons/react/outline'
import classNames from 'classnames'
import React from 'react'

export const CloseIcon = XIcon
export const LibraryIcon = HeroLibraryIcon
export const LoginIcon = HeroLoginIcon
export const MovieIcon = FilmIcon
export const PeopleIcon = UsersIcon
export const PersonIcon = UserIcon
export const SearchIcon = HeroSearchIcon
export const SettingsIcon = CogIcon
export const ToWatchIcon = InboxIcon
export const TvIcon = DesktopComputerIcon
export const WatchedIcon = EyeIcon

export const Icon: React.FC<{
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  isActive: boolean
  className?: string
  onClick?: Function
}> = (props) => {
  const sharedWrapperClasses = classNames([
    'inline-block',
    'h-10 w-10',
    'p-2 rounded-full overflow-hidden',
    'bg-opacity-60 dark:bg-opacity-70',
    'bg-gray-300 dark:bg-gray-700'
  ])
  const sharedIconClasses = 'h-full w-full'

  if (props.onClick) {
    return (
      <button onClick={() => props.onClick}>
        <span
          className={classNames([
            'bg-blue-200 dark:bg-blue-800',
            'group-hover:bg-blue-200 group-hover:dark:bg-blue-800',
            sharedWrapperClasses
          ])}
        >
          <props.icon
            className={classNames([
              'text-blue-700 dark:text-blue-200',
              sharedIconClasses,
              props.className
            ])}
          />
        </span>
      </button>
    )
  }

  return (
    <span
      className={classNames([
        'bg-neutral-100 dark:bg-neutral-800',
        sharedWrapperClasses
      ])}
    >
      <props.icon
        className={classNames([
          'text-neutral-800 dark:text-neutral-400',
          sharedIconClasses
        ])}
      />
    </span>
  )
}

export const TvSvg = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="currentColor"
        fillOpacity="1"
        strokeWidth="0.2"
        style={{ fill: 'currentColor' }}
        strokeLinejoin="round"
        d="M 43.5,20.5C 44.1183,19.8817 45.3817,19.8817 46,20.5C 46.6183,21.1183 46.6183,22.1317 46,22.75L 41.75,27L 54,27C 56.6234,27 59,29.3766 59,32L 59,52C 59,54.6234 56.6234,57 54,57L 22,57C 19.3766,57 17,54.6234 17,52L 17,32C 17,29.3766 19.3766,27 22,27L 31.25,27L 27,22.75C 26.3817,22.1317 26.3817,21.1183 27,20.5C 27.6183,19.8817 28.8817,19.8817 29.5,20.5L 36,27L 37.25,27L 43.5,20.5 Z M 22,32L 22,52L 46,52L 46,32L 22,32 Z M 52.25,31.6667C 50.5011,31.6667 49.0833,33.0845 49.0833,34.8334C 49.0833,36.5823 50.5011,38 52.25,38C 53.9989,38 55.4166,36.5823 55.4166,34.8334C 55.4166,33.0845 53.9989,31.6667 52.25,31.6667 Z M 52.2499,41.1667C 50.501,41.1667 49.0833,42.5845 49.0833,44.3334C 49.0833,46.0823 50.501,47.5 52.2499,47.5C 53.9988,47.5 55.4166,46.0823 55.4166,44.3334C 55.4166,42.5845 53.9988,41.1667 52.2499,41.1667 Z "
      />
    </svg>
  )
}
