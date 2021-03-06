let quotesArray = [
    {quote: 'After first episode of nose bleeding, it is advisable to avoid nose picking in other to avoid reoccurence.', 
     image: 'img/nosebleeding.jpeg',
     url: 'https://lifesavers.com.ng/2020/07/24/home-remedy-for-nose-bleeding/'},
     {quote: 'Fatigue, weight loss, fever, bloating, nagging cough are considered as early signs of cancer.', 
     image: 'img/quote2.jpeg',
     url: 'https://lifesavers.com.ng/2020/07/24/5-early-signs-for-cancer/'},
     {quote: 'Fainting occurs as a result of temporary reduction in blood supply to the brain, watering the victim like plant is of no use, what should be done?', 
     image: 'img/quote3.jpeg',
     url: 'https://www.mayoclinic.org/first-aid/first-aid-fainting/basics/art-20056606#:~:text=Position%20the%20person%20on%20his,the%20person%20up%20too%20quickly.'},
     {quote: 'The first thing to do in the case an heart attack is to call your local emergency number.', 
     image: 'img/quote4.jpeg', 
     url: 'https://www.mayoclinic.org/first-aid/first-aid-heart-attack/basics/art-20056679#:~:text=Chew%20and%20swallow%20an%20aspirin,you%2C%20take%20it%20as%20directed.'},
     {quote: 'Lying a snakebite victim on the left side with mouth turned down prevents upper airway from been obtructed by vomit or tongue muscle paralysis.', 
     image: 'img/quote5.jpeg',
     url: 'https://www.who.int/snakebites/treatment/en/'},
     {quote: 'Chocking cuts off oxygen to the brain, therefore first aid should be given as quickly as possible', 
     image: 'img/quote6.jpeg',
     url: 'https://www.mayoclinic.org/first-aid/first-aid-choking/basics/art-20056637'},
     {quote: 'The universal sign for chocking is hands clutched to the throat.', 
     image: 'img/quote7.jpeg', 
     url: 'https://www.mayoclinic.org/first-aid/first-aid-choking/basics/art-20056637'},
     {quote: 'Insufficient physical activity is one of the leading risk factors for death worldwide.', 
     image: 'img/quote8.jpeg', 
     url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity'},
     {quote: 'Overweight is a BMI greater than or equal to 25 while obesity is a BMI greater than or equal to 30', 
     image: 'img/quote9.jpeg',
     url: 'https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight'},
     {quote: "More than 80% of the world's adolescent population is insufficiently physically active.", 
     image: 'img/quote10.jpeg', 
     url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity'},
     {quote: "Car crashes are one of the most common causes of spinal cord injuries. Wear a seat belt every time you drive or ride in a car.", 
     image: 'img/quote11.jpeg',
     url: 'https://www.mayoclinic.org/diseases-conditions/spinal-cord-injury/symptoms-causes/syc-20377890'},
     {quote: "Tobacco kills more than 8 million people each year out of which around 1.2 million are the result of non-smokers being exposed to second-hand smoke.", 
     image: 'img/quote12.jpeg',
     url: 'https://www.who.int/news-room/fact-sheets/detail/tobacco'},
     {quote: "In a typical shisha session (about 1 hour), a shisha smoker can inhale the same amount of toxins as a cigarette smoker consuming over 100 cigarettes.", 
     image: 'img/quote13.jpeg',
     url: 'https://www.bhf.org.uk/informationsupport/risk-factors/smoking/shisha'},
     {quote: "Alcohol consumption causes death and disability relatively early in life. In age group 20–39 years, about 13.5% of total deaths are alcohol-attributable.", 
     image: 'img/quote14.jpeg',
     url: 'https://www.who.int/news-room/fact-sheets/detail/alcohol'},
     {quote: "Daily free sugar intake of below 5% of total energy intake for children and adults or roughly 25 grams (6 teaspoons) per day is of great health benefits.", 
     image: 'img/quote15.jpeg',
     url: 'https://https://www.who.int/mediacentre/news/releases/2015/sugar-guideline/en/'},
     {quote: "You need to be well hydrated for your cells to work properly", 
     image: 'img/quote16.jpeg',
     url: 'https://www.onhealth.com/content/1/how_much_water_to_drink#:~:text=You%20need%20to%20be%20well,in%20a%20water%2Drich%20environment.'},
     {quote: "Poor sleep and sleep disorders tamper with heart health, increasing our risk of heart attack and stroke", 
     image: 'img/quote17.jpeg',
     url: 'https://globalnews.ca/news/2054861/why-the-who-is-warning-about-poor-sleep-and-heart-health/'},
     {quote: "Quality antenatal care is necessary as it helps to reduce the risk of stillbirths and pregnancy complications, also gives women a positive pregnancy experience.", 
     image: 'img/quote18.jpeg',
     url: 'https://www.who.int/reproductivehealth/publications/maternal_perinatal_health/ANC_infographics/en'},
     {quote: "The average Nigerian is not bothered about sickle cell so long it doesnt affect him or her.", 
     image: 'img/quote19.jpeg',
     url: 'https://bit.ly/LivingWithSC'},
     {quote: "Sickle cell disease is reportedly the most common genetic disease in the world.", 
     image: 'img/quote20.jpeg',
     url: 'https://splicitblog.wordpress.com/2020/06/19/know-your-genotype'},
]

function randomQuote () {
    let quote = quotesArray [Math.floor(Math.random() * quotesArray.length)]

    document.getElementById('img').src = quote.image
    document.getElementById('quote').innerHTML = quote.quote
    document.getElementById('submit-link').href = quote.url
}

    setInterval (randomQuote, 6000);