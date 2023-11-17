export const fetchHelper = async (url, method, bodyData) => {
    try {
        const response = await fetch(url, {
            method: method,
            body: bodyData,
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else {
            console.error("Hubo un error en la solicitud");
        }
    }
    catch (error) {
        console.error(error.message);
    }
}

