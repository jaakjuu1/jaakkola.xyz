export interface Hint {
  id: string;
  title: string;
  description: string;
  answer: string;
  finalAnswer?: string;
  riddle: string;
  imagePrompt?: string;
  imageUrl?: string;
  imageKey?: string;
  nextHintId?: string;
  displayCount?: number;
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
      hint1: {
        id: "hint1",
        answer: "galaksi",
        title: "Avaruuden Mysteeri",
        description:
          "Avaruus on kuin loputon valtameri, jossa tähtien valokeilat muodostavat suunnattomia saaria. Näiden valtavien tähtijoukkojen ymmärtäminen vei ihmiskunnalta vuosisatoja. Nyt sinun tehtäväsi on paikallistaa, mistä rakenneosista universumi muodostuu.",
        riddle:
          "Kaukana, kosmisen aamunkoiton jälkeen, syntyivät jättimäiset tähtimeret, jotka koostuvat sadoista miljardeista tähdistä, kaasuista, pölystä ja näkymättömästä pimeästä aineesta. Ne laajenevat ja liikehtivät avaruuden laajenemisen mukana, ja niissä syntyy jatkuvasti uusia tähtiä. Mikä on tällaisen valtaisan tähtijoukon nimi?",
        imagePrompt:
          "A majestic spiral galaxy with billions of stars glowing faintly against the dark expanse of space, wisps of interstellar dust and gas swirling gracefully.",
        nextHintId: "hint2",
      },
      hint2: {
        id: "hint2",
        answer: "joulupukki",
        title: "Joulun Taika",
        description:
          "Avaruuden äärettömyydestä siirrymme nyt jouluun, aikaan jolloin valo pimeän keskellä juhlistaa elämää ja anteliaisuutta. Monet kulttuurit ovat vuosisatojen saatossa luoneet oman versionsa punapukuisesta lahjojen tuojasta, mutta nykyinen ikoninen hahmo on syntynyt monien vaikutteiden vuoropuhelusta.",
        riddle:
          "Maailmankuulu hahmo tunnetaan punaisesta asustaan, valkoisesta parrastaan ja kyvystään kiertää maapallo hämmästyttävällä nopeudella. Hänen taustansa limittyvät vanhoihin eurooppalaisiin legendoihin, mutta nykyinen kaupallinen ja sydämellinen hahmo vakiintui erityisesti 1900-luvulla. Kuka on tämä myyttinen joulun symboli, joka jakaa lahjoja lapsille ympäri maailman?",
        imagePrompt:
          "A warm, nostalgic illustration of Santa Claus with a long white beard, wearing a deep red coat trimmed with fur, standing in a cozy, lantern-lit workshop filled with gifts and candy canes.",
        nextHintId: "hint3",
      },
      hint3: {
        id: "hint3",
        answer: "pong",
        title: "Videopelien Ensiaskeleet",
        description:
          "Joulu, joka merkitsee usein myös leikillisyyttä, johdattaa sinut seuraavaksi videopelien alkulähteille. Nykyisten monimutkaisten virtuaalimaailmojen alkujuuret ovat hyvin vaatimattomia. 1970-luvun alussa ilmestyi peli, joka mullisti tavan kokea digitaalista viihdettä.",
        riddle:
          "Vuonna 1972 eräs yksinkertainen videopeli sai alkunsa: kaksi suorakulmaista mailaa ja pisteenä toimiva 'pallo' kohtaavat mustalla ruudulla. Tämä minimalistinen idea aloitti kokonaisen kulttuurivallankumouksen, josta kasvoi miljardien arvoinen teollisuus. Mikä on tämän ensimmäisiin menestystarinoihin kuuluvan videopelin nimi?",
        imagePrompt:
          "A retro, pixel-art style image of a classic black-and-white arcade screen, showing two vertical paddles on opposite sides and a small square ball hovering in the center.",
        nextHintId: "hint4",
      },
      hint4: {
        id: "hint4",
        answer: "tampere",
        title: "Suomen Salaisuudet",
        description:
          "Nyt on aika kääntää katse pohjoiseen maahan, Suomeen, jonka historiaan kätkeytyy vahvoja tarinoita. Itsenäisyyteen johtanut prosessi ei ollut helppo, ja 1900-luvun alussa kansa koki ankaria aikoja. Eräästä teollisuuskaupungista tuli vaiheittain tapahtumien keskipiste, joka heijasti nuoren valtion kipuilua ja kasvua.",
        riddle:
          "Vuonna 1918 Suomessa syttyi sisällissota, ja tässä teollisuuskaupungissa käytiin ratkaisevia, verisiä taisteluja, joiden seuraukset vaikuttivat syvästi koko kansakuntaan. Nykyään tämä sama kaupunki tunnetaan kulttuuristaan, innovaatioistaan ja yhteisöllisyydestään. Mikä on tämä merkittävä kaupunki?",
        imagePrompt:
          "A historically inspired scene of a Finnish industrial town during a cold early 20th-century winter, red-brick factories lining the icy rapids, soldiers' silhouettes in the distance.",
        nextHintId: "hint5",
      },
      hint5: {
        id: "hint5",
        answer: "einstein",
        title: "Fysiikan Kuningaskunta",
        description:
          "Avaruuden tähdet, joulun tarinat, videopelien ensiaskeleet ja Suomen historian käännekohdat kietoutuvat suurempaan kertomukseen maailmankaikkeudesta. Viimeiseksi sinun on suunnattava huomiosi tieteeseen, joka selittää kaiken taustalla olevat lait. Yksi mies muutti käsityksemme ajasta, tilasta ja energiasta – hänen teoriansa vaikuttavat tänäkin päivänä teknologiaan ja ymmärrykseemme kosmoksesta.",
        riddle:
          "Tämä 1900-luvun alkuvuosikymmeninä vaikuttanut fyysikko mursi perinteiset käsitykset ajasta ja avaruudesta. Hänen suhteellisuusteoriansa osoitti, että massa ja energia ovat pohjimmiltaan saman ilmiön eri ilmentymiä. Kuka on tämä tiedemies, jonka nimi on ikuisesti piirtynyt fysiikan historiaan?",
        imagePrompt:
          "A warm, sepia-toned portrait of Albert Einstein in a quiet study, mathematical equations on a blackboard behind him, cosmic imagery subtly blending into the background.",
        nextHintId: null,
        finalAnswer: "einstein",
      },
    },
  },
  joulu25: {
    id: "joulu25",
    initialPassword: "joulu25",
    name: "Joulun Arvoitukset 2025",

    hints: {
      hint1: {
        id: "hint1",
        answer: "alkuräjähdys",
        title: "Kosmoksen Aamunkoitto",
        description:
          "Kaiken alkuhetki kätkeytyy aikaan, jolloin ei ollut valoa, ei aineen järjestystä. Yhdessä silmänräpäyksessä syntyi koko tunnettu maailmankaikkeus. Tästä alkuräjähdyksestä lähtivät galaksit, tähdet ja planeetat muotoutumaan, luoden puitteet elämälle ja loputtomille tarinoille.",
        riddle:
          "Ennen ensimmäistä tähteä, ennen ensimmäistä galaksia, oli vain tiheä, kuuma piste, josta koko universumi sai alkunsa. Mikä nimi annetaan tuolle kaiken alkuhetkelle?",
        imagePrompt:
          "A grand cosmic explosion of light and energy at the dawn of the universe, swirling gas and radiant matter expanding into the void.",
        nextHintId: "hint2",
      },
      hint2: {
        id: "hint2",
        answer: "joulukuusi",
        title: "Valon Paluu Pimeään",
        description:
          "Avaruuden pimeydestä suuntaamme kohti ihmisen luomia perinteitä. Pimeinä talvina kansat ovat ikiajoista asti juhlineet valon voittoa pimeydestä. Pohjoisessa keskipisteenä on ikivihreä puu, jonka oksilla kynttilät tai valot loistavat. Tästä symbolista on tullut joulun tunnusmerkki.",
        riddle:
          "Vuosisatojen ajan ihmiset ovat tuoneet sisälle talven keskelle ikivihreän puun, koristaneet sen valoin ja merkein. Se symboloi elämän jatkuvuutta pitkän, pimeän vuodenajan keskellä. Mikä on tämä puu, josta on tullut joulun tunnetuin symboli?",
        imagePrompt:
          "A softly-lit Christmas tree in a dim, cozy interior, adorned with simple candles and traditional ornaments, reflecting gentle light onto wooden floors.",
        nextHintId: "hint3",
      },
      hint3: {
        id: "hint3",
        answer: "spacewar",
        title: "Digitaalisen Unelman Ensikiidot",
        description:
          "Kuten joulu yhdistää perinteitä ja valoa, myös ihmiskunta on alkanut luoda omia keinotekoisia maailmoja. Videopelien historia ulottuu 1960-luvulle, jolloin joukko tieteen ja tekniikan edelläkävijöitä loi ensimmäisiä interaktiivisia digitaalisia leikkejä. Eräs heistä syntyi MIT:ssä, esitellen avaruustaistelua primitiivisellä tietokonenäytöllä.",
        riddle:
          "Ennen tunnettuja klassikoita oli peli, jossa kaksi avaruusalusta kiersi painovoimakaivoa ja tulitti toisiaan. Vuonna 1962 luotu teos tunnetaan ensimmäisenä merkittävänä tietokonepelinä. Mikä on tämän varhaisen avaruustaistelupelin nimi?",
        imagePrompt:
          "A monochrome computer screen from the 1960s showing two simplistic, wireframe spacecraft orbiting a central gravitational point, tiny pixel bullets exchanged between them.",
        nextHintId: "hint4",
      },
      hint4: {
        id: "hint4",
        answer: "porvoo",
        title: "Kansakunnan Kohtalonhetket",
        description:
          "Kulttuurit muuttuvat, niin myös valtiot. Euroopan pohjoisessa kolkassa pienet askeleet johtivat kansakunnan eriytymiseen suuremmasta valtakunnasta. Historiallisesti merkittävässä kaupungissa järjestettiin vuonna 1809 tilaisuus, joka vahvisti Suomen asemaa autonomisena suuriruhtinaskuntana Venäjän keisarikunnan alaisuudessa. Näin alkoi matka kohti itsenäisyyttä.",
        riddle:
          "Missä Suomen kaupungissa järjestettiin vuonna 1809 valtiopäivät, jotka loivat perustaa maan myöhemmälle itsenäisyydelle?",
        imagePrompt:
          "A historic northern European town by a quiet river, early 19th-century atmosphere with wooden houses, a stone cathedral in the background and a hushed winter landscape.",
        nextHintId: "hint5",
      },
      hint5: {
        id: "hint5",
        answer: "tuorla",
        title: "Tähtien Tarkkailun Tyyssija",
        description:
          "Kun valtiot muotoutuvat ja kulttuurit kukoistavat, tiedonjano kasvaa. Suomessa perustettiin tähtitieteellisiä keskuksia tutkimaan sitä samaa avaruutta, jonka alkuhetkiä tarkastelimme tarinamme alussa. Eräs merkittävä observatorio sijaitsee lähellä Turkua, ja sieltä on kartoitettu tähtien liikkeitä ja galaksien salaisuuksia.",
        riddle:
          "Mikä on nimeltään Turun lähellä sijaitseva tunnettu tähtitieteellinen observatorio, joka edustaa Suomen panosta maailman kosmisten arvoitusten ratkomisessa?",
        imagePrompt:
          "A small observatory dome amid tranquil Finnish countryside, the subtle glow of instruments inside shining into a star-filled night sky.",
        nextHintId: "hint6",
      },
      hint6: {
        id: "hint6",
        answer: "hubble",
        title: "Kosmoksen Laajenemisen Sanansaattaja",
        description:
          "Avaruuden synty, inhimilliset perinteet, teknologian ensiaskeleet, kansakuntien kehitys ja tähtien tutkimus kietoutuvat yhdeksi jatkumoksi: ymmärrykseksi maailmankaikkeudesta. Lopulta katseemme kääntyy tutkijaan, joka osoitti, että maailmankaikkeus laajenee. Hänen havaintonsa muuttivat ikuisiksi ajoiksi kosmisen ymmärryksemme.",
        riddle:
          "Kuka oli se amerikkalainen tähtitieteilijä, joka havaitsi galaksien loittonevan toisistaan ja osoitti näin, että maailmankaikkeus laajenee?",
        imagePrompt:
          "A vintage 20th-century astronomer peering through a large telescope, distant galaxies receding in the darkness of space, faint wisps of starlight echoing cosmic expansion.",
        nextHintId: null,
        finalAnswer: "hubble",
      },
    },
  },
  joulu26: {
    id: "joulu26",
    initialPassword: "joulu26",
    name: "Joulun Arvoitukset 2026",
    hints: {
      hint1: {
        id: "hint1",
        answer: "betlehemin tähti",
        title: "Tähtien Jouluyö",
        description:
          "On jouluinen yö, ja kun katsot taivaalle, huomaat yhden erityisen valopilkun. Sen tarinaa on kerrottu vuosisatojen ajan. Tämä tähti ohjasi aikoinaan tietäjiä matkallaan, ja nyt se kutsuu sinua aloittamaan matkasi kohti suurempia salaisuuksia.",
        riddle:
          "Vanhassa joulukertomuksessa kolme viisasta miestä seurasivat yhtä tähteä. Tätä tähteä on tulkittu monin tavoin, mutta millä nimellä se tunnetaan perinteisesti?",
        imagePrompt:
          "A serene night sky over a desert landscape, a single bright star shining intensely above a distant town, evoking a sense of ancient mystery and hope.",
        nextHintId: "hint2",
      },
      hint2: {
        id: "hint2",
        answer: "krampus",
        title: "Joulun Varjohahmo",
        description:
          "Tähtien tarinoista siirryt nyt toiseen, hieman synkempään, mutta yhtä lailla kiehtovaan jouluperinteeseen. Kaikkialla joulua ei vietetä pelkän lämpimän anteliaisuuden hengessä, vaan joissakin kansanperinteissä esiintyy pelottavampi olento.",
        riddle:
          "Joissakin Keski-Euroopan jouluperinteissä tavataan sarvipäinen, pelottava hahmo, joka rankaisee tuhmia lapsia. Mikä on tämän kuuluisan olennon nimi?",
        imagePrompt:
          "A dark, European village street at night, lanterns casting long shadows, and a horned, furry creature lurking ominously near a snow-covered doorway.",
        nextHintId: "hint3",
      },
      hint3: {
        id: "hint3",
        answer: "delta",
        title: "Videopelien Aikaportti",
        description:
          "Joulun legendoista kuljet ajassa eteenpäin, kohti varhaisen videopelihistorian hämärää alkutaivalta. 1980-luvulla Suomi oli osa mikro- ja kotitietokoneiden vallankumousta, jolloin pienet kehittäjät loivat pelejä, jotka löysivät tiensä jopa kansainvälisille markkinoille. Nyt sinun tulee jäljittää eräs merkittävä, Suomessa vaikuttanut pelinkehittäjä ja hänen teoksensa.",
        riddle:
          "Etsi internetistä 1980-luvun lopulla Commodore 64:lle pelejä luonut kehittäjä, joka oli syntynyt Kreikassa mutta teki uransa Suomessa. Hänen nimensä liitetään useisiin innovatiivisiin, värikkäisiin ja teknisesti edistyneisiin peleihin, joista yksi julkaistiin Thalamus-yhtiön kautta. Tämä peli kantaa nimeä, joka viittaa muutokseen tai erojen vertailuun matematiikassa. Mikä on tämän pelin nimi?",
        imagePrompt:
          "A vibrant 8-bit style Commodore 64 game scene with scrolling landscapes, geometric shapes, and a futuristic spacecraft, hinting at rapid motion and electronic soundscapes.",
        nextHintId: "hint4",
      },
      hint4: {
        id: "hint4",
        answer: "hanhi",
        title: "Suomen Jouluperinteiden Juuret",
        description:
          "Aika kulkee eteenpäin. Nyt palaa Suomeen, jossa jouluun liittyy erikoisia tapoja, joista osa on unohdettu aikaa sitten. Eräässä vanhassa suomalaisessa jouluperinteessä juhla-ateria saattoi sisältää linnun, joka ei ole nykyään yleisin valinta.",
        riddle:
          "Vanhojen suomalaisten jouluperinteiden mukaan juhlapöytään saatettiin nostaa lintupaisti, joka nykyään on harvinaisuus. Mikä lintu tämä oli, jota joskus tarjoiltiin suomalaisissa joulujuhlissa?",
        imagePrompt:
          "A rustic Finnish farmhouse interior lit by candlelight, a wooden table set with old-fashioned dinnerware and an unmistakable roasted goose at its center.",
        nextHintId: "hint5",
      },
      hint5: {
        id: "hint5",
        answer: "minna canth",
        title: "Kulttuurin Käännekohta",
        description:
          "Joulupöydästä siirryt nyt kohti kulttuurisen muutoksen ytimeen. 1800-luvun loppupuolen Suomessa yhteiskunta oli myllerryksessä: kaupungit kasvoivat, koulutus yleistyi ja vanhat arvot haastettiin. Eräs kirjailija nousi puhumaan niiden puolesta, joilla ei ollut ääntä. Hän nosti esiin tasa-arvon merkityksen ja kritisoi yhteiskunnan epäkohtia.",
        riddle:
          "Tämä rohkea suomalainen kirjailija ja yhteiskunnallinen vaikuttaja julkaisi teoksia, joissa hän otti kantaa naisten asemaan ja köyhyyden ongelmiin. Hänen eräs tunnetuimmista näytelmistään, 'Työmiehen vaimo', aiheutti vilkasta keskustelua ja nosti epätasa-arvon päivänvaloon. Tänään hänen syntymäpäiväänsä vietetään liputuspäivänä, joka muistuttaa tasa-arvon tärkeydestä. Kuka tämä kirjailija on?",
        imagePrompt:
          "A warm, candlelit 19th-century Finnish study with ink bottles, manuscripts, and a woman's silhouette at a wooden desk, quill pen in hand, looking determined.",
        nextHintId: "hint6",
      },
      hint6: {
        id: "hint6",
        answer: "luminoiva maakaasu",
        title: "Fyysinen Ilmiö",
        description:
          "Suomalaisesta kulttuurista suuntaat tiedon laajoille kentille. On olemassa luonnonilmiö, joka esiintyy yötaivaalla, kun varautuneet hiukkaset törmäävät ilmakehän kaasuihin synnyttäen hohtavaa valoilmiötä. Se tunnetaan revontulina. Mutta mikä erityisesti aiheuttaa niiden vihreän hohteen? Etsi yksityiskohtaista tietoa.",
        riddle:
          "Internet kertoo, että revontulien yleisin väri, vihreä, syntyy elektronien törmätessä tietyn kaasuosan kanssa ylempänä ilmakehässä. Mikä tämä kaasu on, joka ionisoituneena luo vihreän hohteen?",
        imagePrompt:
          "A breathtaking view of the northern lights shimmering in green curtains across a snowy Finnish landscape, silent pine forests below.",
        nextHintId: "hint7",
      },
      hint7: {
        id: "hint7",
        answer: "tyrantti liskoelain",
        title: "Muinaiset Mysteerit",
        description:
          "Avaruudesta ja luonnonilmiöistä siirrytään aikaan ennen ihmisiä, jolloin maata hallitsivat jättimäiset olennot. Maailman tunnetuimpiin dinosauruksiin kuuluu yksi, jonka nimi merkitsee 'tyranniliskokuningasta'. Nyt sinun tulee etsiä tämän olennon nimen etymologia.",
        riddle:
          "Tunnettu dinosaurus, jonka nimen alkuperä juontaa kreikasta 'tyrannilisko' ja 'kuningas'. Mikä on tämä kuuluisa peto, joka kantaa näitä merkityksiä nimessään?",
        imagePrompt:
          "A dramatic prehistoric scene with a massive Tyrannosaurus Rex roaring under a volcanic sky, ancient fern forests and giant cycads in the background.",
        nextHintId: "hint8",
      },
      hint8: {
        id: "hint8",
        answer: "normandian maihinnousu",
        title: "Historian Merkkipaalu",
        description:
          "Muinaisista olennoista suurten sivilisaatioiden koitoksiin. Nyt etsitään modernin historian käännekohtaa. Vuonna 1944 liittoutuneet aloittivat operaation, joka muutti toisen maailmansodan kulun ratkaisevasti. Tämä tapahtui Euroopan rannikolla ja siitä tuli merkittävä hetki kohti rauhaa.",
        riddle:
          "Etsi internetistä liittoutuneiden suuri maihinnousuoperaatio vuonna 1944, joka tapahtui Ranskan rannikolla ja aloitti länsirintaman vapauttamisen natsi-Saksan hallinnasta. Miksi tätä historiallista tapahtumaa kutsutaan?",
        imagePrompt:
          "A somber, overcast seascape on the coast of Normandy, WWII landing crafts approaching the shore, soldiers in silhouette pressing forward.",
        nextHintId: "hint9",
      },
      hint9: {
        id: "hint9",
        answer: "hubble-laki",
        title: "Kosmisen Laajenemisen Salaisuus",
        description:
          "Historia on ohjannut ihmiskuntaa eteenpäin, mutta palataan nyt avaruuden äärettömyyteen. Universumi laajenee, ja tästä laajenemisesta on matemaattinen suhteellisuus havaintojen ja etäisyyksien perusteella. Eräs amerikkalainen tähtitieteilijä havaitsi galaksien loittonevan toisistaan, ja hänen mukaansa nimetty laki kuvaa nopeutta, jolla universumi kasvaa.",
        riddle:
          "Mikä on se tähtitieteilijä Edwin Hubbleen liittyvä 'laki', joka kuvaa galaksien loittonevan toisistaan sitä nopeammin, mitä kauempana ne ovat?",
        imagePrompt:
          "A deep-field image of countless galaxies, each a different shape and color, receding into the infinite blackness of space.",
        nextHintId: "hint10",
      },
      hint10: {
        id: "hint10",
        answer: "planckin pituus",
        title: "Fysiikan Perimmäinen Raja",
        description:
          "Olet saapunut matkasi päähän. Tähtiä, perinteitä, pelejä, historiaa ja tieteellisiä ilmiöitä yhdistävä polku johtaa sinut kaikkein pienimpiin mittoihin. Fysiikassa on mittayksikkö, jota pidetään pienimpänä merkityksellisenä pituutena – mittana, jolla aika ja avaruus menettävät perinteisen merkityksensä.",
        riddle:
          "Tutki internetistä fysiikan alkeismittoja. Minkä kuuluisan teoreetikon mukaan nimetty pituusyksikkö edustaa pienintä merkityksellistä mitta-astetta, jolla aika ja tila kuten tunnemme alkavat hämärtyä?",
        imagePrompt:
          "An abstract image of quantum foam: swirling energy and tiny, flickering lights at an almost unimaginably small scale, representing the fabric of spacetime.",
        nextHintId: null,
        finalAnswer: "planckin pituus",
      },
    },
  },
};
