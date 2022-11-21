const List = require('../models/zelda.model');

const getOneList = (req, res) => {
    List.findOne({_id: req.params.id})
        .then((singleList) => res.json(singleList))
        .catch((err) => {
            console.log("Error in get one list", err);
            res.status(400).json({
                message: "something went wrong in get one list",
                error: err
            });
        });
};

const getAllLists = (req, res) => {
    List.find({})
        .then((allLists) => res.json(allLists))
        .catch((err) => {
            console.log("Error in get all lists", err);
            res.status(400).json({
                message: "something went wrong in get all lists",
                error: err
            });
        });
};

const createList = (req, res) => {
    List.create(req.body)
        .then((newList) => res.status(201).json(newList))
        .catch((err) => {
            console.log("Error in create new list", err);
            res.status(400).json({
                message: "something went wrong in create new list",
                error: err
            });
        });
};

const updateList = (req, res) => {
    List.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then((updatedList) => res.json(updatedList))
        .catch((err) => {
            console.log("Error in update list", err);
            res.status(400).json({
                message: "something went wrong in update list",
                error: err
            });
        });
};

const deleteList = (req, res) => {
    List.findOneAndDelete({_id: req.params.id})
        .then((deletedList) => res.json(deletedList))
        .catch((err) => {
            console.log("Error in delete list", err);
            res.status(400).json({
                message: "something went wrong in delete list",
                error: err
            });
        });
};

module.exports = {
    getOneList,
    getAllLists,
    createList,
    updateList,
    deleteList
};