import image from '../images/garage.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Garage = {
    imageUrl: image,
    pitch: 0,
    yaw: 40,
    hotspots: [
        {
            pitch: -1,
            yaw: 130,
            id: HOUSE_SPACES.FRONT_1
        },
        {
            pitch: -1,
            yaw: -1,
            id: HOUSE_SPACES.GARDEN_5
        },
        {
            pitch: -1,
            yaw: 40,
            id: HOUSE_SPACES.LAUNDRY
        },
        {
            pitch: -1,
            yaw: -120,
            id: HOUSE_SPACES.PARK
        },
    ]
}

export default Garage