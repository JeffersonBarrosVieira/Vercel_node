module.exports = (req, res) => {
    if (req.method === 'GET') {
        res.json([
            { name: "Jefferson", location: "Maranhão" },
            { name: "George", location: "Pará" }
        ])
    } else {
        const { name, location } = req.body;

        let name = name
        let location = location

        res.send({ status: "User Created", name, location });
    }
}