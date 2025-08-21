import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import Google from './assets/Google.png';
import Facebook from './assets/Facebook.png';

export default function AccessScreen({ navigation }) {
    //visibilidade da checkbox
    const [isChecked, setIsChecked] = useState(false);
    return (
        <View style={styles.container}>

            {/* Botão de voltar */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <AntDesign name="left" size={28} color="#43d38d" />
            </TouchableOpacity>

            {/* Título e subtítulo */}
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
            {/*Input - Senha*/}
            <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Senha</Text>

                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        keyboardType="default"
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity>
                        <Ionicons name="eye-outline" size={28} color="#525252ff" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.checkboxContainer}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
                    <Text style={styles.checkboxLabel}>Lembrar senha</Text>
                </View>
                <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
            </View>

            {/*Botões*/}
            <View style={styles.buttonsRow}>
                <TouchableOpacity
                    style={styles.button} onPress={() => navigation.navigate('Access')}>

                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.buttonText2}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            {/*Continue com*/}
            <View style={styles.divisorContainer}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>Ou continue com</Text>
                <View style={styles.dividerLine} />
            </View>

            {/*Google & Facebook*/}
            <View style={styles.imagesRow}>
                <TouchableOpacity>
                    <Image source={Google} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={Facebook} style={styles.icon} />
                </TouchableOpacity>
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
    backButton: {
        position: 'absolute',

    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: -4,
        marginTop: 40,
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
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingEnd: 14,
        backgroundColor: '#E6E6FA',
        height: 70,
        width: '100%',
  },
    //checkbox
    checkboxContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
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

    //botões
    button: {
        backgroundColor: '#43d38d',
        paddingVertical: 19,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#43d38d',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    button2: {
        backgroundColor: '#fffff',
        paddingVertical: 19,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#43d38d',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    buttonText2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#6d6d6d',
        textAlign: 'center',
    },
    buttonsRow: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        gap: 10,
        marginTop: 30,
    },

    //continue com
    divisorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 30,
        marginBottom: 20,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#D3D3D3',
    },
    dividerText: {
        fontSize: 14,
        color: '#6d6d6d',
        marginHorizontal: 10,
    },

    //Imagens
    imagesRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 13,
        gap: 46,
    },



});
