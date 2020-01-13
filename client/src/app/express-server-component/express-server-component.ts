import { Component, OnInit } from "@angular/core";

@Component({
  selector: "express-server",
  templateUrl: "express-server.component.html"
})
export class ExpressServer implements OnInit {
  constructor() {}

  ngOnInit() {}
  async getServerResponse() {
    // alert("do it");
    const request = await fetch("/api/hello", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const body = await request.json();
    let test = document.getElementById("test");
    // alert(JSON.stringify(body));
    alert(body.express);
  }
}
