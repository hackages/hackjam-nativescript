import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/platform";
import {AppComponent} from "./app.component";
import {RoomListComponent} from "./room.list.component";
import ChatService from "./chat.service";
import {RoomChatComponent} from "./room.chat.component";
import {NativeScriptRouterModule, NativeScriptFormsModule} from "nativescript-angular";


export const routes = [
  {path: "", component: RoomListComponent},
  {path: "room/:id", component: RoomChatComponent},
];

@NgModule({
  declarations: [
    AppComponent, RoomListComponent, RoomChatComponent],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule.forRoot(routes)

  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ChatService]
})
export class AppModule {
}
