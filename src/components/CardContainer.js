import React from 'react';
import Immutable from 'immutable';
import Card from './FlashCard';
class CardContainer extends React.Component {
        constructor() {
            super();
            this.state = {
                cards: Immutable.fromJS([
                    {
                        word: "Jazz",
                        meaning:
                            "A type of music of black American origin characterized by improvisation, syncopation, and usually a regular or forceful rhythm, emerging at the beginning of the 20th century.",
                        done: false,
                    },
                    {
                        word: "Reggae",
                        meaning: "Music like Bob Marley, man.",
                        done: false,
                    },
                    {
                        word: "Folk",
                        meaning: "Music like Bob Dylan, man.",
                        done: false,
                    },
                ]),
                cardNumber: 0,
            };
            this.boundCallback = this.hideCreateCard.bind(this);
            this.boundCreateCard = this.setCard.bind(this);
            this.boundShowPrevCard = this.showPrevCard.bind(this);
            this.boundShowNextCard = this.showNextCard.bind(this);
        }
    
        hideCreateCard() {
            this.setState({ showModal: false });
        }
    
        showNextCard() {
            this.setState({ cardNumber: ((this.state.cardNumber + 1) % this.state.cards.size) });
        }
    
        showPrevCard() {
            this.setState({ cardNumber: ((this.state.cardNumber + this.state.cards.size - 1) % this.state.cards.size) });
        }
    
        setCard(card) {
            const newCards = this.state.cards.push(card);
            this.setState({ cards: newCards });
        }

        toggleWordDone(word = this.state.cardNumber) {
            let newCards = this.state.cards;
            newCards = newCards.update(word, function (card) {
                return card.set("done", !newCards.get(word).get("done"));
            });
            this.setState({ cards: newCards });
        }
    
        generateDots() {
            const wordDone = this.state.cards.get(this.state.cardNumber).get("done") ? 'active' : '';
            return [
                <span
                    className={`card-container__dot fa fa-2x fa-chevron-circle-left`}
                    onClick={() => this.showPrevCard()}
                />,
                <span
                    className={`card-container__dot fa fa-2x fa-check-circle ${wordDone}`}
                    onClick={() => this.toggleWordDone()}
                />,
                <span
                    className={`card-container__dot fa fa-2x fa-plus-circle`}
                    // onClick={() => this.setState({ cardNumber: num })}
                />,
                <span
                    className={`card-container__dot fa fa-2x fa-chevron-circle-right`}
                    onClick={() => this.showNextCard()}
                />,
            ];
        }
    
        generateCards() {
            const cards = this.state.cards;
            const cardsList = cards.map((card) => {
                return (
                    <Card
                        frontContent={card.get("word")}
                        backContent={card.get("meaning")}
                        showNextCard={this.boundShowNextCard}
                        showPrevCard={this.boundShowPrevCard}
                        cardNumber={this.state.cardNumber}
                    />
                );
            });
            return cardsList.toJS()[this.state.cardNumber];
        }
        render() {
            return (
                <div>
                    <div className="row justify-content-center">
                        <div className="col col-sm-5">
                            {this.generateCards()}
                        </div>
                    </div>
                    <div className="card-container__dots-wrapper">
                        {this.generateDots()}
                    </div>
                </div>
            );
        }
    }
    
    export default CardContainer;