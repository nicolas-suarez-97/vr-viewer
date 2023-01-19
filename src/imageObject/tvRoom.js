import image from '../images/tv-room.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const TvRoom = {
    imageUrl: image,
    pitch: 0,
    yaw: 0,
    hotspots: [
        {
            pitch: -1,
            yaw: -1,
            id: HOUSE_SPACES.GARDEN_1
        },
        {
            pitch: -1,
            yaw: 70,
            id: HOUSE_SPACES.CORRIDOR
        },
        {
            pitch: -1,
            yaw: -95,
            id: HOUSE_SPACES.ENTRANCE
        },
    ]
}

export default TvRoom