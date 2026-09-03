import "./TotalProgress.css"

function TotalProgress(){
    return (
        <div id="total-progress">
            <span id="total-progress-title">Gesamtfortschritt</span>
            <div id="total-percentage">
                <div id="progress-circle">
                    <span id="total-progress-value">57%</span>
                </div>

                <span id="total-progress-text">
                    15 von 24 Themen<br/>abgeschlossen
                </span>
            </div>
        </div>
    )
}

export default TotalProgress;