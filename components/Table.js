import React from 'react';
import { View, Text } from 'react-native';

const Table = ({ title, width, right }) => {
    return (
        <View
            style={{
                paddingVertical: 10,
                width: width,
                backgroundColor: '#218c74',
                borderRightWidth: right ? null : 1,
                borderRightColor: right ? null : 'white',
                alignItems: 'center',
            }}
        >
            <Text style={{ color: 'white' }}>{title}</Text>
        </View>
    );
};

export default Table;
