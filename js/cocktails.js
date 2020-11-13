// JavaScript Document

var cocktailSpecs = [
    [
        ["Hearst Replacement", "2/1/2018", "Winter", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Stir", "Martini", "Burnt Orange Oil", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1", "oz", "Diep 9 Aged Genever", ""],
        ["1", "oz", "Citadelle No Mistake", ""],
        ["0.75", "oz", "Sweet Vermouth", ""],
        ["0.5", "oz", "Averna", ""],
        ["1", "dash", "Jerry Thomas Bitters", ""],
        ["1", "dash", "Reagan's Orange Bitters", ""],
    ],
    [
        ["The Roses", "2/1/2018", "Winter", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "Coupe", "Lemon Oil", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["2", "oz", "Four Roses Bourbon", ""],
        ["0.75", "oz", "Meyer Lemon Shrub", ""],
        ["0.75", "oz ", "Grenadine", ""],
        ["2", "dash", "Peychaud's", ""],
        ["1", "dash", "Saline", ""],
    ],
    [
        ["Freestone", "2/1/2018", "Winter", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Stir", "OF", "Grapefruit Swath", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.5", "oz", "Tanqueray 10", ""],
        ["1", "oz", "Dolin Rouge", ""],
        ["0.5", "oz", "Green Chartruese", ""],
        ["0.25", "oz", "Cassis de Bourgone ", ""],
        ["1", "dash", "Celery Bitters", ""],
    ],
    [
        ["Lady Geneva", "8/1/2017", "Summer", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "Flute", "Lemon Twist", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["0.75", "oz", "Sipsmith", ""],
        ["0.25", "oz", "Blue Marillen", ""],
        ["0.5", "oz", "Lemon Juice", ""],
        ["0.5", "oz", "Hibiscus Syrup", ""]
    ],
    [
        ["Remember the Time", "5/1/2018", "Spring", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Stir", "Martini", "Lemon Oil, Cherry", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1", "oz", "Greenhook Old Tom", ""],
        ["0.5", "oz", "Hayman's Sloe Gin", ""],
        ["1", "oz", "Chamomile Sweet Vermouth", ""],
        ["1", "bsp", "Skinos", ""],
        ["1", "dash", "Angostura Bitters", ""],
        ["1", "dash", "Orange Bitters", ""],
    ],
    [
        ["The Commons", "5/1/2018", "Spring", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Stir", "Martini", "Lime Oil", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["0.5", "oz", "Dos Maderas 5+3", ""],
        ["0.5", "oz", "Plantation 3 Star", ""],
        ["0.5", "oz", "Martell Cognac", ""],
        ["0.5", "oz ", "Amaro del Etna", ""],
        ["1", "oz", "Carpano Antica", ""],
        ["1", "bsp", "Benedictine", ""],
        ["1", "dash", "Angostura", ""],
        ["1", "dash", "Absinthe", ""],
        ["1", "dash", "Peychauds", ""],
    ],
    [
        ["Diep 13", "5/1/2018", "Spring", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "OF", "Grapefruit Swath", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1", "oz", "Diep 9 Young Genever", ""],
        ["1", "oz", "Perry Tot Navy Strength", ""],
        ["0.75", "oz", "Trimbach Reisling", ""],
        ["0.5", "oz", "Grapefruit Liquer", ""],
        ["4", "leaves", "Mint", ""],
    ],
    [
        ["Self-Care", "5/1/2018", "Spring", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "Collins", "Sliced Cucumber", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.5", "oz", "Prairie Vodka", ""],
        ["0.75", "oz", "Lime", ""],
        ["0.75", "oz", "Charreau", ""],
        ["0.25", "oz ", "Simple Syrup", ""],
        ["1", "oz", "Soda", ""],
        ["1", "oz", "Tonic", ""],
    ],
    [
        ["Aztec Coffee", "5/1/2018", "Spring", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Build", "Cocktail", "Mole Rub, Shaved Chocolate", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.5", "oz", "Four Roses Bourbon", ""],
        ["0.375", "oz", "Mole Syrup", ""],
        ["3", "oz", "Hot Coffee", ""],
        ["1", "oz", "Mole Chantilly Cream", ""],
    ],
    [
        ["Beet Bloody", "5/1/2018", "Spring", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "OF", "Fresh Shaved Horseradish", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["3", "oz", "Beet Juice", ""],
        ["2", "oz", "Tomato Juice", ""],
        ["2", "oz", "Celery Vodka", ""],
        ["0.5", "oz", "Lemon", ""],
    ],
    [
        ["Nubian Princess", "6/1/2016", "Summer", "Banyan"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "OF", "Nutmeg", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.5", "oz", "Chai Vodka", ""],
        ["0.25", "oz", "Ginger Syrup", ""],
        ["2", "oz", "Chai Syrup", ""],
    ],
    [
        ["Corner Store", "6/1/2017", "Summer", "Gallows"],
        ["Method", "Glass", "Garnish", ""],
        ["Stir", "Coupe", "Cherry", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.5", "oz", "Four Roses Bourbon", ""],
        ["0.75", "oz", "Vanilla Infused Cocchi Americano", ""],
        ["0.5", "oz", "Montenegro", ""],
        ["0.25", "oz", "Luxardo Maraschino", ""],
    ],
    [
        ["Mexicillin", "6/1/2017", "Summer", "Gallows"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "Collins", "Orange Wheel", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.75", "oz", "Mezcal", ""],
        ["0.25", "oz", "Yellow Chartruese", ""],
        ["0.75", "oz", "Honey Syrup", ""],
        ["0.75", "oz", "Lemon", ""],
        ["2", "dash", "Orange Bitters", ""],
        ["1.5", "oz", "Ginger Beer", ""],
    ],
    [
        ["Spy of a Mariner", "2/1/2019", "Summer", "Ursa"],
        ["Method", "Glass", "Garnish", ""],
        ["Stirred", "Martini", "Gibson Cuke, Sidecar", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["2", "oz", "Vodka", ""],
        ["1", "oz", "Gin", ""],
        ["0.75", "oz", "Mineralized Cocchi Americano", ""],
        ["0.5", "oz", "Cuke Brine", ""],
    ],
    [
        ["Machete", "2/1/2019", "Summer", "Ursa"],
        ["Method", "Glass", "Garnish", ""],
        ["Shaken", "Collins", "Tiki", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["*", "oz", "Vodka", ""],
        ["*", "oz", "Yellow Chartruese", ""],
        ["*", "oz", "Leche de Tigre", ""],
        ["*", "oz", "Botanical Syrup", ""],
    ],
    [
        ["Parlor Trick", "2/1/2019", "Summer", "Ursa"],
        ["Method", "Glass", "Garnish", ""],
        ["Shaken", "Coupe", "Black Pepper, Islay Rinse", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["*", "oz", "Del Miguey Vida", ""],
        ["*", "oz", "White Balsamic", ""],
        ["*", "oz", "Vanilla Syrup", ""],
        ["*", "oz", "Lemon Juice", ""],
        ["*", "oz", "EVOO", ""],
        ["*", "oz", "Egg White", ""],
    ],
    [
        ["Polaris", "2/1/2019", "Summer", "Ursa"],
        ["Method", "Glass", "Garnish", ""],
        ["Shaken", "Julep", "Mint Sprig, Fresca Conf.", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["*", "oz", "Cachaca", ""],
        ["*", "oz", "House Americano", ""],
        ["*", "oz", "Fresca Cordial", ""],
        ["*", "oz", "Tonic", ""],
    ],
    [
        ["Velvet Cocktail", "2/1/2019", "Summer", "Ursa"],
        ["Method", "Glass", "Garnish", ""],
        ["Build", "Flute", "Sugar Cube", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1", "oz", "Suntori Toki", ""],
        ["0.375", "oz", "Cassis", ""],
        ["3", "oz", "Sparkling Rose", ""],
        ["2", "dash", "Aromatic Bitters", ""],
        ["4", "dash", "Peychaud Bitters", ""],
    ],
    [
        ["Nitro Guissepe", "2/2/2019", "Summer", "Ursa"],
        ["Method", "Glass", "Garnish", ""],
        ["Build", "NnN", "Picked fruit", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["*", "oz", "Fruited Campari Foam", ""],
        ["*", "oz", "Nitro Sweet Vermouth", ""],
    ],
    [
        ["GinGen", "6/25/2017", "Summer", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Stir", "OF", "Orange Twist", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.5", "oz", "Gin Mare", ""],
        ["0.75", "oz", "St. George Terroir", ""],
        ["0.5", "oz", "Manzinilla Sherry", ""],
        ["0.25", "oz", "Honey Syrup", ""],
        ["2", "dash", "Orange Bitters", ""],
        ["6", "drops", "Scarborough Bitters", ""],
    ],
    [
        ["Cursed Poet", "10/11/2018", "Fall", "TGW"],
        ["Method", "Glass", "Garnish", ""],
        ["Shaken", "Coupe", "Chili Thread, A.C,  EVOO", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1", "oz", "White Rum", ""],
        ["0.5", "oz", "Overproof Dark Rum", ""],
        ["0.5", "oz", "Pineapple Rum", ""],
        ["0.375", "oz", "Lime Juice", ""],
        ["0.375", "oz", "Lemon Juice", ""],
        ["0.375", "oz", "Grenadine", ""],
        ["0.375", "oz", "Cinnamon Syrup", ""],
        ["0.25", "oz", "Frangelico", ""],
        ["1", "oz", "Egg White", ""],
    ],
    [
        ["Calamitie", "6/25/2017", "Summer", "Ursa"],
        ["Method", "Glass", "Garnish", ""],
        ["Stir", "OF", "Orange Oil", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["0.75", "oz", "Bourbon", ""],
        ["0.75", "oz", "Rye", ""],
        ["0.75", "oz", "Campari", ""],
        ["0.5", "oz", "Coffee Liquer", ""],
        ["0.5", "oz", "Milletti Amaro", ""],
        ["1", "dash", "Absinthe", ""],
        ["1", "dash", "Saline", ""],
    ],
    [
        ["Central Coast", "2/6/2019", "Summer", "Ursa"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "Coupe", "Lemon Oil", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1", "oz", "Aged Genever", ""],
        ["1", "oz", "Old Tom Gin", ""],
        ["0.5", "oz", "Boston Bual Madiera", ""],
        ["0.5", "oz", "California Chardonnay ", ""],
        ["0.25", "oz", "Escubac", ""],
    ],
    [
        ["A Little Hug", "2/1/2019", "Winter", "Coppa"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "Coupe", "Aromatic Bitters", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["2", "oz", "Cardamaro", ""],
        ["0.75", "oz", "Lemon Juice", ""],
        ["0.75", "oz", "Ginger Syrup", ""],
        ["1", "bsp", "Fernet Branca", ""],
    ],
    [
        ["Tin Can", "4/25/2019", "Spring", "Benedetto"],
        ["Method", "Glass", "Garnish", ""],
        ["Stir", "Steel Cup", "Lime Swath, Tin Can Flamed", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1", "oz", "Espolon Reposado", ""],
        ["1", "oz", "Appleton Estate Reserve", ""],
        ["0.375", "oz", "Agave Syrup", ""],
        ["5", "dash", "Peychaud's Bitters", ""],
        ["2", "dash", "Angostura Bitters", ""],
    ],
    [
        ["Fuzzy Nectar", "6/1/2019", "Summer", "Coppa"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "Coupe", "Thai Basil EVOO", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["0.75", "oz", "Citrus Vodka", ""],
        ["0.75", "oz", "Jalepeno Tequila", ""],
        ["0.5", "oz", "Bully Boy Amaro", ""],
        ["1.5", "oz", "Stonefruit Shrub", ""],
        ["1", "dash", "Pink Saline", ""],
    ],
    [
        ["Sballata Te Festa", "6/1/2019", "Summer", "Coppa"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "Colins", "Edible Flower", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.5", "oz", "Rock n Rye", ""],
        ["0.5", "oz", "Jelineck Fernet", ""],
        ["1.5", "oz", "Stonefruit Shrub ", ""],
        ["2", "oz", "Soda Water", ""],
    ],
    [
        ["Earl Rooiboson", "2/1/2018", "Winter", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Swizzle", "Collins", "Mint Sprig", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.5", "oz", "Tea Infused Plantation 3 Star", ""],
        ["0.25", "oz", "Damson Plum Liquer", ""],
        ["0.25", "oz", "Amaretto", ""],
        ["0.25", "oz ", "Demerrara", ""],
        ["0.75", "oz", "Acidulated Orange", ""],
        ["1", "dash", "Hopped Grapefruit Bitters", ""],
        ["1", "dash", "Tiki Bitters", ""],
        ["1.5", "oz", "Allagash Tripel", ""],
    ],
    [
        ["Delta Blues", "2/1/2018", "Winter", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Stir", "OF", "Lemon Oil", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.25", "oz", "Rittenhouse Rye", ""],
        ["0.75", "oz", "Pierre Ferrand 1840", ""],
        ["0.375", "oz", "Seasonal Citrus Oleo", ""],
        ["5", "dash", "Peychaud's Bitters", ""],
        ["1", "dash", "Jerry Thomas Bitters", ""],
        ["1", "dash", "Saline", ""],
        ["1", "rinse", "Absinthe", ""],
    ],
    [
        ["Contraband", "2/1/2018", "Winter", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "Coupe", "Orange Oil", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.5", "oz", "Beefeater", ""],
        ["0.5", "oz", "Martell Cognac", ""],
        ["0.75", "oz", "Meyer Lemon Shrub", ""],
        ["0.25", "oz", "Yellow Chartruese", ""],
        ["0.25", "oz", "Honey Syrup", ""],
        ["2", "dash", "Lavender Bitters", ""],
        ["1", "dash", "Saline", ""],
    ],
    [
        ["Blenheim Blush", "2/1/2018", "Winter", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "Coupe", "Orange Oil", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["0.75", "oz", "Crop Meyer Lemon", ""],
        ["0.75", "oz", "Chambord", ""],
        ["0.75", "oz", "Apricot-Cherry Vermouth", ""],
        ["0.75", "oz", "Lemon Juice", ""],
        ["0.25", "oz", "Simple Syrup", ""],
    ],
    [
        ["Full Sap Mule", "5/1/2018", "Spring", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Build", "Mug", "Ginger Powdered Sugar, Mint Sprig", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["2", "oz", "Farmer's Organic", ""],
        ["0.5", "oz", "Maple Ginger Syrup", ""],
        ["0.5", "oz", "Lemon Juice", ""],
        ["2", "oz", "Kombucha ", ""],
    ],
    [
        ["Hop, Skip and a Shrub", "5/1/2018", "Spring", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "Tiki", "Mint Sprig, Orange Wheel", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.5", "oz", "Four Roses Yellow Label", ""],
        ["0.5", "oz", "Strawberry Balsamic Shrub", ""],
        ["0.5", "oz", "Honey Syrup", ""],
        ["0.5", "oz ", "Lemon Juice", ""],
        ["1.5", "oz", "IPA", ""],
    ],
    [
        ["Flying Dutchman", "5/1/2018", "Spring", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "Coupe", "Frozen Watermelon Rind", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["0.75", "oz", "Diep 9 Old Genever", ""],
        ["0.25", "oz", "Tommy Rotter Barrel Aged", ""],
        ["0.5", "oz", "Aperol", ""],
        ["0.5", "oz", "Gran Classico", ""],
        ["1.5", "oz", "Acidified Watermelon", ""],
    ],
    [
        ["A/V Club", "5/1/2018", "Spring", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Stir", "Coupe", "Picked Berry", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.5", "oz", "Rittenhouse Rye", ""],
        ["0.5", "oz", "Elderflower Liqueur", ""],
        ["2", "oz", "Clover Foam", ""],
    ],
    [
        ["The Re-Up", "5/1/2018", "Spring", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "Coupe", "Lemon Oil", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.5", "oz", "Prairie Organic Vodka", ""],
        ["1", "shot", "Espresso", ""],
        ["0.5", "oz", "Amaro Meletti", ""],
        ["0.25", "oz", "Demerrara", ""],
        ["2", "dash ", "Mole Bitters", ""],
    ],
    [
        ["Classic Bloody", "5/1/2018", "Spring", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Build", "Collins", "Mixed Pickles", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["4", "oz", "Bloody Mix", ""],
        ["2", "oz", "Prairie Organic Vodka", ""],
        ["0.75", "oz", "Lemon Juice", ""],
    ],
    [
        ["Elevensies", "5/1/2018", "Spring", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "OF", "Orange Twist", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.5", "oz", "Tea Infused Gin", ""],
        ["0.75", "oz", "Irish Cream", ""],
        ["0.5", "oz", "Galliano", ""],
        ["0.25", "oz", "Amaro del Etna", ""],
    ],
    [
        ["Into the Woods", "11/1/2016", "Fall", "Banyan"],
        ["Method", "Glass", "Garnish", ""],
        ["Stir", "Martini", "Burnt Orange Oil", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["2", "oz", "Rittenhouse Rye", ""],
        ["0.75", "oz", "Punt e Mes", ""],
        ["0.25", "oz", "Burnt Cinnamon Demerrara", ""],
        ["0.25", "oz", "Santa Maria al Monte", ""],
        ["1", "dash", "Celery Bitters", ""],
        ["1", "dash", "Jerry Thomas Bitters", ""],
        ["1", "dash", "Orange Bitters", ""],
        ["1", "dash", "Absinthe", ""],
    ],
    [
        ["Rainbow Wing", "11/1/2016", "Fall", "Banyan"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "Collins", "Edible Flower", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.5", "oz", "Gin", ""],
        ["1.5", "oz", "Pineapple Citrus Shrub", ""],
        ["0.5", "oz", "Simple", ""],
        ["0.5", "oz", "Campari", ""],
    ],
    [
        ["Ursa Major", "2/1/2019", "Summer", "Ursa"],
        ["Method", "Glass", "Garnish", ""],
        ["Stirred", "Martini", "Lemon oil, Saffron EVOO", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["*", "oz", "Rittenhouse Rye", ""],
        ["*", "oz", "Amontillado Sherry", ""],
        ["*", "oz", "House Bitter Vino", ""],
        ["*", "oz", "Absinthe", ""],
    ],
    [
        ["Improvised Gin Cocktail", "2/1/2019", "Summer", "Ursa"],
        ["Method", "Glass", "Garnish", ""],
        ["Stirred", "OF", "Orange + Lemon Twist", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["*", "oz", "Diep 9 Old Genever", ""],
        ["*", "oz", "Diep 9 Young Genever", ""],
        ["*", "oz", "Seasonal Oleo", ""],
        ["*", "oz", "House Aromatic Bitters", ""],
    ],
    [
        ["Space Drop", "2/1/2019", "Summer", "Ursa"],
        ["Method", "Glass", "Garnish", ""],
        ["Shaken", "Coupe", "Edible Flower, Hop Essence", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["*", "oz", "Bacardi 4", ""],
        ["*", "oz", "IPA Honey Syrup", ""],
        ["*", "oz", "Grapefruit Juice", ""],
        ["*", "oz", "Lime Juice", ""],
        ["*", "oz", "St. Germaine", ""],
        ["*", "oz", "IPA", ""],
    ],
    [
        ["Ursa Minor", "2/1/2019", "Summer", "Ursa"],
        ["Method", "Glass", "Garnish", ""],
        ["Stirred", "Martini", "Orange Oil, Saffron EVOO", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["*", "oz", "Lustau Palo Cortado", ""],
        ["*", "oz", "Lustau PX", ""],
        ["*", "oz", "House Americano", ""],
        ["*", "oz", "Luxardo Maraschino", ""],
        ["*", "oz", "House Aromatic Bitters", ""],
        ["*", "oz", "House Orange Bitters", ""],
    ],
    [
        ["Nova", "2/1/2019", "Summer", "Ursa"],
        ["Method", "Glass", "Garnish", ""],
        ["Shaken", "Coupe", "Pink Peppercorn EVOO", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["*", "oz", "Tequila", ""],
        ["*", "oz", "Orange Wine", ""],
        ["*", "oz", "Rhubarb Liquer", ""],
        ["*", "oz", "Acidified OJ", ""],
    ],
    [
        ["The Wagon", "2/2/2019", "Summer", "Ursa"],
        ["Method", "Glass", "Garnish", ""],
        ["Build", "Mug", "Savory Rim", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["*", "oz", "Amaro del Etna", ""],
        ["*", "oz", "Acidified OJ", ""],
        ["*", "oz", "Ginger Beer", ""],
    ],
    [
        ["Casablanca", "10/11/2018", "Fall", "TGW"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "Collins", "None", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["2", "oz", "Bacardi Superior", ""],
        ["0.75", "oz", "Ras el Hanout Honey", ""],
        ["0.5", "oz", "Lemon Juice", ""],
        ["3", "oz", "Tonic Water", ""],
    ],
    [
        ["1903", "10/11/2018", "Fall", "Coppa"],
        ["Method", "Glass", "Garnish", ""],
        ["Blah", "Blah", "Blah", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["0.75", "oz", "Rock n Rye", ""],
        ["0.5", "oz", "Shortpath Pommeau", ""],
        ["0.5", "oz", "St. George Bruto", ""],
        ["0.5", "oz", "Alessio Chinato", ""],
        ["2", "dash", "Mole Bitters", ""],
    ],
    [
        ["Zombie Emoji", "6/25/2017", "Summer", "Cultivar"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "Tiki", "Mint, Islay Rinse", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["0.5", "oz", "Mad River Van. Rum", ""],
        ["0.5", "oz", "Cognac", ""],
        ["0.5", "oz", "Rye", ""],
        ["0.75", "oz", "Lime", ""],
        ["0.75", "oz", "Orgeat", ""],
        ["0.25", "oz", "Green Chartruese", ""],
        ["1", "dash", "absinthe", ""],
    ],
    [
        ["Naturalist Cocktail", "6/25/2017", "Summer", "Ursa"],
        ["Method", "Glass", "Garnish", ""],
        ["Shake", "Coupe", "Burnt Tea Paper", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["0.75", "oz", "Botanical Gin", ""],
        ["0.75", "oz", "Rye", ""],
        ["0.75", "oz", "Grapefruit Juice", ""],
        ["0.5", "oz", "Elderflower Liquer", ""],
        ["0.5", "oz", "Lime Juice", ""],
        ["0.25", "oz", "Simple Syrup", ""],
        ["", "rinse", "Absinthe", ""],
    ],
    [
        ["King of Pop", "8/15/2018", "Summer", "TGW"],
        ["Method", "Glass", "Garnish", ""],
        ["Thrown", "OF", "Lemon Swath", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.5", "oz", "Santa Theresa 1796", ""],
        ["0.75", "oz", "Popcorn Bianco", ""],
        ["0.5", "oz", "Punt e Mes", ""],
        ["0.25", "oz", "Lustau PX", ""],
        ["0.5", "dash ", "Angostura Bitters", ""],
    ],
    [
        ["Spring Orchard", "2/1/2019", "Winter", "Coppa"],
        ["Method", "Glass", "Garnish", ""],
        ["Stir", "OF", "Lemon Oil", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["0.75", "oz", "Bar Hill Gin", ""],
        ["0.75", "oz", "Laird's Apple Jack", ""],
        ["0.75", "oz", "House Apertivo", ""],
        ["0.75", "oz", "Dolin Dry", ""],
        ["1", "dash", "Aromatic Bitters", ""],
        ["", "rinse", "Pastis", ""],
    ],
    [
        ["Soigne Cocktail", "6/1/2019", "Summer", "MIB"],
        ["Method", "Glass", "Garnish", ""],
        ["Shaken", "Stemless", "Grapefruit Swath", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.5", "oz", "Rose", ""],
        ["1", "oz", "Bombay Saphire", ""],
        ["0.5", "oz", "Grapefruit Liquer", ""],
        ["0.5", "handful", "Mint", ""],
        ["0.5", "oz", "Soda Water", ""],
    ],
    [
        ["Zocalo Sq.", "6/1/2019", "Summer", "Coppa"],
        ["Method", "Glass", "Garnish", ""],
        ["Stirred", "Coupe", "Lemon EVOO", ""],
        ["Volume", "Unit", "Ingredients", ""],
        ["1.25", "oz", "Del Maguey Vida", ""],
        ["0.375", "oz", "Luxardo Abano", ""],
        ["0.375", "oz", "Pineapple Liquer", ""],
        ["1", "oz", "Cocoa Nib Pink Vermouth", ""],
        ["1", "dash", "Pink Saline", ""]
    ]
]



var cocktails = new Array();

function cocktailMaker(recipe) {
    var i = 0;
    var j = 0;

    for (i = 0; i < recipe.length; i++) {
        var newDrink = new Object();
        newDrink.id = "number00" + i;
        newDrink.ingredients = new Array();
        cocktails.push(newDrink);

        for (j = 0; j < recipe[i].length; j++) {

            var zero = recipe[i][j][0];
            var one = recipe[i][j][1];
            var two = recipe[i][j][2];
            var three = recipe[i][j][3];

            switch (true) {
                case j == 0:
                    newDrink.name = zero;
                    newDrink.dateCreated = one
                    newDrink.season = two;
                    newDrink.restaurantCreated = three;
                    break;

                case j == 1:
                    break;

                case j == 2:
                    newDrink.method = zero;
                    newDrink.glass = one;
                    newDrink.garnish = two;
                    break;

                case j == 3:
                    break;
                case j > 4:
                    var ingredient = new Object();
                    ingredient.name = two;
                    ingredient.volume = zero;
                    ingredient.unit = one;
                    ingredient.type = three;
                    newDrink.ingredients.push(ingredient);
                    break;

                default:
                    break;
            }


        }

    }
    return cocktails;
}
cocktailMaker(cocktailSpecs);

function cocktailPrinter() {

 
    for (var i = cocktails.length-1; i >=0; i--) {
        var el = cocktails[i];
        var cocktail_id = el.id;
        var cocktailName = el.name;
        var dateCreated = el.dateCreated;
        var season = el.season;
        var restCreated = el.restaurantCreated;
        var method = el.method;
        var glass = el.glass;
        var garnish = el.garnish;

        var div = document.createElement('div');
        div;
        div.setAttribute('class', 'section-wrap cocktail-wrap');
        div.id = cocktail_id;
        div.innerHTML =
            `            <h4 class="cocktail-name">${cocktailName}</h4>
            <div class="cocktail-info">
                <span class="date-created">${dateCreated}</span>
                <span class="season">${season}</span>
                <span class="restaurant-created">${restCreated}</span>
            </div>
            <div class="technique">
                <span class="method">${method}</span>
                <span class="glass">${glass}</span>
                <span class="garnish">${garnish}</span>
            </div>
            <div class="ingredients">
            </div>
        `
        var startDiv = document.querySelector('#about');
        startDiv.insertAdjacentElement('afterend', div);


        for (var j = el.ingredients.length - 1; j >= 0; j--) {

            var ing = el.ingredients[j];
            var volume = ing.volume;
            var unit = ing.unit;
            var ingName = ing.name;
            var ingDiv = document.createElement('div');
            ingDiv.setAttribute('class', 'ingredient-wrap');
            ingDiv.innerHTML =
                `
                    <span class="volume">${volume}</span>
                    <span class="unit">${unit}</span>
                    <span class="ingredient-name">${ingName}</span>
            `;
            var ingredients = document.querySelector('#' + CSS.escape(cocktail_id) + ' .ingredients')
            ingredients.insertAdjacentElement('afterbegin', ingDiv);

        }
    }
}
cocktailPrinter();