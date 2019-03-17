
angular.module("graphit.controllers", [ "ui.bootstrap" ])

.controller("EditorCtrl",
	function ($scope, $routeParams, $modal, $log, $timeout, $location, appId, editor, autosaver, doc) {
		$log.info("Route", $routeParams);
		
		$scope.editor = editor;
		$scope.doc = doc;
		$scope.$on('saved', function (event) {
			$location.path('/edit/' + doc.resource_id);
		});
		if ($routeParams.id) {
			editor.load($routeParams.id);
	    } else {
	    	// New doc, but defer to next event cycle to ensure init
	    	$timeout(function () {
	    		editor.create();
	    	}, 1);
	    }
		
		var onFilePicked = function (data) {
	        $scope.$apply(function () {
	            if (data.action == 'picked') {
	                var id = data.docs[0].id;
	                $location.path('/edit/' + id);
	            }
	        });
	    };
	    $scope.open = function () {
	    	var self = this;
	    	if (gapi.auth.getToken() == null) {
	    		window.gapi.auth.authorize({
		    		'client_id': appId,
		    		'scope': ['https://www.googleapis.com/auth/drive.readonly' ],
		    		'immediate': false
		    	}, function (authResult) {
		    		angular.bind(self, openPicker)();
		    	});
	    	} else {
	    		openPicker();
	    	}
	    };
	    
	    function openPicker() {
	    	var view = new google.picker.View(google.picker.ViewId.DOCS);
	    	view.setMimeTypes('application/graphit');
	    	var picker = new google.picker.PickerBuilder()
		            .setAppId(appId)
		            .setOAuthToken(gapi.auth.getToken().access_token)
		            .addView(view)
		            .setCallback(angular.bind(this, onFilePicked))
		            .build();
	    	picker.setVisible(true);
	    }
	    
	    $scope.save = function () {
	       editor.save(true);
	    };
	}
)
