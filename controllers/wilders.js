const WilderModel = require("../models/Wilder");

module.exports = {
    create: (req, res) => {
        WilderModel.init().then( () => {
            const wilder = new WilderModel(req.body);
            wilder
            .save()
            .then( (result) => {
                res.json({ success: true, result: result });
            })
            .catch( (err) => {
                res.json({ success: false, result: err });
            });
        });
    },

    read: (req,res) => {
        WilderModel.find()
         .then(wilder => {
             if(!wilder) {res.json({ success: false, wilder: "No wilders found"})}
             else {res.json({ success: true, result: wilder})}
         })
         .catch( err => {
             res.json({ success: false, wilder: err})
         })
    },

    update: (req, res) => {
        WilderModel.updateOne({_id: req.body._id}, req.body)
         .then(wilder => {
             if(!wilder) { res.json({ success: false, wilder: "No such wilder exists !!!"})}
             else { res.json(wilder)}
         })
         .catch(err => {
             res.json({ success: false, wilder: err})
         })
    },

    delete: (req, res) => {
        WilderModel.deleteOne({ _id: req.body._id})
         .then(wilder => {
             if(!wilder) { res.json({ success: false, wilder: "No wilder with such ID was found"})}
             else { res.json({ success: true, result:wilder})}
         })
         .catch(err => { res.json({ success: false, wilder: err})})
    }
};