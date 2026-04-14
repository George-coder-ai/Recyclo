import React from 'react';
import { View, Text, Button, ProgressBar, StyleSheet } from 'react-native';

const DashboardScreen = () => {
    const totalRewardPoints = 500; // Example data
    const binFillLevel = 75; // Example data 75%
    const co2Stats = { total: '120kg', today: '5kg' }; // Example stats
    const notifications = ['Plastic bin is full.', 'New rewards available!']; // Example notifications

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Dashboard</Text>
            <Text>Total Reward Points: {totalRewardPoints}</Text>
            <Text>Bin Fill Level:</Text>
            <ProgressBar style={styles.progressBar} progress={binFillLevel / 100} />
            <Text style={styles.binFillPercentage}>{binFillLevel}%</Text>
            <Button title="Quick Insert Plastic" onPress={() => { /* Handle insert plastic action */ }} />
            <Text>CO2 Stats:</Text>
            <Text>Total CO2 Reduced: {co2Stats.total}</Text>
            <Text>CO2 Reduced Today: {co2Stats.today}</Text>
            <Text>Notifications:</Text>
            {notifications.map((notification, index) => (
                <Text key={index}>- {notification}</Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    progressBar: {
        height: 20,
        marginVertical: 10,
    },
    binFillPercentage: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default DashboardScreen;