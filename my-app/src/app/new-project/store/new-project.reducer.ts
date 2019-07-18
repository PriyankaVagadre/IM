import { NewProject } from '../model/new-project.model';
import { Action} from '@ngrx/store';
import * as TutorialActions from '../store/new-project.actions';

const initialState : NewProject ={
  name : 'ngrx',
  url : 'www.ngrx.com'
}


export function newProjectReducer(state: NewProject[] = [initialState], action: TutorialActions.Action){
   switch(action.type){
        case TutorialActions.ADD_TUTORIALS:
          return [...state ,action.payload];
        case TutorialActions.REMOVE_TUTORIALS:
          state.splice(action.payload, 1)
          // return [...state, action.payload];
          return state;
         default:
           return state;
   }
}
