/*global angular */
(function () {
	"use strict";

	// ANGULAR MODULE/APP (store-products):
	
	var app = angular.module("store-products", [])

		.directive("productTitle", function () {
			return {
				restrict: "A",
				templateUrl: "partials/product-title.html"
			};
		})

		.directive("productGallery", function () {
			return {
				restrict: "E",
				templateUrl: "partials/product-gallery.html",
				controller: function () {

					this.current = 0;

					this.setCurrent = function (i) {
						this.current = i || 0;
					};

					this.isSet = function (i) {
						return i === this.current;
					};
				},
				controllerAs: "gallery"
			};
		})

		.directive("productTabs", function () {
			return {
				restrict: "E",
				templateUrl: "partials/product-tabs.html",
				controller: function ($scope, $element) {

					this.current = 0;

					this.setCurrent = function (i) {
						this.current = i || 0;
					};

					this.isSet = function (i) {
						return i === this.current;
					};
				},
				controllerAs: "tab"
			};
		})

		.directive("productDescriptionTab", function () {
			return {
				restrict: "E",
				templateUrl: "partials/product-description-tab.html"
			};
		})

		.directive("productSpecsTab", function () {
			return {
				restrict: "E",
				templateUrl: "partials/product-specs-tab.html"
			};
		})

		.directive("productReviewsTab", function () {
			return {
				restrict: "E",
				templateUrl: "partials/product-reviews-tab.html"
			};
		});
}());