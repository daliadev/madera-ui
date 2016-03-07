angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
	

	

	// Page d'accueil
	/*
	.state('home', {
		url: '/home',
		views: {
			'home': {
				templateUrl: 'templates/home.html',
				controller: 'homeCtrl'
			}
		}
	})
	*/

	/* Exemple officiel */
	.state('home', {
		url: '/home',
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl'
	})




	// Catalogue
	.state('catalog', {
		url: '/catalog',
		templateUrl: 'templates/gestion_catalog.html',
		controller: 'catalogCtrl'
	})
		.state('catalog.gammes', {
			url: '/gammes',
			templateUrl: 'templates/catalog_gammes.html',
			controller: 'catalogGammesCtrl'
		})

		.state('catalog.models', {
			url: '/models',
			templateUrl: 'templates/catalog_models.html',
			controller: 'catalogModelsCtrl'
		})

		.state('catalog.promos', {
			url: '/promos',
			templateUrl: 'templates/catalog_promos.html',
			controller: 'catalogPromosCtrl'
		})

	// Client
	.state('client', {
		url: '/client',
		templateUrl: 'templates/gestion_client.html',
		controller: 'clientCtrl'
	})

	// Devis
	.state('devis', {
		url: '/devis',
		templateUrl: 'templates/gestion_devis.html',
		controller: 'devisCtrl'
	})


	

	// Tabs controller
	.state('tabsController', {
		url: '/page1',
		templateUrl: 'templates/tabsController.html',
		abstract:true
	})

	// Tab Catalogue
	/* Exemple
	.state('tab.catalog', {
		url: '/catalog',
		views: {
			'tab-catalog': {
				templateUrl: 'templates/tab-catalog.html',
				controller: 'CatalogCtrl'
			}
		}
	})
	*/

	.state('tabsController.gestionCatalog', {
		url: '/home/catalog',
		views: {
			'catalog': {
				templateUrl: 'templates/gestion_catalog.html',
				controller: 'catalogCtrl'
			}
			/*,
			'tab4': {
				templateUrl: 'templates/catalogue.html',
				controller: 'catalogueCtrl'
			},
			'tab2': {
				templateUrl: 'templates/catalogue.html',
				controller: 'catalogueCtrl'
			},
			'tab3': {
				templateUrl: 'templates/catalogue.html',
				controller: 'catalogueCtrl'
			}
			*/
		}
	})

	.state('tabsController.gestionClient', {
		url: '/home/client',
		views: {
			'client': {
				templateUrl: 'templates/gestion_client.html',
				controller: 'clientCtrl'
			}
			/*,
			'tab4': {
				templateUrl: 'templates/gestionClientLe.html',
				controller: 'gestionClientLeCtrl'
			},
			'tab2': {
				templateUrl: 'templates/gestionClientLe.html',
				controller: 'gestionClientLeCtrl'
			},
			'tab3': {
				templateUrl: 'templates/gestionClientLe.html',
				controller: 'gestionClientLeCtrl'
			}
			*/
		}
	})

	.state('tabsController.gestionDevis', {
		url: '/home/devis',
		views: {
			'client': {
				templateUrl: 'templates/gestion_devis.html',
				controller: 'devisCtrl'
			}
		}
	})

  

	/*
  .state('tabsController.gammes', {
	url: '/home/catalog/gammes',
	views: {
	  'tab1': {
		templateUrl: 'templates/gammes.html',
		controller: 'gammesCtrl'
	  },
	  'tab4': {
		templateUrl: 'templates/gammes.html',
		controller: 'gammesCtrl'
	  },
	  'tab2': {
		templateUrl: 'templates/gammes.html',
		controller: 'gammesCtrl'
	  },
	  'tab3': {
		templateUrl: 'templates/gammes.html',
		controller: 'gammesCtrl'
	  }
	}
  })


  .state('tabsController.modLes', {
	url: '/home/catalog/modeles',
	views: {
	  'tab1': {
		templateUrl: 'templates/modLes.html',
		controller: 'modLesCtrl'
	  },
	  'tab4': {
		templateUrl: 'templates/modLes.html',
		controller: 'modLesCtrl'
	  },
	  'tab2': {
		templateUrl: 'templates/modLes.html',
		controller: 'modLesCtrl'
	  },
	  'tab3': {
		templateUrl: 'templates/modLes.html',
		controller: 'modLesCtrl'
	  }
	}
  })

  .state('tabsController.choixDuClient', {
	url: '/home/client/choix_client',
	views: {
	  'tab1': {
		templateUrl: 'templates/choixDuClient.html',
		controller: 'choixDuClientCtrl'
	  },
	  'tab4': {
		templateUrl: 'templates/choixDuClient.html',
		controller: 'choixDuClientCtrl'
	  },
	  'tab2': {
		templateUrl: 'templates/choixDuClient.html',
		controller: 'choixDuClientCtrl'
	  },
	  'tab3': {
		templateUrl: 'templates/choixDuClient.html',
		controller: 'choixDuClientCtrl'
	  }
	}
  })

  .state('tabsController.ficheClient', {
	url: '/home/client/new',
	views: {
	  'tab1': {
		templateUrl: 'templates/ficheClient.html',
		controller: 'ficheClientCtrl'
	  },
	  'tab4': {
		templateUrl: 'templates/ficheClient.html',
		controller: 'ficheClientCtrl'
	  },
	  'tab2': {
		templateUrl: 'templates/ficheClient.html',
		controller: 'ficheClientCtrl'
	  },
	  'tab3': {
		templateUrl: 'templates/ficheClient.html',
		controller: 'ficheClientCtrl'
	  }
	}
  })

  .state('tabsController.devisN254512', {
	url: '/home/devis/new',
	views: {
	  'tab3': {
		templateUrl: 'templates/devisN254512.html',
		controller: 'devisN254512Ctrl'
	  }
	}
  })


  .state('tabsController.personnalisation', {
	url: '/home/client/choix/custom',
	views: {
	  'tab1': {
		templateUrl: 'templates/personnalisation.html',
		controller: 'personnalisationCtrl'
	  },
	  'tab4': {
		templateUrl: 'templates/personnalisation.html',
		controller: 'personnalisationCtrl'
	  },
	  'tab2': {
		templateUrl: 'templates/personnalisation.html',
		controller: 'personnalisationCtrl'
	  },
	  'tab3': {
		templateUrl: 'templates/personnalisation.html',
		controller: 'personnalisationCtrl'
	  }
	}
  })

  .state('tabsController.vueDuModLe', {
	url: '/home/client/choix/custom_view',
	views: {
	  'tab3': {
		templateUrl: 'templates/vueDuModLe.html',
		controller: 'vueDuModLeCtrl'
	  }
	}
  })

  .state('validationDuDevis', {
	url: '/home/devis/valid',
	templateUrl: 'templates/validationDuDevis.html',
	controller: 'validationDuDevisCtrl'
  })
	*/
$urlRouterProvider.otherwise('/home')

  

});