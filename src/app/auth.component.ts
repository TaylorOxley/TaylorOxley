import { Component } from "@angular/core";
import { NgForm } from "angular/forms";
import { AuthResponse } from "./authResponse.model";
import { AuthService } from "./authResponse"
import { Observable } from "@firebase/util";

@Component({
    selector: "hollister-auth",
    templateUrl: "auth.component.html"
})

export class AuthComponent {
    public buttonClicked!:string;
    private authObservable!: Observable<AuthResponse>;

    constructor(private authService:AuthService) {
    }
    public onSubmit(data: NgForm) {
        console.log("Button clicked = " + this.buttonClicked);
        console.log(data.value);

        if (this.buttonClicked == "Sign Up") {
            this.authObservable = this.authService.signup(data.value.email, data.value.passwords);
        }
        if (this.buttonClicked == "Login") {
            this.authObservable = this.authService.login(data.value.email, data.value.passwords);
        }

        
         
        
        
       this.authObservable.subscribe(
        (data:AuthResponse) => {
            console.log(data);
        }
       )

        error => {
            console.log(error.error);
    }
        };
    }

  

    onClick(buttonType:string) {
        console.log(buttonType);
    }

     

