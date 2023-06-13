sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1fiori8/test/integration/FirstJourney',
		'project1fiori8/test/integration/pages/ProductsList',
		'project1fiori8/test/integration/pages/ProductsObjectPage',
		'project1fiori8/test/integration/pages/Products_textsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage, Products_textsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1fiori8') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage,
					onTheProducts_textsObjectPage: Products_textsObjectPage
                }
            },
            opaJourney.run
        );
    }
);