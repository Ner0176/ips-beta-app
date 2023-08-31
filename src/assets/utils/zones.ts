import IMapZone from '../../interfaces/map.interface';

const mapZones: IMapZone[] = [
  {
    name: 'mainBedroom',
    UIName: 'Dormitori principal',
    image:
      'https://cdn.vox-cdn.com/thumbor/tVY-LOFPOVmlLQHDvvw-Dhg5G_Q=/0x0:7063x4714/1200x675/filters:focal(2967x1792:4097x2922)/cdn.vox-cdn.com/uploads/chorus_image/image/69498095/GettyImages_1278835086.0.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 4, y: 11, width: 182, height: 133},
      {x: 101, y: 144, width: 30, height: 24},
    ],
  },
  {
    name: 'bathroom',
    UIName: 'Bany',
    image:
      'https://www.thespruce.com/thmb/J53yaSLGsDzkOOTYiXuP52oMJ8I=/2048x0/filters:no_upscale():max_bytes(150000):strip_icc()/modern-bathroom-design-ideas-4129371-hero-723611e159bb4a518fc4253b9175eba8.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 4, y: 168, width: 83, height: 117},
      {x: 87, y: 193, width: 3, height: 26},
    ],
  },
  {
    name: 'smallBedroom',
    UIName: 'Dormitori petit',
    image:
      'data:image/jpeg;base64,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',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 4, y: 328, width: 89, height: 160},
      {x: 27, y: 324, width: 29, height: 4},
    ],
  },
  {
    name: 'gamingRoom',
    UIName: 'Habitació gaming',
    image:
      'https://www.gelighting.com/sites/default/files/styles/small/public/image/2023-04/13_GameRoom_multicolor_1_A-darker.jpg?itok=PNrgB6aM',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 97, y: 358, width: 76, height: 130},
      {x: 97, y: 328, width: 34, height: 22},
      {x: 97, y: 350, width: 45, height: 8},
      {x: 103, y: 324, width: 28, height: 4},
    ],
  },
  {
    name: 'aisle',
    UIName: 'Passadís',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 90, y: 168, width: 41, height: 120},
      {x: 4, y: 288, width: 127, height: 36},
    ],
  },
];

export const mallBase: IMapZone[] = [
  {
    name: 'Zara',
    UIName: 'Zara',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 2, y: 49, width: 50, height: 34},
      {x: 52, y: 62, width: 4, height: 12},
    ],
  },
  {
    name: 'H&M',
    UIName: 'H&M',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 3, y: 87, width: 49, height: 51},
      {x: 52, y: 107, width: 4, height: 12},
    ],
  },
  {
    name: 'River Island',
    UIName: 'River Island',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 3, y: 141, width: 49, height: 57},
      {x: 52, y: 167, width: 4, height: 12},
    ],
  },
  {
    name: 'Topshop',
    UIName: 'Topshop',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 3, y: 202, width: 49, height: 50},
      {x: 52, y: 222, width: 4, height: 12},
    ],
  },
  {
    name: 'Mango',
    UIName: 'Mango',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 3, y: 256, width: 49, height: 56},
      {x: 52, y: 279, width: 4, height: 12},
    ],
  },
  {
    name: 'Primark',
    UIName: 'Primark',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 3, y: 316, width: 49, height: 47},
      {x: 52, y: 337, width: 4, height: 12},
    ],
  },
  {
    name: 'Next',
    UIName: 'Next',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 3, y: 367, width: 49, height: 47},
      {x: 52, y: 384, width: 4, height: 12},
    ],
  },
  {
    name: 'Marks and Spence',
    UIName: 'Marks and Spence',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 115, y: 441, width: 108, height: 52},
      {x: 133, y: 437, width: 12, height: 4},
    ],
  },
  {
    name: 'New Look',
    UIName: 'New Look',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 72, y: 308, width: 76, height: 56},
      {x: 101, y: 364, width: 12, height: 4},
    ],
  },
  {
    name: 'Vans',
    UIName: 'Vans',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 72, y: 217, width: 76, height: 56},
      {x: 100, y: 273, width: 12, height: 4},
      {x: 148, y: 240, width: 5, height: 12},
    ],
  },
  {
    name: 'Mediamarkt',
    UIName: 'Mediamarkt',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 72, y: 138, width: 76, height: 56},
      {x: 72, y: 91, width: 31, height: 47},
      {x: 100, y: 194, width: 12, height: 4},
    ],
  },
  {
    name: 'Decathlon',
    UIName: 'Decathlon',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 176, y: 272, width: 95, height: 105},
      {x: 202, y: 268, width: 12, height: 4},
      {x: 216, y: 377, width: 12, height: 4},
    ],
  },
  {
    name: 'Tiger',
    UIName: 'Tiger',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 177, y: 183, width: 61, height: 69},
      {x: 203, y: 252, width: 12, height: 4},
      {x: 172, y: 211, width: 5, height: 12},
    ],
  },
  {
    name: 'Game',
    UIName: 'Game',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 177, y: 147, width: 61, height: 33},
      {x: 200, y: 143, width: 12, height: 4},
    ],
  },
  {
    name: 'La boutique del gelatto',
    UIName: 'La boutique del gelatto',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 241, y: 147, width: 31, height: 33},
      {x: 272, y: 157, width: 4, height: 12},
    ],
  },
  {
    name: 'Tous',
    UIName: 'Tous',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 241, y: 183, width: 31, height: 69},
      {x: 272, y: 194, width: 4, height: 12},
      {x: 272, y: 231, width: 4, height: 12},
    ],
  },
  {
    name: 'La pizza',
    UIName: 'La pizza',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 294, y: 149, width: 53, height: 85},
      {x: 290, y: 163, width: 4, height: 12},
      {x: 290, y: 204, width: 4, height: 12},
    ],
  },
  {
    name: 'Prestto',
    UIName: 'Prestto',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 294, y: 237, width: 54, height: 125},
      {x: 290, y: 249, width: 4, height: 12},
      {x: 290, y: 292, width: 4, height: 12},
      {x: 290, y: 337, width: 4, height: 12},
    ],
  },
  {
    name: 'Porco Rosso',
    UIName: 'Porco Rosso',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 294, y: 365, width: 54, height: 82},
      {x: 290, y: 378, width: 4 , height: 12},
      {x: 290, y: 419, width: 4, height: 12},
    ],
  },
  {
    name: 'Epicure',
    UIName: 'Epicure',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 129, y: 32, width: 42, height: 60},
      {x: 139, y: 92, width: 12, height: 4},
    ],
  },
  {
    name: 'Restaurant Frantzén',
    UIName: 'Restaurant Frantzén',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 174, y: 59, width: 61, height: 33},
      {x: 199, y: 92, width: 12, height: 4},
    ],
  },
  {
    name: 'Osteriana Francescana',
    UIName: 'Osteriana Francescana',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 237, y: 59, width: 64, height: 33},
      {x: 262, y: 92, width: 12, height: 4},
    ],
  },
  {
    name: 'Bathroom1_P0',
    UIName: 'Baños Sur - P0',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 3, y: 417, width: 49, height: 37},
      {x: 52, y: 430, width: 4, height: 12},
    ],
  },
  {
    name: 'Bathroom2_P0',
    UIName: 'Baños Norte - P0',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 89, y: 32, width: 37, height: 39},
      {x: 100, y: 71, width: 12, height: 4},
    ],
  },
  {
    name: 'Elevators_P0',
    UIName: 'Ascensores - P0',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 304, y: 59, width: 43, height: 37},
    ],
  },
  {
    name: 'Streets_P0',
    UIName: 'Calles - P0',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 56, y: 368, width: 97, height: 69},
      {x: 153, y: 96, width: 19, height: 341},
      {x: 276, y: 96, width: 14, height: 341},
      {x: 172, y: 381, width: 104, height: 56},
      {x: 227, y: 437, width: 63, height: 13},
      {x: 56, y: 437, width: 55, height: 20},
      {x: 56, y: 46, width: 12, height: 322},
      {x: 68, y: 46, width: 18, height: 41},
      {x: 86, y: 75, width: 39, height: 12},
      {x: 107, y: 87, width: 18, height: 47},
      {x: 125, y: 96, width: 28, height: 38},
      {x: 290, y: 96, width: 58, height: 48},
      {x: 68, y: 198, width: 85, height: 15},
      {x: 68, y: 277, width: 85, height: 27},
      {x: 172, y: 256, width: 104, height: 12},
      
    ],
  },
  {
    name: 'Stairs1_P0',
    UIName: 'Escaleras Norte - P0',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 4, y: 7, width: 82, height: 39},
    ],
  },
  {
    name: 'Stairs2_P0',
    UIName: 'Escaleras Sur - P0',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 4, y: 457, width: 108, height: 36},
    ],
  },
  {
    name: 'MechStairs1_P0',
    UIName: 'Escaleras mecánicas Norte - P0',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 172, y: 96, width: 104, height: 47},
    ],
  },
  {
    name: 'MechStairs2_P0',
    UIName: 'Escaleras mecánicas Sur - P0',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 226, y: 450, width: 122, height: 43},
    ],
  },
];

export const mallFirst: IMapZone[] = [
  {
    name: 'Stairs1_P1',
    UIName: 'Escaleras Norte - P1',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 4, y: 7, width: 82, height: 39},
    ],
  },
  {
    name: 'Stairs2_P1',
    UIName: 'Escaleras Sur - P1',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 4, y: 457, width: 107, height: 36},
    ],
  },
  {
    name: 'MechStairs1_P1',
    UIName: 'Escaleras mecánicas Norte - P1',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 174, y: 95, width: 100, height: 51},
    ],
  },
  {
    name: 'MechStairs2_P1',
    UIName: 'Escaleras mecánicas Sur - P1',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 227, y: 450, width: 121, height: 43},
    ],
  },
  {
    name: 'Bathroom1_P1',
    UIName: 'Baños Sur - P1',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 3, y: 417, width: 50, height: 37},
      {x: 53, y: 430, width: 3, height: 12},
    ],
  },
  {
    name: 'Bathroom2_P1',
    UIName: 'Baños Norte - P1',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 89, y: 32, width: 38, height: 40},
      {x: 100, y: 72, width: 12, height: 3},
    ],
  },
  {
    name: 'Elevators_P1',
    UIName: 'Ascensores - P1',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 304, y: 59, width: 43, height: 36},
    ],
  },
  {
    name: 'Aficine',
    UIName: 'Aficine',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 116, y: 150, width: 230, height: 55},
      {x: 265, y: 205, width: 81, height: 242},
      {x: 111, y: 172, width: 5, height: 12},
    ],
  },
  {
    name: 'Kiabi',
    UIName: 'Kiabi',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 114, y: 447, width: 109, height: 46},
      {x: 162, y: 443, width: 12, height: 4},
    ],
  },{
    name: 'Decimas',
    UIName: 'Decimas',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 3, y: 49, width: 49, height: 89},
      {x: 52, y: 62, width: 4, height: 12},
      {x: 52, y: 107, width: 4, height: 12},

    ],
  },
  {
    name: 'Inside',
    UIName: 'Inside',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 3, y: 141, width: 49, height: 112},
      {x: 52, y: 167, width: 4, height: 12},
      {x: 52, y: 222, width: 4, height: 12},
    ],
  },
  {
    name: 'Springfield',
    UIName: 'Springfield',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 3, y: 256, width: 49, height: 158},
      {x: 52, y: 279, width: 4, height: 12},
      {x: 52, y: 384, width: 4, height: 12},
    ],
  },
  {
    name: 'Primichi',
    UIName: 'Primichi',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 129, y: 32, width: 43, height: 60},
      {x: 139, y: 92, width: 12, height: 3},
    ],
  },
  {
    name: 'Kaotiko',
    UIName: 'Kaotiko',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 174, y: 59, width: 127, height: 33},
      {x: 199, y: 92, width: 12, height: 3},
      {x: 262, y: 92, width: 12, height: 3},

    ],
  },
  {
    name: "McDonald's",
    UIName: "McDonald's",
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 115, y: 236, width: 53, height: 81},
      {x: 111, y: 272, width: 4, height: 12},

    ],
  },
  {
    name: 'KFC',
    UIName: 'KFC',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 115, y: 321, width: 53, height: 82},
      {x: 111, y: 354, width: 4, height: 12},

    ],
  },
  {
    name: 'Burguer King',
    UIName: 'Burguer King',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 171, y: 236, width: 52, height: 81},
      {x: 223, y: 272, width: 4, height: 12},

    ],
  },
  {
    name: 'Taco bell',
    UIName: 'Taco bell',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 171, y: 321, width: 52, height: 82},
      {x: 223, y: 353, width: 4, height: 12},

    ],
  },
  {
    name: 'Streets_P1',
    UIName: 'Calles - P1',
    image:
      'https://i.pinimg.com/originals/a6/c2/1f/a6c21fda37def47219640a982b3fbdff.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur pulvinar nisi, ac lacinia erat varius non. Donec sit amet arcu id est elementum molestie ac in neque. Aenean rutrum non est ut efficitur. Curabitur feugiat est leo, eu egestas elit sodales non. Ut porttitor dui nibh, rutrum mattis nibh dignissim sed.',
    area: [
      {x: 56, y: 146, width: 55, height: 311},
      {x: 227, y: 209, width: 34, height: 241},
      {x: 111, y: 209, width: 116, height: 23},
      {x: 111, y: 407, width: 116, height: 36},
      {x: 274, y: 95, width: 73, height: 51},
      {x: 56, y: 46, width: 30, height: 29},
      {x: 56, y: 75, width: 69, height: 20},
      {x: 56, y: 95, width: 118, height: 51},
    ],
  },
]

export default mapZones;
