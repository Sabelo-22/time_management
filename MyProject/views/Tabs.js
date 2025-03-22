import DashboardView from "./DashbaordView";
import CalendarView from "./CalendarView";
import SettingsView from "./SettingView";
import ProfileView from "./ProfileView";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import FloatingActionBtn from "../components/Floating Action Button";

export const tabs = [
    {
        options:{
            headerShown:false,
            title:'',
            tabBarIcon:({focused})=>{
                return focused ? <MaterialIcons name="ssid-chart" size={24} color="rgba(36, 39, 96, 1)" /> : <MaterialIcons name="ssid-chart" size={24} color="black" />;
            }
        },

        name:"Home",
        component:DashboardView,
    },{
        options:{
            headerShown:false,
            title:'',
            tabBarIcon:({focused})=>{
                return focused ? <MaterialCommunityIcons name="calendar-edit" size={24} color="rgba(36, 39, 96, 1)" />: <MaterialCommunityIcons name="calendar-edit" size={24} color="black"/>;
            }
        },
        name:"Calendar",
        component:CalendarView,
    },{
        options:{
            headerShown:false,
            title:'',
            tabBarButton:({})=><FloatingActionBtn />
        },
        name:"FAB",
        component:DashboardView,
    },
    {
        options:{
            headerShown:false,
            title:'',
            tabBarIcon:({focused})=>{
                return focused ? <Feather name="settings" size={24} color="rgba(36, 39, 96, 1)" />:<Feather name="settings" size={24} color="black"/>;
            }
        },
        name:"Settings",
        component:SettingsView,
    },{
        options:{
            headerShown:false,
            title:'',
            tabBarIcon:({focused})=>{
                return focused?<Fontisto name="male" size={24} color="rgba(36, 39, 96, 1)" />:<Fontisto name="male" size={24} color="black"/>;
            }
        },
        name:"Profile",
        component:ProfileView,
    }
];