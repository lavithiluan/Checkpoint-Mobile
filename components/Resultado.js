import React from "react";
import {  Text, View } from 'react-native';

function ResultadoCalculo({ resultado }) {
    return (
        <View>
            <Text>Nome do Produto: {resultado.nomeProduto}</Text>
            <Text>Valor Original: {resultado.valorOriginal}</Text>
            <Text>Porcentagem de Aumento: {resultado.porcentagemAumento}%</Text>
            <Text>Valor do Aumento: {resultado.valorAumento}</Text>
            <Text>Valor Final: {resultado.valorFinal}</Text>
        </View>
    );
}