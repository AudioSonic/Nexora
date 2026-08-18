const skills = [
    {
        id: 1,
        name: "JavaScript",
        logo: "../assets/logos/js_logo.png",
        alt: "JavaScript Logo",
        desc: "Lerne JavaScript Schritt für Schritt und verfolge deinen Fortschritt.",
        phases: [{
            title: "Phase 1",
            shortDesc: "Daten verstehen",
            longDesc: "Hier geht es darum, JavaScript-Daten sicher zu verstehen, zu erstellen und zu verändern.",
            themes: [
                {
                id: 1,
                title: "Variablen",
                desc: "Hier finden wir heraus, was eine Variable eigentlich ist.",
                completed: true,
                contents: [{
                        title: "1. Was ist eine Variable?",
                        content: `Eine Variable ist vereinfacht gesagt ein benannter Speicherplatz für einen Wert.

                        const name = "Alex";
                        let age = 31;

                        Hier haben wir zwei Variablen:

                        name enthält "Alex"
                        age enthält 31

                        Eine Variable besteht dabei aus einem Namen und einem Wert.`
                    },
                    {
                        title: "2. const",
                        content: `const verwendest du, wenn die Variable nicht neu zugewiesen werden soll.

                        const name = "Alex";

                        Das funktioniert nicht:

                        const name = "Alex";
                        name = "Peter";

                        Du kannst name also nicht auf einen komplett neuen Wert zeigen lassen.

                        Wichtig: const bedeutet nicht, dass der enthaltene Wert grundsätzlich unveränderlich ist. Das wird später bei Arrays und Objekten wichtig.`
                    },
                    {
                        title: "3. let",
                        content: `let verwendest du, wenn die Variable später einen anderen Wert bekommen soll.

                        let score = 10;

                        score = 20;
                        score = 30;

                        Das ist vollkommen in Ordnung.

                        Als Faustregel:

                        const → Wert oder Referenz wird nicht neu zugewiesen
                        let → Wert oder Referenz wird später neu zugewiesen

                        In modernem JavaScript solltest du grundsätzlich zuerst const verwenden und nur dann let, wenn du tatsächlich eine Neuzuweisung brauchst.

                        var lassen wir zunächst außen vor.`
                    },
                    {
                        title: "4. Deklarieren und Initialisieren",
                        content: `Diese beiden Begriffe solltest du kennen.

                        let name;

                        Hier wurde die Variable deklariert, aber noch kein Wert zugewiesen.

                        name = "Alex";

                        Jetzt wurde ihr ein Wert zugewiesen.

                        Oder beides zusammen:

                        let name = "Alex";

                        Das nennt man Deklaration und Initialisierung.

                        Bei const musst du direkt einen Wert zuweisen:

                        const name = "Alex";

                        Das hier funktioniert nicht:

                        const name;`
                    },
                    {
                        title: "5. Variablen verändern",
                        content: `Bei let kannst du den Wert einer Variable verändern.

                        let counter = 0;

                        counter = 1;
                        counter = 2;

                        Du kannst auch Kurzformen verwenden:

                        counter += 1;
                        counter -= 1;
                        counter++;
                        counter--;

                        Zum Beispiel:

                        let applications = 5;

                        applications++;

                        Danach enthält applications den Wert 6.

                        Das werden wir später bei Schleifen wieder brauchen.`
                    },
                    {
                        title: "6. Scope",
                        content: `Variablen mit let und const sind block-scoped.

                        Ein Block ist beispielsweise der Bereich innerhalb von { }:

                        if (true) {
                            const message = "Hallo";
                            console.log(message);
                        }

                        Innerhalb des Blocks funktioniert der Zugriff auf message.

                        Außerhalb aber nicht:

                        if (true) {
                            const message = "Hallo";
                        }

                        console.log(message); // Fehler

                        Das wird später bei if, Schleifen und Funktionen wichtig.

                        Ein Beispiel mit let:

                        let name = "Alex";

                        if (true) {
                            let name = "Peter";
                            console.log(name); // Peter
                        }

                        console.log(name); // Alex

                        Die beiden name-Variablen sind hier unterschiedliche Variablen.`
                    },
                    {
                        title: "Die wichtigsten Dinge zum Merken",
                        content: `const name = "Alex";
                        let age = 31;

                        const → keine Neuzuweisung
                        let → Neuzuweisung möglich

                        Deklaration:

                        let score;

                        Initialisierung:

                        score = 10;

                        Beides zusammen:

                        let score = 10;

                        Als Faustregel:

                        Wenn du nicht weißt, ob du const oder let verwenden solltest, nimm zunächst const. Wenn du später merkst, dass du die Variable neu zuweisen musst, wird daraus let.`
                    }],
                exercises: [{
                        title: "Aufgabe 1 – Bewerbungsdaten",
                        content: `Erstelle folgende Variablen:

                        - Name des Unternehmens
                        - Position
                        - Bewerbungsstatus
                        - Anzahl bisheriger Bewerbungen

                        Verwende für jede Variable entweder const oder let.

                        Ändere anschließend den Bewerbungsstatus von "open" auf "applied" und erhöhe die Anzahl der Bewerbungen um 1.

                        Vorgabe: Verwende dabei sowohl const als auch let sinnvoll.`
                    },
                    {
                        title: "Aufgabe 2 – Counter",
                        content: `Erstelle einen Counter mit dem Startwert 0.

                        Erhöhe den Counter anschließend dreimal um 1 und danach einmal um 5.

                        Am Ende soll der Wert 8 sein.

                        Vorgabe: Verwende keine neue Variable für jeden Zwischenschritt.`
                    },
                    {
                        title: "Aufgabe 3 – Scope",
                        content: `Was passiert bei diesem Code?

                        const name = "Alex";

                        if (true) {
                            const name = "Max";
                            console.log(name);
                        }

                        console.log(name);

                        Schreibe zunächst auf, welche beiden Werte ausgegeben werden und warum.

                        Danach kannst du den Code selbst ausprobieren.`
            }],
                },
                {
                    id: 2,
                    title: "Datentypen",
                    desc: "Kurze Einleitung zum Thema Datentypen",
                    completed: true,
                    contents: []
                },
                {
                    id: 3,
                    title: "Operatoren",
                    desc: "Kurze Einleitung zum Thema Operatoren",
                    completed: true,
                    contents: []
                },
                {
                    id: 4,
                    title: "Bedingungen",
                    desc: "Kurze Einleitung zum Thema Bedingungen",
                    completed: true,            
                    contents: []
                },
                {
                    id: 5,
                    title: "Schleifen",
                    desc: "Kurze Einleitung zum Thema Schleifen",
                    completed: false,
                    contents: []
                },
                {
                    id: 6,
                    title: "Funktionen",
                    desc: "Kurze Einleitung zum Thema Funktionen",
                    completed: false,
                    contents: []
                },
                {
                    id: 7,
                    title: "Arrays",
                    desc: "Kurze Einleitung zum Thema Arrays",
                    completed: false,
                    contents: []
                },
                {
                    id: 8,
                    title: "Objekte",
                    desc: "Kurze Einleitung zum Thema Objekte",
                    completed: false,
                    contents: []
                },
                {
                    id: 9,
                    title: "Arrays mit Objekten",
                    desc: "Kurze Einleitung zum Thema Arrays mit Objekten",
                    completed: false,
                    contents: []
                },
                {
                    id: 10,
                    title: "Array Methoden",
                    desc: "Kurze Einleitung zum Thema Array Methoden",
                    completed: false,
                    contents: []
                }
            ],
            finalProjects: [{
                title: "Nexora",
                shortDesc: "Erstellen einer Webseite zum Aneignen von Skills",
                longDesc: "Das Ziel dieses Abschlussprojekts ist es eine kleine Plattform anzulegen, auf der der Benutzer Skills lernen kann.",
                completed: false,
                contents: [{
                    title: "Phase 1 - Grundbaustein",
                    desc: "Das Ziel dieser Phase ist es einen Grundbaustein zu schaffen, auf der alles andere aufbauen wird.",
                    completed: false,
                    tasks: [{
                        task: `Lege zunächst das Grundgerüst fest.`,
                        completed: true,
                        desc: "abc"
                    },
                    {
                        task: `Mach es schöner`,
                        completed: false,
                        desc: "def"
                    },
                    {
                        task: `Abschluss`,
                        completed: false,
                        desc: "ghi"
                    }]
                }]
            }]
        }]
    },
    {
        id: 2,
        name: "C#",
        logo: "../assets/logos/csharp_logo.png",
        alt: "C# logo",
        desc: "Lerne die Grundlagen von C# und entwickle deine ersten kleinen Programme.",
        phases: [{
            title: "Phase 1",
            shortDesc: "Programmieren mit C#",
            longDesc: "Ein kompakter Einstieg in Variablen, Datentypen und einfache Entscheidungen.",
            themes: [{
                title: "1. Grundlagen",
                desc: "Du lernst, wie C#-Programme aufgebaut sind und wie Variablen funktionieren.",
                contents: [{
                    title: "Variablen und Datentypen",
                    content: "int age = 28;\nstring name = \"Mia\";\n\nC# verwendet Datentypen, damit klar ist, welche Art von Wert gespeichert wird."
                }],
                exercises: [{
                    title: "Aufgabe 1 – Begrüßung",
                    content: "Erstelle Variablen für deinen Namen und dein Alter und gib anschließend eine Begrüßung aus."
                }]
            }],
            finalProjects: []
        }]
    },
    {
        id: 3,
        name: "Gitarre",
        logo: "../assets/logos/guitar_logo.png",
        alt: "Gitarre?",
        desc: "Sammle erste Erfahrungen mit Akkorden, Rhythmen und einfachen Liedern auf der Gitarre.",
        phases: [{
            title: "Phase 1",
            shortDesc: "Die ersten Akkorde",
            longDesc: "Du lernst eine bequeme Haltung, grundlegende Akkorde und einen einfachen Schlagrhythmus.",
            themes: [{
                title: "1. Akkorde und Rhythmus",
                desc: "Mit wenigen Akkorden kannst du bereits dein erstes Lied begleiten.",
                contents: [{
                    title: "Die Akkorde G, C und D",
                    content: "Übe jeden Akkord langsam und achte darauf, dass jede Saite sauber klingt. Wechsle danach gleichmäßig zwischen G, C und D."
                }],
                exercises: [{
                    title: "Aufgabe 1 – Akkordwechsel",
                    content: "Wechsle zwei Minuten lang zwischen G und C. Spiele anschließend vier gleichmäßige Schläge pro Akkord."
                }]
            }],
            finalProjects: []
        }]
    }]
