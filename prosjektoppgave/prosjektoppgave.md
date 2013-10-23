#Webprosjekt H2013

Prosjektoppgave
----------------------------------

Dere skal lage en webside dere synes det virker interessant å lage. Det er mange detaljer i oppgaveteksten og *det forventes at den leses nøye*

**Frist for forprosjektrapport:** 
*Onsdag 30.10.2013 kl.23:59*

**Endelig innlevering**
*Søndag 24.11.2013 kl. 23:59* 

**OBS:** *Dette er en **hard deadline**. Kun gyldig sykemelding, eller *innvilget* utsettelse *i forkant av fristen*, gir grunnlag for senere levering*. 

**Spørsmål/Henvendelser:** 
*Alle* henvendelser ifbm. oppgaven skal sendes til [webprosjekt@cs.hioa.no](mailto:webprosjekt@cs.hioa.no)

# Tema og innhold
Dere har (for de fleste) blitt plassert i grupper basert på interesser, både mtp. tema, teknologi og type side. Dere er ikke *forpliktet* til å lage en side basert på dette, men dere må velge noe som interesserer alle. Dere kan altså ombestemme dere - men husk at klokka tikker.

[Gruppelisten finner du her](./grupper.md)

### Prøv å lage noe du kan sette på CV'en
Det er alltid nyttig å ha egne prosjekter på en CV. Tenk at dette prosjektet skal vise hva du kan i grunnteknologiene du har lært i dette kurset, til en fremtidig arbeidsgiver

### Lag noe du kan videreutvikle
Mange tidligere prosjekter i dette faget har blitt fulgt opp senere i studieløpet, og blitt til seriøse prosjekter. Tenk over hva som må til, for at en side skal være enkel, og interessant å bygge videre på.


### Easter egg!
Som i oblig 2 skal dere ha med et easter egg i oppgaven. 

  - Når brukeren gjør en helt bestemt handling, eller rekkefølge av handlinger, skal dere bruke javascript til å vise noe skjult innhold. Dere bestemmer innholdet selv!
  - Dere bestemmer selv hva brukeren skal gjøre for å få frem det skjulte innholdet, men det må være noe man ikke lett kan gjette seg til
  - Dere skal lage en enkel tekstfil "4easterbunny.txt" i samme mappe som forsiden din, der det står en tekst som beskriver hvordan man finner easter-egget.
  - Vær kreativ - prøv å gjør noe gøy!

# Teknologi
Følgende teknologi er *påkrevet* og *er viktigst at fungerer 100%*

  - HTML 5
  - CSS 3

I tillegg må dere ha med *minst én* av følgende teknologier

  - Javascript
  - PHP

Ellers gjelder følgende begrensninger:  

  - Alt skal lages mer eller mindre fra scratch, men noen utvalgte rammeverk er tillatt. 
    - **komplett** Liste over tillatte rammeverk/teknologier ligger her: [tech_whitelist.md](tech_whitelist.md)
    - **Ukomplett** liste over IKKE tillatte rammeverk/teknologier ligger [tech_blacklist.md](tech_blacklist.md)

    - Evt. andre må godkjennes, via mail til [webprosjekt@cs.hioa.no](mailto:webprosjekt@cs.hioa.no), i mail merket "Teknologi". Dersom dette blir godkjent, vil teknologien havne på [tech_whitelist.md](tech_whitelist.md)
    - *Kun* teknologi nenvt i whitelist er tillatt. Disse er tillatt fordi de krever at man kan kursets pensum godt for å bruke dem. Andre rammeverk som også krever slik kompetanse kan godkjennes (men man må få godkjenning). Teknologier som gjør at man *slipper* å bruke det man har lært i pensum, vil stort sett ikke aksepteres.
  - Dersom dere bruker ekstern kode, som er på whitelist, men som dere ikke har laget selv (feks. ferdig javascript-bibliotek), skal denne koden ligge i en *egen mappe* kalt `external_code`. Denne koden vil *ikke* telle på karakteren. 



# Kvalitetskrav
- HTML-koden skal validere som HTML 5
- CSS-koden skal validere til CSS 3 eller CSS 2.1
- Siden skal være godt leselig og godt strukturert når den vises uten CSS, i feks. Lynx. Det som kommer frem i Lynx skal være informativt og pent, og gi brukeren et inntrykk av hva siden går ut på. Ha gjerne et alternativ som fungerer i Lynx, dersom det dere lager i stor grad er basert på javascript. (Det siste er ikke et absolutt krav, men det må komme frem noe som gir god mening)
- Det skal ikke være noen feilmeldinger, warnings, eller "Notices" fra PHP. Heller ikke dersom man feks. skriver inn ugyldige "page"-verdier. Bruk av [@](http://us3.php.net/manual/en/language.operators.errorcontrol.php) for å undertrykke feilmeldinger er ikke er lov og man skal bruke [error_reporting(E_ALL)](http://php.net/manual/en/function.error-reporting.php) slik at alle errors og notices kommer med.
- Det skal ikke komme feilmeldinger eller advarsler i javascript-konsollet
- Siden skal være universelt utformet. Det er tillatt å ha egne stilark som er *mer* universelt utformet enn andre, men disse må da være lett tilgjengelige for brukeren. [En veiledning til universell utforming finnes her](http://medialt.no/eksempelsamling/index.html)
- Alt eksternt innhold som vises på siden skal ha tydelig kildehenvisning. Dette gjelder både tekst, bilder, video etc.


# Publisering og levering
Siden skal legges ut på internett - se eget skriv om dette: [Publisering.md](publisering.md). Den versjonen som ligger ute når innleveringsfristen faller, gjelder som din innlevering. 

### Webområde og URL
  - Oppgaven skal ligge på hjemmeområdet til ett av medlemmene i gruppa. 
    - Ønsker dere å bruke et eget domenenavn må dere sette dette til å peke til dette området  
    - Dere kan gjerne ha kopier på alles hjemmeområder, men da bør dere bruker git og evt. github til versjonshåndtering. Kun en av linkene vil gjelde som innlevering.
  - Alle medlemmene i gruppa skal legge ut en url til prosjektoppgaven på sitt hjemmeområde (også den som har oppgaven hos seg). Linken skal ligge i fila `prosjektoppgave_webprosjekt2013.txt` i din www-mappe.

### Versjonshåndtering
  - Det anbefales å bruke git/github til arbeidet, men det er ikke et absolutt krav.


# Prosjektstyring og rapportering
Det skal lages én forprosjektrapport som skal levéres etter den første uken (se toppen) og en avsluttende rapport, som skal utformes iht. prosjektdelen av kurset. 

### Metode
  - Bruk en fastlagt metode som dere finner i litteraturen, f.eks. SCRUM, RAD, Prototyping, eller andre.

### Forprosjektrapport
  - Dere skal lage en plan for arbeidet som skal legges ut på gruppens hjemmeområde, under `/forprosjekt.html`. Her forventes kun enkel HTML og CSS; men med kvalitetskrav som ellers. Planen skal inneholde: 
    - En enkel, uformell beskrivelse av alle "use cases", altså en liste over alle ting brukeren kan gjøre
    - Prototype av grensesnittet (Skisser går greit)
    - Fordeling av arbeidsoppgaver - hvem skal gjøre hva
    - En milepælsplan over hva som skal være ferdig når
    - En liste over hvilke teknologier dere har *vurdert å bruke* og hvilke dere faktisk har *valgt å bruke* og begrunnelse for valgene.
    - Beskrivelse av arbeidsmetoden dere har valgt
    - En beslutning om dere velger å bruke git/github, med begrunnelse. 
    - OBS: Begynn gjerne med selve utviklingen i parallell med utarbeiding av planen. Klokka tikker!
  - Sammen med planen skal det leveres inn en enkel kravspesifikasjon til prosjektet, under `/kravspec.html`. 
  - Det forventes at både rapporten og kravspecen skal kunne skrives ut på papir / til PDF. Vær nøye med at CSS'en gir rom for dette, [evt. lag egen CSS for utskrift](http://www.w3schools.com/css/css_mediatypes.asp).

### Avsluttende rapport
  Rapporten skal hete `/prosjektrapport.html`.
  - Rapporten teller på karakteren 
  - Flere detaljer om prosjektarbeid, planlegging, metode og rapport kommer.

## Vurdering
Bokstavkarakter, A-F

