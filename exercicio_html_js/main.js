<!DOCTYPE html>
<html>
<head>
    <title>Formulário com Validação</title>
</head>
<body>
    <form id="meuFormulario">
        <label for="campoA">Campo A:</label>
        <input type="number" id="campoA" name="campoA" required><br>

        <label for="campoB">Campo B:</label>
        <input type="number" id="campoB" name="campoB" required><br>

        <button type="submit">Enviar</button>
    </form>

    <script>
        document.getElementById("meuFormulario").addEventListener("submit", function(event) {
            event.preventDefault(); 
            
            const valorCampoA = parseFloat(document.getElementById("campoA").value);
            const valorCampoB = parseFloat(document.getElementById("campoB").value);
            
            if (valorCampoB > valorCampoA) {

                alert("Formulário válido! Número B é maior que o número A.");

            } else {

                alert("Número B deve ser maior que o número A. Formulário inválido.");
            }
        });
    </script>
</body>
</html>
