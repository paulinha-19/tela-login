import React from "react";
import PropTypes from 'prop-types';
import { View, Text, TextInput } from "react-native";
import { styles } from '../LoginForm/styles/index';

export const Input = ({ text, placeholder, placeholderTextColor, value, onChangeText, keyboardType, secureTextEntry, autoCapitalize }) => {
    return (
        <View style={styles.inputArea}>
            <Text style={styles.inputLabel}>{text}</Text>
            <TextInput
                style={styles.inputField}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
            />
        </View>
    )
}

Input.propTypes = {
    text: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    placeholderTextColor: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    autoCapitalize: PropTypes.string
}