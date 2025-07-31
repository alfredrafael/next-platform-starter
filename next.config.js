module.exports = {
    async redirects() {
        return [
            {
                source: '/', // incoming request
                destination: 'https://uqr.to/rootedandready',
                permanent: false // 307 Temporary Redirect
            }
        ];
    }
};
