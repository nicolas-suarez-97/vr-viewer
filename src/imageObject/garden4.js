import image from '../images/garden-4.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Garden4 = {
    imageUrl: image,
    pitch: 0,
    yaw: 180,
    hotspots: [
        {
            pitch: 18,
            yaw: -170,
            id: HOUSE_SPACES.TERRACE
        },
        {
            pitch: -1,
            yaw: 145,
            id: HOUSE_SPACES.LIVING
        },
        {
            pitch: -1,
            yaw: -170,
            id: HOUSE_SPACES.DINNING
        },
        {
            pitch: -1,
            yaw: -155,
            id: HOUSE_SPACES.GARAGE
        },
        {
            pitch: -1,
            yaw: 100,
            id: HOUSE_SPACES.GARDEN_2
        },
        {
            pitch: -1,
            yaw: -100,
            id: HOUSE_SPACES.GARDEN_5
        },
    ]
}

export default Garden4