/*
    Hogyan müködnek a hosszú URL-ek a valódi életben?

    Amikor egy webáruházat, pl. a Notino látogatunk meg és külön

    Nagyszerű kérdés, és teljesen érthető, hogy kicsit összetettnek tűnhet elsőre, főleg ha az API-k, URL-ek és JSON struktúrák közötti kapcsolatot vizsgáljuk. Nézzük meg lépésről lépésre, hogyan működik mindez a valós életben, különösen egy e-kereskedelmi platform példáján keresztül (mint a Notino és a termékkategóriák).

Hogyan működnek a hosszú URL-ek és termékkategóriák valós életben?
Amikor egy webáruházat, például a Notino-t látogatod meg, és különböző kategóriák között böngészel (pl. Parfümök, majd azon belül Gucci Parfümök), az URL-ed így nézhet ki:

ruby
Kód másolása
https://www.notino.hu/parfumok/gucci/
Ilyen esetben az URL több részre oszlik, és ezek mindegyike egy adott termékkategóriára vagy termékcsoportra mutat:

https://www.notino.hu/ – Ez az alap URL, a webhely domain neve.
/parfumok/ – Ez a kategória, amely a parfümöket jelöli.
/gucci/ – Ez pedig a konkrét márka, azaz a Gucci parfümök.
Mi történik a háttérben?
URL kezelés:
Amikor a böngésződben beírod ezt az URL-t, a szerver ez alapján tudja, hogy melyik termékekhez kell hozzáférnie (például: Gucci parfümök a Parfümök kategóriában).
Adatok lekérése (API hívás):
A szerver vagy maga a webalkalmazás meghív egy API-t (vagy több API-t), hogy lekérje az adatokat. Az API egy olyan rendszer, amely strukturált adatokat szolgáltat, pl. JSON formátumban. Ebben az esetben az API az adatbázisból lekéri a Gucci parfümökhöz kapcsolódó információkat (termék neve, leírása, ára, képe stb.).
Az adatok visszatérése JSON formátumban:
Az API válaszol egy JSON fájllal. Ez egy strukturált adatfájl, amit a szerver vagy a kliens oldali alkalmazás könnyen feldolgozhat. Például a Gucci parfümök listája így nézhet ki:
json
Kód másolása
{
  "products": [
    {
      "id": 1,
      "brand": "Gucci",
      "name": "Gucci Bloom",
      "price": 99.99,
      "image": "https://example.com/images/gucci_bloom.jpg"
    },
    {
      "id": 2,
      "brand": "Gucci",
      "name": "Gucci Guilty",
      "price": 89.99,
      "image": "https://example.com/images/gucci_guilty.jpg"
    }
  ]
}
Hogyan jelenik meg mindez a JavaScript-ben?
Miután az API visszaadja a fenti JSON struktúrát, a JavaScript segítségével feldolgozhatod, majd megjelenítheted a felhasználók számára. Az API hívásokat gyakran fetch() függvénnyel vagy más könyvtárakkal (pl. Axios) végzik.

JavaScript példa (API hívás és adatok megjelenítése):
javascript
Kód másolása
// API hívás a parfümök adatainak lekéréséhez
fetch('https://dummyapi.com/products/gucci')
  .then(response => response.json())
  .then(data => {
    const productList = data.products; // A JSON válaszból a termékek listája
    const productContainer = document.getElementById('product-list');
    
    // Minden termék megjelenítése a HTML-ben
    productList.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>Ár: ${product.price} USD</p>
        <img src="${product.image}" alt="${product.name}">
      `;
      productContainer.appendChild(productDiv);
    });
  })
  .catch(error => console.error('Hiba történt:', error));
Lépésről lépésre:
API hívás: A fetch() funkció elküld egy GET kérést az API-nak (például a /products/gucci végpont felé).
Adatok feldolgozása: Miután az API visszatér a JSON formátumú válasszal, a .json() metódus segítségével feldolgozzuk az adatokat.
Adatok megjelenítése: A terméklistát egy HTML elemben (pl. egy div-ben) jelenítjük meg a felhasználó számára, a termék nevét, árát és képét is láthatóvá téve.
Hogyan működik ez nagy méretű weboldalaknál?
Amikor egy nagy webáruházban böngészel, a folyamat hasonló, de sokkal több adatot és kérést kezelnek:

Kategorizálás: A hosszú URL-ek lehetővé teszik, hogy könnyen navigálj a különböző kategóriák között (pl. parfümök, férfi/női termékek stb.).
Adatok szűrése: Az URL-ben szereplő információk (pl. Gucci) alapján az API csak az adott termékek adatait szolgáltatja.
Pagináció: Ha rengeteg termék van, a termékek oldalakra vannak bontva, és a JavaScript kezelheti, hogy mindig csak egy adott számú terméket jelenítsen meg, majd „lapozhass” a további termékek között.
Aszinkron adatbetöltés: Nagyobb oldalaknál az adatokat aszinkron módon kérheted le (pl. görgetéskor újabb termékek jelennek meg, ahogy az oldalt lefelé görgeted).
Összefoglalva:
Amikor egy hosszú URL-t használsz (pl. Notino), a böngésződ és a szerver lekérdezi a kategóriákat, és egy API hívással kér adatokat a termékekről.
Az API által visszaadott adatokat JSON formátumban kapod meg, amit JavaScript segítségével feldolgozol.
A JavaScript megjeleníti a kapott adatokat a felhasználók számára HTML elemek formájában.
Az API hívások hatékonyak, mert strukturált adatokat küldenek vissza, így könnyen feldolgozhatók és megjeleníthetők a weboldalon.
Remélem, ez most egy kicsit érthetőbbé tette, hogyan működnek ezek a dolgok a valóságban! Ha további kérdéseid vannak, nyugodtan kérdezz! :)
*/