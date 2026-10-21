let blob;

document.getElementById("btnCrear").addEventListener("click", function () {

    let texto= `La historia de la Argentina es la cronología de sucesos desde el comienzo del primigenio poblamiento humano en el actual territorio de la República Argentina hasta nuestra propia actualidad.
Se inicia con los vestigios más antiguos de seres humanos en suelo argentino, detectados en el extremo sur de la Patagonia, que datan de hace unos 13 000 años.`;

    blob= new Blob([texto], { type: "text/plain" });

    document.getElementById("resultado").innerHTML =
        `<p>Blob creado correctamente.</p>
         <p>Tamaño: ${blob.size} bytes</p>
         <p>Tipo: ${blob.type}</p>`;
});
document.getElementById("btnDescargar").addEventListener("click", function () {

    if (!blob) {
        alert("Primero debes crear el Blob");
        return;
    }

    let url = URL.createObjectURL(blob);
    let enlace= document.createElement("a");
    enlace.href = url;
    enlace.download= "archivo.txt";
    enlace.click();

    URL.revokeObjectURL(url);
});

document.getElementById("btnSlice").addEventListener("click", function () {

    if (!blob) {
        alert("Primero debes crear el Blob");
        return;
    }
    let recorte = blob.slice(0, 30);
    let lector= new FileReader();

    lector.onload = function () {
        document.getElementById("resultado").innerHTML +=
            `<p>Recorte con slice():</p>
             <p>"${lector.result}"</p>`;
    };

    lector.readAsText(recorte);
});