export const data = [
    { name: 'Kartick Dey', img: require('../assets/images/fish-spawn.jpg'), posted: '5 Day ago' },
    { name: 'Gobinda Bauri', img: require('../assets/images/fish.jpeg'), posted: '5 Day ago' },
    { name: 'Manu Low', img: require('../assets/images/fish.png'), posted: '1 hr ago' },
    { name: 'Subho Dey', img: require('../assets/images/fish-seed.jpeg'), posted: '10 Day ago' },
    { name: 'Laltu Paramanik', img: require('../assets/images/fish.jpeg'), posted: '6 Day ago' },
    { name: 'Kalu Bauri', img: require('../assets/images/aquarium-fish.jpg'), posted: '11 Day ago' },
    { name: 'Papon Low', img: require('../assets/images/fish.jpeg'), posted: '2 Day ago' },
];

export const notifications = [
    { name: 'Kartick Dey', subject: 'Posted a fish of Katla', posted: '5 Day ago', icon: 'rss-square' },
    { name: 'Gobinda Bauri', subject: 'Started to follow you', posted: '5 Day ago', icon: 'rss' },
    { name: 'Manu Low', subject: 'Posted a seed of Magur', posted: '1 hr ago', icon: 'rss-square' },
    { name: 'Subho Dey', subject: 'tried to contact you', posted: '10 Day ago', icon: 'address-book-o' },
    { name: 'Laltu Paramanik', subject: 'Posted a aquarium electric fish', posted: '6 Day ago', icon: 'rss-square' },
    { name: 'Kalu Bauri', subject: 'Posted a fish spwan of Glasscurp', posted: '11 Day ago', icon: 'rss-square' },
    { name: 'Papon Low', subject: 'Posted a fish seed of Katla', posted: '2 Day ago', icon: 'rss-square' },
    { name: 'Kartik De', subject: 'Posted a fish of Katla', posted: '5 Day ago', icon: 'rss-square' },
    { name: 'Gobinda', subject: 'Started to follow you', posted: '5 Day ago', icon: 'rss-square' },
    { name: 'Somenath Low', subject: 'Posted a seed of Magur', posted: '1 hr ago', icon: 'rss-square' },
    { name: 'Susha Bagdi', subject: 'Started to follow you', posted: '10 Day ago', icon: 'rss-square' },
    { name: 'Tapas Dey', subject: 'Posted a aquarium electric fish', posted: '6 Day ago', icon: 'rss-square' },
];

export const fishCategory = [
    new FishCategoryModel('Fish Spawn', require('../assets/images/fish-spawn.jpg'), '235 Items'),
    new FishCategoryModel('Fish Seed', require('../assets/images/fish-seed.jpeg'), '458 Items'),
    new FishCategoryModel('Fish', require('../assets/images/fish.jpg'), '819 Items'),
    new FishCategoryModel('Aquarium Fish', require('../assets/images/aquarium-fish.jpg'), '235 Items'),
]