var mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Admin = require("../subAdmin/subModel");
const superAdminDetail = require("./superAdminDetail");
const dao = new require("../dao/baseDao");
const adminDao = new dao(Admin);

function superAdminCreate() {
    adminDao.findOne({ email: "superadmin@email.com" }).then((result) => {
        if (result) {
            console.log("Super Admin already exist.");
        } else {
            superAdminDetail.superAdmin.password = bcrypt.hashSync(superAdminDetail.superAdmin.password, 11);
            adminDao.save(superAdminDetail.superAdmin);
            console.log("Super admin successfully created.");
        }
    });
}

module.exports = {
    superAdminCreate
}