import "./PhaseOverview.css"
import ThemeButton from "./ThemeButton"
import FinalProjectButton from "./FinalProjectButton"

function PhaseOverview(){
    return (
        <section className="phase-content panel">

            <header className="phase-content-header">
                <div>
                    <h3 className="phase-title">Phase 1 - Daten verstehen</h3>
                    <p className="phase-description">
                        Du lernst die grundlegenden Bausteine von JavaScript kennen und
                        verarbeitest erste Daten.
                    </p>
                </div>

                <span className="phase-percentage">100% abgeschlossen</span>
            </header>

            <div className="phase-progress">
                <progress
                    className="skill-progress-bar"
                    value="50"
                    max="100"
                ></progress>

                <span className="phase-progress-info">
                    10 von 10 Themen abgeschlossen
                </span>
            </div>

            <div className="phase-sections">
                <ThemeButton title="1. Variablen" completed={true}/>
                <ThemeButton title="2. Datentypen" completed={true}/>
                <ThemeButton title="3. Operatoren" completed={true}/>
                <ThemeButton title="4. Bedingungen" completed={true}/>
                <ThemeButton title="5. Schleifen" completed={false}/>
                <ThemeButton title="6. Funktionen" completed={false}/>
                <ThemeButton title="7. Arrays" completed={false}/>
                <ThemeButton title="8. Arrays mit Objekten" completed={false}/>
                <ThemeButton title="9. Array-Methoden" completed={false}/>
                <ThemeButton title="10. Objekte" completed={false}/>
            </div>

            <FinalProjectButton title="Abschlussprojektfreigeschaltet" subTitle="Zum Abschlussprojekt" unlocked={true}/>
        </section>
    )
}

export default PhaseOverview;
