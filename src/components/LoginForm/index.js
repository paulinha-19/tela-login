import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Input } from "../LoginInput/index";
import { styles } from "./styles/index";

export const LoginForm = () => {
    const [emailField, setEmailField] = useState("");
    const [passwordField, setPasswordField] = useState("");
    const handleLoginButton = () => {
        if (!emailField || !passwordField) {
            alert("Preencha todos os campos");
            setEmailField("");
            setPasswordField("");
        } else {
            alert(`Email: ${emailField}`)
            alert(`Senha: ${passwordField}`);
            setEmailField("")
            setPasswordField("")
        }
    }
    const handleForgetButton = () => {
        alert("Esqueci minha senha")
    }
    const handleSignUpButton = () => {
        alert("Cadastrar")
    }
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.h1}>Login</Text>
                <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo</Text>
                <Input
                    text="Email"
                    placeholder="Digite seu email"
                    placeholderTextColor="#999"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Input
                    text="Senha"
                    placeholder="*******"
                    placeholderTextColor="#999"
                    value={passwordField}
                    onChangeText={t => setPasswordField(t)}
                    secureTextEntry={true}
                />
                <View style={styles.aditionals}>
                    <TouchableOpacity style={styles.forgotPasswordArea} onPress={handleForgetButton}>
                        <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleLoginButton} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <View style={styles.signUpArea}>
                    <Text style={styles.signUpQuestion}>Não tem uma conta?</Text>
                    <TouchableOpacity onPress={handleSignUpButton}>
                        <Text style={styles.signUpBtn}> Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerArea}>
                    <Text style={styles.footerText}>Criado por Paula Soares</Text>
                </View>
            </View>
        </ScrollView>
    )
}



