import { React, useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { InputBotao } from "../assets/funcBotao";

export default function Botao({ texto, setInput }){
    var categoria = "Outros";
    if (texto == "<") {
        categoria = "Deletar";
    }
    const categorias = {Deletar: "#FF924F", Outros: "#00911F"}
    const estilos = styleFunction(categorias[categoria])
    return(
        <TouchableOpacity style={estilos.botao} onPress={InputBotao(texto, setInput)}>
            <Text>{texto}</Text>
        </TouchableOpacity>
    );
}

const styleFunction = (cor) => StyleSheet.create({
    div: {
        flex: 1,
    },
    botao: {
        flex: 3,
        backgroundColor: cor,
        borderRadius: 45,
        width: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    texto: {
        color: "#FFF",
        fontSize: 12,
    },
})
    
