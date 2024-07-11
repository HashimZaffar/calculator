document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const btn1 = document.getElementById('show-my-name');
    const input1 = document.getElementById('inputfeild');
    const mainContainer = document.getElementById('main-container');

    const showName = () => {
        btn1.innerText = 'Hashim Zaffar';
        btn1.style.color = '#ffff'; // Assuming you want to change the text color to white
        input1.value = 'Hashim Zaffar'; // Use the value property for input elements
        input1.style.backgroundColor = '#f8d301';
        input1.style.color = '#ffff';
        input1.style.textAlign = 'center';
        input1.style.border = 'none';
        input1.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
        mainContainer.style.backgroundColor = '#819830';

        // Create a new button
        const newButton = document.createElement('button');
        newButton.innerText = 'New Button';
        newButton.style.padding = '10px 20px';
        newButton.style.marginTop = '30px';
        newButton.style.backgroundColor = '#007BFF';
        newButton.style.color = 'white';
        newButton.style.border = 'none';
        newButton.style.borderRadius = '10px';
        newButton.style.cursor = 'pointer';
        newButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';

        // Append the new button to the main container
        mainContainer.appendChild(newButton);

        // Optional: Add an event listener to the new button
        newButton.addEventListener('click', () => {

            btn1.style.backgroundColor = 'transparent';
            input1.style.backgroundColor = 'transparent';
            newButton.style.backgroundColor = 'transparent';
            
        });
    };

    btn1.addEventListener('click', showName);
});
