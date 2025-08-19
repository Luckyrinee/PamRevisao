import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function AccessScreen({ navigation }) {
    //visibilidade da checkbox
    const [isChecked, setIsChecked] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Acesse</Text>
            <Text style={styles.subtitle}>com e-mail e senha</Text>


            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>E-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu e-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    keyboardType="default"
                    secureTextEntry={true}
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.checkboxContainer}>
                <TouchableOpacity style={styles.checkbox} onPress={() => setIsChecked(!isChecked)}>
                    {isChecked && <FontAwesome name="check" size={16} color="#000" />}
                </TouchableOpacity>
                <Text style={styles.checkboxLabel}>Lembrar senha</Text>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: -4,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 5,
    },

    inputGroup: {
        width: '100%',
        marginTop: 20,
    },
    inputLabel: {
        fontSize: 14,
        marginBottom: 5,
    },
    input: {
        height: 70,
        width: '100%',
        backgroundColor: '#E6E6FA',
        borderColor: '#E6E6FA',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#rgba(172, 172, 185, 1)',
    },

    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    checkbox: {
        width: 25,
        height: 25,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#43d38d',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    checkboxLabel: {
        fontSize: 14,
    },



});
