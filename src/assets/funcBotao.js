import React from "react";

export function InputBotao({ input, setInput }) {
    if (input == "<") {
        var novoInput = setInput.slice(0, -1);
    }
    else{
        var novoInput = setInput;
        novoInput += input;
    }
    return novoInput;
}