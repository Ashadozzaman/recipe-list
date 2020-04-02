import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  log =[];
  title = 'Testing';

  onToggleDetail(){
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());

  }

  loadedFeaature =  'recipe';
  onNavigation(feature: string){
    this.loadedFeaature = feature;
  }
}
