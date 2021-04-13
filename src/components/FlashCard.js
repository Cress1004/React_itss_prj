import React from "react";

class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            showMean: false,
        };
    }

    render() {
        const content = this.state.showMean
            ? this.props.backContent
            : this.props.frontContent;
        const iconClass = this.state.showMean ? "reply" : "share";
        const cardClass = this.state.showMean ? "back" : "";
        const contentClass = this.state.showMean ? "back" : "front";

        return (
            <div
                className={`card ${cardClass}`}
                onClick={() => this.setState({ showMean: !this.state.showMean })}
            >
                <span className="card__counter">{this.props.cardNumber + 1}</span>
                <div
                    className="card__flip-card"
                    onClick={() => {
                        this.setState({ showMean: !this.state.showMean });
                    }}
                >
                    <span className={`fa fa-${iconClass}`} />
                </div>
                <div className={`card__content--${contentClass}`}>{content}</div>
            </div>
        );
    }
}

export default Card;
