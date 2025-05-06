import glacierPreviewImage from 'src/assets/glacierPreviewImage.jpg'
import yellowstonePreviewImage from 'src/assets/yellowstonePreviewImage.jpg'
import yosemitePreviewImage from 'src/assets/yosemitePreviewImage.jpg'  
import grandCanyonPreviewImage from 'src/assets/grandCanyonPreviewImage.jpg'
import grandTetonPreviewImage from 'src/assets/grandTetonPreviewImage.jpg'
import zionPreviewImage from 'src/assets/zionPreviewImage.jpg'
import kenaiFjordsPreviewImage from 'src/assets/kenaiFjordsPreviewImage.jpg'
import bryceCanyonPreviewImage from 'src/assets/bryceCanyonPreviewImage.jpg'
import archesPreviewImage from 'src/assets/archesPreviewImage.jpg'
import olympicPreviewImage from 'src/assets/olympicPreviewImage.jpg'
import sequoiaKingsCanyonPreviewImage from 'src/assets/sequoiaKingsCanyonPreviewImage.jpg'
import denaliPreviewImage from 'src/assets/denaliPreviewImage.jpg'
import redwoodPreviewImage from 'src/assets/redwoodPreviewImage.jpg'
import canyonlandsPreviewImage from 'src/assets/canyonlandsPreviewImage.jpg'
import havaiiVolcanoesPreviewImage from 'src/assets/havaiiVolcanoesPreviewImage.jpg'
import rockyMountainsPreviewImage from 'src/assets/rockyMountainsPreviewImage.jpg'
import mountRainierPreviewImage from 'src/assets/mountRainierPreviewImage.jpg'
import greatSmokyMountainsPreviewImage from 'src/assets/greatSmokyMountainsPreviewImage.jpg'
import acadiaPreviewImage from 'src/assets/acadiaPreviewImage.jpg'
import mammothCavePreviewImage from 'src/assets/mammothCavePreviewImage.jpg'
import ozarkScenicRiverwaysPreviewImage from 'src/assets/ozarkScenicRiverwaysPreviewImage.jpg'

const glacierNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-113.8018798828125, 48.68370757165363]
    },
    properties: {
        name: 'Glacier National Park',
        designation: 'National Park',
        color: '#cfff92',
        parkCode: 'glac',
        image: glacierPreviewImage.src
    }
}

const yellowstoneNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-110.54443359375, 44.59829048984011]
    },
    properties: {
        name: 'Yellowstone National Park',
        designation: 'National Park',
        color: '#cfff92',
        parkCode: 'yell',
        image: yellowstonePreviewImage.src
    }
}

const yosemiteNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-119.55596923828125, 37.848832506474025]
    },
    properties: {
        name: 'Yosemite National Park',
        designation: 'National Park',
        color: '#cfff92',
        parkCode: 'yose',
        image: yosemitePreviewImage.src
    }
}

const grandCanyonNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-112.1209716796875, 36.00022956178002]
    },
    properties: {
        name: 'Grand Canyon National Park',
        designation: 'National Park',
        color: '#cfff92',
        parkCode: 'grca',
        image: grandCanyonPreviewImage.src
    }
}

const grandTetonNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-110.7037353515625, 43.818674855453196]
    },
    properties: {
        name: 'Grand Teton National Park',
        designation: 'National Park',
        color: '#cfff92',
        parkCode: 'grte',
        image: grandTetonPreviewImage.src
    }
}

const zionNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-113.02597045898438, 37.29809042443851]
    },
    properties: {
        name: 'Zion National Park',
        designation: 'National Park',
        color: '#cfff92',
        parkCode: 'zion',
        image: zionPreviewImage.src
    }
}

const kenaiFjordsNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-150.106201171875, 59.817208851478796]
    },
    properties: {
        name: 'Kenai Fjords National Park',
        designation: 'National Park',
        color: '#cfff92',
        parkCode: 'kefj',
        image: kenaiFjordsPreviewImage.src
    }
}

const bryceCanyonNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-112.181396484375, 37.583765767186236]
    },
    properties: {
        name: 'Bryce Canyon National Park',
        designation: 'National Park',
        color: '#cfff92',
        parkCode: 'brca',
        image: bryceCanyonPreviewImage.src
    }
}

const archesNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-109.58587646484375, 38.72194763292808]
    },
    properties: {
        name: 'Arches National Park',
        designation: 'National Park',
        color: '#cfff92',
        parkCode: 'arch',
        image: archesPreviewImage.src
    }
}

const olympicNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-123.6676025390625, 47.80208652719497]
    },
    properties: {
        name: 'Olympic National Park',
        designation: 'National Park',
        color: '#cfff92',
        parkCode: 'olym',
        image: olympicPreviewImage.src
    }
}

const sequoiaKingsCanyonNationalParksFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-118.58779907226562, 36.71246724338626]
    },
    properties: {
        name: 'Sequoia & Kings Canyon National Parks',
        designation: 'National Park',
        color: '#cfff92',
        parkCode: 'seki',
        image:  sequoiaKingsCanyonPreviewImage.src
    }
}

const denaliNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-151.051025390625, 63.297876396219294]
    },
    properties: {
        name: 'Denali National Park & Preserve',
        designation: "National Park & Preserve",
        color: '#cfff92',
        parkCode: 'dena',
        image:  denaliPreviewImage.src
    }
}

const redwoodNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-124.03289794921875, 41.37268648186466]
    },
    properties: {
        name: 'Redwood National & State Parks',
        designation: "National & State Parks",
        color: '#cfff92',
        parkCode: 'redw',
        image:  redwoodPreviewImage.src
    }
}

const canyonlandsNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-109.8797607421875, 38.24573023613533]
    },
    properties: {
        name: 'Canyonlands National Park',
        designation: "National Park",
        color: '#cfff92',
        parkCode: 'cany',
        image:  canyonlandsPreviewImage.src
    }
}

const hawaiiVolcanoesNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-155.47027587890625, 19.335765976432228]
    },
    properties: {
        name: 'Hawai’i Volcanoes National Park',
        designation: "National Park",
        color: '#cfff92',
        parkCode: 'havo',
        image:  havaiiVolcanoesPreviewImage.src
    }
}

const rockyMountainsNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-105.69671630859375, 40.355963256404124]
    },
    properties: {
        name: 'Rocky Mountains National Park',
        designation: "National Park",
        color: '#cfff92',
        parkCode: 'romo',
        image:  rockyMountainsPreviewImage.src
    }
}

const mountRainierNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-121.70654296875, 46.86019101567027]
    },
    properties: {
        name: 'Mount Rainier National Park',
        designation: "National Park",
        color: '#cfff92',
        parkCode: 'mora',
        image:  mountRainierPreviewImage.src
    }
}

const greatSmokyMountainsNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-83.50845336914062, 35.60148556537354]
    },
    properties: {
        name: 'Great Smoky Mountains National Park',
        designation: "National Park",
        color: '#cfff92',
        parkCode: 'grsm',
        image:  greatSmokyMountainsPreviewImage.src
    }
}

const acadiaNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-68.24775695800781, 44.4092593975669]
    },
    properties: {
        name: 'Acadia National Park',
        designation: "National Park",
        color: '#cfff92',
        parkCode: 'acad',
        image:  acadiaPreviewImage.src
    }
}

const mammothCaveNationalParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-86.13006591796875, 37.19751842118353]
    },
    properties: {
        name: 'Mammoth Cave National Park',
        designation: "National Park",
        color: '#cfff92',
        parkCode: 'mamm',
        image:  mammothCavePreviewImage.src
    }
}

const ozarkNationalScenicRiverwaysParkFeature = {
    type: 'Feature' as const,
    geometry: {
        type: 'Point' as const,
        coordinates: [-91.25724792480469, 37.13951928536274]
    },
    properties: {
        name: 'Ozark National Scenic Riverways',
        designation: "National Scenic Riverways",
        color: '#cfff92',
        parkCode: 'ozar',
        image:  ozarkScenicRiverwaysPreviewImage.src
    }
}

export const features = [
    glacierNationalParkFeature,
    yellowstoneNationalParkFeature,
    yosemiteNationalParkFeature,
    grandCanyonNationalParkFeature,
    grandTetonNationalParkFeature,
    zionNationalParkFeature,
    kenaiFjordsNationalParkFeature,
    bryceCanyonNationalParkFeature,
    archesNationalParkFeature,
    olympicNationalParkFeature,
    sequoiaKingsCanyonNationalParksFeature,
    denaliNationalParkFeature,
    redwoodNationalParkFeature,
    canyonlandsNationalParkFeature,
    hawaiiVolcanoesNationalParkFeature,
    rockyMountainsNationalParkFeature,
    mountRainierNationalParkFeature,
    greatSmokyMountainsNationalParkFeature,
    acadiaNationalParkFeature,
    mammothCaveNationalParkFeature,
    ozarkNationalScenicRiverwaysParkFeature
]