import image from '../images/garden-5.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Garden5 = {
    imageUrl: image,
    pitch: 0,
    yaw: 180,
    hotspots: [
        {
            pitch: 13,
            yaw: 172,
            id: HOUSE_SPACES.TERRACE
        },
        {
            pitch: -1,
            yaw: 165,
            id: HOUSE_SPACES.LIVING
        },
        {
            pitch: -1,
            yaw: -140,
            id: HOUSE_SPACES.GARAGE
        },
        {
            pitch: -1,
            yaw: 130,
            id: HOUSE_SPACES.GARDEN_4
        },
        {
            pitch: -1,
            yaw: -1,
            id: HOUSE_SPACES.PARK
        },
        {
            pitch: -1,
            yaw: -178,
            id: HOUSE_SPACES.KITCHEN
        },
    ]
}

export default Garden5