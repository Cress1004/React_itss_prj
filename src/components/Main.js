import React from 'react';
import Immutable from 'immutable';
import Card from './FlashCard';
import WordList from './WordList';
import AddWord from './AddWord';
class Main extends React.Component {
        constructor() {
            super();
            this.state = {
                cards: Immutable.fromJS([
                    {
                        word: "偶然",
                        meaning:
                            "何の因果関係もなく、予期しないことが起こること。また、そのさま。",
                        done: false,
                    },
                    {
                        word: "必然",
                        meaning: "必ずそうなること。そのように帰着するに決まっていること。また、そのさま。必至。",
                        done: false,
                    },
                    {
                        word: "蓋然",
                        meaning: "あるいはそうであろうと思われること。あり得ること。はっきりとは言い切れないが、確からしいさま。",
                        done: false,
                    },
                ]),
                cardNumber: 0,
                showModal: false,
            };
            this.boundCurrentCard = this.setCurrentCard.bind(this);
            this.boundCallback = this.toggleCreateCard.bind(this);
            this.boundCreateCard = this.setCard.bind(this);
            this.boundShowPrevCard = this.showPrevCard.bind(this);
            this.boundShowNextCard = this.showNextCard.bind(this);
        }
    
        toggleCreateCard() {
            this.setState({ showModal: !this.state.showModal });
        }

        setCard({word, mean}) {
            const newCards = this.state.cards.push(Immutable.fromJS({word: word, meaning: mean, done: false}));
            console.log(newCards);
            this.setState({ cards: newCards });
            console.log(this.state.cards);
        }
    
        showNextCard() {
            this.setState({ cardNumber: ((this.state.cardNumber + 1) % this.state.cards.size) });
        }
    
        showPrevCard() {
            this.setState({ cardNumber: ((this.state.cardNumber + this.state.cards.size - 1) % this.state.cards.size) });
        }

        setCurrentCard(i) {
            this.setState({cardNumber: i});
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
            const modal = this.state.showModal ? 'active' : '';
            return [
                <span type="button"
                    className={`card-container__dot fa fa-2x fa-chevron-circle-left`}
                    onClick={() => this.showPrevCard()}
                />,
                <span type="button"
                    className={`card-container__dot fa fa-2x fa-check-circle ${wordDone}`}
                    onClick={() => this.toggleWordDone()}
                />,
                <span type="button"
                    className={`card-container__dot fa fa-2x fa-plus-circle ${modal}`}
                    onClick={() => this.toggleCreateCard()}
                />,
                <span type="button"
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
                <div className="row justify-content-center">
                    <div className="col col-md-9 bg-light">
                        <div className="row justify-content-center">
                            <div className="col col-sm-5">
                                {this.generateCards()}
                            </div>
                        </div>
                        <div className="card-container__dots-wrapper">
                            {this.generateDots()}
                        </div>
                        {this.state.showModal ?
                            (<AddWord 
                                onShadowClick={this.boundCallback}
                                onAdd={this.boundCreateCard}
                            />) : ( '' )
                        }
                    </div>
                    <div className="col col-md-3">
                        <WordList items={this.state.cards} click={this.boundCurrentCard} active={this.state.cardNumber}/>
                    </div>
                </div>
            );
        }
    }
    
    export default Main;