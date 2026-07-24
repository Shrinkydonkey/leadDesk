const prisma = require("../prismaClient");

const createLead = async (req, res) => {
    try {
        const { name, email, budget, message } = req.body;

        if (!name || !email || !budget || !message) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const lead = await prisma.lead.create({
            data: {
                name,
                email,
                budget,
                message
            }
        });

        res.status(201).json(lead);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
};

const getLeads = async (req, res) => {
    try {
        const leads = await prisma.lead.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        res.json(leads);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error",
        });
    }
};

const updateLeadStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const updatedLead = await prisma.lead.update({
            where: {
                id: Number(id),
            },
            data: {
                status,
            },
        });

        res.json(updatedLead);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Server Error",
        });
    }
};

module.exports = {
    createLead,
    getLeads,
    updateLeadStatus,
};