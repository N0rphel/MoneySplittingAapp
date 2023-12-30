import React, { useState } from "react";
import { Button, Text } from "react-native";

const Counting = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <Text>You clicked {count} times</Text>
            <Button
                onPress={() => setCount(count+1)}
                title="click me!"
            />
        </>
    )
}

export default Counting;