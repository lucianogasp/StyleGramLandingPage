export default async function () {
    
    try {
        const response = await fetch('pages/nossa-comunidade/nossa-comunidade.html');
        const html = await response.text();

        const div = document.createElement('div');
        div.innerHTML = html;
        document.body.appendChild(div);
    } catch (error) {
        console.error(`Não foi possível carregar a section: ${error}`);
    }

}