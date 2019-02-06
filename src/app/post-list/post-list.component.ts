import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListCompnent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() loveIts: number;
  @Input() postDate: any;

  constructor() {}

  ngOnInit() {}

  onLoveIts() {
    //alert("I love It !");
    this.loveIts += 1;
  }
  onDoesNotLoveIts() {
    //alert("I don't It !");
    this.loveIts -= 1;
  }
}
