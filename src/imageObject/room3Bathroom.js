import image from '../images/room-3-bathroom.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Room3Bathroom = {
    imageUrl: image,
    pitch: 0,
    yaw: -60,
    hotspots: [
        {
            pitch: -1,
            yaw: 150,
            id: HOUSE_SPACES.ROOM_3
        },
    ]
}

export default Room3Bathroom