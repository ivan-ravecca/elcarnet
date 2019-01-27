const Api = {
    getBulkData: () => {
        const config = { method: 'GET', mode: 'cors', cache: 'default' };
        return fetch('https://api.elcarnet.com.uy/api/getBulkData', config)
            .then(res => res.json())
            .then((result) => {
                console.log('OK');
                return result.data;
            }, (error) => {
                console.log('ERROR');
                return error;
            }
        );
    }
};

export default Api;