import { NewProject } from '../model/new-project.model';
import { Action} from '@ngrx/store';

export const ADD_TUTORIALS = '[TUTORIAL] Add'
export const REMOVE_TUTORIALS = '[TUTORIAL] Remove'


export class AddTutorialAction implements Action {
      readonly type = ADD_TUTORIALS
      constructor(public payload : NewProject){}
}

export class RemoveTutorialAction implements Action{
      readonly type = REMOVE_TUTORIALS
      constructor(public payload : number){}
}

export type Action = AddTutorialAction | RemoveTutorialAction
