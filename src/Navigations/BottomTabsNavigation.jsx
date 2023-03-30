import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Screen/Home'
import ContFormRegister from "../Screen/ContFormRegister";

const Tab = createBottomTabNavigator()

function BottomTabsNavigation(){
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='mangas' component={ContFormRegister} />
        </Tab.Navigator>
    )
}

export default BottomTabsNavigation