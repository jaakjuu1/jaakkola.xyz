export interface Hint {
  id: string;
  title: string;
  description: string;
  riddle: string;
  answer: string;
  nextHintId: string | null;
  finalAnswer?: string;
  imagePrompt?: string;
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
    initialPassword: "jul23",
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
    initialPassword: "joulu24",
    name: "Joulun Arvoitukset 2024",
    hints: {
        "hint1": {
        "id": "hint1",
        "answer": "galaksi",
        "title": "Avaruuden Mysteeri",
        "description":
            "Avaruus on kuin loputon valtameri, jossa tähtien valokeilat muodostavat suunnattomia saaria. Näiden valtavien tähtijoukkojen ymmärtäminen vei ihmiskunnalta vuosisatoja. Nyt sinun tehtäväsi on paikallistaa, mistä rakenneosista universumi muodostuu.",
        "riddle":
            "Kaukana, kosmisen aamunkoiton jälkeen, syntyivät jättimäiset tähtimeret, jotka koostuvat sadoista miljardeista tähdistä, kaasuista, pölystä ja näkymättömästä pimeästä aineesta. Ne laajenevat ja liikehtivät avaruuden laajenemisen mukana, ja niissä syntyy jatkuvasti uusia tähtiä. Mikä on tällaisen valtaisan tähtijoukon nimi?",
        "imagePrompt": "A majestic spiral galaxy with billions of stars glowing faintly against the dark expanse of space, wisps of interstellar dust and gas swirling gracefully.",
        "nextHintId": "hint2"
        },
        "hint2": {
        "id": "hint2",
        "answer": "joulupukki",
        "title": "Joulun Taika",
        "description":
            "Avaruuden äärettömyydestä siirrymme nyt jouluun, aikaan jolloin valo pimeän keskellä juhlistaa elämää ja anteliaisuutta. Monet kulttuurit ovat vuosisatojen saatossa luoneet oman versionsa punapukuisesta lahjojen tuojasta, mutta nykyinen ikoninen hahmo on syntynyt monien vaikutteiden vuoropuhelusta.",
        "riddle":
            "Maailmankuulu hahmo tunnetaan punaisesta asustaan, valkoisesta parrastaan ja kyvystään kiertää maapallo hämmästyttävällä nopeudella. Hänen taustansa limittyvät vanhoihin eurooppalaisiin legendoihin, mutta nykyinen kaupallinen ja sydämellinen hahmo vakiintui erityisesti 1900-luvulla. Kuka on tämä myyttinen joulun symboli, joka jakaa lahjoja lapsille ympäri maailman?",
        "imagePrompt": "A warm, nostalgic illustration of Santa Claus with a long white beard, wearing a deep red coat trimmed with fur, standing in a cozy, lantern-lit workshop filled with gifts and candy canes.",
        "nextHintId": "hint3"
        },
        "hint3": {
        "id": "hint3",
        "answer": "pong",
        "title": "Videopelien Ensiaskeleet",
        "description":
            "Joulu, joka merkitsee usein myös leikillisyyttä, johdattaa sinut seuraavaksi videopelien alkulähteille. Nykyisten monimutkaisten virtuaalimaailmojen alkujuuret ovat hyvin vaatimattomia. 1970-luvun alussa ilmestyi peli, joka mullisti tavan kokea digitaalista viihdettä.",
        "riddle":
            "Vuonna 1972 eräs yksinkertainen videopeli sai alkunsa: kaksi suorakulmaista mailaa ja pisteenä toimiva 'pallo' kohtaavat mustalla ruudulla. Tämä minimalistinen idea aloitti kokonaisen kulttuurivallankumouksen, josta kasvoi miljardien arvoinen teollisuus. Mikä on tämän ensimmäisiin menestystarinoihin kuuluvan videopelin nimi?",
        "imagePrompt": "A retro, pixel-art style image of a classic black-and-white arcade screen, showing two vertical paddles on opposite sides and a small square ball hovering in the center.",
        "nextHintId": "hint4"
        },
        "hint4": {
        "id": "hint4",
        "answer": "tampere",
        "title": "Suomen Salaisuudet",
        "description":
            "Nyt on aika kääntää katse pohjoiseen maahan, Suomeen, jonka historiaan kätkeytyy vahvoja tarinoita. Itsenäisyyteen johtanut prosessi ei ollut helppo, ja 1900-luvun alussa kansa koki ankaria aikoja. Eräästä teollisuuskaupungista tuli vaiheittain tapahtumien keskipiste, joka heijasti nuoren valtion kipuilua ja kasvua.",
        "riddle":
            "Vuonna 1918 Suomessa syttyi sisällissota, ja tässä teollisuuskaupungissa käytiin ratkaisevia, verisiä taisteluja, joiden seuraukset vaikuttivat syvästi koko kansakuntaan. Nykyään tämä sama kaupunki tunnetaan kulttuuristaan, innovaatioistaan ja yhteisöllisyydestään. Mikä on tämä merkittävä kaupunki?",
        "imagePrompt": "A historically inspired scene of a Finnish industrial town during a cold early 20th-century winter, red-brick factories lining the icy rapids, soldiers' silhouettes in the distance.",
        "nextHintId": "hint5"
        },
        "hint5": {
        "id": "hint5",
        "answer": "einstein",
        "title": "Fysiikan Kuningaskunta",
        "description":
            "Avaruuden tähdet, joulun tarinat, videopelien ensiaskeleet ja Suomen historian käännekohdat kietoutuvat suurempaan kertomukseen maailmankaikkeudesta. Viimeiseksi sinun on suunnattava huomiosi tieteeseen, joka selittää kaiken taustalla olevat lait. Yksi mies muutti käsityksemme ajasta, tilasta ja energiasta – hänen teoriansa vaikuttavat tänäkin päivänä teknologiaan ja ymmärrykseemme kosmoksesta.",
        "riddle":
            "Tämä 1900-luvun alkuvuosikymmeninä vaikuttanut fyysikko mursi perinteiset käsitykset ajasta ja avaruudesta. Hänen suhteellisuusteoriansa osoitti, että massa ja energia ovat pohjimmiltaan saman ilmiön eri ilmentymiä. Kuka on tämä tiedemies, jonka nimi on ikuisesti piirtynyt fysiikan historiaan?",
        "imagePrompt": "A warm, sepia-toned portrait of Albert Einstein in a quiet study, mathematical equations on a blackboard behind him, cosmic imagery subtly blending into the background.",
        "nextHintId": null,
        "finalAnswer": "einstein"
        }
    } 
  },
};
