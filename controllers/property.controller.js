const { StatusCodes } = require('http-status-codes');
const PropertyModel = require('../models/property.model');

const getAllProperties = async (req, res) => {
    try {

        const properties = await PropertyModel.find({})

        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Properties fetched successfully!',
            data: properties
        })
    } catch (error) {

    }
}

const getProperty = async (req, res) => {
    try {

        const { propertyId } = req.params;

        if (!propertyId) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                success: false,
                message: 'propertyId is mandatory!'
            })
        }

        const property = await PropertyModel.findOne({ propertyId })

        if (!property) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success: true,
                message: 'Property not found!'
            })
        }

        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Property fetched successfully!',
            data: [
                property
            ]
        })
    } catch (error) {

    }
}

const postProperty = async (req, res) => {
    try {

        const payload = req.body;

        await PropertyModel.create(payload);

        res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Property created successfully!'
        })
    } catch (error) {
        
    }
}
const updateProperty = async (req, res) => {
    try {

        const payload = req.body;
        const { propertyId } = req.params;

        await PropertyModel.updateOne(
            { propertyId },
            { $set: payload },
            { upsert: false }
        );

        res.status(StatusCodes.OK).json({
            success: true,
            message: 'Property updated successfully!'
        })
    } catch (error) {
        
    }
}
const deleteProperty = async (req, res) => {
    try {

        const { propertyId } = req.params;

        await PropertyModel.deleteOne({ propertyId });

        res.status(StatusCodes.OK).json({
            success: true,
            message: 'Property deleted successfully!'
        })
    } catch (error) {
        
    }
}

module.exports = {
    getAllProperties,
    getProperty,
    postProperty,
    updateProperty,
    deleteProperty
}