//create list of movies links, title, year, and information then export list

const list = [
    {   id: 1,
        img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQGKEyjcxQn1M0Cd1Is3t3syI4bL9d91kQGTxSiueL8QI_zVgNg",
        title:"A Charlie Brown Thanksgiving",
        year: 1973,
        info:"A Charlie Brown Thanksgiving is the tenth prime-time animated television special based upon the popular comic strip Peanuts, by Charles M. Schulz. It was originally aired on the CBS network on November 20, 1973, and won an Emmy Award the following year. It was the third holiday special after A Charlie Brown Christmas in 1965 and It's the Great Pumpkin, Charlie Brown in 1966.",

    },

    {   id: 2,
        img:"https://resizing.flixster.com/N86mgviig8GTplI32UioC1hEBc4=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p4271_p_v8_ae.jpg",
        title:"Miracle on 34th Street",
        year:1947,
        info:"Miracle on 34th Street (initially released as The Big Heart in the United Kingdom)is a 1947 American Christmas comedy-drama film released by 20th Century Fox, written and directed by George Seaton and based on a story by Valentine Davies. It stars Maureen O'Hara, John Payne, Natalie Wood, and Edmund Gwenn. The story takes place between Thanksgiving Day and Christmas Day in New York City, and focuses on the effect of a department store Santa Claus who claims to be the real Santa. The film has become a perennial Christmas favorite.",
    },

    {   id: 3,
        img:"https://resizing.flixster.com/ZxLUf5aEMTJdAAM9JAvGN2HfLOk=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p11886609_p_v8_ab.jpg",
        title:"Krisha",
        year:2015,
        info:"Krisha is a 2015 American drama film written and directed by Trey Edward Shults in his feature-length directorial debut, starring his real-life aunt Krisha Fairchild, and is the feature-length adaption of the 2014 short film Krisha also directed by Shults.",

    },

    {   id: 4,
        img:"https://resizing.flixster.com/5tvg5uAPYHNLECOnOke4eS7wan4=/fit-in/180x240/v2/https://resizing.flixster.com/rYcj2hcdp1ffcGQQKtdmKhF82IE=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzdmMTk0MmQ2LTQzMmEtNGFmOC1hODEzLTRjNGRmOTFjYTQxNi53ZWJw",
        title:"Little Women",
        year:2019,
        info:"Little Women is a 2019 American coming-of-age period drama film written and directed by Greta Gerwig. It is the seventh film adaptation of the 1868 novel of the same name by Louisa May Alcott. It chronicles the lives of the March sisters—Jo, Meg, Amy, and Beth—in Concord, Massachusetts, during the nineteenth century. It stars an ensemble cast consisting of Saoirse Ronan, Emma Watson, Florence Pugh, Eliza Scanlen, Laura Dern, Timothée Chalamet, Meryl Streep, Tracy Letts, Bob Odenkirk, James Norton, Louis Garrel, and Chris Cooper.",
    },

    {   id: 5,
        img:"https://resizing.flixster.com/uu0C9b82PbGajmlKMwJBJO8pltU=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p6751_p_v8_ak.jpg",
        title:"Planes, Trains, Automobiles",
        year:1987,
        info:"Planes, Trains and Automobiles is a 1987 American comedy film written, produced, and directed by John Hughes. It stars Steve Martin as Neal Page, a high-strung marketing executive, and John Candy as Del Griffith, a goodhearted but annoying salesman. In spite of their differences, they share a three-day odyssey of misadventures trying to get Neal home to Chicago in time for Thanksgiving Day dinner with his family.",
    },

    {   id: 6,
        img:"https://resizing.flixster.com/5QcBjGcpbxEcr_8tkQ55BpWTkZ0=/fit-in/180x240/v2/https://resizing.flixster.com/iUMPmzmuhI03rUfwpv_UF4zSw2U=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzVjZmI0NzAwLTlhZTQtNDEyOC04MTQ4LWE3YTRiMGVlMGYyNy5wbmc=",
        title:"The Humans",
        year:2021,
        info:"The Humans is a 2021 American psychological drama film[2] written and directed by Stephen Karam in his feature directorial debut, and based on his one-act play of the same name. It stars Richard Jenkins, Jayne Houdyshell, Amy Schumer, Beanie Feldstein, Steven Yeun and June Squibb. It had its world premiere at the 2021 Toronto International Film Festival on September 12, 2021. The film was released by A24 on November 24, 2021, both in theaters and on Showtime.",
    },

    {   id: 7,
        img:"https://resizing.flixster.com/P3si5icNdGXYrCPQmEs_ehMtgMA=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p9007_p_v8_am.jpg",
        title:"Hannah and Her Sisters",
        year:1986,
        info:"Hannah and Her Sisters is a 1986 American comedy-drama[1] film which tells the intertwined stories of an extended family over two years that begins and ends with a family Thanksgiving dinner. The film was written and directed by Woody Allen, who stars along with Mia Farrow as Hannah, Michael Caine as her husband, and Barbara Hershey and Dianne Wiest as her sisters.",
    },

    {   id: 8,
        img:"https://resizing.flixster.com/rFAX-Mv1EgzSPD_wX4iAc80G7R4=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p14462_p_v8_am.jpg",
        title:"Scent of a Woman",
        year:1992,
        info:"Scent of a Woman is a 1992 American drama film produced and directed by Martin Brest that tells the story of a preparatory school student who takes a job as an assistant to an irritable, blind, medically retired Army lieutenant colonel. The film is a remake of Dino Risi's 1974 Italian film Profumo di donna, adapted by Bo Goldman from the novel Il buio e il miele (Italian: Darkness and Honey) by Giovanni Arpino. The film stars Al Pacino and Chris O'Donnell, with James Rebhorn, Philip Seymour Hoffman and Gabrielle Anwar in supporting roles.",
    },

    {   id: 9,
        img:"https://resizing.flixster.com/hymM3k2MlbTMtf9V5PTE52Xou4w=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p19414_p_v8_aa.jpg",
        title:"The Ice Storm",
        year:1997,
        info:"The Ice Storm is a 1994 American novel by Rick Moody. The novel was widely acclaimed by readers and critics alike, described as a funny, acerbic, and moving hymn to a dazed and confused era of American life. In 1997, the novel was adapted into an acclaimed feature film directed by Ang Lee, featuring a cast including Joan Allen, Kevin Kline, Sigourney Weaver, Christina Ricci, Elijah Wood, Tobey Maguire and Katie Holmes in her screen debut.",
    },

    {   id: 10,
        img:"https://resizing.flixster.com/P1hRch5nwnD8f6WS3pE0DCHAhUE=/fit-in/180x240/v2/https://flxt.tmsimg.com/assets/p12786_p_v8_aa.jpg",
        title:"Avalon",
        year:1990,
        info:"Avalon is a 1990 American drama film written and directed by Barry Levinson and starring Armin Mueller-Stahl, Aidan Quinn, Elizabeth Perkins, Joan Plowright, and Elijah Wood. It is the third in Levinson's semi-autobiographical tetralogy of Baltimore films set in his hometown during the 1940s, 1950s, and 1960s: Diner (1982), Tin Men (1987), and Liberty Heights (1999). The film explores the themes of Jewish assimilation into American life, through several generations of a Polish immigrant family from the 1910s through the 1950s.",
    },

];
export default list;