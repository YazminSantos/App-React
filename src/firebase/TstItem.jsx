import {collection, doc, getDoc, getDocs, addDoc, query, where, limit, getFirestore} from "firebase/firestore";

const db= getFirestore();

export const getCategories = async () => {
    const categoriesCollection = collection(db, "categories");

    try {
        const res = await getDocs(categoriesCollection);
        const categories = res.docs.map((c) => ({ id: c.id, ...c.data() }));
        return categories;
    } catch (error) {
        console.log("Something happended", error);
    }
};

export const getCategory = async (key) => {
    const categoryCollection = query(
        collection(db, "categories"),
        where("key", "==", key),
        limit(1)
    );

    try {
        const res = await getDocs(categoryCollection);
        if (res.size) {
            const categories = res.docs.map((c) => ({ id: c.id, ...c.data() }));
            return categories[0];
        } else {
            return null;
        }
    } catch (error) {
        console.log("Something happended", error);
    }
};

export const getProducts = async (category = null) => {
    let productsCollection;

    if (category) {
        productsCollection = query(
            collection(db, "items"),
            where("category_key", "==", category)
        );
    } else {
        productsCollection = collection(db, "items");
    }

    try {
        const res = await getDocs(productsCollection);
        const products = res.docs.map((p) => ({ id: p.id, ...p.data() }));
        return products;
    } catch (error) {
        console.log("Something happended", error);
    }
};

export const getProduct = async (id) => {
    const productRef = doc(db, "items", id);

    try {
        const res = await getDoc(productRef);
        if (res.exists()) {
            const product = { id: res.id, ...res.data() };
            return product;
        } else {
            return null;
        }
    } catch (error) {
        console.log("Something happended", error);
    }
};

