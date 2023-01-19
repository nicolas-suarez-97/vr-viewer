import image from '../images/garden-3.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Garden3 = {
    imageUrl: image,
    pitch: 0,
    yaw: 0,
    hotspots: [
        {
            pitch: -1,
            yaw: -1,
            id: HOUSE_SPACES.GARDEN_2
        },
        {
            pitch: -1,
            yaw: -60,
            id: HOUSE_SPACES.GARDEN_1
        },
        {
            pitch: -1,
            yaw: -50,
            id: HOUSE_SPACES.GARDEN_4
        },
        {
            pitch: -1,
            yaw: -100,
            id: HOUSE_SPACES.MAIN_ROOM
        },
    ]
}

export default Garden3