import { EditorState } from "../editor/editor.component";

// should use rx to do that
class AutoSave {
	constructor(editor, saveInterval, $timeout) {
		var saveFn = function () {
			if (editor.state() == EditorState.DIRTY) {
				editor.save(false);
			}
		};
		var createTimeout = function () {
			return $timeout(saveFn, saveInterval).then(createTimeout);
		};
		return createTimeout();
	}
}
