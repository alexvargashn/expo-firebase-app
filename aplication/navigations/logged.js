import React from 'react';
import RestaurantsScreen from '../screens/Restaurants/Restaurants';
import AddRestaurantScreen from '../screens/Restaurants/AddRestaurant';
import LoggoutScreen from '../screens/loggout';

import {createDrawerNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const navigationOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'rgba(200, 38, 74, 1)'
        },
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            fontSize: 20,
            color: '#fff',
            fontWeight: 'bold'
        }
    }
};

const leftIcon = (navigation, icon) => <Icon 
    name = {icon}
    style = {{marginLeft: 20}}
    size = {20}
    color = "white"
    onPress = {() => navigation.openDrawer()}
/>;

const rightIcon = (navigation, icon) => <Icon 
    name = {icon}
    style = {{marginLeft: 20}}
    size = {30}
    color = "white"
    onPress = {() => navigation.navigate('ListRestaurants')}
/>;

const restaurantsScreenStack = createStackNavigator(
    {
        ListRestaurants: {
            screen: RestaurantsScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Restaurantes',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name = "home"
                        size = {24}
                        style = {{color: tintColor}}
                    />
                ),
                headerLeft: leftIcon(navigation, 'bars')
            })
        },
        AddRestaurant: {
            screen: AddRestaurantScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Añadir Restaurante',
                headerRight: rightIcon(navigation, 'home'),
                headerLeft: leftIcon(navigation, 'bars')
            })
        }
    },
    navigationOptions
);

const LoggoutScreenStack = createStackNavigator(
    {
        LoggoutScreen: {
            screen: LoggoutScreen,
            navigationOptions: ({navigation}) => ({
                title: 'Cerrar sesión',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name = "sign-out"
                        size = {24}
                        style = {{color: tintColor}}
                    />
                )
            })
        }
    }
);

const AppDrawerNavigator = createDrawerNavigator (
    {
        RestaurantsScreen: {
            screen: restaurantsScreenStack,
            navigationOptions: ({navigation}) => ({
                title: 'Restaurantes',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name = "home"
                        size = {24}
                        style = {{color: tintColor}}
                    />
                ),
                headerLeft: leftIcon(navigation, 'bars')
            })
        },
        LoggoutScreen: {
            screen: LoggoutScreenStack,
            navigationOptions: ({navigation}) => ({
                title: 'Cerrar Sesión',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name = "sign-out"
                        size = {24}
                        style = {{color: tintColor}}
                    />
                ),
                headerLeft: leftIcon(navigation, 'bars')
            })
        }
    },
    {
        drawerBackgroundColor: 'rgba(128, 35, 60, 0.7)',
        contentOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: 'transparent',
            inactiveTintColor: 'white',
            itemsContainerStyle: {
                marginVertical: 0
            }
        },
        defaultNavigationOptions: navigationOptions
    },
);

export default createAppContainer(AppDrawerNavigator);