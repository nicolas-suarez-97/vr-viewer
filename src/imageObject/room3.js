import image from '../images/room-3.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Room3 = {
    imageUrl: image,
    pitch: 0,
    yaw: -70,
    hotspots: [
        {
            pitch: -1,
            yaw: -125,
            id: HOUSE_SPACES.CORRIDOR
        },
        {
            pitch: -1,
            yaw: -100,
            id: HOUSE_SPACES.ROOM_3_BATHROOM
        },
    ]
}

export default Room3