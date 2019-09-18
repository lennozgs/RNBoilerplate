import React from 'react';

export const Colors = {
    /*
    primary: '#343434',
    secondary: '#fafafa',
    */
    secondary: '#343434',
    primary: '#fafafa',
};

export const Fonts = {
    regular: {
        fontFamily: 'Roboto-Regular'
    },
    bold: {
        fontFamily: 'Roboto-Bold'
    },
    light: {
        fontFamily: 'Roboto-Light'
    },
    thin: {
        fontFamily: 'Roboto-Thin'
    },
    medium: {
        fontFamily: 'Roboto-Medium'
    },
};

export const Global = {
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainerStyle: {
        flexGrow: 1,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: Colors.primary
    },
};