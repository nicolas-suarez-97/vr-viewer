import image from '../images/room-2-bathroom.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Room2Bathroom = {
    imageUrl: image,
    pitch: 0,
    yaw: 30,
    hotspots: [
        {
            pitch: -1,
            yaw: 190,
            id: HOUSE_SPACES.ROOM_2
        },
    ]
}

export default Room2Bathroom