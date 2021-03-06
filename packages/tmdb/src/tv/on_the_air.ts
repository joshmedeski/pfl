export interface Result {
  backdrop_path: string | null
  first_air_date: string
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export interface TvShowsOnTheAir {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

export const mockTvShowsOnTheAir: TvShowsOnTheAir = {
  page: 1,
  results: [
    {
      backdrop_path: "/oKt4J3TFjWirVwBqoHyIvv5IImd.jpg",
      first_air_date: "2019-06-16",
      genre_ids: [18],
      id: 85552,
      name: "Euphoria",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Euphoria",
      overview:
        "A group of high school students navigate love and friendships in a world of drugs, sex, trauma, and social media.",
      popularity: 3319.83,
      poster_path: "/jtnfNzqZwN4E32FGGxx1YZaBWWf.jpg",
      vote_average: 8.4,
      vote_count: 5599,
    },
    {
      backdrop_path: "/sjx6zjQI2dLGtEL0HGWsnq6UyLU.jpg",
      first_air_date: "2021-12-29",
      genre_ids: [10765, 10759, 16],
      id: 115036,
      name: "The Book of Boba Fett",
      origin_country: ["US"],
      original_language: "en",
      original_name: "The Book of Boba Fett",
      overview:
        "Legendary bounty hunter Boba Fett and mercenary Fennec Shand must navigate the galaxy’s underworld when they return to the sands of Tatooine to stake their claim on the territory once ruled by Jabba the Hutt and his crime syndicate.",
      popularity: 2245.989,
      poster_path: "/gNbdjDi1HamTCrfvM9JeA94bNi2.jpg",
      vote_average: 8.1,
      vote_count: 447,
    },
    {
      backdrop_path: "/yfXSvNfF43S0cxpxCEKaU17yZ64.jpg",
      first_air_date: "1983-09-19",
      genre_ids: [10751],
      id: 2778,
      name: "Wheel of Fortune",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Wheel of Fortune",
      overview:
        "This game show sees contestants solve word puzzles, similar to those used in Hangman, to win cash and prizes determined by spinning a giant carnival wheel.",
      popularity: 1742.611,
      poster_path: "/2fvAIyVfFHQdhJ7OsJWuMlF7836.jpg",
      vote_average: 6.8,
      vote_count: 41,
    },
    {
      backdrop_path: "/ctxm191q5o3axFzQsvNPlbKoSYv.jpg",
      first_air_date: "2022-01-13",
      genre_ids: [10759, 35, 10765],
      id: 110492,
      name: "Peacemaker",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Peacemaker",
      overview:
        "The continuing story of Peacemaker – a compellingly vainglorious man who believes in peace at any cost, no matter how many people he has to kill to get it – in the aftermath of the events of “The Suicide Squad.”",
      popularity: 1616.273,
      poster_path: "/hE3LRZAY84fG19a18pzpkZERjTE.jpg",
      vote_average: 8.7,
      vote_count: 130,
    },
    {
      backdrop_path: "/vjcuLy14kxgxCaBToAudZWrGQQh.jpg",
      first_air_date: "2021-01-18",
      genre_ids: [],
      id: 117031,
      name: "People Puzzler",
      origin_country: [],
      original_language: "en",
      original_name: "People Puzzler",
      overview:
        'Three lucky contestants put their pop culture knowledge to the test to complete iconic, People Puzzler crosswords. The player with the most points at the end of three rounds wins the game and goes on to play the "Fast Puzzle Round" for an enormous cash prize.',
      popularity: 1457.789,
      poster_path: "/gELQSCY5KKIGQAmOHbcgcRGNlp5.jpg",
      vote_average: 5.5,
      vote_count: 11,
    },
    {
      backdrop_path: "/qCvtJIFowYDzEKk69r2cogNeXp7.jpg",
      first_air_date: "2021-01-04",
      genre_ids: [10764],
      id: 114885,
      name: "Big Brother",
      origin_country: ["NL"],
      original_language: "nl",
      original_name: "Big Brother",
      overview: "",
      popularity: 1421.165,
      poster_path: "/zmXxCP0op3PoCSiqXkSKDySbxe8.jpg",
      vote_average: 0,
      vote_count: 0,
    },
    {
      backdrop_path: "/l6zdjUDOaklBWfxqa7AtbLr2EnA.jpg",
      first_air_date: "2021-12-13",
      genre_ids: [10751, 35, 18],
      id: 135753,
      name: "Love Twist",
      origin_country: ["KR"],
      original_language: "ko",
      original_name: "사랑의 꽈배기",
      overview:
        "A drama depicting a sweet twist in love between the parents and children of three families around the love of two main characters.",
      popularity: 1354.858,
      poster_path: "/5bTF522eYn6g6r7aYqFpTZzmQq6.jpg",
      vote_average: 2,
      vote_count: 1,
    },
    {
      backdrop_path: "/z18KvDvFftrNyAMPOVFHkt8Bj8E.jpg",
      first_air_date: "2002-09-08",
      genre_ids: [10764, 10767],
      id: 153748,
      name: "Big Brother Famosos",
      origin_country: ["PT"],
      original_language: "pt",
      original_name: "Big Brother Famosos",
      overview:
        "Big Brother Famosos is the celebrity version of Big Brother Portugal.",
      popularity: 1297.233,
      poster_path: "/ynFd1Xmr2r05qPqalNZnh2uxuJ0.jpg",
      vote_average: 2,
      vote_count: 1,
    },
    {
      backdrop_path: "/ykbaElzavtSbsYG5KbG3pEpREtK.jpg",
      first_air_date: "2021-01-11",
      genre_ids: [10764],
      id: 116416,
      name: "Big Brother 7/7",
      origin_country: ["CA"],
      original_language: "fr",
      original_name: "Big Brother 7/7",
      overview: "",
      popularity: 1187.754,
      poster_path: "/iUYrQyv0p4UncFolsROm81VNbcB.jpg",
      vote_average: 0,
      vote_count: 0,
    },
    {
      backdrop_path: "/r8CGqB8IJNbA1IruHWquS7YttNB.jpg",
      first_air_date: "1995-10-23",
      genre_ids: [10766],
      id: 966,
      name: "Hollyoaks",
      origin_country: ["GB"],
      original_language: "en",
      original_name: "Hollyoaks",
      overview:
        "The daily soap that follows the loves, lives and misdemeanours of a group of people living in the Chester village of Hollyoaks where anything could, and frequently does, happen...",
      popularity: 975.045,
      poster_path: "/bpmLMZP3M1vLujPqHnOTnKVjRJY.jpg",
      vote_average: 5.2,
      vote_count: 36,
    },
    {
      backdrop_path: "/eD2U2RwxQosUDwvu19n46KvJEf9.jpg",
      first_air_date: "2021-09-13",
      genre_ids: [18, 35],
      id: 124549,
      name: "Marry Me, Marry You",
      origin_country: ["PH"],
      original_language: "tl",
      original_name: "Marry Me, Marry You",
      overview:
        "A couple navigates the traditional expectations attached to marriage — that it extends beyond one’s partner, and includes their friends and family, too.",
      popularity: 934.815,
      poster_path: "/7qZUC0AQmSi7pxNP6cH3swkb8Is.jpg",
      vote_average: 3.5,
      vote_count: 6,
    },
    {
      backdrop_path: null,
      first_air_date: "2021-11-15",
      genre_ids: [18],
      id: 122551,
      name: "Viral Scandal",
      origin_country: ["PH"],
      original_language: "tl",
      original_name: "Viral Scandal",
      overview:
        "The lives of a simple family becomes disrupted when a scandalous video involving their eldest daughter goes viral.",
      popularity: 933.451,
      poster_path: "/zPsJG3DRDeZZCoja9nnU6p4d67V.jpg",
      vote_average: 2,
      vote_count: 1,
    },
    {
      backdrop_path: "/8lBlBItnehgOAwFt0ezxlXuWeIO.jpg",
      first_air_date: "2021-11-08",
      genre_ids: [10766, 18],
      id: 132375,
      name: "Um Lugar ao Sol",
      origin_country: ["BR"],
      original_language: "pt",
      original_name: "Um Lugar ao Sol",
      overview: "",
      popularity: 900.031,
      poster_path: "/63qlVcvlVzOvMaFO8tFA2VG64Yc.jpg",
      vote_average: 5,
      vote_count: 5,
    },
    {
      backdrop_path: "/1CqkiWeuwlaMswG02q3mBmraiDM.jpg",
      first_air_date: "2021-12-09",
      genre_ids: [35, 18],
      id: 116450,
      name: "And Just Like That…",
      origin_country: ["US"],
      original_language: "en",
      original_name: "And Just Like That…",
      overview:
        "This new chapter of “Sex and the City” follows Carrie, Miranda and Charlotte as they navigate the journey from the complicated reality of life and friendship in their 30s to the even more complicated reality of life and friendship in their 50s.",
      popularity: 711.98,
      poster_path: "/ahFca8RIGGY0kWieDwHzybi0sT1.jpg",
      vote_average: 8,
      vote_count: 187,
    },
    {
      backdrop_path: "/4dqq8nB8xmdam9UoCDGSJ1dElE9.jpg",
      first_air_date: "2021-02-22",
      genre_ids: [],
      id: 6455,
      name: "Chain Reaction",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Chain Reaction",
      overview:
        "Chain Reaction is an American game show created by Bob Stewart, in which players compete to form chains composed of two-word phrases.\n\nThe show aired three separate runs: Bill Cullen hosted the original series on NBC from January 14 to June 20, 1980. The second version aired on the USA Network from September 29, 1986 to December 27, 1991 and was hosted first by Blake Emmons and later by Geoff Edwards. Another version, hosted by Dylan Lane, premiered on August 1, 2006 on GSN. This version aired its final original episode on June 9, 2007 but has continued to air in reruns since, currently airing Mondays through Fridays at 3:00 PM and 3:30 PM ET on GSN. Starting August 2, 2013, it will air Fridays at 8:00 PM to 10:00 PM on GSN.",
      popularity: 684.313,
      poster_path: "/xhjoXm1WEvfQGYBGXKk8xk75z6s.jpg",
      vote_average: 1.5,
      vote_count: 2,
    },
    {
      backdrop_path: "/5ie8dU1MBhHP5I2t54YqWdttbsb.jpg",
      first_air_date: "2021-01-04",
      genre_ids: [10766],
      id: 115810,
      name: "Amor Amor",
      origin_country: ["PT"],
      original_language: "pt",
      original_name: "Amor Amor",
      overview:
        "This is the story of a woman who fell in love and was betrayed. Her beloved was successful at the expense of a song that stole from her, while she was forced to fight for survival, far from her homeland.\n\nIt is also the story of a girl forced to mature quickly, to raise her daughter, without knowing that, after all, it was not her daughter she was raising...",
      popularity: 678.989,
      poster_path: "/wksRAOMoyHDxJWSW6bG4MyECW9G.jpg",
      vote_average: 3.1,
      vote_count: 23,
    },
    {
      backdrop_path: "/2748H9LoK2oQd9L7ofze8VjCGhS.jpg",
      first_air_date: "2020-07-13",
      genre_ids: [18, 10766],
      id: 116479,
      name: "Anupamaa",
      origin_country: ["IN"],
      original_language: "hi",
      original_name: "अनुपमा",
      overview:
        "Anupama had to sacrifice a lot to become an ideal wife, daughter-in-law, and mother. After a bitter realisation, she sets out to live on her own terms.",
      popularity: 667.813,
      poster_path: "/9R4Qtm01pNh0CzdoIyvHKefe5RL.jpg",
      vote_average: 4.7,
      vote_count: 21,
    },
    {
      backdrop_path: "/pkOSjcllDSs4WP9i8DGkw9VgF5Q.jpg",
      first_air_date: "2015-07-06",
      genre_ids: [10764, 10751],
      id: 63452,
      name: "Wer weiß denn sowas?",
      origin_country: ["DE"],
      original_language: "de",
      original_name: "Wer weiß denn sowas?",
      overview: "",
      popularity: 618.278,
      poster_path: "/abKjah96esLWObidBcWmvKJv61E.jpg",
      vote_average: 8,
      vote_count: 8,
    },
    {
      backdrop_path: "/pPKiIJEEcV0E1hpVcWRXyp73ZpX.jpg",
      first_air_date: "2021-02-23",
      genre_ids: [10765, 10759, 18],
      id: 95057,
      name: "Superman & Lois",
      origin_country: ["US"],
      original_language: "en",
      original_name: "Superman & Lois",
      overview:
        "After years of facing megalomaniacal supervillains, monsters wreaking havoc on Metropolis, and alien invaders intent on wiping out the human race, The Man of Steel aka Clark Kent and Lois Lane come face to face with one of their greatest challenges ever: dealing with all the stress, pressures and complexities that come with being working parents in today's society.",
      popularity: 531.018,
      poster_path: "/utpXq61UIlfNUuviz2hRmCEYdYr.jpg",
      vote_average: 8.2,
      vote_count: 1415,
    },
    {
      backdrop_path: "/48owQZcn8kP6Gfq2IQ7vPFmvKYu.jpg",
      first_air_date: "2003-09-08",
      genre_ids: [35, 10767],
      id: 562,
      name: "The Ellen DeGeneres Show",
      origin_country: ["US"],
      original_language: "en",
      original_name: "The Ellen DeGeneres Show",
      overview:
        "The Ellen DeGeneres Show, often shortened to just Ellen, is an American television talk show hosted by comedian/actress Ellen DeGeneres.",
      popularity: 505.917,
      poster_path: "/PhUYIGUUk1RzWq2Aw3TqH65McE.jpg",
      vote_average: 6,
      vote_count: 115,
    },
  ],
  total_pages: 55,
  total_results: 1081,
}
