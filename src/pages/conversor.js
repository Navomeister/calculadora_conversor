import Botao from "../components/botao";
import { React, useEffect, useState } from "react";
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Conversor(){
    const [input, setInput] = useState("a");
    const [output, setOutput] = useState("b");
    const [convertido, setConvertido] = useState("t$1");
    const [conversor, setConversor] = useState("t$3");

    const digitos = [
        {id: "1", digito: "7"},
        {id: "2", digito: "8"},
        {id: "3", digito: "9"},
        {id: "4", digito: "4"},
        {id: "5", digito: "5"},
        {id: "6", digito: "6"},
        {id: "7", digito: "1"},
        {id: "8", digito: "2"},
        {id: "9", digito: "3"},
        {id: "10", digito: "0"},
        {id: "11", digito: "<"}
    ];

    return(
        <SafeAreaView>

            {/* área onde estão os componentes de escolha da conversão */}
            <View style={styles.fundoInput}>

                {/* seletor de valor do input */}
                <Picker
                    selectedValue={convertido}
                    onValueChange={(itemValue) => setConvertido(itemValue)}
                >
                    <Picker.Item label="teste1" value="t$1"/>
                    <Picker.Item label="teste2" value="t$2"/>
                    <Picker.Item label="teste3" value="t$3"/>
                </Picker>

                {/* retorno visual do input */}
                <Text style={styles.input}>${input}</Text>
                <Text style={styles.unidade}>${convertido}</Text>

                {/* seletor de valor do output */}
                <Picker
                    selectedValue={conversor}
                    onValueChange={(itemValue) => setConversor(itemValue)}
                >
                    <Picker.Item label="teste1" value="t$1"/>
                    <Picker.Item label="teste2" value="t$2"/>
                    <Picker.Item label="teste3" value="t$3"/>
                </Picker>

                {/* retorno visual do output */}
                <Text style={styles.input}>${output}</Text>
                <Text style={styles.unidade}>${conversor}</Text>
            </View>

            {/* área onde estão os botões para input */}
            <View style={styles.fundoBotoes}>
                <FlatList
                    data={digitos}
                    renderItem={({item}) => (
                        <Botao texto={item.digito} setInput={setInput}/>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fundoInput: {
        backgroundColor: "#17171C",
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#D9D9D9",
        padding: 3,
        color: "#FFF",
    },
    unidade: {
        color: "#FFF",
    },
    fundoBotoes: {
        backgroundColor: "#17171C",
    },

})