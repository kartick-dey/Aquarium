import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Paragraph } from 'react-native-paper';

const FishCategoryCard = (props) => {
    return (
        <View style={styles.Item}>
            <TouchableOpacity style={styles.ItemInner}
                onPress={() => navigation.navigate('Explore')}>
                <View>
                    <Image style={styles.image} source={props.imageUrl}></Image>
                </View>
                <Paragraph style={styles.sectionParagraph}>{props.fishtype}</Paragraph>
                <Text style={styles.sectionCaption}>{props.noOfItems}</Text>
                <FontAwesome name="long-arrow-right" size={16} style={styles.enterIcon}> View</FontAwesome>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    Item: {
        width: '50%',
        height: '70%',
        padding: 5,
    },
    ItemInner: {
        flex: 1,
        elevation: 5,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f1ed'
    },
    imageContanier: {
        // flex: 1
        width: 150,
        height: 100,
        borderRadius: 100,
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 80,
    },
    sectionParagraph: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    enterIcon: {
        marginTop: 10,
        backgroundColor: '#43BFC7',
        paddingRight: 20,
        paddingLeft: 20,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 50
    }
});

export default FishCategoryCard;