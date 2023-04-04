import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'third-array';


  s = [1, 2, 3, 4];
  t = [2, 3, 5];

  ngOnInit(): void {

    const [sNotInT, tNotInS] = this.diffArrays(this.s, this.t);

    console.log(sNotInT); // Output: [1, 4]
    console.log(tNotInS); // Output: [5]
  }

  diffArrays(s: any[], t: any[]) {
    const aNotInT = s.filter((x: any) => !t.includes(x));
    const bNotInS = t.filter((x: any) => !s.includes(x));
    return [aNotInT, bNotInS];
  }

}
