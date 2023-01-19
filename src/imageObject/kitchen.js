import image from '../images/kitchen.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Kitchen = {
    imageUrl: image,
    pitch: 0,
    yaw: -30,
    hotspots: [
        {
            pitch: -1,
            yaw: 50,
            id: HOUSE_SPACES.GARDEN_5
        },
        {
            pitch: -1,
            yaw: 80,
            id: HOUSE_SPACES.DINNING
        },
        {
            pitch: -1,
            yaw: 160,
            id: HOUSE_SPACES.ENTRANCE
        },
        {
            pitch: -1,
            yaw: -100,
            id: HOUSE_SPACES.LAUNDRY
        },
    ]
}

export default Kitchen