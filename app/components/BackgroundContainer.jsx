import React from 'react';
import { View, StyleSheet } from 'react-native';

const BackgroundContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.backgroundView} />
            <View style={styles.innerContainer}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundView: {
        marginTop: 110,
        backgroundColor: '#121213',
        flex: 1,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 45,
    },
    container: {
        backgroundColor: '#1C1C1E',
        flex: 1,
        overflow: 'hidden',
    },
    innerContainer: {
        flex: 1,
        //  paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
    },
});

export default BackgroundContainer;
