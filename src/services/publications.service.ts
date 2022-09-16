import { json } from "stream/consumers";


async function getBooksInfo(url: string) {
    const booksDataFromServer = 
        await Promise.resolve('https://vitmfs.github.io/assets/publications_db.json')
    const greeting: string = booksDataFromServer;
    return greeting;
}

export default getBooksInfo;