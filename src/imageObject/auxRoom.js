import image from '../images/aux-room.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const AuxRoom = {
    imageUrl: image,
    pitch: 0,
    yaw: -30,
    hotspots: [
        {
            pitch: -1,
            yaw: -80,
            id: HOUSE_SPACES.KITCHEN
        },
        {
            pitch: -1,
            yaw: -60,
            id: HOUSE_SPACES.LAUNDRY
        },
    ]
}

export default AuxRoom