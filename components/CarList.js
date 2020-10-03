
import * as React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

import CarListItem from './CarListItem';

export default class CarList extends React.Component {
    state = {
        cars: {},
    };

    componentDidMount() {
        firebase
            .database()
            .ref('/Cars')
            .on('value', snapshot => {
                this.setState({ cars: snapshot.val() });
            });
    }

    handleSelectCar = id => {
        console.log("IDDD",id)
        this.props.navigation.navigate('CarDetails', { id } );
    };

    render() {
        const { cars } = this.state;
        if (!cars) {
            return null
        }
        const carArray = Object.values(cars);
        const carKeys = Object.keys(cars);
        return (
            <View>
                <FlatList
                    data={carArray}
                    keyExtractor={(item, index) => carKeys[index]}
                    renderItem={({ item, index }) => (
                        <CarListItem
                            car={item}
                            id={carKeys[index]}
                            onSelect={this.handleSelectCar}
                        />
                    )}
                />
            </View>
        );
    }
}