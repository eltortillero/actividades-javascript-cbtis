const db = firebase.firestore();

export async function insert(item){
    try{
        const response = await db.collection("todos").add(item);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getItems(uid){
    try{
        let items = [];
        const response = await db.collection("todos").where("userid", "==", uid).get();
        response.forEach((item) => {
            items.push(item.data());
        });

        return items;
    } catch (error) {
        throw new Error(error);
    }
}

export async function update(id, item){
    let docId;
    try{
        const doc = await db.collection("todos").where("id", "==", id).get();
        doc.forEach((i) => {
            docId = i.id;
        });

        await db.collection("todos").doc(docId).update({completed: item.completed});
    } catch (error) {
        throw new Error(error);
    }
}