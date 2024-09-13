/*
    HTTP (Hypertext Transfer Protocol) egy hálózati, hipermédiás protokoll.
    Ennek a protokollnak a segítségével tu kommunikálni az úgynevezett szerver 
    és user agent. Ez utóbbi általában véve egy böngésző.

    A HTML (HyperText Markup Language) egy jelölőnyelv, amit weboldalak készítésére használunk 
    Ez a weboldalak vázát adja, és leírja, hogyan kell megjelölni a tartalmat a böngészők számára 

    Mire jó a HTML?

    1. Tartalomszervezés 
    a HTML segítségével megadhatjuk, hogy a weboldal egyes részei (pl. címek, bekezdések, listák) hogyan jelenjenek meg 

    2. Linkek és navigáció 
    Lehetőséget biztosít arra, hogy a különböző oldalak és erőforrások között kapcsolatot létesítsünk hiperhivatkozásokkal 

    3. Multimédia elemek beillesztése 
    Képeket, videókat, hangfájlokat és integrálhatunk egy weboldalra. 

    4. Webalkalmazások alapja
    A HTML az alapja minden webalkalmazásnak, és más technologiákkal (pl. CSS, JavaScript) együtt használva egy dinamikus és interaktiv 
    felületet hozhatunk létre 

    Mi az a protokoll 

    A protokoll egy szabályrendszer, ami meghatározza, hogyan komunikálnak egymással a számítógépek vagy hálózati eszközök.
    A protokollnak az célja, hogy egységes keretet adjanak az adatküldéshez és fogadáshoz, így az eszközök megértik egymás üzeneteit.

    Példák protokollra 
    HTTP 
    A weboldalak betöltésére használjuk. Ez az a protokoll ami a böngésző és a webkiszolgáló közötti kommunikációt szabályozza 

    FTP (File Transfer Protocol) 
    Fájlok küldésére és fogadasára szolgáló protokoll 

    TCP/IP (Transmission Control Protocol / Internet Protocol) 
    Ez az internet alapvető protokollkészlete, ami meghatározza, hogyan küldenek és fogadnak adatokat az eszközök az interneten. 

    Miért fontossak a protokollok?

    Biztosítják, hogy a különböző eszközök (pl. számítógépek, szerverek) azonos módon tudjanak adatokat cserélni egymással, függetlenül attól, 
    hogy milyen operációs rendszert vagy szoftvert használnak. 
    A szabályok egységessége garantálja, hogy az adatcsere biztonságos és érthető legyen minden résztvevő számára 
*/

/*
    Amikor beírunk valamit a böngészőben, hogy google.com a következő dolgok történnek 

    1. Domain beírása 
    Amikor beírjuk, hogy google.com címet, a böngészőnk megprobálja megtalálni, hogy melyik serverhez kell csatlakozni. 
    A google.com valójában csak az ember számára könnyen olvasható cím, amit egy IP-címre kell elfordítani, hogy a számítógépek megértsék, hogy 
    hova kell kapcsolódni. Ehhez használják a a DNS-t (Domain Name System), amely egy olyan "telefonkönyv", amely a domainneveket IP címekhez 
    rendeli 

    2. Kérés (Request) küldése 
    Mután megtalálták a megfelelő szervert (pl. a Google szerverét) a böngészőnk küld egy kérést a szervernek. Ezt nevezik HTTP kérésnek.
    Ebben a kérésben azt mondja a böngésző a szervernek "Szeretném látni a google.com oldalt, küldd el nekem a tartalmát".
    
    3. Szerver válasza (response) 
    A szerver (pl. a Google szervere) fogadja ezt a kérést, és megnézi, hogy mit kell visszaküldenie. 
    Ez a szerver lehet akár egy adatbázis. ahol a weboldal összes tartalma tárolva van, vagy előre elkészített fájlok, mint HTML, CSS, 
    Javascript, képek stb. Ezuán a szerver küld egy választ, amely tartalmazza az oldalt!!!! 

    4. Válasz megjelenítése 
    A böngészőnk fogadja ezt a választ, ami tipikusan egy HTML oldal, és elkezdi megjeleníteni a tartalmat a képernyőn. 
    A HTML leírja, hogy kell megjeleníteni egy oldalt, CSS a design-ot, JavaScript pedig az interaktivítást 

    Mi az az API 
    Az API(Application Programming Interface) egyfajta "közvetítő" amit a programok használnak, hogy kommunikáljanak egymással 
    Az API nem feltétlenül az, amit mi látunk a képernyőn, amikor beírjuk, hogy google.com. Az API inkább olyan szolgáltatások 
    amelyet más programok vagy webalakalmazások hívnak meg, hogy adatokat kérjenek le, vagy müveletek végezzenek (pl. egy időjárás
    app használat egy API-t az aktuális időjárási adatok lekérdezéséhez) 
    
    Összefoglalva 
    1. Beírod a webcímet, a böngészőnk lekérdezi a címhez tartozó szervert. 
    2. A böngésző küld egy HTTP kérést a szervernek 
    3. A szerver válaszol a kért adatokkal (pl. weboldal) tartalmazó HTTP válasszal 
    4. A böngésző megjeleníti az oldalt 
*/ 

/*
    Kérések típusai (HTTP metódusok) 
    Amikor a böngészőnk (vagy egy program) küld egy HTTP kérést a szervernek, különböző HTTP metódusokkal teheti ezt 
    Ezek a metódusok meghatározzák, hogy pontosan milyen müveletet szeretnénk végrehajtani a szerveren 

    1. GET 
    Ezzel adatokat kérünk le a szervertől. Pl. amikor betöltünk egy weboldalt, általában GET kéréseket küld a böngészönk, hogy 
    megkapja a weboldal tartalmát 

    2. POST 
    Adatokat küld a szervernek. Pl. amikor egy űrlapot küldünk el (lehet egy bejelentkezési adatokat tartalmazó form)
    ez POST kérés lesz. A POST kérések általában új adatokat hoznak létre a szerveren. 

    3. PUT 
    Használhatjuk adatok frissítésére. Ez azt jelenti, hogy a szerveren lévő adatokat lecseréled új adatokra.

    4. PATCH
    Ezzel részben frissítünk adatot. Míg a PUT az egész adatot lecseréli, a PATCH csak egy részt változtat meg. 

    5. DELETE 
    Ez az adat törlésére szolgál a szerveren 

    Kérés és a válasz felépítése 

    Kérés felépítése 
    1. Fejléc (HEADER): Itt adhatjuk meg azokat az információkat, amelyek szükségesek a kérés kezeléséhez. Pl. megadhatjuk, hogy milyen 
    típusú adatokat fogadhatunk el válaszként (Accept: application/json) vagy, hogy milyen formában küldjük az adatokat (Content-type: 
    application/json). Ide az is kerül, hogy milyen böngészőt használunk, van-e engedélyezett cookie stb. 

    2. Törzs (BODY)
    Ez az a rész, ahol adatokat küldjük. A GET kérésben általában nincsen törzs, mert csak adatokat kérünk le, de egy POST kérésben 
    itt küldjük el az űrlap vagy a JSON formátumú adatokat 

    Válasz felépítése 
    A szervernek a válaszának is több része van, és a legfontosabb részek 

    1. Fejléc (HEADER) 
    A fejlécben találhatjuk a válasz állapotát pl. 
    200 OK - a kérés sikeresen feldolgozva, minden rendben 
    404 Not Found - A kérésben kért adat vagy oldal nem található a szerveren 
    500 Internal Error - Valami hiba történt a szerveren, amit nem tudott kezeleni 

    Emellett itt találhatók más fontos információk is, pl. a válasz típusa (Content-type: application/json, text/html, stb) 
    a válasz ideje, a szerver neve és egyébb metaadatok 

    2. Törzs (BODY) 
    Ez tartalmazza magát a az adatotot vagy tartalmat, amit a szerver visszaküld. Ha egy GET kérésben egy weboldalt kérünk le, akkor itt 
    lesz a HTML tartalom. Ha egy API hívásban kérünk adatokat (pl. egy JSON fájl formájában), akkor itt kapjuk meg az adatokat!!!!!!!!!!!!
*/

/*
    Példa a GET kérésre 
    1. kérés

    GET /example HTTP/1.1
    Host: www.example.com
    Accept: text/html

    GET: a metódus, amivel az adatokat kérjük 
    /example: Ez az útvonal, amit a szervertől kérünk 
    Host: Ez a domain neve, ahová a kérés megy (pl. www.example.com) 
    Accept: Itt megadjuk, hogy milyen formátumban szeretnénk a választ (pl. HTML formátum) 
    
    2. Válasz 
    HTTP/1.1 200 OK
    Content-Type: text/html
    Content-Length: 1234

    <!DOCTYPE html>
    <html>
    <head><title>Példa oldal</title></head>
    <body><h1>Üdvözöllek a példában!</h1></body>
    </html>

    200 OK: a szerver válaszolta, hogy a kérés sikeres volt 
    Content-type: a válasz formátuma HTML 
    Content-length: a válasz mérete (bájtokban)

    A törzsben pedig ott van a HTML oldal, amit a böngészőnk megjelenít!!!!!!!!

    Összefoglalva 
    - A kérés különböző metódusakkal küldhető (GET, POST, PUT, PATCH stb.) 
    - a kérés fejlécében adunk meg metaadatokat (pl. milyen típusú adatokat küldünk vagy fogadunk)
        a törzsben pedig a tényleges adatok, ha vannak 
    - válasz is egy fejlécből és törzsből áll. a fejlécben találjuk az állapotkódokat (pl. 200, 404)
        a törzsben pedig magát az adatokat!!!!!!(HTML, JSON)

*/

/*
    IP cím 

    Az IP cím (Internet Protocol) egy egyedi azonosító, amit minden olyan eszköz kap, amely csatlakozik a internethez vagy helyi hálózathoz.
    Gondoljunk úgy rá mint egy digitális címre, amely segítségével a számítógépek és a szerver megtalálják egymást.
    
    Példák az IP címre 
    IPv4: 192.168.1.1 (az IPv4 címek 4 darab 0-255 közötti számból állnak, amit pontok választanak el)
    de van egy bonyolultabb verziója -> IPv6 

    Szerepe a kommunikációban 

    Amikor egy szerverhez vagy egy másik eszközhöz szeretnénk kapcsolódni (pl. beírjuk, hogy google.com)
    a böngésző valójában nem a nevet, hanem az IP címet használja, hogy megtalálja a szervert. 
    Ahogy korábban említettük a DNS fordítja le a domain neveket (pl. google.com) az adott szerver IP címére 

    Pl. amikor a böngészőnk a google.com weboldalt szeretné elérni, a DNS kiszolgáló megkeresi a megfelelő IP címet 
    mondjuk 142.250.180.78 (ez egy google szerver IP címe) és a böngészőnk ezen az IP címen keresztül küld kéréseket!!!! 

    HTTP/1.1 és HTTP/2.0 

    HTTP (HyperText Transfer Protocol) az a szabvány, amely meghatározza, hogyan küldünk kéréseket és kapunk válaszokat a weben 
    A HTTP/1.1 és a HTTP/2.0 különböző verziói ennek a protokollnak és mindkettő segít a szerver és a kliens közötti kommunikációban 

    HTTP/1.1 
    - Ez a korábbi verzió, amelyet széles körben használnak még ma is 
    - A kérések egyesével történnek. Minden egyes fájl (pl. HTML, képek, CSS, JavaScript) külön kérésként megy a szerverhez, ami lassítja a 
        betöltést 

    HTTP/2.0 
    - Ez egy fejlettebb verzió, amelyet a böngészők már támogatnak 
    - Jobban optmizált, mert több kérés is képes egyszerre küldeni (multiplexing), így gyorsabban töltődnek be az oldalak 
    - Támogatja a titkosítást is, ezért biztonságosabb 

    !!!!!!!
    Titkosítás és HTTP verziók 
    A HTTP/1.1 és HTTP/2.0 nem automatikusan titkosított, de ha HTTPS használunk, akkor az összes adat titkosítva lesz, függetlenül attól, hogy 
    melyik HTTP verziót használjuk. A HTTPS egy titkosított verziója a HTTP-nek, ahol az adatcsere biztonságosan történik, és a böngésző 
    titkosítja az adatokat a szerverhez való elküldés előtt!!!!!!
*/

/*
    Mi az a port és miért fontos? 
    A port egy logikai "ajtó" vagy csatorna, amelyen keresztül egy számítógépen futó alkalmazások elérhetőek. 
    Amikor egy IP címhez kapcsolodunk, az IP cím meghatározza, hogy melyik eszközhőz csatlakozunk, de a port szám 
    azt mondja meg, hogy az adott eszközöm futó alkalmazások közül melyikhez szeretnénk kapcsolódni!!! 

    Példa a portok használatára: 
    80-as port:
    Ez az alapértélmezett port, ami nem titkosított a HTTP kapcsolatokhoz. Amior beírunk egy webcímet és nem írjuk ki a port-ot 
    a böngészönk automatikusan a 80-as port-ot használja 

    443-as port 
    Ez az alapértelmezett port a titkosított HTTPS kapcsolatokhoz. 
    Ha HTTPS-t használunk, akkor a a böngészőnk a 443-as port-on kommunikál 

    A portok szerepe egy projektben 
    Amikor egy saját szervert futtatunk, például egy webalkalmazás a NODE.JS segítségével, a projektet egy adott port-on futtatjuk!!! 
    Ez biztosítja, hogy a szerver elérhető legyen az adott port-on keresztül.
    Például ha egy Node.js projektet futtatunk a 3000-as port-on, akkor a böngészőnk így érhető el 
    -> 
    http://localhost:3000

    Példa a Node.js-ben 

    const express = require('express');
    const app = express();
    const port = 3000; // A port, ahol a szerver fut

    app.get('/', (req, res) => {
    res.send('Hello, világ!');
    });

    app.listen(port, () => {
    console.log(`A szerver fut a következő címen: http://localhost:${port}`);
    });

    Összefoglalva:

    IP cím: 
    Egy egyedi cím, amely azonosítja az eszközöket az interneten vagy hálózaton. Az IP cím segít megtalálni, hogy melyik szerverhez 
    kell kapcsolódni 

    HTTP/1.1 és HTTP/2.0:
    Különböző verziók a webes adatátvitelhez. A HTTP/2.0 gyorsabb és hatékonyabb, de mindkettőt használhatjuk titkosítva, ha HTTPS alkalmazunk 

    PORT: 
    Egy logikai "ajtó", amelyen keresztül az alkalmazások elérhetőek. 
    Az adott szerver különböző szolgáltatásai különböző port-okon érhetőek el (pl. 80-sd port a HTTP-hez, 443-as port a HTTPS-hez)

    A portok és az IP címek együttmüködése lehetővé teszi, hogy a különböző eszközök és alkalmazások hatékonyan kommunikáljanak egymással 
    az interneten!!! 
*/
