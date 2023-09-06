import React from "react";

export function InputBotao({ input, setInput, inputAtual }) {
    if (input == "⌫") {
        var novoInput = inputAtual.slice(0, -1);
    }
    else{
        var novoInput = inputAtual;
        novoInput += input;
    }
    setInput(novoInput);
    return novoInput;
}