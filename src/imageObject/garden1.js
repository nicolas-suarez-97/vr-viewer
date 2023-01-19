import image from '../images/garden-1.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Garden1 = {
    imageUrl: image,
    pitch: 0,
    yaw: 180,
    hotspots: [
        {
            pitch: -1,
            yaw: -25,
            id: HOUSE_SPACES.TV_ROOM
        },
        {
            pitch: -1,
            yaw: 100,
            id: HOUSE_SPACES.GARDEN_4
        },
        {
            pitch: -1,
            yaw: 180,
            id: HOUSE_SPACES.GARDEN_2
        },
        {
            pitch: -5,
            yaw: -120,
            id: HOUSE_SPACES.GARDEN_3
        },
    ]
}

export default Garden1