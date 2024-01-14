import { Component } from '@angular/core';
import { Vertex } from './game/Vertex';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gravitygrid';
  private vertices: Vertex[];

  constructor() {
    this.vertices = [];
    for (let i = 0; i < 64; i++) { // 576
      this.vertices.push(new Vertex(i, i));
    }
  }

  public getVertices(): Vertex[] {
    return this.vertices;
  }
}
