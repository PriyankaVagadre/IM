import { Component, OnInit } from '@angular/core';

import{Store} from '@ngrx/store'; // for store implementation
import { NewProject } from '../model/new-project.model'; // for store implementation
import { AppState } from '../store/new-project.state'; // for store implementation
import * as TutorialActions from '../store/new-project.actions'; // for store implementation
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  public tutorials : Observable<NewProject[]>

  constructor(public store : Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  ngOnInit() {
  }

  removeTutorials(index){
    this.store.dispatch(new TutorialActions.RemoveTutorialAction(index))
  }
}
