import {
  CloseIcon,
  Icon,
  LibraryIcon,
  LoginIcon,
  MovieIcon,
  PeopleIcon,
  SearchIcon,
  SettingsIcon,
  ToWatchIcon,
  TvIcon,
  WatchedIcon
} from '@/ui/Icon'

export type NavItem = {
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  name: string
  href: string
}

export const primaryNav: NavItem[] = [
  { name: 'Library', href: '/', icon: LibraryIcon },
  { name: 'People', href: '/people', icon: PeopleIcon },
  { name: 'Movies', href: '/movies', icon: MovieIcon },
  { name: 'TV Shows', href: '/tv', icon: TvIcon },
  { name: 'Search', href: '/search', icon: SearchIcon }
  //{ name: 'To Watch', href: '/to-watch', icon: ToWatchIcon },
  //{ name: 'Watched', href: '/watched', icon: WatchedIcon },
]

export const secondaryNav: NavItem[] = [
  { name: 'Login', href: '/login', icon: LoginIcon },
  { name: 'Settings', href: '/settings', icon: SettingsIcon }
]
