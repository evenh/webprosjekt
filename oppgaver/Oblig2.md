
#Webprosjekt H2013

Individuell oppgave, del 2
----------------------------------

Du skal ta utgangspunkt i *en kopi* av siden du lagde sist, og utvide den med javascript og PHP. 
**Les oppgaveteksten nøye** - [nå skjerpes greiene](http://www.lyricsfreak.com/d/dumdum+boys/splitter+pine_20292589.html). 

**Frist:** 
*Søndag 13.10.2013 kl. 23:59* 

**OBS:** *Dette er en **hard deadline**. Kun gyldig sykemelding, eller *innvilget* utsettelse *i forkant av fristen*, gir grunnlag for senere levering*. 

**Spørsmål/Henvendelser:** 
*Alle* henvendelser ifbm. oppgaven skal sendes til [webprosjekt@cs.hioa.no](mailto:webprosjekt@cs.hioa.no)

### Generelt
  - Du skal opprette en kopi av siden du lagde sist, i mappen "www/webprosjekt2" (altså en ny mappe 'webprosjekt2' i mappen 'www'). Denne mappen blir ikke indeksert av søkemotorer, med mindre du lager linker til den, så alle skal nå kalle sin hovedside, under denne mappen, for `index.php`. du skal altså finne siden din ved å skrive følgende url:
    - `http://student.cs.hioa.no/~s173682/webprosjekt2` 
    - (s173682 skal naturligvis byttes ut med ditt studentnummer)
    - **OBS: Dette er et absolutt krav**. Det er ikke godt nok å komme til en liste av filer, el.

### PHP
  - **Undersider med PHP**. Du skal ha minst 3 undersider som egne HTML-dokumenter i tillegg til hovedsiden. Dersom du ikke har dette fra før skal du lage det. (Hvis du synes det er vanskelig å finne på tekst, bruk tekstutdrag fra bøker/wikipedia, bildegalleri, produktinfo om et produkt du liker, etc. Bare husk å oppgi referanse dersom du ikke har laget innholdet selv). 
    - Du skal brukePHP [include](http://www.php.net/manual/en/function.include.php) til å inkludere det innholdet som er forskjellig fra side til side, slik at HTML-rammeverket kun finnes i ett eksemplar. 
    - Du skal bruke en "query-string"-variabel kalt "page" (leses av via [$_GET](http://php.net/manual/en/reserved.variables.get.php)) til å skifte mellom undersider. Det skal da være mulig å komme til de tre ulike undersidene ved å hekte følgende på url'en til siden din: "?page=1","?page=2" og "?page=3". Du vil trenge en enkel kontrollstruktur til dette, i tillegg til `include`.
    - Det skal være linker til disse undersidene, og de må naturligvis endres tilsvarende

### Javascript
  - **"Les mer", med JQuery**. På en av undersidene dine skal du ha minst 3 tekster med litt lengde på, som ligger i hvert sitt HTML-element. Du skal bruke JQuery `toggle(t)` (der `t` er et passende antall millisekunder) til å lage en "les mer"-link (det må ikke være en link, det kan være en knapp, en div el., bare det ser noen lunde pent og naturlig ut). Tekstene skal altså være delvis skjult, til man trykker på "les mer" - da skal resten komme frem. For å få til dette må den delen av teksten som skal kunne skjules, også være i sitt eget HTML-element. Når man trykker på "Les mer"-linken skal dette "indre" html-elementet skrus av/på med "toggle".
  - **Endring av farger**. På minst en av undersidene dine skal du ha mulighet til å endre farger på deler av siden, med javascript. 
    - Minst tre elementer av *samme type* skal få nye farger
    - Det skal være mulig å velge mellom minst tre farger   
    - Du velger selv om du vil bruke jquery, eller bare vanlig javascript. 
    - **PS:** Ukesoppgavene kan gi deg litt hjelp på veien her.

### Easter egg!
Det er tradisjon for å gjemme morsomme beskjeder, bilder, lyder el. inne i dataprogrammer. For å se et eksempel, google "do a barrel roll" (Gjør det). Disse kalles [Eeaster eggs](http://en.wikipedia.org/wiki/Easter_egg_(media)) og er tilgjengelig for hvem som helst, men man må vite nøyaktig hvor man skal trykke, evt. i hvilken rekkefølge, hva man skal skrive el. for å få dette frem. 

Dårlige sjefer tillater slike easter-eggs fordi de ikke vet at de finnes. Gode sjefer tillater easter-eggs fordi det gjør utviklerne til bedre mennesker at de trives på jobben. Ekstremt gode sjefer *pålegger* de ansatte å lage easter-eggs. Du skal lage minst ett slikt "easter egg" på din side.

  - Når brukeren gjør en helt bestemt handling, eller rekkefølge av handlinger, skal du bruke javascript til å vise noe skjult innhold. Du bestemmer innholdet selv!
  - Du bestemmer selv hva brukeren skal gjøre for å få frem det skjulte innholdet, men det må være noe man ikke lett kan gjette seg til
  - Du skal lage en enkel tekstfil "4easterbunny.txt" i samme mappe som forsiden din, der det står en tekst som beskriver hvordan man finner easter-egget.
  - Vær kreativ - prøv å gjør noe gøy!

### Kvalitetskrav
- Det skal ikke være noen feilmeldinger, warnings, eller "Notices" fra PHP. Heller ikke dersom man feks. skriver inn ugyldige "page"-verdier. Bruk av [@](http://us3.php.net/manual/en/language.operators.errorcontrol.php) for å undertrykke feilmeldinger er ikke er lov og man skal bruke [error_reporting(E_ALL)](http://php.net/manual/en/function.error-reporting.php) slik at alle errors og notices kommer med.

- Det skal ikke komme feilmeldinger eller advarsler i javascript-konsollet
- HTML-koden skal validere som HTML 5
- CSS-koden skal validere til CSS 3 eller CSS 2.1
- Siden skal være godt leselig og godt strukturert når den vises uten CSS, i feks. Lynx. Les-mer knappene må da enten finnes i alternativ variant, eller være usynlige ved vising i browser som ikke søtter javascript.


### Publisering og levering
Siden skal legges ut på internett, under ditt personlige hjemmeområde. Se eget skriv om dette: [Publisering.md](publisering.md). Den versjonen som ligger ute når innleveringsfristen faller, gjelder som din innlevering. 

### Vurdering
Bestått/Ikke bestått. Dersom arbeidet viser at du har gjort et ærlig forsøk, men ikke får bestått, vil du kunne få mulighet til å få en ny sjanse.

