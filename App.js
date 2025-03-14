import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View, Button } from 'react-native';

export default function Formulario() {
    const [nomeProduto, setNomeProduto] = useState('');
    const [valorOriginal, setValorOriginal] = useState('');
    const [porcentagemAumento, setPorcentagemAumento] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularAumento = () => {
        const valor = parseFloat(valorOriginal);
        const porcentagem = parseFloat(porcentagemAumento);
        const valorFinal = valor + (valor * (porcentagem / 100));
        setResultado({ nomeProduto, valorOriginal: valor, porcentagemAumento: porcentagem, valorFinal });
    };
    return (
        <SafeAreaView>
            <View>
                <img src="../assets/image.png" alt="Imagem de um produto" style={styles.image} />
                <Text>Nome do Produto:</Text>
                <TextInput
                    placeholder="Digite o nome do produto"
                    value={nomeProduto}
                    onChangeText={setNomeProduto}
                />
                <Text>Valor Original:</Text>
                <TextInput
                    placeholder="Digite o valor original"
                    value={valorOriginal}
                    onChangeText={setValorOriginal}
                    keyboardType="numeric"
                />
                <Text>Porcentagem de Aumento:</Text>
                <TextInput
                    placeholder="Digite a porcentagem de aumento"
                    value={porcentagemAumento}
                    onChangeText={setPorcentagemAumento}
                    keyboardType="numeric"
                />
                <Button title="Calcular Aumento" onPress={calcularAumento} />
                {resultado && <ResultadoCalculo resultado={resultado} />}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f8ff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    form: {
        width: '100%',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 4,
        backgroundColor: '#f9f9f9',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 16,
    },
    resultContainer: {
        marginTop: 16,
        padding: 16,
        backgroundColor: '#e6f7ff',
        borderRadius: 8,
    },
    resultText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 4,
    },
});

