import { Component, OnInit } from '@angular/core';
//store
//model
//state
//actions
import{Store} from '@ngrx/store'; // for store implementation
import { NewProject } from '../model/new-project.model'; // for store implementation
import { AppState } from '../store/new-project.state'; // for store implementation
import * as TutorialActions from '../store/new-project.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {
  constructor(public store : Store<AppState>) {}

  ngOnInit() {
  }

  addTutorials(name, url){
    this.store.dispatch(new TutorialActions.AddTutorialAction({name : name, url : url}))
  }


}
