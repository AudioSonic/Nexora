export type NewSkillInformationItem = {
    id: number;
    label: string;
    value: string;
    completed: boolean;
};

export const NewSkillInformation: NewSkillInformationItem[] = [
    { id: 1, label: "Thema", value: "Spanisch", completed: true },
    { id: 2, label: "Aktuelles Niveau", value: "B2", completed: true },
    { id: 3, label: "Lernziel", value: "Beruflicher Umzug nach Spanien", completed: true },
    { id: 4, label: "Zeitaufwand", value: "", completed: false },
];
