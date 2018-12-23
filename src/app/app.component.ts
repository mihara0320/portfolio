import { Component } from '@angular/core';
import { ObservableMedia, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  projects = [
    { title: 'some some', image: 'assets/profile.JPG', link: '' },
    { title: 'some some', image: 'assets/profile.JPG', link: '' },
    { title: 'some some', image: 'assets/profile.JPG', link: '' },
    { title: 'some some', image: 'assets/profile.JPG', link: '' },
    { title: 'some some', image: 'assets/profile.JPG', link: '' },
    { title: 'some some', image: 'assets/profile.JPG', link: '' },
  ]

  constructor(public media: ObservableMedia) {
    media.asObservable()
      .subscribe((change: MediaChange) => {
        console.log(change);
        
        // this.state = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      });
  }
}
