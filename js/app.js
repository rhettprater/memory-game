'use strict';

var thisNode, thisCard;
var totalClicks = 0
var card1, card2;
var node1, node2

function cardClick(event){
if(event.target.nodeName === 'LI' || event.target.nodeName === 'SPAN'){
    if(event.target.nodeName === 'LI'){
        thisNode = event.target;
    }
    if(event.target.nodeName === 'SPAN'){
       thisNode = event.target.parentNode;
    }
    
    thisCard = thisNode.cardObject;
   
    
    if(!thisCard.flipped);
        thisNode.classList.add('flip');
        thisCard.flipped = true;
        totalClicks++;
        if(totalClicks % 2=== 1) {
            card1 = thisCard;
            node1 = thisNode;
        }
        else {
            card2 = thisCard;
            node2 = thisNode;
            console.log('We need to compare ' + card1.icon + 'with' + card2.icon + '-');
        }
    }
};


window.addEventListener('load', function(){
    var deck = new Deck();
    deck.shuffle(deck.cards);
    var gameBoard = document.querySelector('.deck');
    gameBoard.innerHTML = '';
    for(var i = 0; i < deck.numCards; i++){
        deck.cards[i].flipped = false;
        deck.cards[i].matched = false;
        var card = document.createElement('li');
        card.classList.add('card');
        card.cardObject = deck.cards[i];
        var icon = document.createElement('span');
        icon.classList.add('icon-' + deck.cards[i].icon);
        card.appendChild(icon);
        gameBoard.appendChild(card);
    }


    gameBoard.addEventListener('click', cardClick);
});