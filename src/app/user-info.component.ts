import { Component } from "@angular/core";
import { UserInfo } from "./user-info.model";


@Injectable()
@Component({
selector: "holister-user-info",
templateUrl: "user-info.component.html"
})


export class UserInfoComponent implements OnInit {
    constructor(private http: HttpClient) {   
    }

    ngOnInit(): void {
        console.log("Sending a get request tot the server");
        this.getUserInfo();
        console.log("Registering showUserInfo as a subscriber");
        this.showUserInfo;
    }

getUserInfo() {
return this.http.get<UserInfo>('https://hollister-app-fb5ab-default-rtdb.firebaseio.com/my-info.json')

}
showUserInfo() {
    this.getUserInfo().subscribe(data => {
        console.log(data);
    })
}

}