import { Component, OnInit } from "@angular/core";
import { DataService, Message } from "../services/data.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  constructor(private data: DataService) {}
  listData: Message[] = [];
  filtredList: Message[] = [];
  refresh(ev: any) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  ngOnInit() {
    this.listData = this.data.getMessages();
  }
  searchList(ev: any): void {
    // return this.data.getMessages();
    const searchedVal = ev.target.value.toLowerCase();

    if (searchedVal.trim().length === 0) {
      this.filtredList = [];
      return;
    }
    this.filtredList = this.filtredList = this.listData.filter((list) => {
      // if (typeof searchedVal === "boolean") {
      //   return list.read === searchedVal;
      // }

      return (
        list.fromName.toLowerCase().includes(searchedVal) ||
        list.date.toLowerCase().includes(searchedVal) ||
        list.subject.toLowerCase().includes(searchedVal)
      );
    });
  }
}
