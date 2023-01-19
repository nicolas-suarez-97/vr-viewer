import image from '../images/dinning.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Dinning = {
    imageUrl: image,
    pitch: 0,
    yaw: 180,
    hotspots: [
        {
            pitch: -1,
            yaw: -1,
            id: HOUSE_SPACES.GARDEN_5
        },
        {
            pitch: -1,
            yaw: -137,
            id: HOUSE_SPACES.KITCHEN
        },
        {
            pitch: -1,
            yaw: 175,
            id: HOUSE_SPACES.ENTRANCE
        },
        {
            pitch: -1,
            yaw: 163,
            id: HOUSE_SPACES.TV_ROOM
        },
        {
            pitch: -10,
            yaw: 130,
            id: HOUSE_SPACES.LIVING
        },
    ]
}

export default Dinning