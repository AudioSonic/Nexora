import "./PhaseNavigation.css"
import Phase from "./ProjectPhase"

function PhaseNavigation(){
    return (
        <section className="panel phase-overview">
            <Phase phaseTitle="Phase 1" unlocked={true} phaseDescription="Daten verstehen"/>
            <Phase phaseTitle="Phase 2" unlocked={true} phaseDescription="Moderner Code"/>
            <Phase phaseTitle="Phase 3" unlocked={false} phaseDescription="Daten austauschen"/>
            <Phase phaseTitle="Phase 4" unlocked={false} phaseDescription="Strukturieren"/>
        </section>
    )
}

export default PhaseNavigation;