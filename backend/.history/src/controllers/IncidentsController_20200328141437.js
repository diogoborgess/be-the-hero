module.exports = {
    async create(request, response){
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        await connection('incidents').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
    }
}