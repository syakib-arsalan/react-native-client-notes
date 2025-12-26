import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../modules/home/screens/HomeScreen';
import { AccountScreen } from '../modules/account/screens/AccountScreen';
import { Create } from '../modules/create/screens/Create';
import Feather from '@react-native-vector-icons/feather';
import { View, StyleSheet } from 'react-native';



const tab = createBottomTabNavigator();
export const TabNavigation = () => {
    return (
        <tab.Navigator  screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Create') {
            return <View style={styles.buttonCreate}>
              <Feather name='plus' size={30} color={'white'} />
            </View>;
          } else if (route.name === 'Account') {
            iconName = 'user';
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1383DD',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
            <tab.Screen name={'Home'} component={HomeScreen} />
            <tab.Screen name={'Create'} component={Create} options={{  tabBarLabel: () => null }} />
            <tab.Screen name={'Account'} component={AccountScreen} />
        </tab.Navigator>
    );
}

const styles = StyleSheet.create({
  buttonCreate: {
    backgroundColor: '#1383DD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 38,
    height: 38,
    marginTop: 10,
  }
});