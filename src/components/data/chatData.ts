export type ChatData = {
    id: number,
    senderId: number,
    message: string
} 

export const chatData: ChatData[] = [
    {
        id: 1,
        senderId: 2,
        message: "Ich möchte Spanisch lernen."
    },
    {
        id: 2,
        senderId: 1,
        message: "Das klingt spannend! Wie ist dein aktuelles Sprachniveau in Spanisch? (z.B. Anfänger, A1, A2, B1, B2,...)"
    },
    {
        id: 3,
        senderId: 2,
        message: "B2"
    },
    {
        id: 4,
        senderId: 1,
        message: "Alles klar. Für welchen Zweck möchtest du Spanisch lernen? (z.B. Reisen, Studium, Beruf, Umzug, persönliche Interessen...)"
    },
    {
        id: 5,
        senderId: 2,
        message: "Für einen beruflichen Umzug nach Spanien."
    },
    {
        id: 6,
        senderId: 1,
        message: "Super, das ist ein konkretes Ziel! Wie viel Zeit kannst du pro Woche ungefähr zum Lernen einplanen? (z.B. 2-4 Stunden, 5+ Stunden...)"
    }
];