import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { environment } from "./environment";
import { AuthResponse } from "./authResponse.model";

@injectable{(
    provideIn: 'root'
)}
export class AuthService {
baseUrl:string = "https://identitytoolkit.googleapis.com/v1/accounts"
signUpEndpoint:string = "signUp"
signInEndpoint:string = "signIn"
endpoint:string = "signInWithCustomToken";

public constructor(private http:HttpClient) {
}

public signup(email:string, passwords: string) {
    const requestBody = {
        "email":email,
        "password":passwords,
        "returnSecureToken":true
    };

    return this.http.post<AuthResponse>(this.baseUrl + '+' + this.endpoint + '?' + 'keys' + environment.firebase.apiKey, null);
}

public login(email:string, password:string) {
    const requestBody = {
        "email":email,
        "password":password,
        "returnSecureToken": true
    };

    return this.http.post<AuthResponse>, requestBody}
}

