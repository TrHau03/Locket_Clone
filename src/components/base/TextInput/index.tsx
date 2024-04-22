import { View, Text, ViewStyle, StyleProp, TextInput } from 'react-native'
import React from 'react'
import { Input, InputProps, useTheme } from '@rneui/themed'

interface BaseTextInputProps extends InputProps {
    style?: StyleProp<ViewStyle>
}

const BaseTextInput: React.FC<BaseTextInputProps> = (props) => {
    const { theme } = useTheme()
    return (
        <Input
            {...props}
            inputStyle={{
                borderWidth: 1,
                backgroundColor: theme.colors.grey5,
                marginHorizontal: theme.spacing.md,
                paddingHorizontal: theme.spacing.md,
                paddingVertical: theme.spacing.sm,
                borderRadius: 18,
            }}
            placeholder="Type here..."
            inputContainerStyle={{ borderBottomWidth: 0 }}
            keyboardType="default"
        />
    )
}

export default BaseTextInput
