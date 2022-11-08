/*
GET: /cards
    response: 200- OK
    {
        cards: [
            {
            id: 1
            cost: 7
            name: cardName
            type: cardType
            attack: 10
            defense: 5
            rarity: common
            }
            {...}   
        ]
    }

GET /cards/{id}
    response:
    {
        cost: 7
        name: cardName
        type: cardType
        attack: 10
        defense: 5
        rarity: common 
    }

POST /cards
    response:
    {
        id: 2
        cost: 5
        name: cardName
        type: cardType
        attack: 9
        defense: 9
        rarity: rare
    }

PUT /cards/{id}
    {
        cost: 5
        name: cardName
        type: cardType
        attack: 9
        defense: 9
        rarity: rare       
    }


DELETE /cards/{id}
    response: 200- OK
*/ 