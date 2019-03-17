

export class GMap<K, V> {

	private _keys: Array<K>;
	private _values: Array<V>;

	constructor() {
		this.clear();
	}

	put(key : K, value: V) {
		var index = this._keys.indexOf(key);
		if (index >= 0) {
			this._values[index] = value;
		} else {
			this._keys.push(key);
			this._values.push(value);
		}
	}

	keys(): Array<K> {
		return this._keys;
	}

	values(): Array<V> {
		return this._values;
	}

	get(key: K): V {
		var i = this._keys.indexOf(key);
		if (i < 0) {
			return null;
		}
		return this._values[i];
	}

	remove(key: K): V {
		var i = this._keys.indexOf(key);
		if (i < 0) {
			return null;
		}
		var value = this._values[i];
		this._keys.splice(i, 1);
		this._values.splice(i, 1);
		return value;
	}

	clear() {
		this._keys = [];
		this._values = [];
	}

}

export function remove<T>(list: Array<T>, value: T) {
	list.splice(list.indexOf(value), 1);
}