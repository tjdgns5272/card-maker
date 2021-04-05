import { firebaseDataBase } from "./firebase";

class CardRepository {
    syncCards(userId, onUpdate) {
        const ref =firebaseDataBase.ref(`${userId}/cards`);
        ref.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => ref.off()
    }


    saveCard(userId, card) {
       firebaseDataBase.ref(`${userId}/cards/${card.id}`).set(card);
        //https://firebase.google.com/docs/database/web/read-and-write 참조
    }

    removeCard(userId, card) {
       firebaseDataBase.ref(`${userId}/cards/${card.id}`).remove();
    }
}

export default CardRepository;
