import axios from 'axios';


export class PublicationsListService {

    private static serverURL: string = 'https://vitmfs.github.io/assets';

    public static getAllPublications() {

        let booksDataUrl = `${this.serverURL}/publications_db.json`

        var responseToBooksDataUrlRequest = axios.get(booksDataUrl);

        return responseToBooksDataUrlRequest;
    }




}