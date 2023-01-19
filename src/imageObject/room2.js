import image from '../images/room-2.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Room2 = {
    imageUrl: image,
    pitch: 0,
    yaw: 160,
    hotspots: [
        {
            pitch: -1,
            yaw: 135,
            id: HOUSE_SPACES.CORRIDOR
        },
        {
            pitch: -1,
            yaw: 105,
            id: HOUSE_SPACES.ROOM_2_BATHROOM
        },
    ]
}

export default Room2