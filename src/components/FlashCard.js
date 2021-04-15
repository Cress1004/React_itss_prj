import React from "react";

function Card({frontContent, backContent, cardNumber}) {
    const [showMean, setShowMean] = React.useState(false);
    
    const content = showMean
        ? backContent
        : frontContent;
    const iconClass = showMean ? "reply" : "share";
    const cardClass = showMean ? "back" : "";
    const contentClass = showMean ? "back" : "front";

    return (
        <div
            className={`card ${cardClass}`}
            onClick={() => setShowMean(!showMean)}
        >
            <span className="card__counter">{cardNumber + 1}</span>
            <div
                className="card__flip-card"
                onClick={() => setShowMean(!showMean)}
            >
                <span className={`fa fa-${iconClass}`} />
            </div>
            <div className={`card__content--${contentClass}`}>{content}</div>
        </div>
    );
}

export default Card;
