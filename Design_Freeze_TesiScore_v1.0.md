# TesiScore -- Design Freeze v1.0

**Projekt:** TesiScore\
**Állapot:** Design Freeze (grafikai alap rögzítve)\
**Dátum:** 2026-07-09

## Cél

A dokumentum rögzíti a TesiScore alapvető megjelenését és
kezelőfelületét. A dokumentum jóváhagyása után a grafikai elemek csak
kivételes esetben változnak.

## 1. Elrendezés

                    IDŐ

    BAL CSAPAT              JOBB CSAPAT

         18      :      16

-   Az óra felül, középen jelenik meg.
-   A csapatnevek az óra alatt helyezkednek el.
-   A pontszám a legnagyobb grafikai elem.
-   A pontszámok között 7 szegmenses kettőspont jelenik meg.

## 2. Kijelző

-   Saját SVG alapú 7 szegmenses számok.
-   Vastag, ferde végű szegmensek.
-   A kikapcsolt szegmensek közel feketék.
-   Projektorra optimalizált kontraszt.

## 3. Színek

-   Bal pontszám: kék
-   Jobb pontszám: piros
-   Óra: sárga
-   Háttér: fekete

Mindhárom szín külön módosítható.

## 4. Beállítási panel

-   Bal csapat neve
-   Jobb csapat neve
-   Mérkőzés ideje
-   Bal szín
-   Jobb szín
-   Óra színe

Működés: - Fogaskerék nyit/zár. - ESC bezár. - Külső kattintás bezár. -
Mentés localStorage-ba.

## 5. Billentyűzet

-   A = bal +
-   Y = bal --
-   K = jobb +
-   M = jobb --
-   Szóköz = idő indítás/megállítás
-   F = teljes képernyő
-   ESC = panel bezárása

## 6. Projektor mód

-   Gombok automatikusan elrejtve.
-   Fogaskerék elrejtve.
-   Egérkurzor elrejtve.
-   Csak az eredményjelző látszik.

## 7. Következő modulok

-   Röplabda
-   Kosárlabda
-   Labdarúgás
-   Telefonos vezérlés
-   PWA

## Jóváhagyás

A dokumentum elfogadása után a grafikai alap véglegesnek tekintendő.
