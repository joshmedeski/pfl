export interface BelongsToCollection {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface MovieDetails {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: BelongsToCollection
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export const mockMovieDetails: MovieDetails = {
  adult: false,
  backdrop_path: "/ncEsesgOJDNrTUED89hYbA117wo.jpg",
  belongs_to_collection: {
    id: 2344,
    name: "The Matrix Collection",
    poster_path: "/bV9qTVHTVf0gkW0j7p7M0ILD4pG.jpg",
    backdrop_path: "/bRm2DEgUiYciDw3myHuYFInD7la.jpg",
  },
  budget: 63000000,
  genres: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
  ],
  homepage: "http://www.warnerbros.com/matrix",
  id: 603,
  imdb_id: "tt0133093",
  original_language: "en",
  original_title: "The Matrix",
  overview:
    "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
  popularity: 149.739,
  poster_path: "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  production_companies: [
    {
      id: 79,
      logo_path: "/tpFpsqbleCzEE2p5EgvUq6ozfCA.png",
      name: "Village Roadshow Pictures",
      origin_country: "US",
    },
    {
      id: 372,
      logo_path: null,
      name: "Groucho II Film Partnership",
      origin_country: "",
    },
    {
      id: 1885,
      logo_path: "/xlvoOZr4s1PygosrwZyolIFe5xs.png",
      name: "Silver Pictures",
      origin_country: "US",
    },
    {
      id: 174,
      logo_path: "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
      name: "Warner Bros. Pictures",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "1999-03-30",
  revenue: 463517383,
  runtime: 136,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "Welcome to the Real World.",
  title: "The Matrix",
  video: false,
  vote_average: 8.2,
  vote_count: 20896,
}
