import { Pipe, PipeTransform } from '@angular/core';
import { EditorState } from './editor/editor.component';

@Pipe({
  name: 'saveStateFormatter'
})
export class SaveStateFormatterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == EditorState.DIRTY) {
      return 'You have unsaved changes';
    } else if (value == EditorState.SAVE) {
      return 'Saving...';
    } else if (value == EditorState.LOAD) {
      return 'Loading...';
    } else if (value == EditorState.READONLY) {
      return "Read only";
    } else {
      return 'All changes saved';
    }
  }

}
