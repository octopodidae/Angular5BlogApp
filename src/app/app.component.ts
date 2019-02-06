import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor() {}
  title = "Blog App";

  posts = [
    {
      title: "Un premier post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis sollicitudin nunc eu interdum. Proin a ante erat. Aliquam tristique, elit eu placerat dapibus, purus ipsum vestibulum lectus, sed consectetur nunc tortor vitae erat. Phasellus nunc dui, elementum id sollicitudin a, volutpat nec nisi. Donec vitae enim metus. Aenean eros lorem, tristique a volutpat at, mollis vitae tortor. Phasellus sed pulvinar enim, et gravida eros. Sed varius vulputate nisl a hendrerit. Vestibulum congue est a volutpat sagittis. Suspendisse sem justo, dignissim volutpat lacus in, congue ultricies lectus. Nullam eu est leo. In sit amet tortor tellus. Sed bibendum ipsum quam, non maximus odio euismod at. ",
      loveIts: 2,
      created_at: Date.now()
    },
    {
      title: "Un second post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis sollicitudin nunc eu interdum. Proin a ante erat. Aliquam tristique, elit eu placerat dapibus, purus ipsum vestibulum lectus, sed consectetur nunc tortor vitae erat. Phasellus nunc dui, elementum id sollicitudin a, volutpat nec nisi. Donec vitae enim metus. Aenean eros lorem, tristique a volutpat at, mollis vitae tortor. Phasellus sed pulvinar enim, et gravida eros. Sed varius vulputate nisl a hendrerit. Vestibulum congue est a volutpat sagittis. Suspendisse sem justo, dignissim volutpat lacus in, congue ultricies lectus. Nullam eu est leo. In sit amet tortor tellus. Sed bibendum ipsum quam, non maximus odio euismod at. ",
      loveIts: -3,
      created_at: Date.now()
    },
    {
      title: "Un autre post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis sollicitudin nunc eu interdum. Proin a ante erat. Aliquam tristique, elit eu placerat dapibus, purus ipsum vestibulum lectus, sed consectetur nunc tortor vitae erat. Phasellus nunc dui, elementum id sollicitudin a, volutpat nec nisi. Donec vitae enim metus. Aenean eros lorem, tristique a volutpat at, mollis vitae tortor. Phasellus sed pulvinar enim, et gravida eros. Sed varius vulputate nisl a hendrerit. Vestibulum congue est a volutpat sagittis. Suspendisse sem justo, dignissim volutpat lacus in, congue ultricies lectus. Nullam eu est leo. In sit amet tortor tellus. Sed bibendum ipsum quam, non maximus odio euismod at. ",
      loveIts: 0,
      created_at: Date.now()
    }
  ];
}
