/*
import * as React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native';
import firebase from 'firebase';
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'flex-start' },
    row: {
        margin: 5,
        padding: 5,
        flexDirection: 'row',
    },
    label: { width: 100, fontWeight: 'bold' },
    value: { flex: 1 },
});

export default class CarDetails extends React.Component {

    state = {car:null};

    componentDidMount() {
        // Vi læser ID fra navigations paramteren og loader bilen i fra databaen når komponenten initieres
        const id = this.props.navigation.getParam('id');
        this.loadCar(id);
    }

    // Her er funktionen som sørger for at sætte stien og finde det pågældende objekt i stien + id nummer
    // "asds" --> nu "callback" er en callback som man kan kalde lige hvad man gerne vil
    // Uræ'en findes i firebase
    loadCar = id => {
        firebase
            .database()
            .ref('/Cars/'+id)
            .on('value', callback => {
                this.setState({car: callback.val() });
            });
    };

    handleEdit = () => {
        // Vi navigerer videre til EditCar skærmen og sender ID med
        const { navigation } = this.props;
        const id = navigation.getParam('id');
        navigation.navigate('EditCar', { id });
    };


    confirmDelete = () => {
        if(Platform.OS ==='ios' || Platform.OS ==='android') {
            Alert.alert('Are you sure?', 'Do you want to delete the car?', [
                { text: 'Cancel', style: 'cancel' },
                // Vi bruger this.handleDelete som eventHandler til onPress
                { text: 'Delete', style: 'destructive', onPress: this.handleDelete },
            ]);
        } else {
            if(confirm('Er du sikker på du vil slette denne bil?')){
                this.handleDelete()
            }
        }
    };


    // Vi sletter den aktuelle bil
    handleDelete = () => {
        const { navigation } = this.props;
        const id = navigation.getParam('id');
        try {
            firebase
                .database()
                // Vi sætter bilens ID ind i stien
                .ref(`/Cars/${id}`)
                // Og fjerner data fra den sti
                .remove();
            // Og går tilbage når det er udført
            navigation.goBack();
        } catch (error) {
            Alert.alert(error.message);
        }

    };








    // Render funktionen som står for at vise hvad der er på pågældende screen
    render() {

        // Her er det en form for fejlhåndtering. Dvs hvis der ikke er noget objekt, så kommer No data teksten frem
        const {car} = this.state;
        if (!car) {
            return <Text>No Data</Text>
        }

        return (
            <View style={styles.container}>

                <Button title="Edit" onPress={this.handleEdit} />
                <Button title="Delete" onPress={this.confirmDelete} />

                <View style={styles.row}>
                    <Text style={styles.label}>Brand</Text>
                    <Text style={styles.value}>{car.brand}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Model</Text>
                    <Text style={styles.value}>{car.model}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Year</Text>
                    <Text style={styles.value}>{car.year}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>License Plate</Text>
                    <Text style={styles.value}>{car.licensePlate}</Text>
                </View>
            </View>
        );
    }
}

 */

/*
------------------------------------------ FRA EIGIL GITHUB ------------------------------------------
 */

import * as React from 'react';
import { View, Text, Platform, FlatList, StyleSheet, Button, Alert } from 'react-native';
import firebase from 'firebase';
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'flex-start' },
    row: {
        margin: 5,
        padding: 5,
        flexDirection: 'row',
    },
    label: { width: 100, fontWeight: 'bold' },
    value: { flex: 1 },
});

export default class CarDetails extends React.Component {
    state = { car: null };

    componentDidMount() {
        // Vi udlæser ID fra navgation parametre og loader bilen når komponenten starter
        const id = this.props.navigation.getParam('id');
        this.loadCar(id);
    }

    loadCar = id => {
        firebase
            .database()
            // ID fra funktionens argument sættes ind i stien vi læser fra
            .ref('/Cars/'+id)
            .on('value', asds => {
                this.setState({ car: asds.val() });
            });
    };

    handleEdit = () => {
        // Vi navigerer videre til EditCar skærmen og sender ID med
        const { navigation } = this.props;
        const id = navigation.getParam('id');
        navigation.navigate('EditCar', { id });
    };

    confirmDelete = () => {
        if(Platform.OS ==='ios' || Platform.OS ==='android'){
            Alert.alert('Are you sure?', 'Do you want to delete the car?', [
                { text: 'Cancel', style: 'cancel' },
                // Vi bruger this.handleDelete som eventHandler til onPress
                { text: 'Delete', style: 'destructive', onPress: this.handleDelete },
            ]);
        } else {
            if(confirm('Er du sikker på du vil slette denne bil?')){
                this.handleDelete()
            }
        }
    };

    // Vi spørger brugeren om han er sikker

    // Vi sletter den aktuelle bil
    handleDelete = () => {
        const { navigation } = this.props;
        const id = navigation.getParam('id');
        try {
            firebase
                .database()
                // Vi sætter bilens ID ind i stien
                .ref(`/Cars/${id}`)
                // Og fjerner data fra den sti
                .remove();
            // Og går tilbage når det er udført
            navigation.goBack();
        } catch (error) {
            Alert.alert(error.message);
        }

    };

    render() {
        const { car } = this.state;
        if (!car) {
            return <Text>No data</Text>;
        }
        return (
            <View style={styles.container}>
                <Button title="Edit" onPress={this.handleEdit} />
                <Button title="Delete" onPress={this.confirmDelete} />
                <View style={styles.row}>
                    <Text style={styles.label}>Brand</Text>
                    <Text style={styles.value}>{car.brand}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Model</Text>
                    <Text style={styles.value}>{car.model}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Year</Text>
                    <Text style={styles.value}>{car.year}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>License Plate</Text>
                    <Text style={styles.value}>{car.licensePlate}</Text>
                </View>
            </View>
        );
    }
}



