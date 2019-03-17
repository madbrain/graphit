import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: Http) { }

  /*
  var jsonTransform = function (data, headers) {
		return angular.fromJson(data);
	};
	var service = {
		user: function () {
			return $http.get('user', {transformResponse:jsonTransform});
		},
		about: function () {
			return $http.get('about', {transformResponse:jsonTransform});
		},
		save: function(fileInfo, newRevision) {
			$log.info('Saving', fileInfo);
			return $http({
				url: 'svc',
				method:fileInfo.resource_id ? 'PUT' : 'POST',
				headers:{
					'Content-Type': 'application/json'
				},
				params:{
					'newRevision': newRevision
				},
				transformResponse: jsonTransform,
				data: JSON.stringify(fileInfo)
            });
		},
		load: function (id) {
			return $http.get('svc', {
				transformResponse:jsonTransform,
				params:{
					'file_id':id
				}
			});
		},
	};
  */
}
