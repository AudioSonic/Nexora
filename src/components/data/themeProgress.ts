import type { Theme } from "./data";
import { learningContents } from "./learningContent";

export type ThemeProgress = {
    completedSectionIds: string[];
    completedExerciseIds: string[];
};

export type ThemeProgressMap = Record<string, ThemeProgress>;

export function getThemeProgressKey(skillId: number, phaseId: number, themeId: number): string {
    return `${skillId}-${phaseId}-${themeId}`;
}

export function isThemeCompleted(theme: Theme, progress?: ThemeProgress): boolean {
    const content = learningContents.find(item => item.themeTitle === theme.title);

    if (!content) {
        return theme.completed;
    }

    return Boolean(
        progress &&
        content.sections.length > 0 &&
        content.exercises.length > 0 &&
        content.sections.every(section => progress.completedSectionIds.includes(section.id)) &&
        content.exercises.every(exercise => progress.completedExerciseIds.includes(exercise.id))
    );
}
