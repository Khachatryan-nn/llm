document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('urlForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const url = formData.get('url');

        try {
            const response = await fetch('/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url })
            });

            if (!response.ok) {
                throw new Error('Failed to analyze webpage');
            }

            const data = await response.json();
            resultDiv.innerText = data.result;
        } catch (error) {
            console.error('Error:', error);
            resultDiv.innerText = 'An error occurred while analyzing the webpage';
        }
    });
});
