const Api = {
    getBulkData: () => {
        const config = { method: 'GET', mode: 'cors', cache: 'default' };
        return fetch('https://api.elcarnet.com.uy/api/getBulkData', config)
            .then(res => res.json())
            .then((result) => {
                return result.data;
            }, (error) => {
                console.log('ERROR');
                return error;
            }
        );
    },
    getInTouch: (data) => {
        let urlEncodedData = "";
        let urlEncodedDataPairs = [];
        let name;
        for(name in data) {
            urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        }
        urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

        const config = { 
            method: 'POST', 
            mode: 'cors', 
            body: urlEncodedData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        return fetch('https://api.elcarnet.com.uy/api/getInTouch', config)
            .then(res => res.json())
            .then((result) => {
                return result.status;
            }, (error) => {
                console.log('ERROR');
                return error;
            }
        );
    }
};

export default Api;