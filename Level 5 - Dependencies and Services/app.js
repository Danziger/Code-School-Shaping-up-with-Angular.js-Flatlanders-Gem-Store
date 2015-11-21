/*global angular, $http */
(function () {

	"use strict";
	
	// ANGULAR MODULE/APP (gemStore):
	
	var app = angular.module("gemStore", ["store-products"])

		// CONTROLLERS:
	
		.controller("StoreController", ["$http", function ($http) {
			
			var store = this;
			store.products = [];
			
			$http.get("products.json").success(function (data) {
				store.products = data;
			});
		}])

		.controller("ReviewController", function () {

			this.review = {};

			this.addReview = function (product) {
				this.review.createdOn = Date.now();
				product.reviews.push(this.review);
				this.review = {};
			};
		});
}());