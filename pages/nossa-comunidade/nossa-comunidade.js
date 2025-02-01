export default async function () {
    
    try {
        const response = await fetch('pages/nossa-comunidade/nossa-comunidade.html');
        const html = await response.text();

        const section = document.createElement('section');
        section.innerHTML = html;
        document.body.appendChild(section);
    } catch (error) {
        console.error(`Não foi possível carregar a section: ${error}`);
    }

}