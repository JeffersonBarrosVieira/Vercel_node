module.exports = (req, res) => {
    if (req.method === 'GET') {
        res.json([
            {name: "Jefferson", location: "Maranhão"},
            {name: "George", location: "Pará"}
        ])
    } else {

    }
}