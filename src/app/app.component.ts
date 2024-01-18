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
  private badges: string[];

  constructor() {
    this.vertices = [];
    this.badges = [];
    this.badges.push('fa fa-cloud');
    this.badges.push('fa fa-heart');
    for (let i = 0; i < 144; i++) {
      this.vertices.push(new Vertex(i, this.randomIntFromInterval(0, 4), this.badges));
    }
  }

  public randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  public getVertices(): Vertex[] {
    return this.vertices;
  }
}
