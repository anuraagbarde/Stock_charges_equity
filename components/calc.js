import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
// import {Icon} from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input, Text } from 'react-native-elements';

/**
 * @param num The number to round
 * @param precision The number of decimal places to preserve
 */
function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
}

const Calc = () => {
    const [buy, setBuy] = useState(0);
    const [quantity, setQuantity] = useState(0);

    // calculations
    
    // 
    let emptySellDisplay = (0);
    let sellDisplay = emptySellDisplay;
    let tempSell = roundUp((1002463.3525 * buy + 18882053.12 / quantity) / 1000000,2);
    let tempSellDisplay = (
        tempSell
    );
    if (tempSell === Infinity) {
        sellDisplay = emptySellDisplay;
    }
    else {
        sellDisplay = roundUp(tempSellDisplay,2);
    };

    return (
        <View style={{ padding: 10 }} >
            <View style={{ padding: 10 }}>
                <Input
                    leftIcon={{ type: 'font-awesome', name: 'inr' }}
                    placeholder="Buy"
                    returnKeyType="done"
                    keyboardType='number-pad'
                    onChangeText={buy => setBuy(buy)}
                />

                <Input
                    leftIcon={{ type: 'font-awesome', name: 'database' }}
                    placeholder="Quantity"
                    returnKeyType="done"
                    keyboardType='number-pad'
                    onChangeText={quantity => setQuantity(quantity)}
                />
            </View>
            <View style={{ padding: 10 }}>

                <Text h3>
                    <Text h4>Buy x Quantity = </Text>{buy * quantity}
                </Text>

                <Text h3>
                    <Text h4>Min-sell-price-per-stock = </Text>{sellDisplay}
                </Text>

                <Text h3>
                    <Text h4>Min-extra-price-per-stock = </Text>{roundUp(sellDisplay - buy,2)}
                </Text>

                <Text h3>
                    <Text h4>Min-total-price = </Text>{roundUp(sellDisplay*quantity ,2)}
                </Text>
            </View>
            <View>
                <Text style={{ padding: 10 }}>CNC Delivery 15%STGC DP GST STT Trnsc Stamp</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    }
});

export default Calc;