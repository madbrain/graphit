import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { GraphDocument, NodeSpec } from '../graphDocument';
import { StoreService } from '../store.service';

export enum EditorState {
  CLEAN = 0, // NO CHANGES
  DIRTY = 1, // UNSAVED CHANGES
  SAVE = 2, // SAVE IN PROGRESS
  LOAD = 3, // LOADING
  READONLY = 4
};

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  public doc: GraphDocument = new GraphDocument();
  public graphSelection: NodeSpec = null;

  public faPlus = faPlus;

  private loading: boolean = false;
  private saving: boolean = false;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

  setSelection(node: NodeSpec) {
    this.graphSelection = node;  
  }

  addNode() {
    this.doc.addNode();
  }

  state(): EditorState {
    if (this.loading) {
      return EditorState.LOAD;
    } else if (this.saving) {
      return EditorState.SAVE;
    } else if (this.doc.dirty) {
      return EditorState.DIRTY;
    } else if (this.doc.info != null && !this.doc.info.editable) {
      return EditorState.READONLY;
    }
    return EditorState.CLEAN;
  }

  create() {
    this.updateEditor({
      editable: true,
      title: 'Untitled document',
      description: '',
      mimeType: 'application/graphit',
      resource_id: null
    });
  }

  load(id: string, reload: boolean) {
    /*
    if (!reload && this.doc.info && id == this.doc.resource_id) {
      return $q.when(this.doc.info);
    }
    this.loading = true;
    return this.storeService.load(id).then(result => {
      this.loading = false;
      this.updateEditor(result.data);
      $rootScope.$broadcast('loaded', doc.info);
      return result;
    }, result => {
      this.loading = false;
      $rootScope.$broadcast('error', {
        action: 'load',
        message: "An error occured while loading the file"
      });
      return result;
    });
    */
  }

  save(newRevision) {
    /*
    if (this.saving || this.loading) {
      throw 'Save called from incorrect state';
    }
    this.saving = true;
    this.doc.dirty = false;
    const file = this.snapshot();

    //newRevision = newRevision || doc.timeSinceLastSave() > ONE_HOUR_IN_MS;
    const promise = this.storeService.save(file, newRevision);
    promise.then(result => {
        this.saving = false;
        this.doc.resource_id = result.data;
        this.doc.lastSave = new Date().getTime();
        $rootScope.$broadcast('saved', this.doc.info);
        return this.doc.info;
      }, result => {
        this.saving = false;
        this.doc.dirty = true;
        $rootScope.$broadcast('error', {
          action: 'save',
          message: "An error occured while saving the file"
        });
        return result;
      });
    return promise;
    */
  }

  private updateEditor(fileInfo) {
    /*
    this.doc.lastSave = 0;
    this.doc.info = fileInfo;
    this.doc.resource_id = fileInfo.id;
    if (fileInfo.content != null) {
      this.doc.setGraph(angular.fromJson(fileInfo.content));
    }
    */
  }

}
