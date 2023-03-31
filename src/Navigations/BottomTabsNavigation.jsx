import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Screen/Home'
import ContFormLogin from "../Screen/ContFormLogin";
import ContFormRegister from "../Screen/ContFormRegister";
import Mangas from "../Screen/Mangas";

const Tab = createBottomTabNavigator()

function BottomTabsNavigation(){
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='LogIn' component={ContFormLogin} />
            <Tab.Screen name='register' component={ContFormRegister} />
            <Tab.Screen name='Mangas' component={Mangas} />
        </Tab.Navigator>
    )
}

export default BottomTabsNavigation