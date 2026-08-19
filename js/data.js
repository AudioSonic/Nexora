function createPhase(title, shortDesc, longDesc, themeTitle, themeDesc, content, exercise) {
    return {
        title,
        shortDesc,
        longDesc,
        themes: [{
            id: 1,
            title: themeTitle,
            desc: themeDesc,
            contents: [{
                title: `Einführung: ${themeTitle}`,
                content
            }],
            exercises: [{
                title: `Übung: ${themeTitle}`,
                content: exercise
            }]
        }],
        finalProjects: []
    };
}

const skills = [
    {
        id: 1,
        name: "JavaScript",
        logo: "../assets/logos/js_logo.png",
        desc: "Lerne JavaScript Schritt für Schritt und verfolge deinen Fortschritt.",
        phases: [
            createPhase(
                "Phase 1",
                "Daten verstehen",
                "Du lernst die grundlegenden Datentypen und den Umgang mit Variablen.",
                "Variablen und Datentypen",
                "Lerne Strings, Zahlen, Booleans und Arrays kennen.",
                "const name = \"Alex\";\nlet score = 10;\n\nVariablen speichern Werte, die später im Programm verwendet werden.",
                "Erstelle Variablen für deinen Namen, dein Alter und deinen aktuellen Punktestand."
            ),
            createPhase(
                "Phase 2",
                "Moderner Code",
                "Mit Funktionen, Bedingungen und Schleifen schreibst du übersichtlichen modernen JavaScript-Code.",
                "Funktionen und Kontrollstrukturen",
                "Verpacke Logik in Funktionen und steuere Programmabläufe.",
                "const greet = name => `Hallo ${name}!`;\n\nFunktionen können Werte entgegennehmen und Ergebnisse zurückgeben.",
                "Schreibe eine Funktion, die prüft, ob eine Zahl gerade oder ungerade ist."
            ),
            createPhase(
                "Phase 3",
                "Daten austauschen",
                "Du arbeitest mit JSON, APIs und asynchronem Code.",
                "Daten von APIs laden",
                "Verstehe Requests, Responses und die Verarbeitung von JSON-Daten.",
                "async function loadData() {\n    const response = await fetch(\"/api/data\");\n    return response.json();\n}",
                "Lade Beispieldaten von einer API und gib die wichtigsten Felder in der Konsole aus."
            ),
            createPhase(
                "Phase 4",
                "Strukturieren",
                "Du organisierst größere Anwendungen mit Modulen und wiederverwendbaren Komponenten.",
                "Module und Anwendungsstruktur",
                "Teile deinen Code sinnvoll auf und halte Verantwortlichkeiten getrennt.",
                "export function calculateProgress(done, total) {\n    return Math.round(done / total * 100);\n}",
                "Lagere eine Hilfsfunktion in ein eigenes Modul aus und importiere sie in einer zweiten Datei."
            )
        ]
    },
    {
        id: 2,
        name: "C#",
        logo: "../assets/logos/csharp_logo.png",
        desc: "Baue solide .NET-Anwendungen mit C#, APIs, Datenbanken und modernen Backend-Techniken.",
        phases: [
            createPhase("Phase 1", "C# Auffrischung", "Festige die wichtigsten Sprachgrundlagen von C#.", "Syntax und Datentypen", "Variablen, Methoden und Kontrollstrukturen in C#.", "string name = \"Mia\";\nint age = 28;\nConsole.WriteLine(name);", "Erstelle ein kleines Konsolenprogramm, das persönliche Daten ausgibt."),
            createPhase("Phase 2", ".NET-Grundlagen und ASP.NET Core", "Verstehe das .NET-Ökosystem und den Aufbau von ASP.NET-Core-Anwendungen.", "Projektaufbau", "Lerne Projekte, Middleware und Dependency Injection kennen.", "var builder = WebApplication.CreateBuilder(args);\nvar app = builder.Build();\napp.Run();", "Erstelle eine minimale ASP.NET-Core-Anwendung mit einer Startseite."),
            createPhase("Phase 3", "REST APIs", "Entwickle klar strukturierte HTTP-Schnittstellen.", "Controller und Endpunkte", "Verwende HTTP-Methoden und passende Statuscodes.", "[HttpGet]\npublic IActionResult GetProducts() => Ok(products);", "Entwirf Endpunkte zum Anzeigen und Anlegen von Produkten."),
            createPhase("Phase 4", "SQL und relationale Datenbanken", "Speichere Daten dauerhaft in relationalen Datenbanken.", "Tabellen und Abfragen", "Arbeite mit Tabellen, Beziehungen und SELECT-Abfragen.", "SELECT name, price FROM Products WHERE price > 20;", "Erstelle eine Tabelle für Bücher und formuliere drei sinnvolle Abfragen."),
            createPhase("Phase 5", "Entity Framework Core", "Greife mit Entity Framework Core typsicher auf Datenbanken zu.", "DbContext und Migrationen", "Definiere Modelle und synchronisiere sie mit der Datenbank.", "public class AppDbContext : DbContext {\n    public DbSet<Product> Products => Set<Product>();\n}", "Lege ein Produktmodell und eine passende EF-Core-Migration an."),
            createPhase("Phase 6", "Professionelle REST APIs", "Verbessere APIs mit Validierung, Pagination und Fehlerbehandlung.", "Robuste Endpunkte", "Lerne DTOs, Validierung und konsistente Antworten kennen.", "return BadRequest(new { message = \"Ungültige Eingabe\" });", "Ergänze einen Endpunkt um Eingabevalidierung und Pagination."),
            createPhase("Phase 7", "Authentication, Authorization und Security", "Schütze Anwendungen und Ressourcen vor unberechtigtem Zugriff.", "Benutzer und Rollen", "Verwende Tokens, Rollen und sichere Passwörter.", "[Authorize(Roles = \"Admin\")]\npublic IActionResult Delete(int id) => NoContent();", "Sichere einen Verwaltungs-Endpunkt mit einer Admin-Rolle ab."),
            createPhase("Phase 8", "Architektur und Testing", "Strukturiere Backend-Anwendungen wartbar und testbar.", "Services und Tests", "Trenne Verantwortlichkeiten und schreibe automatisierte Tests.", "public interface IProductService {\n    Product? GetById(int id);\n}", "Schreibe einen Unit-Test für einen Service, der ein Produkt sucht."),
            createPhase("Phase 9", "GitHub, CI/CD und Production", "Automatisiere Builds, Tests und Deployments.", "Pipelines und Releases", "Lerne Branches, Pull Requests und GitHub Actions kennen.", "name: build\non: [push]\njobs:\n  test:\n    runs-on: ubuntu-latest", "Erstelle eine Pipeline, die ein .NET-Projekt baut und testet."),
            createPhase("Phase 10", "Fortgeschrittenes .NET", "Nutze fortgeschrittene Konzepte für leistungsfähige Anwendungen.", "Performance und Skalierung", "Arbeite mit Caching, Logging und asynchronen Prozessen.", "await Task.WhenAll(tasks);", "Optimiere eine langsame Datenabfrage und ergänze strukturiertes Logging."),
            createPhase("Phase 11", "KI-Integration und Backend Engineering", "Integriere KI-Dienste sinnvoll in robuste Backend-Systeme.", "KI-gestützte Endpunkte", "Verarbeite Prompts, Antworten und Fehler von KI-Diensten.", "var result = await aiClient.CreateCompletionAsync(prompt);", "Entwirf einen API-Endpunkt, der eine kurze Zusammenfassung erzeugt.")
        ]
    },
    {
        id: 3,
        name: "Gitarre",
        logo: "../assets/logos/guitar_logo.png",
        desc: "Lerne Akkorde, Rhythmen und erste Songs auf der Gitarre.",
        phases: [
            createPhase("Phase 1", "Instrument und Haltung", "Lerne die Gitarre kennen und finde eine bequeme Spielhaltung.", "Saiten und Plektrum", "Orientiere dich auf dem Instrument.", "Die Saiten werden von der tiefen E-Saite bis zur hohen e-Saite gezählt.", "Benenne alle sechs Saiten und übe einen gleichmäßigen Anschlag."),
            createPhase("Phase 2", "Die ersten Akkorde", "Spiele deine ersten offenen Akkorde.", "G, C und D", "Baue eine Grundlage für viele einfache Songs auf.", "Übe G, C und D zunächst einzeln und achte auf sauber klingende Saiten.", "Wechsle langsam zwischen G und C, ohne den Rhythmus zu unterbrechen."),
            createPhase("Phase 3", "Rhythmus und Anschlag", "Entwickle ein stabiles Timing mit einfachen Schlagmustern.", "Vierer-Rhythmus", "Lerne Abschläge und Aufschläge zu kombinieren.", "Ein einfacher Einstieg ist: Abschlag, Abschlag, Aufschlag, Aufschlag.", "Spiele ein gleichmäßiges Schlagmuster zwei Minuten lang mit einem Metronom."),
            createPhase("Phase 4", "Barré-Akkorde", "Erweitere dein Akkordrepertoire und greife Barré-Akkorde.", "F-Dur und Wechsel", "Verbessere Kraft und Beweglichkeit der Greifhand.", "Beim Barré drückt ein Finger mehrere Saiten gleichzeitig auf das Griffbrett.", "Übe den Wechsel zwischen C-Dur und F-Dur in langsamem Tempo."),
            createPhase("Phase 5", "Melodien und Fingerpicking", "Spiele einfache Melodien und gebrochene Akkorde.", "Fingerpicking-Muster", "Koordiniere Daumen und Finger der Anschlaghand.", "Spiele den Daumen auf den Basssaiten und die übrigen Finger auf den hohen Saiten.", "Übe ein viertaktiges Picking-Muster mit zwei offenen Akkorden."),
            createPhase("Phase 6", "Erster kompletter Song", "Verbinde Akkorde, Rhythmus und Ausdruck zu einem kleinen Auftritt.", "Songbegleitung", "Spiele einen einfachen Song von Anfang bis Ende.", "Wähle vier Akkorde und halte den Rhythmus auch bei Übergängen stabil.", "Nimm dich beim Spielen auf und notiere, an welchen Übergängen du noch langsamer werden möchtest.")
        ]
    }
];
