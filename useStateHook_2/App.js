import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

export default function App() {
  const [diceRolls, setDiceRolls] = useState([5, 6, 7])

  return (
    <View>
      <Button
        title="Roll dice!"
        onPress={() => {
          setDiceRolls(diceRolls.map(roll => roll + 2))
        }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}
    </View>
  )
}

