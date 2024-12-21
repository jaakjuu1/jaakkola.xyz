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
        answer: "happi",
        title: "Vihreän Valon Lähde",
        description:
          "Olet matkannut kulttuurin ja historian kautta taas taivaalle. Revontulet ovat kiehtoneet ihmisiä kautta aikojen, mutta niiden salaisuus piilee ylempänä ilmakehässä tapahtuvissa monimutkaisissa hiukkasprosesseissa. Nyt on aika selvittää, mikä alkuaine antaa revontulille niiden tutun vihreän sävyn.",
        riddle:
          "Revontulien vihreä väri syntyy noin 100–200 kilometrin korkeudessa, kun Auringosta saapuvat varautuneet hiukkaset törmäävät ilmakehän kaasuihin. Etsi internetistä tieto siitä, minkä alkuaineen virittyneet atomit lähettävät tuota noin 557,7 nanometrin aallonpituuden vihreää valoa. Mikä tämä alkuaine on?",
        imagePrompt:
          "A breathtaking night sky scene over a northern landscape, with vibrant green auroras rippling across the starry heavens, illuminating a silent snowy forest.",
        nextHintId: "hint7",
      },
      hint7: {
        id: "hint7",
        answer: "tyrannosaurus",
        title: "Muinaiset Valtiaat",
        description:
          "Olet kulkenut tähdistä ja luonnonilmiöistä ajassa taaksepäin, aikakauteen jolloin jättiläispedot hallitsivat maata. Paleontologian varhaisvuosina löydettiin hirmulisko, joka kohosi ruokaketjun huipulle. Sen nimessä yhdistyvät kreikankieliset sanat, jotka kuvastavat sen mahtia, mutta harva pysähtyy pohtimaan näiden juurien merkitystä.",
        riddle:
          "Tutki paleontologian historiaa ja dinosaurusten nimiä. Etsi yksi tunnetuimmista lihansyöjädinosauruksista, jonka nimi on yhdistelmä kreikan sanoja, joista toinen tarkoittaa 'hirmuvaltias' ja toinen 'lisko'. Mikä on tämä dinosauruksen nimi, ja mitä sen nimiosat kertovat sen asemasta muinaisten maailmojen valtiaana?",
        imagePrompt:
          "A dramatic Cretaceous scene: a massive, bipedal predator with powerful jaws stalking a lush, fern-covered valley beneath a dusky sky, while smaller dinosaurs scatter in the distance.",
        nextHintId: "hint8",
      },
      hint8: {
        id: "hint8",
        answer: "operation paperclip",
        title: "Sodan Jälkeiset Varjot",
        description:
          "Ajanvirrassa olet siirtynyt hetkeen, jolloin toinen maailmansota on päättynyt ja Euroopan näyttämöä siivotaan raunioista. Mutta sodan jälkimainingeissa ei vain etsitty rauhaa: kulisseissa tapahtui muutakin. Eräässä Yhdysvaltain salaisessa hankkeessa tiedemiehiä, joilla oli kiistanalainen menneisyys, tuotiin uudelle mantereelle. Ratkaisemalla tämän arvoituksen kohtaat historian varjopuolen, joka on jäänyt pitkään hämärän peittoon.",
        riddle:
          "Sodan päätyttyä eräs salainen amerikkalaisoperaatio käynnistyi. Sen tarkoitus oli siirtää saksalaisia tiedemiehiä, usein natsi-Saksan entisiä asiantuntijoita, Yhdysvaltoihin kehittämään huipputeknologiaa. Selvitä internetin avulla, millä nimellä tämä salainen hanke tunnetaan. Vastaustasi etsiessäsi kiinnitä huomiota nimiin, kuten Wernher von Braun, ja yhteyksiin Yhdysvaltain avaruusohjelmaan.",
        imagePrompt:
          "A dimly lit, 1940s-era office with classified documents scattered on a wooden desk, a faded American flag in the background, and silhouettes of scientists in suits and hats.",
        nextHintId: "hint9",
      },
      hint9: {
        id: "hint9",
        answer: "kaksoisrakokoe",
        title: "Valon ja Aineen Salatut Kaksi Kasvoa",
        description:
          "Sodat ja imperiumit jäävät varjoon, kun siirrytään todellisuuden syvimpiin rakenteisiin. Menneisyys, kulttuuri ja universumin laajeneminen ovat ihmisen käsitettävissä, mutta on yksi ilmiö, joka pakottaa meidät kyseenalaistamaan itse havaintojen ja olemassaolon luonteen. Valo, hiukkaset, aallot – mikä on todellisuuden perusta?",
        riddle:
          "Etsi eräs kokeellinen asetelma, jolla 1800-luvun alussa osoitettiin valon aaltoluonne, mutta joka myöhemmin osoittautui avainasemaan myös kvanttimekaniikan kehityksessä. Kun tämä koe toistettiin yksittäisillä hiukkasilla, tulos paljasti mysteerin: ainekin voi käyttäytyä kuin aalto, kunnes havaitsemme sen. Mikä on tämän historian kuuluisa koe?",
        imagePrompt:
          "A subtle, abstract illustration of a laboratory setup with two narrow slits before a screen, faint interference patterns emerging as ghostly fringes of light and shadow.",
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
  pikkujoulu: {
    id: "pikkujoulu",
    initialPassword: "saturnalia",
    name: "Pikkujoulun Arvoitukset",
    hints: {
      hint1: {
        id: "hint1",
        answer: "esseenit",
        title: "Mistä kaikki alkoi?",
        description:
          "Tarina vie meidät aikaan, jolloin kaikki oli vielä muotoutumassa. Pohdimme perustavanlaatuista kysymystä: Mihin uskonnolliseen yhteisöön kuului nuori perhe, jonka lapsesta tuli yksi historian tunnetuimmista hahmoista?",
        riddle:
          "Etsi historiallista tietoa siitä, mihin uskonnolliseen ryhmään Jeesus Nasaretilainen ja hänen vanhempansa Joosef ja Maria kuuluivat. Mikä oli heidän uskonnollinen taustansa?",
        imagePrompt:
          "A softly lit, ancient Middle Eastern village at dusk, a modest family dwelling in the background, evoking a sense of biblical history.",
        nextHintId: "hint2",
      },

      hint2: {
        id: "hint2",
        answer: "888",
        title: "Nimen Salainen Lukuarvo",
        description:
          "Muinaisina aikoina kirjaimet eivät olleet pelkkiä äänteitä – niihin kätkeytyi lukuarvoja. Kreikan aakkosia hyödyntävässä gematriassa nimien ja sanojen merkillisyys voidaan paljastaa numeroiden kautta. Tietyllä nimellä, joka on ehkä yksi maailman tunnetuimmista, on hyvin erityinen lukuarvo.",
        riddle:
          "Tutki kreikkalaista gematriaa(isopsephia) ja etsi, kuinka Jeesuksen nimi (kreikaksi Iēsous) muodostuu numeroiksi. Laske kirjainten yhteenlaskettu arvo. Mikä on tämä kuuluisa luku?",
        imagePrompt:
          "An ancient scroll with Greek letters in neat rows, faint numeric symbols next to each letter, suggesting hidden numerical mysteries.",
        nextHintId: "hint3",
      },

      hint3: {
        id: "hint3",
        answer: "analemma",
        title: "Korkeimman Yön Arvoitus",
        description:
          "Talvipäivänseisauksen aika on pohjoisella pallonpuoliskolla vuoden pimein. Silti moni huomaa, että vuoden aikaisin auringonlasku osuu kalenterissa eri päivälle kuin vuoden myöhäisin auringonnousu. Tämä näennäinen ristiriita on kiehtonut tähtitieteilijöitä vuosisatojen ajan.",
        riddle:
          "Jos valokuvaisit Auringon sijainnin täsmälleen samaan kellonaikaan jokaisena vuoden päivänä, piirtyisi taivaalle kahdeksikon muotoinen kuvio. Tämä ilmentää Maan akselikallistuksen ja radan elliptisyyden yhteisvaikutusta sekä selittää, miksi pimein päivä ei ole sama kuin aikaisin auringonlasku. Mikä on tämän kuvion nimi?",
        imagePrompt:
          "A sequence of sun positions forming a figure-eight pattern across the sky over the course of a year, showing different heights and horizontal shifts.",
        nextHintId: "hint4",
      },

      hint4: {
        id: "hint4",
        answer: "400–700",
        title: "Valon Näkymätön Kirjo",
        description:
          "Kylmän talven keskellä ihmissilmä nauttii jokaisesta valonsäteestä. Mutta silmämme voivat havaita vain pienen osan kaikesta säteilystä. Tällä välillä värien sinfonia soi, mutta aistimme ei ole luotu enempään... vai onko se?",
        riddle:
          "Mikä on suunnilleen se aallonpituusalue (nanometreinä), jolla ihmiselle näkyvä valo esiintyy? (Vinkki: Vastaa muodossa 'xxx–yyy'.)",
        imagePrompt:
          "A prism splitting a bright beam of light into a vivid rainbow spectrum over a dark background.",
        nextHintId: "hint5",
      },

      hint5: {
        id: "hint5",
        answer: "sadalsuud",
        title: "Miten määrittää uusi aikakausi?",
        description:
          "Kun puhutaan kalojen ajasta ja vesimiehen ajasta, kiistellään usein siitä, milloin raja oikeasti ylittyy. Jotkut katsovat vain Maapallon prekession ajallista sykliä, toiset seuraavat tähtikarttaa vielä tarkemmin. Löydätkö tiedon siitä, minkä kirkkaan tähden kautta jotkut astrologit arvioivat, että siirtymä tapahtuu?",
        riddle:
          "Etsi tietoa niistä astrologisista näkemyksistä, joissa uusi aikakausi alkaa, kun kevätpäiväntasaus linjautuu tiettyyn vesimiehen tähteen. Tätä Beta Aquarii -nimellä tunnettua tähteä kutsutaan myös arabialaisella nimellä, joka merkitsee 'suotuisaa onnea'. Mikä on kyseisen tähden nimi?",
        imagePrompt:
          "A star map highlighting the constellation Aquarius, focusing on a single bright point labeled Beta Aquarii, with ancient celestial artwork faintly visible.",
        nextHintId: "hint6",
      },

      hint6: {
        id: "hint6",
        answer: "25920 vuotta",
        title: "Prekession Suuri Kierto",
        description:
          "Astrologinen aikakausi viittaa maapallon prekessioon, tähtien hitaaseen siirtymään taivaalla. Tämä liike piirtää taivaalle jättimäisen kellon, jota mitataan vuosituhansien sykleissä. Syklin pituus selviää, kun tutkit niin kutsuttua ’isoa vuotta’.",
        riddle:
          "Etsi tietoa maapallon prekessiosta. Kuinka monta vuotta (pyöreästi) kestää, että Maan akseli tekee yhden täyden kierroksen eli ’ison vuoden’?",
        imagePrompt:
          "An ancient star map depicting the Earth’s axial tilt and a grand cycle of constellations encircling the celestial sphere.",
        nextHintId: "hint7",
      },

      hint7: {
        id: "hint7",
        answer: "cseti",
        title: "Laajeneminen Hynekin Rajojen Yli",
        description:
          "Tähtitieteilijä J. Allen Hynek loi kuuluisan asteikon, jolla UFO-havainnot jaetaan eri läheisyyden tasoihin. Vielä 1900-luvun loppupuolella eräs amerikkalainen lääkäri laajensi tätä mallia uuteen suuntaan: hän ei pitänyt ihmistä pelkkänä sivustaseuraajana, vaan arveli, että voimme tietoisesti kutsua ja kohdata mahdollisia ulkoavaruuden vieraita.",
        riddle:
          "Etsi historian kätköistä tieto amerikkalaisesta ensiapulääkäristä, joka jätti työnsä 1990-luvun alussa omistaakseen elämänsä meditatiivisille menetelmille ja 'universaalille diplomatialle'. Millä termillä hän kutsui sen ympärille luotua organisaatiota?",
        imagePrompt:
          "A silent clearing under a magnificent starry sky, with several people sitting in a focused circle, faint beams or orbs visible overhead as if responding to a call.",
        nextHintId: "hint8",
      },

      hint8: {
        id: "hint8",
        answer: "9.6.1983",
        title: "Aivot, Satunnaisuus ja Valtion Salaisuudet",
        description:
          "Etsimme jatkuvasti ulkoisia mysteerejä, mutta yksi kiehtovimmista arvoituksista saattaa piillä omassa tietoisuudessamme. Kuinka mieli vaikuttaa todennäköisyyksiin? Voiko ajatuksemme muuttaa satunnaisia tuloksia? Näitä kysymyksiä on pohdittu syvällisesti jopa korkean tason virastoissa. Yksi merkittävä asiakirja, joka käsittelee ihmispsyykeen ja havaintojen rajojen tutkimista, on peräisin eräästä yllättävästä lähteestä...",
        riddle:
          "CIA teetti tutkimuksen, joka käsittelee tietoisuuden ja todellisuuden välistä suhdetta sekä viittaa koeasetelmiin, joissa mahdollisesti testattiin mielen vaikutusta satunnaisuuteen. Selvitä, minä päivämääränä tämä muistio (alkuperäinen päiväys) on päivätty. Anna vastauksesi muodossa (1.1.2000).",
        imagePrompt:
          "A dimly lit archive room lined with metal filing cabinets, a single folder on a wooden desk titled 'Classified', faintly illuminated by a desk lamp.",
        nextHintId: "hint9",
      },

      hint9: {
        id: "hint9",
        answer: "2",
        title: "Kehityksen Koodinvaihdunta",
        description:
          "Kun katsot peiliin, näet menneisyyden ja tulevaisuuden risteyskohdan. Ihmisen genomi kätkee sisälleen tarinan, jossa kahden kromosomin sulautuminen on nostettu esiin mahdollisena käännekohtana lajimme kehityksessä. Teoria herättää kysymyksen: mitä oikein tapahtui, ja milloin?",
        riddle:
          "Ota selvää ihmisen ja muiden kädellisten geneettisistä eroista. Millä kromosomilla on havaittavissa merkkejä muinaisen fuusion tapahtumasta, jota pidetään yhtenä askeleena ihmisen nykyiseen genomiin? (Vastaa numeroilla)",
        imagePrompt:
          "A faintly glowing strand of human DNA, with a highlight on a specific region where two segments appear to have merged, representing a genetic crossroads.",
        nextHintId: "hint10",
      },

      hint10: {
        id: "hint10",
        answer: "laschamp",
        title: "Käänteinen Kompassi Muinaisuudessa",
        description:
          "Ihminen on oppinut seuraamaan neulan osoittamaa pohjoista, mutta vanhoissa laavakivissä säilyy toisenlainen tarina. On hetkiä, jolloin kompassimme olisi pettänyt täysin, ja aurinkotuulien myrsky olisi voinut pyyhkiä suojauksen pois. Ranskassa sijaitseva laavavirta on antanut tutkijoille vihjeen, että Maan varma pohjoinen saattoi kääntyä ylösalaisin. Paljon on kiistelty, millaisia vaikutuksia tällä oli eläimistöön ja ilmastoon.",
        riddle:
          "Ota selvää tästä noin 40 000–50 000 vuotta sitten ajoittuvasta omituisesta kaudesta, joka tunnetaan paikannimen perusteella. Sen jättämä jälki laavakivissä viittaa magneettiseen poikkeamaan, joka muutti hetkellisesti koko planeettamme ‘pohjois-etelä’-suuntia. Mikä on tuon merkillisen tapahtuman nimi?",
        imagePrompt:
          "A rugged ancient lava flow under starry skies, faint auroral lights flickering overhead, suggesting a world where magnetic north is not where we expect it to be.",
        nextHintId: null,
        finalAnswer: "laschamp",
      },
    },
  },
};
