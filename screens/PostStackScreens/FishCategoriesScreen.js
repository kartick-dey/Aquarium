import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import FishCategoryCard from '../../components/FishCategoryCard';

const FishCategoriesScreen = ({ navigation }) => {
    const fishCategory = useSelector(state => state.fishCategory.fishCategory);
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Select Your Order</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={fishCategory}
                    keyExtractor={(item, index) => item.fishType}
                    renderItem={(item) => (
                        <FishCategoryCard
                            fishType={item.fishType}
                            imageUrl={item.imageUrl}
                            noOfItems={item.noOfItems}></FishCategoryCard>
                    )}></FlatList>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    titleContainer: {
        marginTop: 50,
        height: '5%',
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Galada-Regular'
    },
    content: {
        height: '55%',
        backgroundColor: '#ffff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,

    },
});

export default FishCategoriesScreen;