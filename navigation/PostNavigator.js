import React, { useState } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

// Imports HomeStackScreens

import FishCategoriesScreen from '../screens/PostStackScreens/FishCategoriesScreen';
import MarketPlace from '../screens/PostStackScreens/MarketPlace';

const PostStack = createStackNavigator();

const PostStackScreen = ({ navigation }) => {
    const [search, setSearch] = useState(null);
    const [isSearch, setIsSearch] = useState(false);
    const handleSearchValue = () => {
        setSearch(search)
    };
    const onOpenSearch = () => {
        setIsSearch(true);
    }
    const onSearch = () => {
        setIsSearch(false)
    }
    return (
        <PostStack.Navigator>
            <PostStack.Screen name="Fish_Category_Market" component={FishCategoriesScreen}
                options={{
                    headerTitle: "Select your order",
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'GrenzeGotisch-Medium'
                    },
                    headerLeft: () => (
                        <FontAwesome name="bars" size={26}
                            style={{ marginLeft: 25 }} onPress={() => navigation.openDrawer()}></FontAwesome>
                    )
                }}></PostStack.Screen>
            <PostStack.Screen name="Market_Place" component={MarketPlace}
                options={{
                    title: isSearch ? null : 'Market Place',
                    headerLeft: () => (
                        <FontAwesome name="bars" size={26}
                            style={{ marginLeft: 25 }} onPress={() => navigation.openDrawer()}></FontAwesome>
                    ),
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'GrenzeGotisch-Medium'
                    },
                    headerRight: () => (
                        isSearch ?
                            <Animatable.View animation="fadeIn" style={styles.searchBoxContainer}>
                                <TextInput placeholder="Search a Location..."
                                    onChangeText={() => handleSearchValue()}
                                    style={styles.searchBox}></TextInput>
                                <TouchableOpacity onPress={() => onSearch()}>
                                    <FontAwesome style={styles.searchIcon} name="search" size={20} color="#43BFC7"></FontAwesome>
                                </TouchableOpacity>
                            </Animatable.View> : <TouchableOpacity onPress={() => onOpenSearch()}>
                                <FontAwesome name="search" size={20} style={{ marginRight: 20 }}></FontAwesome>
                            </TouchableOpacity>
                    )
                }}></PostStack.Screen>
        </PostStack.Navigator>
    );
}

const styles = StyleSheet.create({
    searchBoxContainer: {
        margin: 5,
        height: 35,
        flexDirection: 'row',
        padding: 2,
        alignItems: 'center',
        backgroundColor: '#ccc',
        borderRadius: 50,
    },
    searchBox: {
        padding: 0,
        margin: 0,
        width: 300,
        height: 30,
        fontSize: 15,
        marginLeft: 10,
        // backgroundColor: 'red'
    },
    searchIcon: {
        marginRight: 15

    }
});

export default PostStackScreen;