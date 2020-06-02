import React from 'react';
import { View, Text } from 'react-native';

const TableBottom = ({ title, width, left }) => {
    return (
        <View
            style={{
                paddingVertical: 10,
                width: width,
                backgroundColor: 'white',
                borderRightWidth: 1,
                borderBottomWidth: 1,
                borderBottomColor: '#218c74',
                borderRightColor: '#218c74',
                alignItems: 'center',
                borderLeftWidth: left ? 1 : null,
                borderLeftColor: left ? '#218c74' : null,
            }}
        >
            <Text style={{ color: 'black' }}>{title}</Text>
        </View>
    );
};

export default TableBottom;
