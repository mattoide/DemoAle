import { environment } from "../../environments/environment";

export const api = {

    registraAzienda: environment.baseUrl + 'api/azienda/registra',
    getCategorie: environment.baseUrl + 'api/options/categorie',
    getProdotti: environment.baseUrl + 'api/options/prodotti',
    getServizi: environment.baseUrl + 'api/options/servizi',
    getToponimi: environment.baseUrl + 'api/options/toponimi',

}
