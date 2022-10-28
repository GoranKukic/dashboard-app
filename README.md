# Melts

This is task for Junior Front End Developer job interview.

## The brief

- Napraviti web stranicu kao iz prilozenog Figma dizajna.
- Stranicu je potrebno napraviti koristeci Angular/React, a fajlovi za stilove treba da budu u SCSS formatu.

Funkcionalnosti web stranice:

- Na levom meniju postoje 4 ikonice. Klikom na svaku od ikonica menja se ruta stranice. Pulse ikonica je pocetna stranica koja je definisana u dizajnu.
  Meeting, Items i Actions stranice nisu definisane u dizajnu i mogu da imaju bilo kakav sadrzaj (mozete i ostaviti prethodno definisani tekst pri pravljenju komponente).
  Klikom na svaku ikonicu ona menja izgled u aktivno stanje (definisan izgled u dizajnu).
- U headeru sa desne strane stoji ikonica za notifikacije. Klikom na nju pojavljuje se dropdown sa dve opcije. Opcije treba da imaju hover efekat (kao na dizajnu).
  Takodje ikonica menja boju na klik i nestaje brojac notifikacija u desnom gornjem uglu.
  Ponovnim klikom na ikonicu, klikom na opciju ili klikom bilo gde van nje, dropdown treba da nestane. Opcije nemaju nikakvu funkcionalnost.
- Sa desne strane se nalazi kalendar koji moze da se otvara i zatvara. Klikom na X u gornjem desnom uglu kalendar nestaje i svi podaci na stranici se prosire maksimalno (pogledaj dizajn).
  Klikom na << ikonicu se ponovo pojavljuje i sadrzaj na stranici se skuplja za sirinu kalendara. Bonus zadatak je ako se doda neka animacija prilikom prikazivanja i sakrivanja kalendara (da ima smisla naravno).
- Na listi itema postoje 3 vrste statusa. Boje statusa zavise od njihovih tipova (pogledaj dizajn). Takodje boje statusa definisu i boju datuma na pocetku liste itema. Ukoliko
  je status rejected, item dobija delay 1d overdue (pogledaj dizajn). Klikom na ikonicu koja predstavlja oko, otvara se modalni dijalog koji ima dva dugmeta - ok i close (oba zatvaraju modalni dijalog).
- Na karticama Task You Initiated i Overdue Actions postoje progres barovi sa procentima. Ukoliko je procenat od 0 do 40 boja bara je crvena i zauzima procenat obojenosti zadate vrednosti. Ukoliko je vrednost
  izmedju 41 - 60 boja je narandzasta, ukoliko je vrednost 61- 90 boja je plava i ukoliko je vrednost veca od 91 boja je zelena.
- Klikom na dugme + Quick Item otvara se dijalog sa formama. Nakon popunjavanja forme, klikom na dugme submit, vrednosti iz forme treba da se sacuvaju u json fajl. Sva polja u formi treba da su obavezna, ukoliko nisu submit ne moze da se izvrsi.
  Bonus zadatak - napraviti validacione poruke ukoliko korisnik nije popunio sva polja.

U prilogu dobijate i data fajl u kojem se nalaze potrebni podaci za rad. Napravite json fajl koji ce da vam posluzi umesto API.

## Live Preview

[See live here](https://)

## Description

- page is responsive for all devices
- it is pixel perfect with few minor changes so layout is now centered properly
- in this project I havent used any preporcesors like SCSS for CSS because that was one of conditions
- also this page is builted without any JavaScript frameworks
- page is deployed to netlify, and has live preview
