Oppgaver i javascript
------------------------


### Komme i gang med javascript
  
  1. Begynn med en enkel HTML-fil, med et minimum av elementer som må til for å validere i HTML5. Legg til en header, og deretter HTML-taggen `<script ...> ... </script>` til å sette inn en linje javascript, som bruker funksjonen `alert(x)` til å vise en popup, med teksten "Javascript!". Se forelesningsnotatene for hvilke atributter som må være med i script-taggen.

  2. Flytt script-taggen til `<head>`. Hva er anderledes?

  3. Flytt scriptet (den ene linjen) til en egen fil, `script.js`. Se forelesningsnotatene for hvordan du nå får det til å kjøre.


### Funksjoner og variabler

  1. **Ta imot brukernavn fra bruker, og ønsk velkommen**. 
	- Legg til en knapp i HTML-koden, med elementet `<button>`, merket "Who are you?"
	- I filen `script.js`, skriv en javascript-funksjon `welcomeUser()` som gjør følgende:
		- Åpner en dialogboks med `window.prompt(x,y)` og henter inn brukerens navn
		- Åpner `alert`, som ønsker brukeren velkommen ved navn, feks. slik: "Velkommen Linus!"
	- Funksjonen skal kjøre når man klikker på knappen, ikke før.

  3. **Mellomlagre brukernavnet i en global variabel**	
	- I samme fil, lag en global variabel, `username`. 
	- Lag en funksjon `getUsername`, og flytt koden for å hente inn brukernavn dit. La funksjonen hente brukernavn fra bruker, og lagre det i variablen `username`. 
	- La funksjonen `getUsername` bli kalt før HTML-koden blir tolket, slik at man blir bedt om å oppgi brukernavn før man får se sidens innhold.
	- Når man har skrevet inn brukernavn skal man da få opp en knapp merket "Who are you?". Når man klikker på den skal det komme opp en velkomstbeskjed, med brukernavnet man oppgav.

### Javascript-konsollet

 1. **Undersøk siden din med konsollet.**
 	- Med siden fra forrige oppgave åpen, åpne javascript-konsollet i din browser. (I chrome er det ctrl-alt-j, i firefox ctrl-shift-j. Hvis du ikke finner det, google "javascript console <din browser>")
 	- I konsollet, skriv `username`. Brukernavnet du oppgav skal da komme frem.
 	- Skriv `welcomeUser()`. Du skal da få opp velkomsten. 

 2. **Bruk konsollet i stedet for alerts.**
 	- I funksjonen `getUsername()`, når brukernavnet har blitt lagret, skriv inn linjen `console.log(username);`. Med konsollet oppe, oppfrisk siden. Når brukernavnet er skrevet inn skal det komme frem i konsollet.
 	- På en ny linje, skriv `console.error("Feilmeldinger ser slik ut")`. Oppfrisk siden, med konsollet oppe. Det skla komme opp en feilmelding, i konsollet.
 	- Fra nå av, ikke bruk alerts for å få opp debugging-informasjon, men bruk konsollet. 

 3. **Bruk konsollet til å eksperimentere med layout**. 
 	- Åpne din personlige hjemmeside fra oblig 1. Gå evt. til en underside der det er et `<h1>`-element.
 	- I javascript-konsollet, skriv `h1=document.getElementsByTagName("h1")`. 
 	- Skriv `h1`. Du skal se et array av h1-elementer i konsollet.
 	- Skriv `h1_1=h1[0]` og deretter `h1_1`. Du skal nå se et h1-element i konsollet.
 	- Skriv `h1_1.style.color="red"`. Du skal nå se at overskriften blir rød (Hvis den allerede var rørd, velg en annen farge)


### Løkker

1. Endre farger med javascript. 
	- Tilbake i HTML-fila der du løste de første oppgavene, lag tre div-'er på 50x50px, med hver sin farge. Når man klikker på div'ene skal en funksjon `changeColor(x)` kalles, der x er div´ens farge (dette må skrives inn manuelt på hver div). 
	- Begyn med å la funksjonen `changeColor` skrive ut x til konsollet. Kontroller at det er en gyldig fargeverdi.
	- Lag Fire-fem h1-elementer, med tilhørende "paragraphs" tekst under. 
	- Når brukeren klikker på en div, skal disse h1-elementene skifte farge, til å bli den samme som div'en. Du kan bruke kode fra siste konsolloppgave til å endre farge, men du trenger en løkke, for å endre farge på alle elementene i arrayet som returneres fra `getElementsByTagName`.




