import "./ThemeContent.css";
import { useState } from "react";
import type { Phase, Theme } from "../data/data";
import { arrayMethodsLearningContent } from "../data/learningContent";

type ThemeContentProps = {
    phase: Phase;
    theme: Theme;
    onBack: () => void;
};

function ThemeContent({ phase, theme, onBack }: ThemeContentProps) {
    const content = theme.title === "Array-Methoden" ? arrayMethodsLearningContent : undefined;
    const sections = content?.sections ?? [];
    const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id ?? "");
    const [activeTab, setActiveTab] = useState<"learning" | "exercises" | "summary" | "compact">("learning");
    const [activeExerciseId, setActiveExerciseId] = useState(content?.exercises[0]?.id ?? "");
    const activeSection = sections.find(section => section.id === activeSectionId) ?? sections[0];
    const activeSectionIndex = Math.max(0, sections.findIndex(section => section.id === activeSection?.id));
    const activeExercise = content?.exercises.find(exercise => exercise.id === activeExerciseId) ?? content?.exercises[0];
    const activeExerciseIndex = activeExercise && content
        ? content.exercises.findIndex(exercise => exercise.id === activeExercise.id)
        : 0;
    const compactCode: Record<string, string> = {
        "Callback": "numbers.map(number => number * 2);",
        "map()": "const names = users.map(user => user.name);",
        "filter()": "numbers.filter(number => number > 3);",
        "find()": "games.find(game => game.title === \"Hades\");",
        "some()": "numbers.some(number => number % 2 === 0);",
        "every()": "numbers.every(number => number > 0);"
    };

    return (
        <section className="theme-content panel">
            <button className="theme-back-button" onClick={onBack}>
                ‹ Zurück zu {phase.title}
            </button>

            <header className="theme-content-header">
                <div className="theme-heading">
                    <div className={`theme-header-status ${theme.completed ? "completed" : ""}`}>✓</div>
                    <div>
                        <h2>{theme.title}</h2>
                        <p>{content?.subtitle ?? theme.desc}</p>
                    </div>
                </div>
                <div className="theme-progress">
                    <span>Fortschritt im Thema</span>
                    <div className="theme-progress-line"><span /></div>
                    <strong>1 / {sections.length || 1}</strong>
                </div>
            </header>

            <nav className="theme-tabs" aria-label="Themenbereiche">
                <button className={activeTab === "learning" ? "active" : ""} type="button" onClick={() => setActiveTab("learning")}>Lernen</button>
                <button className={activeTab === "exercises" ? "active" : ""} type="button" onClick={() => setActiveTab("exercises")}>Übungen</button>
                <button className={activeTab === "summary" ? "active" : ""} type="button" onClick={() => setActiveTab("summary")}>Zusammenfassung</button>
                <button className={activeTab === "compact" ? "active" : ""} type="button" onClick={() => setActiveTab("compact")}>Kompaktwissen</button>
            </nav>

            {activeTab === "exercises" ? (
                <div className="theme-learning-layout exercise-layout">
                    <aside className="theme-section-list exercise-list">
                        <h3>Übungsübersicht</h3>
                        {content?.exercises.map((exercise, index) => (
                            <button
                                className={`theme-section-item ${exercise.id === activeExercise?.id ? "active" : ""}`}
                                key={exercise.id}
                                type="button"
                                onClick={() => setActiveExerciseId(exercise.id)}
                            >
                                <span>{index + 1}</span>
                                <span className="exercise-list-text"><strong>Übung {index + 1}</strong><small>{exercise.title}</small></span>
                            </button>
                        ))}
                    </aside>
                    <article className="theme-lesson exercise-lesson">
                        {activeExercise ? (
                            <>
                                <div className="exercise-topline">
                                    <strong>Übung {activeExerciseIndex + 1} von {content?.exercises.length}</strong>
                                    <div className="exercise-dots">{content?.exercises.map((exercise, index) => <span className={exercise.id === activeExercise.id ? "active" : ""} key={exercise.id}>{index + 1}</span>)}</div>
                                </div>
                                <h2>{activeExercise.title}</h2>
                                <p>Erstelle eine Lösung und wende das Gelernte selbstständig an.</p>
                                <div className="exercise-requirements">
                                    <h3>⚙ Anforderungen:</h3>
                                    <ul>{activeExercise.instructions.map(instruction => <li key={instruction}>{instruction}</li>)}</ul>
                                </div>
                                <h3 className="solution-title">Deine Lösung:</h3>
                                <textarea className="solution-input" placeholder="// Hier deinen Code eingeben ..." />
                                <div className="exercise-actions">
                                    <button type="button" className="reset-solution">Lösung zurücksetzen</button>
                                    <button type="button" className="theme-complete-button">Lösung prüfen <span>→</span></button>
                                </div>
                            </>
                        ) : <p className="theme-empty">Für dieses Thema sind noch keine Übungen hinterlegt.</p>}
                    </article>
                </div>
            ) : activeTab === "learning" ? (
                <div className="theme-learning-layout">
                    <aside className="theme-section-list">
                        <h3>Themenübersicht</h3>
                        {sections.length > 0 ? sections.map((section, index) => (
                            <button className={`theme-section-item ${section.id === activeSection?.id ? "active" : ""}`} key={section.id} type="button" onClick={() => setActiveSectionId(section.id)}>
                                <span>{index + 1}</span>{section.title}
                            </button>
                        )) : <p className="theme-empty">Für dieses Thema sind noch keine Inhalte hinterlegt.</p>}
                    </aside>
                    <article className="theme-lesson">
                    {activeSection ? (
                        <>
                            <h2>{activeSectionIndex + 1}. {activeSection.title}</h2>
                            {activeSection.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                            {activeSection.codeExamples?.map(example => (
                                <pre className="theme-code" key={example.code}><code>{example.code}</code></pre>
                            ))}
                            <div className="theme-explanation">
                                <h3>✓ Was passiert hier?</h3>
                                <ul>
                                    <li>Die Callback-Funktion wird für jedes Element aufgerufen.</li>
                                    <li>Der Rückgabewert bestimmt, was die jeweilige Array-Methode erzeugt.</li>
                                    <li>Das ursprüngliche Array bleibt unverändert.</li>
                                </ul>
                            </div>
                            <button className="theme-complete-button" type="button">
                                Als verstanden markieren <span>→</span>
                            </button>
                        </>
                    ) : (
                        <p className="theme-empty">Die Lerninhalte werden hier angezeigt, sobald sie verfügbar sind.</p>
                    )}
                    </article>
                </div>
            ) : activeTab === "compact" ? (
                <section className="compact-knowledge">
                    <h2>Kompaktwissen</h2>
                    <p>Hier findest du die wichtigsten Konzepte aus diesem Thema noch einmal kompakt zusammengefasst.</p>
                    <div className="compact-card-list">
                        {content?.compactKnowledge.items.map(item => (
                            <article className="compact-card" key={item.label}>
                                <div className="compact-card-text">
                                    <h3>{item.label}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <pre className="compact-code"><code>{compactCode[item.label] ?? "// Beispiel ansehen"}</code><span>⧉</span></pre>
                            </article>
                        ))}
                    </div>
                </section>
            ) : (
                <section className="theme-summary">
                    <header className="summary-intro">
                        <h2>{content?.summary.title ?? "Zusammenfassung"}</h2>
                        <p>{content?.summary.introduction ?? "Die wichtigsten Inhalte dieses Themas auf einen Blick."}</p>
                    </header>
                    <div className="summary-highlight">
                        <span className="summary-highlight-icon">✓</span>
                        <div>
                            <h3>Das solltest du mitnehmen</h3>
                            <p>Wähle die Array-Methode danach aus, welches Ergebnis du brauchst: verändern, auswählen, finden oder prüfen.</p>
                        </div>
                    </div>
                    <div className="summary-grid">
                        {content?.summary.items.map(item => (
                            <article className="summary-card" key={item.label}>
                                <h3>{item.label}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </section>
            )}
        </section>
    );
}

export default ThemeContent;
