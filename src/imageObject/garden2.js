import image from '../images/garden-2.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Garden2 = {
    imageUrl: image,
    pitch: 0,
    yaw: 180,
    hotspots: [
        {
            pitch: -1,
            yaw: 180,
            id: HOUSE_SPACES.GARDEN_1
        },
        {
            pitch: -1,
            yaw: 170,
            id: HOUSE_SPACES.TV_ROOM
        },
        {
            pitch: -1,
            yaw: 100,
            id: HOUSE_SPACES.GARDEN_3
        },
        {
            pitch: -1,
            yaw: -130,
            id: HOUSE_SPACES.GARDEN_4
        },
        {
            pitch: -1,
            yaw: -143,
            id: HOUSE_SPACES.LIVING
        },
        {
            pitch: -1,
            yaw: 129,
            id: HOUSE_SPACES.MAIN_ROOM
        },
    ]
}

export default Garden2