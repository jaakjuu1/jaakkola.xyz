export interface Hint {
  id: string;
  title: string;
  description: string;
  riddle: string;
  answer: string;
  nextHintId: string | null;
  finalAnswer?: string;
}

export interface HintSet {
  id: string;
  initialPassword: string;
  name: string;
  hints: Record<string, Hint>;
}

export const hintSets: Record<string, HintSet> = {
  christmas2023: {
    id: "christmas2023",
    initialPassword: "joulupukki",
    name: "Joulun Arvoitukset 2023",
    hints: {
      hint1: {
        id: "hint1",
        title: "Ensimmäinen Vihje",
        description: "Tervetuloa joulun arvoitusten pariin!",
        riddle:
          "Punainen takki, valkoinen parta, tonttujen pomo ja lasten kaveri. Kuka olen?",
        answer: "joulupukki",
        nextHintId: "hint2",
      },
      hint2: {
        id: "hint2",
        title: "Toinen Vihje",
        description: "Hienoa! Löysit toisen vihjeen.",
        riddle:
          "Roikkuu katossa, välkkyy ja loistaa, joulun tunnelman kotiin tuo. Mikä se on?",
        answer: "jouluvalo",
        nextHintId: "hint3",
      },
      hint3: {
        id: "hint3",
        title: "Viimeinen Vihje",
        description: "Olet melkein perillä!",
        riddle:
          "Vihreät havut, punaiset nauhat, tähti latvassa loistaa. Mikä se on?",
        answer: "joulukuusi",
        nextHintId: null,
        finalAnswer: "joulukuusi",
      },
    },
  },
  birthday2024: {
    id: "birthday2024",
    initialPassword: "synttarit",
    name: "Syntymäpäivä Seikkailu 2024",
    hints: {
      hint1: {
        id: "hint1",
        title: "Ensimmäinen Vihje",
        description: "Tervetuloa syntymäpäiväseikkailuun!",
        riddle:
          "Makea yllätys, kynttilöitä päällä, kaikki haluaa palan tästä. Mikä se on?",
        answer: "kakku",
        nextHintId: "hint2",
      },
      hint2: {
        id: "hint2",
        title: "Toinen Vihje",
        description: "Hyvä, jatketaan eteenpäin!",
        riddle: "Värikäs paperi repeää, yllätys sisältä löytyy. Mikä se on?",
        answer: "lahja",
        nextHintId: "hint3",
      },
      hint3: {
        id: "hint3",
        title: "Viimeinen Vihje",
        description: "Viimeinen tehtävä!",
        riddle: "Ilmalla täytetty, narusta kiinni, kattoon nousee. Mikä se on?",
        answer: "ilmapallo",
        nextHintId: null,
        finalAnswer: "ilmapallo",
      },
    },
  },
  joulu24: {
    id: "joulu24",
    initialPassword: "joulun24",
    name: "Joulun Arvoitukset 2024",
    hints: {
      hint1: {
        id: "hint1",
        answer: "galaksi",
        title: "Avaruuden Mysteeri",
        description:
          "Katso ylös ja mieti – mistä kaikki alkoi? Tervetuloa avaruuden ihmeiden pariin!",
        riddle:
          "Avaruudessa on jotain, joka ei koskaan pysähdy. Se on kuin kosminen tanssi, ja jokainen liike tuo uusia maailmoja. Mikä se on?",
        nextHintId: "hint2",
      },
      hint2: {
        id: "hint2",
        answer: "joulupukki",
        title: "Joulun Taika",
        description:
          "Onko avaruus lähellä joulua? Ehkä tähtien tuikkeessa piilee jotain jouluyön taikaa.",
        riddle:
          "Tämä punapukuinen ystävä tuo lahjoja kaikille maailman lapsille yhden yön aikana. Hänen reessään on yhdeksän lentävää ystävää, joista yksi on erityisen kuuluisa. Kuka hän on?",
        nextHintId: "hint3",
      },
      hint3: {
        id: "hint3",
        answer: "pong",
        title: "Videopelien Ensiaskeleet",
        description:
          "Joulupukki on aina pitänyt peleistä, ja niiden historia on täynnä yllätyksiä. Lähde aikamatkalle peleihin, jotka valloittivat maailman.",
        riddle:
          "Vuonna 1972 julkaistiin peli, joka muutti maailman – kaksi mailaa ja piste liikkuivat ruudulla. Mikä oli tämän pelin nimi?",
        nextHintId: "hint4",
      },
      hint4: {
        id: "hint4",
        answer: "tampere",
        title: "Suomen Salaisuudet",
        description:
          "Pelit ovat osa historiaa, mutta Suomi kätkee sisälleen tuhansien tarinoiden maan. Tiedätkö nämä?",
        riddle:
          "Suomessa, eräänä talvisena päivänä, pieni kylä tunnettiin paikkana, jossa itsenäisyyden soihtu syttyi. Mikä tämä kaupunki on?",
        nextHintId: "hint5",
      },
      hint5: {
        id: "hint5",
        answer: "einstein",
        title: "Fysiikan Kuningaskunta",
        description:
          "Avaruus, joulu, ja historia ovat viihdyttäviä, mutta nyt palataan fysiikan perusteisiin. Oletko valmis viimeiseen haasteeseen?",
        riddle:
          "Tämä henkilö ei koskaan halunnut julkisuutta, mutta hänen suhteellisuusteoriansa muutti kaiken. Kuka hän on?",
        nextHintId: null,
        finalAnswer: "einstein",
      },
    },
  },
};
