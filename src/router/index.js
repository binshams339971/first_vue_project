import Inventory from '../components/inventory'
import ItemDetails from '../components/itemDetails'
import Login from '../components/login'
import Registration from '../components/registration'

export const routes = [
    {
        path: '',
        component: Inventory
    },
    {
        path: '/item/:id', 
        component: ItemDetails
    },
    {
        path: '/user/login', 
        component: Login
    },
    {
        path: '/user/register', 
        component: Registration
    }
]