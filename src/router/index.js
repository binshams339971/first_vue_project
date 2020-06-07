import Inventory from '../components/inventory'
import ItemDetails from '../components/itemDetails'

export const routes = [
    {
        path: '',
        component: Inventory
    },
    {
        path: '/item/:id', 
        component: ItemDetails
    }
]