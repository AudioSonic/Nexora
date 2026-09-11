/**
 * Datenmodell für die Inhalte eines einzelnen Themas.
 *
 * Die Struktur ist bewusst unabhängig von einer konkreten KI-Anbindung. Eine
 * spätere Generierung kann direkt ein Objekt dieses Typs zurückgeben.
 */

export type LearningCodeExample = {
    language: string;
    code: string;
    explanation?: string;
};

export type LearningBlock =
    | { type: "text"; text: string }
    | { type: "code"; language: string; code: string; title?: string }
    | { type: "info"; title?: string; text: string }
    | { type: "comparison"; title?: string; left: { label: string; text: string }; right: { label: string; text: string } }
    | { type: "list"; title?: string; items: string[] }
    | { type: "tab"; title: string; tuning?: string; content: string }
    | { type: "notation"; title: string; content: string }
    | { type: "table"; headers: string[]; rows: string[][] };

export type LearningSection = {
    id: string;
    title: string;
    completed?: boolean;
    blocks?: LearningBlock[];
    paragraphs: string[];
    codeExamples?: LearningCodeExample[];
    keyPoints?: string[];
};

export type LearningExercise = {
    id: string;
    title: string;
    completed?: boolean;
    instructions: string[];
    starterCode?: LearningCodeExample;
    expectedResult?: string;
    hints?: string[];
};

export type SummaryItem = {
    label: string;
    description: string;
};

export type CompactKnowledge = {
    title: string;
    items: SummaryItem[];
};

export type LearningContent = {
    themeId: number;
    themeTitle: string;
    subtitle: string;
    learningObjective: string;
    sections: LearningSection[];
    exercises: LearningExercise[];
    summary: {
        title: string;
        introduction: string;
        items: SummaryItem[];
    };
    compactKnowledge: CompactKnowledge;
};

/** Beispielinhalt für JavaScript, Phase 1, Punkt 10. */
export const arrayMethodsLearningContent: LearningContent = {
    themeId: 9,
    themeTitle: "Array-Methoden",
    subtitle: "Arrays mit Callbacks gezielt verarbeiten",
    learningObjective:
        "Du lernst, Array-Methoden passend zu ihrer Aufgabe auszuwählen und Callbacks mit sinnvollen Rückgabewerten zu verwenden.",
    sections: [
        {
            id: "foreach",
            title: "forEach() – mit jedem Element arbeiten",
            blocks: [
                { type: "text", text: "forEach() führt eine Callback-Funktion einmal für jedes Element eines Arrays aus." },
                { type: "code", language: "javascript", code: `const games = ["Elden Ring", "Hades", "Minecraft"];

games.forEach(game => {
    console.log(game);
});` },
                { type: "info", title: "Was passiert hier?", text: "Die Callback-Funktion wird für jedes Element aufgerufen. Das ursprüngliche Array bleibt unverändert." }
            ],
            paragraphs: [
                "forEach() führt eine Callback-Funktion einmal für jedes Element eines Arrays aus.",
                "Die Methode ist geeignet, wenn du eine Aktion ausführen möchtest. Sie erzeugt normalerweise kein neues Array."
            ],
            codeExamples: [
                {
                    language: "javascript",
                    code: `const games = ["Elden Ring", "Hades", "Minecraft"];

games.forEach(game => {
    console.log(game);
});`,
                    explanation: "Jeder Spielname wird nacheinander in der Konsole ausgegeben."
                }
            ]
        },
        {
            id: "map",
            title: "map() – jedes Element umwandeln",
            paragraphs: [
                "map() erstellt ein neues Array mit genau so vielen Elementen wie das Ausgangsarray.",
                "Der Rückgabewert des Callbacks bestimmt, welcher neue Wert an der jeweiligen Position landet. Das ursprüngliche Array bleibt unverändert."
            ],
            codeExamples: [
                {
                    language: "javascript",
                    code: `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(number => number * 2);

console.log(doubled); // [2, 4, 6, 8]`
                },
                {
                    language: "javascript",
                    code: `const users = [
    { name: "Alex", age: 31 },
    { name: "Lisa", age: 28 }
];

const names = users.map(user => user.name);
// ["Alex", "Lisa"]`
                }
            ],
            keyPoints: ["Neues Array", "Gleiche Länge", "Jedes Element wird umgewandelt"]
        },
        {
            id: "filter",
            title: "filter() – passende Elemente behalten",
            paragraphs: [
                "filter() erstellt ein neues Array mit allen Elementen, für die der Callback true zurückgibt.",
                "Die Länge des neuen Arrays kann kleiner sein als die des Ausgangsarrays."
            ],
            codeExamples: [
                {
                    language: "javascript",
                    code: `const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]`
                }
            ],
            keyPoints: ["Neues Array", "Nur passende Elemente", "Callback liefert true oder false"]
        },
        {
            id: "find",
            title: "find() – das erste passende Element finden",
            paragraphs: [
                "find() gibt das erste Element zurück, das die Bedingung erfüllt.",
                "Wenn kein passendes Element existiert, ist das Ergebnis undefined. Im Gegensatz zu filter() liefert find() kein Array."
            ],
            codeExamples: [
                {
                    language: "javascript",
                    code: `const games = [
    { title: "Elden Ring", rating: 9 },
    { title: "Hades", rating: 8 }
];

const game = games.find(game => game.title === "Hades");
// { title: "Hades", rating: 8 }`
                }
            ]
        },
        {
            id: "some",
            title: "some() – mindestens ein passendes Element prüfen",
            paragraphs: [
                "some() beantwortet eine Ja-oder-Nein-Frage: Gibt es mindestens ein Element, das die Bedingung erfüllt?",
                "Das Ergebnis ist immer ein Boolean – true oder false."
            ],
            codeExamples: [
                {
                    language: "javascript",
                    code: `const numbers = [1, 3, 5, 8];
const hasEvenNumber = numbers.some(number => number % 2 === 0);

console.log(hasEvenNumber); // true`
                }
            ]
        }
    ],
    exercises: [
        {
            id: "array-methods-1",
            title: "forEach() und map() kombinieren",
            instructions: [
                "Erstelle das Array [2, 4, 6, 8, 10].",
                "Gib jede Zahl mit forEach() im Format ‚Zahl: 2‘ aus.",
                "Erstelle mit map() ein neues Array, in dem jede Zahl verdoppelt wurde."
            ],
            expectedResult: "[4, 8, 12, 16, 20]"
        },
        {
            id: "array-methods-2",
            title: "Produkte filtern und finden",
            instructions: [
                "Lege ein Array mit Produkten und Preisen an.",
                "Behalte mit filter() nur Produkte ab 100 Euro.",
                "Finde mit find() den Monitor und gib seinen Preis aus.",
                "Teste außerdem, was bei einem nicht vorhandenen Headset zurückgegeben wird."
            ],
            hints: ["Vergleiche product.price mit 100.", "Prüfe das Ergebnis von find() auf undefined."]
        },
        {
            id: "array-methods-3",
            title: "Alle Methoden in einer Aufgabe",
            instructions: [
                "Erstelle ein Array aus mindestens fünf eigenen Objekten mit jeweils mindestens drei Properties.",
                "Verwende forEach(), map(), filter(), find(), findIndex(), some() und every().",
                "Gib die Ergebnisse sinnvoll mit console.log() aus."
            ],
            hints: ["Wähle ein eigenes Thema wie Spiele, Bücher oder Filme.", "Formuliere Bedingungen, die nicht nur aus den Beispielen kopiert sind."]
        }
    ],
    summary: {
        title: "Die wichtigsten Array-Methoden",
        introduction: "Wähle die Methode danach aus, welches Ergebnis du brauchst:",
        items: [
            { label: "forEach()", description: "Mit jedem Element etwas tun; kein neues Array." },
            { label: "map()", description: "Jedes Element umwandeln; neues Array gleicher Länge." },
            { label: "filter()", description: "Alle passenden Elemente auswählen; neues Array." },
            { label: "find()", description: "Das erste passende Element oder undefined zurückgeben." },
            { label: "some()", description: "Prüfen, ob mindestens ein Element passt; true oder false." },
            { label: "every()", description: "Prüfen, ob jedes Element passt; true oder false." }
        ]
    },
    compactKnowledge: {
        title: "Kompaktwissen",
        items: [
            { label: "Callback", description: "Eine Funktion, die von der Array-Methode für Elemente aufgerufen wird." },
            { label: "map()", description: "Neues Array, gleiche Länge." },
            { label: "filter()", description: "Neues Array mit passenden Elementen." },
            { label: "find()", description: "Ein Element oder undefined." },
            { label: "some()", description: "Mindestens ein Treffer?" },
            { label: "every()", description: "Alle Elemente erfüllen die Bedingung?" }
        ]
    }
};

export const learningContents: LearningContent[] = [arrayMethodsLearningContent];
