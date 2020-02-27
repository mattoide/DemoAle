import { environment } from "../../environments/environment";

export const api = {

    registraAzienda: environment.baseUrl + 'aziende/registraAzienda',
    getCategorie: environment.baseUrl + 'options/getCategorie',
    getProdotti: environment.baseUrl + 'options/getProdotti',
    getServizi: environment.baseUrl + 'options/getServizi',
    getToponimi: environment.baseUrl + 'options/getToponimi',

}
